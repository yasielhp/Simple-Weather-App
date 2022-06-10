import { useState, usEffect } from 'react'
import { Layout, Search, Contanier, Weather } from './components'
import { getWeather } from './service/getWeather'

function App() {
    console.log()
    const isDay = 1
    const location = 'Paris'
    const code = '1000'
    const temperature = 21
    const text = 'Sunny'
    const day = 'Monday, 14 April'
    const feelsLike = '26'
    const humidity = '70'
    const wind = '10'
    const windDir = 'NE'
    const visibility = '10'
    const uvIndex = '1'

    return (
        <Layout isDay={isDay}>
            <Search location={location} />
            <Contanier isDay={isDay} code={code} temperature={temperature} text={text} day={day} />
            <Weather feelsLike={feelsLike} humidity={humidity} wind={wind} windDir={windDir} visibility={visibility} uvIndex={uvIndex} />
        </Layout>
    )
}

export default App
