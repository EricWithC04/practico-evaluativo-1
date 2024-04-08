import { useEffect, useState } from 'react'
import { usePokemonContext } from './context/pokemonContext.jsx'
import usePokemonList from './hook/usePokemonList.jsx'
import './App.css'

function App() {
  
  const { 
    pokemons,
    setPokemons, 
    selectedPokemon, 
    setSelectedPokemon, 
    showModal, 
    setShowModal,
    page,
    setPage
  } = usePokemonContext()
  
  if (pokemons.length === 0) {
    const { pokemonsList } = usePokemonList()
    
    setPokemons(pokemonsList)
  }

  const handleSelectPokemon = (url) => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      showModal === false ? setShowModal(true): null
      setSelectedPokemon(data)
    })
    .catch(err => console.log(err))
  }
  

  return (
    <div className='mainContainer'>
      <div className="card">
        <div className="card-inner">
          {
            pokemons.length > 0 ? pokemons[page].map(pokemon => (
              <div key={pokemon.name} onClick={() => handleSelectPokemon(pokemon.url)}>
                <p>{pokemon.name}</p>
              </div>
            )) : null
          }
        </div>
      <div className='pagination'>
        <button onClick={() => setPage(0)}>1</button>
        <button onClick={() => setPage(1)}>2</button>
        <button onClick={() => setPage(2)}>3</button>
        <button onClick={() => setPage(3)}>4</button>
        <button onClick={() => setPage(4)}>5</button>
        <button onClick={() => setPage(5)}>6</button>
        <button onClick={() => setPage(6)}>7</button>
        <button onClick={() => setPage(7)}>8</button>
      </div>
      </div>
      <div className='detailsContainer'>
        {
          showModal ? (
            <div className='details'>
              <div>
                <img src={selectedPokemon.sprites?.other.dream_world.front_default} alt="img" />
                <p>Name: {selectedPokemon.name}</p>
                <p>Height: {selectedPokemon.height}</p>
                <p>Weight: {selectedPokemon.weight}</p>
                <p>Types: {selectedPokemon.types?.map(type => type.type.name).join(', ')}</p>
                <p>Abilities: {selectedPokemon.abilities?.map(ability => ability.ability.name).join(', ')}</p>
              </div>
            </div>
            
          ) : null
        }
      </div>
    </div>
  )
}

export default App
