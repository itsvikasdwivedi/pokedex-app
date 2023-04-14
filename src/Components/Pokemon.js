import { useQuery } from '@apollo/client';
import { GET_POKEMONS_QUERY } from '@component/graphql/queries';
import React from 'react'
import styles from './pokemon.module.css'
const Pokemon = () => {
    const { loading, error, data } = useQuery(GET_POKEMONS_QUERY);

    if (loading)
        return <p>Loading.....</p>
    if (error) <p> 'Error... ${error}'</p>
    console.log(data);

    return (
        <div className={styles.allPokemon}>
            {data.pokemons.map((pokemon) => (
                <div key={pokemon.id}>
                    <img src={pokemon.image} alt={pokemon.name} />
                    <h3>{pokemon.number}</h3>
                    <h2>{pokemon.name}</h2>
                    <p>Type: {pokemon.types.join(', ')}</p>
                    {/* <p>Max CP: {pokemon.maxCP}</p> */}
                </div>
            ))}
        </div>
    )
}

export default Pokemon