import { gql } from '@apollo/client';

export const ADD_GARDENER = gql `
    mutation addGardener($name: String!, $email: String!, $password: String!) {
        addGardener(name: $name, email: $email, password: $password) {
            token
            gardener {
                name
                _id
                email
            }
        }
    }
`