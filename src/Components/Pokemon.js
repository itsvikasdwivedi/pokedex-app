import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import { GET_POKEMONS_QUERY } from '@component/graphql/AllPokemonQuery';
import Link from 'next/link';
import Loader from './Loader';

const Pokemon = () => {

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
        return <Loader/>
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


    return (
        <div className=" grid gap-4 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 px-10 py-10">
            {paginatedData && paginatedData?.map((pokemon) => (
                <Link href={`/pokemon/${pokemon.name}`}>
                    <div className='hover:-translate-y-3 p-5 border-2 border-grey-500 rounded-2xl shadow-md hover:border-violet-300 md:h-100 lg:h-100 2xl:h-100' key={pokemon.id}>
                        <div>
                            <img src={pokemon.image} alt={pokemon.name} className='h-[160px] w-[160px] pl-10 sm:h-[200px] w-[200px]' />
                        </div>
                        <div >
                            <h5 className='text-gray-500 text-l'> <span>#</span>{pokemon.number}</h5>
                            <h2 className='font-mono text-xl ml-1 m-2' >{pokemon.name}</h2>

                            <div className='flex gap-x-5'>

                            {pokemon.types.map((type) => (
                                <p className='p-0.5 max text-white rounded-md bg-[#30a7d7] px-2 '>{type}</p>
                                ))}
                                </div>
                        </div>
                    </div>
                </Link>
            ))}
            <div className='flex flex-wrap justify-between pb-8'>
                <button onClick={() => handlePrev()} disabled={pokeData === 20} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Previous
                </button>
                <button onClick={() => handleNext()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Next
                </button>
            </div>
        </div>
    )
}

export default Pokemon