const styles = {
    container: `flex flex-col justify-center items-center text-center  w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/6 xl:my-2 xl:px-2 xl:w-1/6`,
    img: `w-[30px] h-[30px] pointer-events-none select-none`,
    title: `font-bold text-[20px] leading-[24px] pointer-events-none select-none`,
    subtitle: `font-serif font-normal text-[14px] leading-[18px] opacity-60 pointer-events-none select-none`,
}
export default function BoxItem({ icon, title, subtitle }) {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={icon} />
            <p className={styles.title}>{title}</p>
            <p className={styles.subtitle}>{subtitle}</p>
        </div>
    )
}
