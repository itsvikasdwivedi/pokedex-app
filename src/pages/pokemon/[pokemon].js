import React from 'react'
import { useQuery } from '@apollo/client';
import { POKEMON_DETAILS_QUERY } from '@component/graphql/PokemonDetailsQuery';
import { useRouter } from 'next/router'

const PokemonDetails = () => {
  const router = useRouter();
  // console.log(router.query.pokemon,"Iam Identification");
  const { loading, error, data } = useQuery(POKEMON_DETAILS_QUERY, {
    variables: { name: router.query.pokemon }
  })

  if (loading)
    return <p>Loading.....</p>
  if (error) <p> 'Error... ${error}'</p>
  console.log(data);

  return (
    <div>
      <div className='font-mono uppercase'>
        <h1 >{data.pokemon.name}
        </h1>
        <span>
          {" "}  {data.pokemon.number}
        </span>

      </div>

      <div className=' p-10 flex flex-row gap-10 2xl:flex-col'>
        <div className='border-2 border-indigo-600 rounded'>
          <img src={data.pokemon.image} className='p-20'></img>
        </div>

        <div className='border-2 border-indigo-600 rounded w-2/5 ' >
          <div className='border-2 border-indigo-600 rounded flex bg-[#30a7d7]'>
            <div>
            <ul>
              <li>
                <span className='text-white'>Height</span>
                <span>{data.pokemon.height.maximum}</span>
              </li>
              <li>
                <span className='text-white'>Weight</span>
                <span>{data.pokemon.weight.maximum}</span>
              </li>

              <li>
                <span className='text-white'>Classification</span>
                <span>{data.pokemon.classification}</span>
              </li>
            </ul>

            </div>

            <div>
            <ul>
               <li>
                <span className='text-white'>Type</span>
                <span>{data.pokemon.types}</span>
              </li>
              <li>
                <span className='text-white'>Weakness</span>
                <span>{data.pokemon.weaknesses}</span>
              </li>
              <li>
                <span className='text-white'>Resistance</span>
                <span> {data.pokemon.resistant.join(' ')}</span>
              </li>
            </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default PokemonDetails