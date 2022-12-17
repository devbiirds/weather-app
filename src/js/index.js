import '../index.html'
import '../index.css'
import { getWeatherData } from './api.js'

const app = async () => {
    const weather = await getWeatherData('Москва')
    console.log(weather)
}

app()