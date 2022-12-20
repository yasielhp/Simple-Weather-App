import { useEffect, useState } from 'react'
import { Layout, Search, Container, Weather } from './components'
import { useGeoLocation, useFetchCurrent } from './hook'

function App() {
    const [search, setSearch] = useState('')
    const { position, error: geoError } = useGeoLocation()
    const { current, loading, error: fetchError, fetchData } = useFetchCurrent()
    const location = search || (position && `${position.coords.latitude},${position.coords.longitude}`)

    useEffect(() => {
        location && fetchData(location)
    }, [location, fetchData])

    const handleSubmit = (event) => {
        event.preventDefault()
        setSearch(search)
    }

    if (geoError || fetchError) {
        return (
            <div className="flex flex-col justify-center items-center w-full h-screen text-center mx-auto px-4 gap-2">
                <p className="text-lg font-semibold">Debe permitir el acceso a su ubicación para poder usar la aplicación</p>
                <small className="text-xs">Una vez permitido el acceso recargue la página </small>
            </div>
        )
    }

    const { is_day: isDay, condition, temp_c: temperature, feelslike_c: feelsLike, humidity, uv: uvIndex, vis_km: visibility, wind_kph: wind, wind_dir: windDir } = current?.current || {}
    const { code, text } = condition || {}
    const day = current?.location?.name

    return (
        <Layout isDay={isDay}>
            <Search value={search} onChange={(event) => setSearch(event.target.value)} onSubmit={handleSubmit} />
            {loading ? (
                <div className="h-full w-full flex justify-center items-center">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </div>
            ) : geoError || fetchError ? (
                <small>Ha ocurrido un error</small>
            ) : current === null ? (
                <small>No se a encontrado datos</small>
            ) : (
                <>
                    <Container isDay={isDay} code={code} temperature={temperature} text={text} day={day} />
                    <Weather feelsLike={feelsLike} humidity={humidity} uvIndex={uvIndex} visibility={visibility} wind={wind} windDir={windDir} />
                </>
            )}
        </Layout>
    )
}

export default App
