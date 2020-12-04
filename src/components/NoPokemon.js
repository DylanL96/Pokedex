import React from 'react';
import styled from 'styled-components';

const NoPokemon = () => {
  return (
    <LeftSidePokedex>
      <GreyBorder>
        <BlackBorder>
          <Screen>
            <StyledText>No Pokemon Found</StyledText>
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

const StyledText = styled.p`
  text-align: center;
  vertical-align: middle;
  line-height: 300px;
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

export default NoPokemon;