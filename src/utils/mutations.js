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
            gardener {
                _id
                name
            }
        }
    }
`

export const ADOPT_PLANT = gql `
    mutation adoptPlant($species: String!, $category: String!, $nickname: String, $plantIcon: String!, $watered: Boolean!, $fertilized: Boolean, $waterFrequency: Int!, $fertilizeFrequency: Int, $lastWaterDate: Int!, $lastFertilizeDate: Int) {
        adoptPlant(species: $species, category: $category, nickname: $nickname, plantIcon: $plantIcon, watered: $watered, fertilized: $fertilized, waterFrequency: $waterFrequency, fertilizeFrequency: $fertilizeFrequency, lastWaterDate: $lastWaterDate, lastFertilizeDate: $lastFertilizeDate) {
            _id
            name
            plantCount
            plants {
                _id
                species
                category
                nickname
                plantIcon
                dateAdded
                watered
                fertilized
                waterFrequency
                fertilizeFrequency
                lastWaterDate
                lastFertilizeDate
            }
        }
    }
`
export const KILL_PLANT = gql `
    mutation killPlant($_id: ID!) {
        killPlant(_id: $_id) {
            _id
            species
            nickname
        }
    }
`

export const UPDATE_PLANT = gql `
    mutation updatePlant($_id: ID!, $waterFrequency: Int, $lastWaterDate: Int) {
        updatePlant(_id: $_id, waterFrequency: $waterFrequency, lastWaterDate: $lastWaterDate) {
            _id
            waterFrequency
            lastWaterDate
        }
    }
`
