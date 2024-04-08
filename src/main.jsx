import React from 'react'
import ReactDOM from 'react-dom/client'
import { PokemonContext } from './context/pokemonContext.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonContext>
      <App />
    </PokemonContext>
  </React.StrictMode>,
)
