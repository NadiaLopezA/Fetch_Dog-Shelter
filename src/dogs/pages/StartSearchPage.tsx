
export const StartSearchPage = () => {
    return (
        <>
            <div
                className="mt-4 flex flex-col bg-slate-50 relative z-0 items-center justify-center h-screen min-h-screen w-full"
            >
                <img
                    src="/img/dogShelterApp/dogAdopt.png"
                    className="opacity-40 z-10"
                />
                <div className="absolute">
                    <p className="font-bold opacity-50 uppercase -mt-52 lg:text-5xl text-2xl text-orange-400">Start Searching!</p>
                </div>
            </div>
        </>
    )
}
