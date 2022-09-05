
import React, { useState, useEffect } from 'react';
import styled from "styled-components";


const Card = styled.div`
    width: ${(props) => (props.week ? "3%" : "20%")};
    height: 150px;
    border: 1px solid #EBEBF1;
    &:hover {
      box-shadow: -3px 0px 40px rgba(0, 0, 0, 0.1), 0px 0px 10px rgba(164, 164, 164, 0.03);
  }
`;

const Item = styled.div`
    width: 80%;
    height: 20%;
    border-bottom: 1px solid #EBEBF1;
    margin: 10px auto;
    text-align: center;
    color: ${(props) => (props.city ? "#FF69B4" : "#768298")};
    font-weight: 600;
`;


function WeatherLondon() {

    const [valueLondon, setValueLondon] = useState(null);

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=bd34b3c1392042700a2dd4019b0e8da3')
            .then(response => response.json())
            .then(json => setValueLondon(json));
    }, []);

    return < >
        <Card>
            <Item city>
                {valueLondon?.name}
            </Item>
            <Item>
                {Math.round(valueLondon?.main?.temp) - 273 + "°C"}
            </Item>
            <Item>
                {valueLondon?.weather[0]["description"]}
            </Item>
        </Card>
    </>

}

export default WeatherLondon;