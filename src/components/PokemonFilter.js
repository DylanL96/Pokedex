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
  left: 25%;
  width: 50%;
  height: 5%;
  border-radius: 120px;
  text-align: center;
  :focus{
    outline: none;
  }
`;

export default PokemonFilter;