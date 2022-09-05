
import React, { useState, useEffect } from 'react';
import styled from "styled-components";


const Cards = styled.div`
    width: ${(props) => (props.week ? "3%" : "20%")};
    height: 150px;
    border: 1px solid #EBEBF1;
    &:hover {
      box-shadow: -3px 0px 40px rgba(0, 0, 0, 0.1), 0px 0px 10px rgba(164, 164, 164, 0.03);
  }
`;

const Items = styled.div`
    width: 80%;
    height: 20%;
    border-bottom: 1px solid #EBEBF1;
    margin: 10px auto;
    text-align: center;
    color: ${(props) => (props.city ? "#FF69B4" : "#768298")};
    font-weight: 600;
   
`;


function WeatherSochi() {

    const [valueSochi, setValueSochi] = useState(null);

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Sochi&appid=bfd0a95499ea6a289e27f37371a56113')
            .then(response => response.json())
            .then(json => setValueSochi(json));
    }, []);


    return < >
        <Cards>
            <Items city>
                {valueSochi?.name}
            </Items>
            <Items>
                {Math.round(valueSochi?.main?.temp) - 273 + "°C"}
            </Items>
            <Items>
                {valueSochi?.weather[0]["description"]}
            </Items>
        </Cards>

    </>

}

export default WeatherSochi;