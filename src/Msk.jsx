import styled from "styled-components";
import React, { useState, useEffect } from 'react';




export const WrapperBlockOne = styled.div`
width: 100%;
height: 100px;
margin-top: 50px;
border-radius: 5px;
display: flex;
justify-content: space-around;
`;

export const WrapperContainer = styled.div`
width: 20%;
height: 70px;
border-radius: 5px;
border: 1px solid #EBEBF1;
box-shadow: -3px 0px 40px rgba(0, 0, 0, 0.1), 0px 0px 10px rgba(164, 164, 164, 0.03);
margin-top: 18px;
`;

export const CityAndWeek = styled.div`
  width: 80%;
  height: 30%;
  margin: 5px auto;
  font-family: "Roboto", sans-serif;
  color: #768298;
  font-size: 14px;
  font-weight: 600;
  line-height: 16.8px;
  text-align: center;
  
`;


export const WeatherNowTemperature = styled.div`
  font-family: "Roboto", sans-serif;
  color: #768298;
  font-size: 14px;
  font-weight: 600;
  line-height: 16.8px;
  text-align: center; 
  width: ${(props) => (props.picture ? "20%" : "80%")};
  background-image: ${(props) => (props.picture ? "url()" : "none")};
  height: 30%;
  margin: 5px auto;
  background-size: 100% 100%;

`;


function Msk() {
    const [mskWeather, setMskWeather] = useState(null);

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=bfd0a95499ea6a289e27f37371a56113')
            .then(response => response.json())
            .then(json => setMskWeather(json));
    }, [])

    return <>
        <WrapperBlockOne>
            <WrapperContainer>
                <CityAndWeek>
                    {mskWeather?.sys?.country}
                </CityAndWeek>
                <CityAndWeek>
                    {mskWeather?.name}
                </CityAndWeek>
            </WrapperContainer>
            <WrapperContainer>
                <WeatherNowTemperature>
                    {Math.round(mskWeather?.main?.temp) - 273 + "°"}
                </WeatherNowTemperature>
                <WeatherNowTemperature >
                    {"Сегодня " + new Date().toLocaleString("ru")}
                </WeatherNowTemperature>
            </WrapperContainer>
        </WrapperBlockOne>
    </>
}

export default Msk;