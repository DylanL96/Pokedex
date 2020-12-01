import React, {useState, useEffect} from 'react';
import PokemonList from './components/PokemonList';
import Pagination from './components/Pagination';
import SinglePokemon from './components/SinglePokemon';
import axios from 'axios';

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(`https://pokeapi.co/api/v2/pokemon/`)
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [loading, setLoading] = useState(true);

  //useEffect hook to set data
  useEffect(() => {
    axios.get(currentPage)
      .then(response => {
        setLoading(false)
        setPokemon(response.data.results)
        setNextPage(response.data.next)
        setPrevPage(response.data.previous)
      })
      .catch(error => {
        console.log(error)
      })
  }, [currentPage])

  //Go to next page
  const gotoNextPage = () => {
    setCurrentPage(nextPage)
  }

  //Go to previous page
  const gotoPrevPage = () => {
    setCurrentPage(prevPage)
  }

  //Loading screen for data
  if (loading)
    return(
    <div>
      <h1>Loading...</h1>
    </div>
  )

  return (
    <div>
      <PokemonList pokemon={pokemon}/>
      <Pagination 
      gotoNextPage={nextPage ? gotoNextPage : null} 
      gotoPrevPage={prevPage ? gotoPrevPage: null}/>
      <SinglePokemon pokemon={pokemon}/>
    </div>
  )
}

export default App;
