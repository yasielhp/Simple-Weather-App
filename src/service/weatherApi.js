const OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        'X-RapidAPI-Key': '4bdbed5b1amshebd52775910c092p1efb08jsn65b9768798e3',
    },
}

export const getUserLocation = async (lat, lon) => {
    let res

    await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${lat}%2C${lon}&lang=es`, OPTIONS)
        .then((response) => response.json())
        .then((response) => (res = response))
        .catch((err) => console.error(err))
    return res
}

export const getRealtimeWeather = async (cityName) => {
    let res

    await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${cityName}&lang=es`, OPTIONS)
        .then((response) => response.json())
        .then((response) => (res = response))
        .catch((err) => console.error(err))
    return res
}

export const searchCityWeather = async (cityName) => {
    let res

    await fetch(`https://weatherapi-com.p.rapidapi.com/search.json?q=${cityName}&lang=en`, OPTIONS)
        .then((response) => response.json())
        .then((response) => (res = response))
        .catch((err) => console.error(err))

    return res
}
