import styled from "styled-components";
import React, { useState } from 'react';
import WeatherDetailed from "./WeatherDetailed";


export const ButtonEveryDay = styled.button`

  width: 20%;
  height: 50px;
  font-family: "Roboto", sans-serif;
  color: black;
  font-size: 14px;
  font-weight: 600;
  margin-top: 23px;
  border-radius: 5px;
  background-color: #8eb5f5;
  opacity: 50%;
  border: 1px solid white;
  box-shadow: -3px 0px 40px rgba(0, 0, 0, 0.1), 0px 0px 10px rgba(164, 164, 164, 0.03);
  font-family: "Roboto", sans-serif;
  font-size: 15px;
 
`;


export const WrapperBlockButton = styled.div`
  width: 70%;
  height: 99px;
  display: flex;
  justify-content: right;
  margin: 30px auto;
`;



function ButtonOpen() {
  const [modal, setModal] = useState(" ");
  function func() {
    setModal(<WeatherDetailed />)
  }

  return <div >
    <WrapperBlockButton>
      <ButtonEveryDay onClick={() => func()}>Погода подробнее</ButtonEveryDay>
    </WrapperBlockButton>
    {modal}

  </div>

}
export default ButtonOpen;