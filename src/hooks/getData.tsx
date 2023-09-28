import axios from "axios";

async function getData(lat: string, long: string) {
  var options = {
    method: "GET",
    url: "https://api.open-meteo.com/v1/forecast",
    params: {
      latitude: lat,
      longitude: long,
      current_weather: "true",
      daily:
        "weathercode,temperature_2m_max,temperature_2m_min,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,windspeed_10m_max,windgusts_10m_max",
      timezone: "auto",
    },
    headers: {
      Accept: "*/*",
    },
  };
  const response = await axios.request(options);  
  return response.data;
}

export default getData;
