import React, { createContext, useContext, useEffect, useReducer } from 'react';

const GlobalContext = createContext();
const reducer  = (state,action )=>{
    return state;
}
export const GlobalProvider = ({children})=>{

    const baseURL =  'https://graphql-pokemon2.vercel.app/'


    const initialState ={
        allPokemon: [],
        pokemon: {},
        pokemonDatabse: [],
        searchResults: [],
        next: "",
        loading: false
    }

    const [ state , dispatch] = useReducer(reducer, initialState);

    const allPokemon =  async ()=>{
        const res = await fetch('https://graphql-pokemon2.vercel.app/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query: `
                query {
                  pokemon(name: "pikachu") {
                    id
                    name
                    weight {
                      minimum
                      maximum
                    }
                    classification
                  }
                }
              `,
            }),
          })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));          
    }

    useEffect(() => {
      allPokemon();
    }, [])
    
    return(
        <GlobalContext.Provider value={...state}>
            {children}
        </GlobalContext.Provider>
    )
}


export const useGlobalContext = ()=>{
    return useContext(GlobalContext);
}  