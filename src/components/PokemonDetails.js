import React, {useEffect, useState} from 'react';
import axios from 'axios';

const PokemonDetails = ({pokeInfo}) => {
  console.log({pokeInfo})
  const [details, setDetails] = useState([]);
  const PokemonDetailsURL = `https://pokeapi.co/api/v2/pokemon/${pokeInfo}`;

  useEffect(() => {
    axios.get(PokemonDetailsURL)
      .then(response => {
        console.log(response.data)
        setDetails(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [PokemonDetailsURL])

  if (details.sprites === undefined){
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  return(
    <div>
      <p>{details.name}</p>
      <p>Height: {details.height}</p>
      <p>Weight: {details.weight}</p>
    </div>
  )
};

export default PokemonDetails;