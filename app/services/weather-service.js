import weather from "../models/weather.js";
import store from "../store.js";

// @ts-ignore
const weatherApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/weather",
  timeout: 5000
});
class WeatherService {
  async getWeather() {
    let res = await weatherApi.get();    
    store.commit("weather", new weather(res.data));
  }
}

const weatherService = new WeatherService();
export default weatherService;
