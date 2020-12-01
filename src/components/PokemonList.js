import React from 'react';

const PokemonList = ({pokemon}) => {
  return (
    <div className="test">
      {pokemon.map(poki => (
        <div className="tester"key={poki.name}>{poki.name}</div>
      ))}
    </div>
  )
};

export default PokemonList