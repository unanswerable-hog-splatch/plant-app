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

export const LOGIN_GARDENER = gql `
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                name
            }
        }
    }
`