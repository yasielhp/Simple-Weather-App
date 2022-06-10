export default function Layout({ children, isDay }) {
    const styles = `flex flex-col py-[35px] px-[50px] sm:px-[80px] md:px-[150px] lg:px-[200px] xl:px-[345px] items-center h-screen w-screen bg-gradient-to-t text-slate-50 ${
        isDay ? 'from-indigo-600  to-sky-500' : 'from-zinc-800  to-zinc-400'
    } transition-all duration-500`
    return <div className={styles}>{children}</div>
}
