import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile/Profile';
import NavBar from './components/nav/Navbar'


// COMMENT BACK IN WHEN USING HEROKU

// const uri = process.env.NODE_ENV === 'development'
//   ?'/graphql' : 'https://shelf-care-backend.herokuapp.com/graphql';



//COMMENT OUT WHEN USING HEROKU

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // Retrive authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      < NavBar />
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/profile'
            element={<Profile />}
          />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
