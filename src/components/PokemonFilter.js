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
  border: 4px solid black;
  display: flex;
  background-color: rgba(257, 0, 0, 1);
  margin: 0 auto;
  height: 50px;
  width: 909px;
  ::-webkit-input-placeholder{
    color: #fff;
  };
  text-align: center;
  :focus{
    outline: none;
  }
`;

export default PokemonFilter;