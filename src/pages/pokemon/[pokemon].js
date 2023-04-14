import React from 'react'
import { useQuery } from '@apollo/client';
import { POKEMON_DETAILS_QUERY } from '@component/graphql/PokemonDetailsQuery';

const PokemonDetails = (id, name) => {
   const{loading,error,data } =useQuery(POKEMON_DETAILS_QUERY,{
    variables: {id,name}
   })
   if (loading)
        return <p>Loading.....</p>
    if (error) <p> 'Error... ${error}'</p>
    console.log(data);
    
  return (
    <div>PokemonDetails</div>
  )
}

export default PokemonDetails