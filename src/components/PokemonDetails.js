import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import typeColors from '../helpers/typeColors';

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
    <React.Fragment>
    <LeftSidePokedex>
      <AButton>A</AButton>
      <BButton>B</BButton>
      <FontAwesomeIcon icon={faPlus} size="7x" className="plus-button"/>
      <GreyBorder>
        <BlackBorder>
          <Screen>
            <img style={{backgroundColor: typeColors[details.types[0].type.name]}} src={details.sprites.front_default} width="400" height="300" alt="pokemon"/>
          </Screen>
        </BlackBorder>
      </GreyBorder>
    </LeftSidePokedex>
    <RightSidePokedex>
      <NameLabel> {details.id}. {details.name.charAt(0).toUpperCase() + details.name.slice(1)}</NameLabel>
      <PhysicalStats><SpanStats>Height: {details.height}ft Weight: {details.weight}lb</SpanStats></PhysicalStats>
      <PokeStats>
      <AbilitiesSpan>Abilities</AbilitiesSpan>
        <PokeStatsAbilities>
        {details.abilities[0].ability.name} {details.abilities[1].ability.name}
        </PokeStatsAbilities>
      <TypesSpan>Type</TypesSpan>
        <PokeStatsTypes>
          {details.types[0].type.name} 
        </PokeStatsTypes>
      <MovesSpan>Move</MovesSpan>
        <PokeStatsMoves>
          {details.moves[0].move.name}
        </PokeStatsMoves>
        </PokeStats>
    </RightSidePokedex>
    </React.Fragment>
  )
};

//Styled Components CSS
const Screen = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  height: 300px;
  width: 350px;
  border-radius: 20px;
  position: absolute;
  left: 50px;
  bottom: 39%;
  background-color: white;
`;

const LeftSidePokedex = styled.div`
  border: 5px solid black;
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
  border: 5px solid black;
  height: 380px;
  width: 400px;
  margin-top: 50px;
`;

const AButton = styled.button`
  background-color: black;
  color: white;
  border-radius: 40px;
  padding: 10px;
  position: absolute;
  font-size: 20px;
  width: 50px;
  left: 70%;
  top: 80%;
  :focus{
    outline: none;
  }
`;

const BButton = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  border-radius: 40px;
  padding: 10px;
  position: absolute;
  font-size: 20px;
  width: 50px;
  left: 50%;
  top: 80%;
  :focus{
    outline: none;
  }
`;

const RightSidePokedex = styled.div`
  border: 5px solid black;
  display: flex;
  justify-content: center;
  height: 650px;
  width: 450px;
  position: absolute;
  left: 48%;
  bottom: 10%;
  background-color: rgba(257, 0, 0,1 );
  flex-wrap: wrap;
`;

const NameLabel = styled.div`
  border: 1px solid black;
  height: 30px;
  width: 400px;
  margin-top: 10px;
  text-align: center;
  background-color: black;
  color: white;
  border-radius: 40px;
  margin-top: 20px;
  font-size: 25px;
`;

const PhysicalStats = styled.div`
  width: 90%;
  height: 20%;
  text-align: center;
  font-size: 30px;
  background-color: black;
  color: white;
  border-radius: 40px;
`;

const SpanStats = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const PokeStats = styled.div`
  border: 1px solid black;
  width: 90%;
  height: 50%;
  border-radius: 40px;
  background-color: black;
  color: white;
  font-size: 30px;
`;

const PokeStatsAbilities = styled.div`
  display: flex;
  justify-content: center;
`;

const AbilitiesSpan = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const TypesSpan = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PokeStatsTypes = styled.span`
  display: flex;
  justify-content: center;
`;

const MovesSpan = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PokeStatsMoves = styled.span`
  display: flex;
  justify-content: center;
`;


export default PokemonDetails;

