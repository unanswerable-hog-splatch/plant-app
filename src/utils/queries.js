import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    query me {
        me {
            _id
            name
            email
            plantCount
            plants{
                _id
                species
                plantIcon
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

// export const QUERY_PLANTS = gql `
//     query plants($name: String) {
//         plants(name: $name){
//             _id
//             species
//             plantIcon
//             category
//             nickname
//             dateAdded
//             watered
//             fertilized
//             waterFrequency
//             fertilizeFrequency
//             lastWaterDate
//             lastFertilizeDate
//         }
//     }
// `