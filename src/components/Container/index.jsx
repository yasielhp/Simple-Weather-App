export default function Container({ isDay, code, temperature, text, day }) {
    const imageIcon = isDay ? 'iconWeather/day/' + code + '.svg' : 'iconWeather/night/' + code + '.svg'
    return (
        <>
            <img className="w-[340px] sm:w-[300px] md:w-[300px] pointer-events-none select-none mt-[10px]" src={imageIcon} />
            <h1 className="font-black text-[125px] sm:text-[180px] leading-[120px] sm:leading-[150px] text-center bg-clip-text text-transparent bg-gradient-to-t from-slate-50 my-[10px] pl-[45px] pointer-events-none select-none w-full">
                {temperature}º
            </h1>
            <h2 className="font-bold text-[28px] sm:text-[38px] leading-[33px] sm:leading-[43px] text-center mb-[5px] pointer-events-none select-none w-full">{text}</h2>
            <h3 className="font-normal sm:text-[18px] leading-[20px] text-center opacity-60 mb-[30px] pointer-events-none select-none w-full">{day}</h3>
            <hr className="w-full bg-slate-50 opacity-30 mb-[30px] pointer-events-none select-none w-full" />
        </>
    )
}
