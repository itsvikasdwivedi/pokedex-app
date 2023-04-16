import { gql } from "@apollo/client";

export const POKEMON_EVOLUTION_QUERY = gql`
query pokemon($id: String, $name: String){
    pokemon(id: $id, name: $name){
      id
      name
      evolutions{
        id
        number
        name
        classification
        types
        resistant
        weaknesses
        fleeRate
        maxCP
        maxHP
        image
      }
    }
  }
`