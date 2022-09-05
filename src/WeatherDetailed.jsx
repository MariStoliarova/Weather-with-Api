import styled from "styled-components";
import React, { useState, useEffect } from 'react';



const WrapperWeatherWeek = styled.div`
width: 80%;
height: 400px;
border: 1px solid #EBEBF1;
box-shadow: -3px 0px 40px rgba(0, 0, 0, 0.1), 0px 0px 10px rgba(164, 164, 164, 0.03);
position: fixed;
top: 192px;
left: 150px;
background-color: white;

`;

const HeadingWeatherDetailed = styled.div`
margin: 10px auto;
font-family: "Roboto", sans-serif;
font-size: 20px;
color: #768298;
border-bottom: 1px solid #EBEBF1;
width: 40%;
font-weight: 600;
opacity: 50%;
text-align: center;
`;


const WrapperWeatherDetailed = styled.div`
width: 95%;
height: 200px;
border: 1px solid #EBEBF1;
margin: 60px auto;
border-radius: 5px;
display: flex;
justify-content: space-around;
align-items: center;
`;

const ButtonClose = styled.button`
  width: 15%auto;
  height: 15%auto;
  border-radius: 50%inherit;
`;

const WrapperConditionWeather = styled.div`
width: 35%;
height: 70%;

`;

const FindingsWeather = styled.div`
  width: 90%;
  height: 20%;
  margin: 10px auto;
  border-bottom: 1px dashed #EBEBF1;
`;


function WeatherDetailed() {

    const [valueButtonClose, setValueButtonClose] = useState(true);
    const [valueTodayMsk, setValueTodayMsk] = useState(null);

    let BlockDetailed;


    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=bfd0a95499ea6a289e27f37371a56113')
            .then(response => response.json())
            .then(json => setValueTodayMsk(json));
    }, []);




    if (valueButtonClose) {
        BlockDetailed = <WrapperWeatherWeek>
            <ButtonClose onClick={Opacity}>
                X
            </ButtonClose>
            <HeadingWeatherDetailed>
                подробная информация о погоде на сегодня
            </HeadingWeatherDetailed>
            <WrapperWeatherDetailed>
                <WrapperConditionWeather>
                    <FindingsWeather>
                        Температура сейчас - {Math.round(valueTodayMsk?.main?.temp) - 273 + "°C"}
                    </FindingsWeather>
                    <FindingsWeather>
                        Минимальная температура - {(Math.round(valueTodayMsk?.main?.temp_min) - 273 + "°C")}
                    </FindingsWeather>
                    <FindingsWeather>
                        Максимальная температура - {(Math.round(valueTodayMsk?.main?.temp_max) - 273 + "°C")}
                    </FindingsWeather>
                </WrapperConditionWeather>
                <WrapperConditionWeather>
                    <FindingsWeather>
                        Ветер - {(valueTodayMsk?.wind?.speed) + " м/с, С"}
                    </FindingsWeather>
                    <FindingsWeather>
                        Давление -  {((valueTodayMsk?.main?.pressure) * 0.750064) + "мм рт. ст."}
                    </FindingsWeather>
                    <FindingsWeather>
                        Влажность - {(valueTodayMsk?.main?.humidity) + "%"}
                    </FindingsWeather>
                </WrapperConditionWeather>
            </WrapperWeatherDetailed>
        </WrapperWeatherWeek>
    }

    function Opacity() {
        setValueButtonClose(false);
    }

    return <>
        {BlockDetailed}
    </>
}

export default WeatherDetailed;