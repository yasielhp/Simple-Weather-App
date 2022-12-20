import searchIcon from '../../assets/icon/search.svg'
import locationIcon from '../../assets/icon/location.svg'
import disableLocationIcon from '../../assets/icon/disableLocation.svg'
import locationSearchingIcon from '../../assets/icon/locationSearching.svg'

export default function Search({ onSubmit, value, onChange }) {
    return (
        <form onSubmit={onSubmit}>
            <div className="w-full flex flex-row items-center py-[10px] pr-[10px] pl-[20px] bg-slate-50 rounded-[20px] shadow-search pointer-events-auto">
                <span className="flex items-center w-full h-full">
                    <input type="text" value={value} onChange={onChange} className="focus:outline-none text-zinc-500 px-[8px] w-full h-full font-serif font-normal leading-[20px] bg-slate-50 focus:placeholder-transparent" placeholder="Search..." />
                    <button type="submit">
                        <img className="pointer-events-none select-none mr-2" src={searchIcon} />
                    </button>
                </span>
            </div>
        </form>
    )
}
