import { useState } from 'react'

const usePokemonList = () => {

    const [pokemonsList, setPokemonsList] = useState([])

    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150')
        .then(res => res.json())
        .then(data => {
            let completeResults = []
            let page = []
            for (let i = 0; i < data.results.length; i++) {
                let pokeName = data.results[i].name.charAt(0).toUpperCase() + data.results[i].name.slice(1)
                page.push({
                    name: pokeName,
                    url: data.results[i].url
                })
                if (page.length === 21) {
                    completeResults.push(page)
                    page = []
                }
            }
            completeResults.push(page)
            setPokemonsList(completeResults)
        })
        .catch(err => console.log(err))
    
    return { pokemonsList }
}

export default usePokemonList