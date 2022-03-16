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
    mutation adoptPlant($gardenerId: ID, $species: String!, $category: String!, $nickname: String, $dateAdded: Int!, $watered: Boolean!, $fertilized: Boolean, $waterFrequency: Int!, $fertilizeFrequency: Int, $lastWaterDate: Int!, $lastFertilizeDate: Int) {
        adoptPlant(gardenerId: $gardenerId, species: $species, category: $category, nickname: $nickname, dateAdded: $dateAdded, watered: $watered, fertilized: $fertilized, waterFrequency: $waterFrequency, fertilizeFrequency: $fertilizeFrequency, lastWaterDate: $lastWaterDate, lastFertilizeDate: $lastFertilizeDate) {
            _id
            name
            plantCount
            plants {
                _id
                plantType
                category
                nickname
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