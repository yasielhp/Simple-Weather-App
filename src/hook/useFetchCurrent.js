import { useEffect, useState } from "react"

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4bdbed5b1amshebd52775910c092p1efb08jsn65b9768798e3',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

export const useFetchCurrent = (current) => {
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${current}`, options)
                const json = await response.json()
                setData(json)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchData()
    } ,[current])
    return {data,loading,error}
}
