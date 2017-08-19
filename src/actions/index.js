import axios from "axios";

const API_KEY = "1ce03166d7ea1aca54d2759e2a519854";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
 
    console.log('request' + request);
 
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}