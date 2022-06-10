import searchIcon from '../../assets/icon/search.svg'
import locationIcon from '../../assets/icon/location.svg'
const styles = {
    container: `w-full flex flex-row items-center py-[10px] pr-[10px] pl-[20px] bg-slate-50 rounded-[20px] shadow-search pointer-events-auto `,
    search: `flex items-center w-full h-full`,
    icon: `pointer-events-none select-none`,
    input: `focus:outline-none text-zinc-500 px-[8px] w-full h-full font-serif font-normal leading-[20px] bg-slate-50 focus:placeholder-transparent`,
    buttonLocation: `p-[10px] bg-slate-200 rounded-full hover:bg-slate-300`,
}
export default function Search() {
    return (
        <div className={styles.container}>
            <span className={styles.search}>
                <img className={styles.icon} src={searchIcon} />
                <input className={styles.input} type="text" placeholder="Search..." />
            </span>
            <button className={styles.buttonLocation}>
                <img className={styles.icon} src={locationIcon} />
            </button>
        </div>
    )
}
