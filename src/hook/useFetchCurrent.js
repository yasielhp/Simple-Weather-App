import { useState, useCallback } from 'react'

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4bdbed5b1amshebd52775910c092p1efb08jsn65b9768798e3',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
}
export function useFetchCurrent() {
    const [current, setCurrent] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = useCallback(
        async (query) => {
            try {
                setLoading(true)
                const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`, options)
                const data = await response.json()
                if (response.ok) {
                    setCurrent(data)
                }
                setLoading(false)
            } catch (e) {
                setError(e)
                setLoading(false)
            }
        },
        [setCurrent, setLoading, setError]
    )

    return { current, loading, error, fetchData }
}
