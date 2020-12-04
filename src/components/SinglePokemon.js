import React from 'react';
import PokemonDetails from './PokemonDetails';

const SinglePokemon = ({pokemon}) => {
  // console.log(pokemon.url.split('/')[pokemon.url.split('/').length-2])
  return (
    <div>
      <PokemonDetails pokeInfo={pokemon.url.split('/')[pokemon.url.split('/').length-2]}/>
    </div>
  )
};

export default SinglePokemon;