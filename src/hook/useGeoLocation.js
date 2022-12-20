import { useEffect, useState } from 'react'

export function useGeoLocation() {
    const [position, setPosition] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => setPosition(position),
            (error) => setError(error)
        )
    }, [])

    return { position, error }
}
