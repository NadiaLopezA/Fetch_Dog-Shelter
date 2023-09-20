
export const NoResultsPage = () => {
    return (
        <>
            <div
                className="flex items-center justify-center h-screen min-h-screen z-0 w-full opacity-30"
                style={{
                    backgroundImage: "url('/img/dogShelterApp/search.png')",
                }}
            >
                <div className="z-1 h-52 min-h-52 relative">
                    <p className="font-bold uppercase lg:text-5xl text-2xl text-black">No results</p>
                </div>
            </div>
        </>
    )
}
