import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PokemonDetails = ({pokeInfo}) => {
  // console.log({pokeInfo})
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
    <LeftSidePokedex>
      <GreyBorder>
        <BlackBorder>
          <Screen>
            <img src={details.sprites.front_default} width="400" height="300" alt="pokemon"/>
          </Screen>
        </BlackBorder>
      </GreyBorder>
    </LeftSidePokedex>
  )
};

const Screen = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  height: 300px;
  width: 350px;
  border-radius: 20px;
  position: absolute;
  left: 50px;
  bottom: 40%;
  background-color: orange;
`;

const LeftSidePokedex = styled.div`
  border: 10px solid black;
  display: flex;
  justify-content: center;
  height: 650px;
  width: 450px;
  position: absolute;
  left: 20%;
  bottom: 10%;
  background-color: rgba(257, 0, 0,1 );
`;

const BlackBorder = styled.div`
  background-color: black;
  height: 345px;
  width: 370px;
  margin-left: 15px;
  margin-top: 20px;
`;

const GreyBorder = styled.div`
  background-color: grey;
  height: 380px;
  width: 400px;
  margin-top: 50px;
`;

export default PokemonDetails;

