import React from 'react';
import styled from 'styled-components';

const PokemonList = ({pokemon}) => {
  return (
    <RightSideDiv>
      <StyledDiv>
        <StyledUl>
        {pokemon.map(poki => (
          <StyledLi key={poki.name}>{poki.name}</StyledLi>
        ))}
        </StyledUl>
      </StyledDiv>
    </RightSideDiv>
  )
};

export default PokemonList;

const RightSideDiv = styled.div`
  border: 1px solid black;
  height: 500px;
  width: 50%;
  position: absolute;
  right: 50px;

`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  border: 10px solid black;
  right: 50px;
  width: 40%;
  background-color: blue;
  font-size: 40px;
  height: 400px;
  overflow-y: auto;
  ::-webkit-scrollbar{
    display: none;
  }
`

const StyledLi = styled.li`
  display: flex;
  justify-content: center;
  padding: 20px 20px;
  margin: 5px 0;
  color: white;
  transition: .5s;
  width: 100%;
  text-align: center;
  border: 1px solid black;
  background: red;
  &:hover{
    background-color: orange;
    transform: scale(1.06)
  }
`
const StyledUl = styled.ul`
  position: relative;
  width: 450px;
  margin: auto 0;
  padding: 10px;
  box-sizing: border-box;
`