import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_POKEMONS_QUERY } from '@component/graphql/AllPokemonQuery';
import styles from './pokemon.module.css'
import Link from 'next/link';
const Pokemon = () => {
    const { loading, error, data } = useQuery(GET_POKEMONS_QUERY);
    if (loading)
        return <p>Loading.....</p>
    if (error) <p> 'Error...${error}'</p>
    console.log(data);

    return (
        <div className="grid gap-4 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">
            {data.pokemons.map((pokemon) => (
                <div className='hover:-translate-y-6 p-5 border-2 border-grey-500 rounded-2xl shadow-md hover:border-violet-300 md:h-100 lg:h-100 2xl:h-100' key={pokemon.id}>
                    <Link href={`/pokemon/${pokemon.name}`}>
                        <div>
                        <img className={styles.pokemonImg} src={pokemon.image} alt={pokemon.name} height={'50%'} width={'100%'} />
                        </div>
                    </Link>
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