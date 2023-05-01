import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import { GET_POKEMONS_QUERY } from '@component/graphql/AllPokemonQuery';
import Link from 'next/link';
import Loader from './Loader';

export const Pokemon = () => {

    const [pokeData, setPokeData] = useState(20);
    const [page, setpage] = useState(0);
    const { loading, error, data } = useQuery(GET_POKEMONS_QUERY, {
        variables: { first: pokeData }
    });
    const [paginatedData, setPaginatedData] = useState([]);

    useEffect(() => {
        setPaginatedData(data?.pokemons.slice(-20));
    }, [data])

    // console.log(paginatedData, "bkjiibibi")

    if (loading)
        return <Loader />
    if (error) <p> 'Error...${error}'</p>
    // console.log(data);

    const handleNext = () => {
        setpage(page + 1);
        setPaginatedData(data?.pokemons.slice(-20));
        setPokeData(pokeData + 20);
    }
    const handlePrev = () => {
        setpage(page - 1);
        setPaginatedData(data?.pokemons.slice(-20));
        setPokeData(pokeData - 20);
    }
    const styles ={
        normal: "#A8A77A",
          fire: "#EE8130",
          water: "#6390F0",
          electric: "#F7D02C",
          grass: "#7AC74C",
          ice: "#96D9D6",
          fighting: "#C22E28",
          poison: "#A33EA1",
          ground: "#E2BF65",
          flying: "#A98FF3",
          psychic: "#F95587",
          bug: "#A6B91A",
          rock: "#B6A136",
          ghost: "#735797",
          dragon: "#6F35FC",
          dark: "#705746",
          steel: "#B7B7CE",
          fairy: "#D685AD"
    }

    return (
        <>
            <div className="grid grid-cols-1 gap-4 p-10 sm:p-20 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                {paginatedData && paginatedData?.map((pokemon) => (
                    <Link href={`/pokemon/${pokemon.name}`}>
                        <div className='hover:-translate-y-2 p-8  border-2 border-grey-500 rounded-2xl shadow-md' key={pokemon.id}>
                            <div>
                                <img src={pokemon.image} alt={pokemon.name} className='h-[196px] w-[196px] sm:h-[200px] w-[200px]' />
                            </div>
                            <div >
                                <h5 className='text-gray-500 text-l'> <span>#</span>{pokemon.number}</h5>
                                <h2 className='font-mono text-xl ml-1 m-2' >{pokemon.name}</h2>

                                <div className='flex gap-x-5'>

                                    {pokemon.types.map((type) => (
                                        <p className='p-0.5 max text-white rounded-md bg-[#30a7d7] px-2 ' style={{backgroundColor:styles[type.toLowerCase()]}} >{type}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className='container mx-auto flex flex-wrap justify-between px-10 sm:px-20'>
                <button onClick={() => handlePrev()} disabled={pokeData === 20} className="hover:bg-[#30a7d7] bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Previous
                </button>
                <button onClick={() => handleNext()} className="hover:bg-[#30a7d7] bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Next
                </button>
            </div>
            <footer class="bg-white rounded-lg  dark:bg-gray-900">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-600">© 2023 Pokemon™. All Rights Reserved.</span>
                </div>
            </footer>
        </>

    )
}

