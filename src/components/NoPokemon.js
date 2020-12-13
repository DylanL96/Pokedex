import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const NoPokemon = () => {
  return (
    <React.Fragment>
      <Parent>
        <LeftSidePokedex>
        <Pad>
          <FontAwesomeIcon icon={faPlus} size="7x" className="plus-button"/>
        </Pad>
        <ButtonStyle>
          <AButton>A</AButton>
          <BButton>B</BButton>
        </ButtonStyle>
        <GreyBorder>
          <BlackBorder>
            <Screen>
              <StyledText>No Pokemon Found</StyledText>
            </Screen>
          </BlackBorder>
        </GreyBorder>
      </LeftSidePokedex>
      <RightSidePokedex>
        <NameLabel> No Pokemon Found</NameLabel>
        <PhysicalStats><SpanStats>Height: None Weight: None</SpanStats></PhysicalStats>
        <PokeStats>
        <AbilitiesSpan>Abilities</AbilitiesSpan>
          <PokeStatsAbilities>
          None
          </PokeStatsAbilities>
        <TypesSpan>Type</TypesSpan>
          <PokeStatsTypes>
            None 
          </PokeStatsTypes>
        <MovesSpan>Move</MovesSpan>
          <PokeStatsMoves>
            None
          </PokeStatsMoves>
          </PokeStats>
      </RightSidePokedex>
      </Parent>
    </React.Fragment>
  )
};

//Styled Components CSS
const Parent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -5px;
`;

const Screen = styled.div`
  border: 1px solid black;
  position: relative;
  top: 20px;
  display: flex;
  justify-content: center;
  margin-left: 9px;
  height: 300px;
  width: 350px;
  border-radius: 20px;
  background-color: white;
`;

const BlackBorder = styled.div`
  background-color: black;
  position: absolute;
  height: 345px;
  width: 370px;
  margin-left: 13px;
  margin-top: 20px;
`;

const GreyBorder = styled.div`
  background-color: grey;
  height: 380px;
  width: 400px;
  margin-left: -170px;
  margin-top: 50px;
`;

const StyledText = styled.p`
  text-align: center;
  vertical-align: middle;
  line-height: 300px;
`;

const LeftSidePokedex = styled.div`
  border: 5px solid black; 
  width: 450px;
  height: 650px;
  display: flex;
  background-color: rgba(257, 0, 0, 1);
`;

const Pad = styled.div`
  height: 110px;
  position: relative;
  top: 75%;
  left: 15%;
`;

const ButtonStyle = styled.div`
  /* border: 1px solid black; */
  height: 100px;
  width: 100px;
  margin-top: 105%;
  position: relative;
  left: 40%;
`;

const AButton = styled.button`
  background-color: black;
  color: white;
  border-radius: 40px;
  width: 50px;
  height: 50px;
  :focus{
    outline: none;
  }
`;

const BButton = styled.button`
  background-color: black;
  color: white;
  border-radius: 40px;
  width: 50px;
  height: 50px;
  margin-left: 70px;
  :focus{
    outline: none;
  }
`;

const RightSidePokedex = styled.div`
  border: 5px solid black;
  width: 450px;
  height: 650px;
  display: flex;
  flex-wrap: wrap;
  background-color: rgba(257, 0, 0, 1);
`;

const NameLabel = styled.div`
  border: 1px solid black;
  height: 30px;
  width: 400px;
  text-align: center;
  background-color: black;
  color: white;
  border-radius: 40px;
  margin-top: 20px;
  margin-left: 20px;
  font-size: 25px;
`;

const PhysicalStats = styled.div`
  width: 90%;
  height: 20%;
  text-align: center;
  font-size: 30px;
  background-color: black;
  margin-left: 20px;
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
  margin-left: 20px;
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
  margin: 10px;
`;

const TypesSpan = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PokeStatsTypes = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 10px;
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


export default NoPokemon;