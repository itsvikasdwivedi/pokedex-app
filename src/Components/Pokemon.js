import { useQuery } from '@apollo/client';
import { GET_POKEMONS_QUERY } from '@component/graphql/AllPokemonQuery';
import React from 'react'
import styles from './pokemon.module.css'
const Pokemon = () => {
    const { loading, error, data } = useQuery(GET_POKEMONS_QUERY);

    if (loading)
        return <p>Loading.....</p>
    if (error) <p> 'Error... ${error}'</p>
    // console.log(data);

    return (
        <div className={styles.allPokemon}>
            {data.pokemons.map((pokemon) => (
                <div className={styles.pokemonCard}key={pokemon.id}>
                    <img className={styles.pokemonImg}src={pokemon.image} alt={pokemon.name} height={'60%'} width={'100%'} />
                   <div className={styles.pokemonInfo}>
                    <h5>
                        <span>#</span>
                        {pokemon.number}</h5>
                    <h2>{pokemon.name}</h2>
                    
                    <p>{pokemon.types.join(' ')}</p>
                   </div>
                    {/* <p>Max CP: {pokemon.maxCP}</p> */}
                </div>
            ))}
        </div>
    )
}

export default Pokemon