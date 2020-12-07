import React from 'react';
import styled from 'styled-components';

const PokemonFilter = ({value, handleChange}) => {
  return (
    <div>
      <StyledSearch value={value} onChange={handleChange} placeholder="Search Pokemon.."/>
    </div>
  )
};

const StyledSearch = styled.input`
  position: absolute;
  border: 4px solid black;
  margin-top: 48px;
  left: 20%;
  width: 440px;
  height: 5%;
  background-color: red;
  color: white;
  ::-webkit-input-placeholder { 
  color: #fff;
};
  text-align: center;
  :focus{
    outline: none;
  }
`;

export default PokemonFilter;