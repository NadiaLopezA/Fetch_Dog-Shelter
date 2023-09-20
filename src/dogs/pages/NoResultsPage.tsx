
export const NoResultsPage = () => {
    return (
        <>
            <div
                className="flex flex-col relative z-0 items-center justify-center h-screen min-h-screen w-full"
            >
                <img
                    src="/img/dogShelterApp/adopt.png"
                    className="opacity-30 z-10 border-4 h-screen"
                />
                <div className="absolute">
                    <p className="font-bold uppercase lg:text-5xl text-2xl text-black">Start Searching!</p>
                </div>

            </div>
        </>
    )
}
