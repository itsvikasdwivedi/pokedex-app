import { useQuery } from '@apollo/client';
import { POKEMON_DETAILS_QUERY } from '@component/graphql/PokemonDetailsQuery';
import { useRouter } from 'next/router'
import PokemonEvolution from '@component/Components/PokemonEvolution';
import Loader from '@component/Components/Loader';

const PokemonDetails = () => {
  const router = useRouter();

  // console.log(router.query.pokemon,"Iam Identification");

  const { loading, error, data } = useQuery(POKEMON_DETAILS_QUERY, {
    variables: { name: router.query.pokemon }
  })

  if (loading)
    return <Loader/>
  if (error) <p> 'Error... ${error}'</p>
  console.log(data);

  return (
    <div>
      <div className='font-mono text-2xl m-2'>
        <h1 className='text-center'>{data.pokemon.name}
          <span className='text-gray-400'>{" #"}{data.pokemon.number}</span>
        </h1>
      </div>

      <div className='pl-6 flex flex-row gap-10 max-sm:flex-col p-0 xl:pl-20'>
        <div className='border-2  rounded'>
          <img src={data.pokemon.image} className='p-10'></img>
        </div>

        <div className='border-2 rounded p-5 max-w-md' >
          <div className=' rounded flex gap-20 bg-[#30a7d7] p-10'>
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
                <p className='p-1 max text-white rounded-md bg-[#30a7d7]'>{type}</p>
              ))}
            </div>

          </div>

          <div>
            <h3>Weakness</h3>
            <div className='flex gap-x-5'>
              {data && data.pokemon.weaknesses
                .map((weakness) =>
                  <ul >
                    <li className='p-1 max text-white rounded-md bg-[#30a7d7]'>{weakness}</li>
                  </ul>
                )}
            </div>
          </div>

          <div>
            <h3>Resistance</h3>
            <div className='flex gap-x-5'>
            {data && data.pokemon.resistant
                .map((resis) =>
                  <ul >
                    <li className='p-1 max text-white rounded-md bg-[#30a7d7]'>{resis}</li>
                  </ul>
                )}
            </div>
          </div>

          <PokemonEvolution props={data.pokemon.image} />
        </div>
      </div>
    </div>
  )
}

export default PokemonDetails