import { useState, useEffect } from 'react'
import searchIcon from '../../assets/icon/search.svg'
import locationIcon from '../../assets/icon/location.svg'
import disableLocationIcon from '../../assets/icon/disableLocation.svg'
import  locationSearchingIcon from '../../assets/icon/locationSearching.svg'

import {useGeoLocation, useFetchCurrent} from '../../hook'



export default function Search() {  

    const {location} = useGeoLocation();
    const [showLocation, setShowLocation] = useState(false);
    
    const [search, setSearch] = useState('cuba');
    const {data, loading, error} = useFetchCurrent(search)

   const handleChange = (e) => {
    setSearch(e.target.value);
    }

   const handleShowLocation = () => {
    setShowLocation(!showLocation);
    setSearch("cuba")
  };

  console.log(data)

    useEffect(() => {
   showLocation ? location.loaded ? setSearch(location.coordinates.lat + "," + location.coordinates.lng) : setSearch("Loading your location...") : "";
    },  [location, showLocation]);

    return (
        <div className="w-full flex flex-row items-center py-[10px] pr-[10px] pl-[20px] bg-slate-50 rounded-[20px] shadow-search pointer-events-auto">
            <span className="flex items-center w-full h-full">
                <img className="pointer-events-none select-none" src={searchIcon} />
                <input className="focus:outline-none text-zinc-500 px-[8px] w-full h-full font-serif font-normal leading-[20px] bg-slate-50 focus:placeholder-transparent" type="text" name="searchText" value={search} onChange={handleChange} placeholder="Search..." />
            </span>
            <button className="p-[10px] bg-slate-200 rounded-full hover:bg-slate-300 disabled:opacity-20 hover:disabled:opacity-20 disabled:cursor-not-allowed" onClick={handleShowLocation} disabled={location.error}>
                <img className="pointer-events-none select-none" src={showLocation ? location.loaded ? disableLocationIcon : locationSearchingIcon :  locationIcon} />
            </button>
        </div>
        

    )
}
