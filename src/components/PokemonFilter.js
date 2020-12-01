import React from 'react';

const PokemonFilter = ({value, handleChange}) => {
  return (
    <div>
      <input value={value} onChange={handleChange} placeholder="Search Pokemon.."/>
    </div>
  )
};

export default PokemonFilter;