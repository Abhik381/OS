export const weatherAPI = async (lat, lon) => {
  const baseURL = "";
  let response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weather_code&current=temperature_2m`);
  let data = await response.json();
  console.log(data);
  
  return Math.floor(data.current.temperature_2m);
};
 