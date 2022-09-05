import styled from "styled-components";
import WeatherLondon from "./WeatherLondon";
import WeatherTokyo from "./WeatherTokyo";
import WeatherSochi from "./WeatherSochi";


const Heading = styled.div`
    margin: 10px auto;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    color: #768298;
    width: 20%;
    font-weight: 600;
    opacity: 50%;
    text-align: center;
`;

const WrapperWeatherCities = styled.div`
    width: 70%;
    height: 200px;
    border: 1px solid #EBEBF1;
    box-shadow: -3px 0px 40px rgba(0, 0, 0, 0.1), 0px 0px 10px rgba(164, 164, 164, 0.03);
    margin: 60px auto;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
const WrapperBlockTwo = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 40px;
  
`;


function WeatherThreeCity() {

    return <>
        <WrapperBlockTwo>
            <Heading>
                Погода в других городах
            </Heading>
            <WrapperWeatherCities>
                <WeatherLondon>

                </WeatherLondon>
                <WeatherTokyo>

                </WeatherTokyo>
                <WeatherSochi>

                </WeatherSochi>
            </WrapperWeatherCities>
        </WrapperBlockTwo>
    </>
}
export default WeatherThreeCity;