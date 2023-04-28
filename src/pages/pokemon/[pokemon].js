import { useQuery } from '@apollo/client';
import { POKEMON_DETAILS_QUERY } from '@component/graphql/PokemonDetailsQuery';
import { useRouter } from 'next/router'
import PokemonEvolution from '@component/Components/PokemonEvolution';
import Loader from '@component/Components/Loader';
import { Navbar } from '@component/Components/Navbar';

const PokemonDetails = () => {
  const router = useRouter();

  // console.log(router.query.pokemon,"Iam Identification");

  const { loading, error, data } = useQuery(POKEMON_DETAILS_QUERY, {
    variables: { name: router.query.pokemon }
  })

  if (loading)
    return <Loader />
  if (error) <p> 'Error... ${error}'</p>
  console.log(data);

  const styles = {
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
      <Navbar />
      <div className=' md:px-20'>
        <div className='font-mono text-2xl m-2'>
          <h1 className='text-center'>{data.pokemon.name}
            <span className='text-gray-400'>{" #"}{data.pokemon.number}</span>
          </h1>
        </div>

        <div className='px-6 pb-10 flex flex-row gap-10 xl: max-sm:flex-col xl:pl-20 max-[768px]:flex-col '>
          <div className='border-2 rounded  flex justify-center'>
            <img src={data.pokemon.image} className='p-10'></img>
          </div>

          <div className='border-2 rounded p-5 max-[768px]:h-[500px] max-[426px]:h-[750px]' >
            <div className='rounded  mx-auto flex flex-col justify-between gap-20 bg-[#30a7d7] p-10 md:flex-row '>
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
              <div className='container mx-auto flex flex-wrap gap-3'>
                {data.pokemon.types.map((type) => (
                  <p className='px-2 max text-white rounded-md bg-[#30a7d7]' style={{ backgroundColor: styles[type.toLowerCase()] }} >{type}</p>
                ))}
              </div>

            </div>

            <div>
              <h3>Weakness</h3>
              <div className='container mx-auto flex flex-wrap gap-3'>
                {data && data.pokemon.weaknesses
                  .map((weakness) =>
                    <ul >
                      <li className='px-2 max text-white rounded-md bg-[#30a7d7]' style={{ backgroundColor: styles[weakness.toLowerCase()] }}>{weakness}</li>
                    </ul>
                  )}
              </div>
            </div>

            <div>
              <h3>Resistance</h3>
              <div className='container mx-auto flex flex-wrap gap-3' >
                {data && data.pokemon.resistant
                  .map((resis) =>
                    <ul >
                      <li className='px-2 max text-white rounded-md bg-[#30a7d7]' style={{ backgroundColor: styles[resis.toLowerCase()] }}>{resis}</li>
                    </ul>
                  )}
              </div>
            </div>

            <PokemonEvolution props={data.pokemon.image} />
          </div>
        </div>
      </div>
    </>
  )
}

export default PokemonDetails