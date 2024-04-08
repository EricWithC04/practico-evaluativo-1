import React, { createContext, useContext, useState } from 'react'

const pokemonContext = createContext()

const usePokemonContext = () => useContext(pokemonContext)
const PokemonContext = ({ children }) => {

    const [pokemons, setPokemons] = useState([])

    const [selectedPokemon, setSelectedPokemon] = useState({})

    const [showModal, setShowModal] = useState(false)

    const [page, setPage] = useState(0)


    return (
        <pokemonContext.Provider value={{ 
                pokemons, 
                setPokemons,
                selectedPokemon,
                setSelectedPokemon,
                showModal,
                setShowModal,
                page,
                setPage
            }}>
            {children}
        </pokemonContext.Provider>
    )
}

export { usePokemonContext, PokemonContext }