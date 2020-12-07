import React, {useState, useEffect} from 'react';
import SinglePokemon from './components/SinglePokemon';
import PokemonFilter from './components/PokemonFilter';
import NoPokemon from './components/NoPokemon';
import axios from 'axios';

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(`https://pokeapi.co/api/v2/pokemon?limit=250&offset=0`);
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true);

  //useEffect hook to set data
  useEffect(() => {
    axios.get(currentPage)
      .then(response => {
        setLoading(false)
        setPokemon(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })
  }, [currentPage]);

  //Loading screen for data
  if (loading)
    return(
    <div>
      <h1>Loading...</h1>
    </div>
  );
  
  //Keeps track of the changes into the input
  const handleChange = event => {
    setSearch(event.target.value)
    // console.log(event.target.value)
  };

  //Filters to only 1 pokemon
  const filteredPokemon = pokemon.filter(poke => {
    return poke.name.toLowerCase().includes(search.toLowerCase())
  });
  
  if(filteredPokemon.length === 1){
    return(
      <div>
        <PokemonFilter value={search} handleChange={handleChange}/>
        <SinglePokemon pokemon={filteredPokemon[0]}/>
        {/* <PokemonList pokemon={filteredPokemon}/> */}
      </div>
    )
  } else if (filteredPokemon.length === 0){
    return (
      <div>
        <PokemonFilter value={search} handleChange={handleChange}/>
        {/* <PokemonList pokemon={filteredPokemon}/> */}
        <NoPokemon/>
      </div>
    )
  } else {
    return (
      <React.Fragment>
      <div>
        <PokemonFilter value={search} handleChange={handleChange}/>
        {/* <PokemonList pokemon={filteredPokemon}/> */}
        <NoPokemon/>
      </div>
      </React.Fragment>
    )
  }
};



export default App;
