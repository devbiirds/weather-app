export const getWeatherData = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4d7c525d8bf41c0284921f87d30a3c5e&lang=ru`);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}