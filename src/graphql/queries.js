const { gql } = require("@apollo/client");

export const GET_POKEMONS_QUERY =gql `
query {
  pokemons(first:10){
    id
    number
    name
    weight{
      minimum
      maximum
    }
    height{
      minimum
      maximum
    }
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
`