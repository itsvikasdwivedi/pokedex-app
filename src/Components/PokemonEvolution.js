import { useQuery } from '@apollo/client';
import { POKEMON_EVOLUTION_QUERY } from '@component/graphql/PokemonEvolutionQuery';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Loader from './Loader';

const PokemonEvolution = (props) => {
    console.log(props)
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const { loading, error, data } = useQuery(POKEMON_EVOLUTION_QUERY, {
        variables: { name: router.query.pokemon }
    })
    if (loading)
        return<Loader/>
    if (error) <p> 'Error... ${error}'</p>
    // console.log(data, "data visible");

    return (
        <div>
            {/* Modal Starts from here */}
            <button
                className="bg-[#ee6b2f] text-white active:bg-[#ee6b1f] ml-20 mt-4 font-bold uppercase text-sm px-5 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 max-[376px]:p-2 max-[376px]:m-5"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Pokemon's Evolution
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-auto overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Pokemon's Evolution
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className=" p-8 flex gap-5 ">
                                    {data && data?.pokemon?.evolutions?.map((evol) => (
                                        <>
                                            <div className='border-2 flex justify-center'>
                                                <img src={evol.image} height={200} width={200} alt={evol.image} />
                                            </div>
                                            <div className='md:mt-[100px]'>
                                                <span>➡️</span>
                                            </div>
                                        </>
                                    ))}
                                    <div className='border-2 '>
                                        <img src={props.props} height={200} width={200} alt={props.props} />
                                    </div>

                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-orange-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    )
}

export default PokemonEvolution