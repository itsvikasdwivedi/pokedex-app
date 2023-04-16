import { useQuery } from '@apollo/client';
import { POKEMON_DETAILS_QUERY } from '@component/graphql/PokemonDetailsQuery';
import { useRouter } from 'next/router'
import PokemonEvolution from '@component/Components/PokemonEvolution';

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
      <div className='font-mono text-2xl m-2'>
        <h1 className='text-center'>{data.pokemon.name}
          <span>{data.pokemon.number}</span>
        </h1>

      </div>

      <div className=' p-5 flex flex-row gap-10 2xl:flex-col'>
        <div className='border-2 border-indigo-600 rounded'>
          <img src={data.pokemon.image} className='p-20'></img>
        </div>

        <div className='border-2 border-indigo-600 rounded w-2/5 p-5' >

          <div className='border-2 border-indigo-600 rounded flex gap-20 bg-[#30a7d7] p-10'>
            <div>
              <ul>
                <li>
                  <span className='text-white'>Height</span><br />
                  <span className='font-mono'>{data.pokemon.height.maximum}</span>
                </li>
                <li>
                  <span className='text-white'>Weight</span><br />
                  <span className='font-mono'>{data.pokemon.weight.maximum}</span>
                </li>

                <li>
                  <span className='text-white'>Classification</span><br />
                  <span className='font-mono'>{data.pokemon.classification}</span>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li>
                  <span className='text-white'>FleeRate</span><br />
                  <span className='font-mono'>{data.pokemon.fleeRate}</span>
                </li>
                <li>
                  <span className='text-white'>Max CP</span><br />
                  <span className='font-mono'>{data.pokemon.maxCP}</span>
                </li>
                <li>
                  <span className='text-white'>Max HP</span><br />
                  <span className='font-mono'> {data.pokemon.maxHP}</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3>Type</h3>

            <div className='flex gap-x-5'>
              {data.pokemon.types.map((type) => (
                <p className='p-1 max  bg-[#30a7d7]'>{type}</p>
              ))}
            </div>
          </div>
          <div>
            <h3>Weakness</h3>
            <p>{data.pokemon.weaknesses.join(' ')}</p>
          </div>
          <div>
            <h3>Resistance</h3>
            <p>{data.pokemon.resistant.join(' ')}</p>
          </div>

          <PokemonEvolution props={data.pokemon.image}/>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetails