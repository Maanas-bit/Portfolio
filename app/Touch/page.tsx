const Touch = () => {
    return(
        <div className="width-screen overflow-hidden">
            <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                <h1 className="text-center text-[50px]">Welcome from Touch</h1>
            </div>
        </div>
    )
}

export default Touch