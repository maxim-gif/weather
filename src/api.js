const baseUrl = "http://api.weatherunlocked.com/api/forecast/";
const geoCodeUrl = "http://api.openweathermap.org/geo/1.0/direct?";
const geoCodeKey = "52b70fdbcec3117d571f4c937584ba8c";
const appKey = "b47116ec5b55a7465be6a5e8287a2130";
const appId = "189ad260";

export const getWeather = async (name) => {
  const responseCode = await fetch(
    `${geoCodeUrl}q=${name}&limit=1&appid=${geoCodeKey}`
  );
  const geocode = await responseCode.json();
  if (geocode.cod === 401) {
    return { error: "Некоректный ключ API " };
  }
  if (geocode.cod === 400) {
    return { error: "Не удалось геокодирование" };
  }
  if (geocode.length !== 0) {
    try {
      const response = await fetch(
        `${baseUrl}${geocode[0].lat},${geocode[0].lon}?lang=ru&app_id=${appId}&app_key=${appKey}`
      );
      const weather = await response.json();
      return { data: weather, nameCity: geocode[0].local_names.ru };
    } catch (error) {
      return { error: "Неправильный запрос" };
    }
  } else {
    getWeather("Москва");
    return { error: "Локация не найдена" };
  }
};
