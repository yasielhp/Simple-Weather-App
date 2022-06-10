export default function Contanier({ isDay, code, temperature, text, day }) {
    const styles = {
        imageIcon: `w-[340px] sm:w-[300px] md:w-[300px] pointer-events-none select-none mt-[10px]`,
        temperature: `font-black text-[150px] sm:text-[180px] leading-[120px] sm:leading-[150px] text-center bg-clip-text text-transparent bg-gradient-to-t from-slate-50 my-[10px] pl-[45px] pointer-events-none select-none w-full`,
        text: `font-bold text-[28px] sm:text-[38px] leading-[33px] sm:leading-[43px] text-center mb-[5px] pointer-events-none select-none w-full`,
        day: `font-normal sm:text-[18px] leading-[20px] text-center opacity-60 mb-[30px] pointer-events-none select-none w-full`,
        hr: `w-full bg-slate-50 opacity-30 mb-[30px] pointer-events-none select-none w-full`,
    }
    const imageIcon = isDay ? 'iconWeather/day/' + code + '.svg' : 'iconWeather/night/' + code + '.svg'
    return (
        <>
            <img className={styles.imageIcon} src={imageIcon} />
            <h1 className={styles.temperature}>{temperature}º</h1>
            <h2 className={styles.text}>{text}</h2>
            <h3 className={styles.day}>{day}</h3>
            <hr className={styles.hr} />
        </>
    )
}
