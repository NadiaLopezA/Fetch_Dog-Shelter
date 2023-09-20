import { MatchIcon, PawIcon } from '../';



export const ResultPageHeader = (payload: { selectedDogs: number, matchDog: () => void }) => {
    return (
        <div className="mt-4 mb-2 p-2 flex shadow-md shadow-blue-gray-900/5 bg-slate-50">
            <div className="flex flex-col items-center w-2/4">
                <p className="text-l md:text-2xl mb-3 mt-2 font-serif">Candidates Selected</p>
                <div className="flex">
                    <PawIcon />
                    <p className="text-2xl mb-3 font-bold">{payload.selectedDogs}</p>
                </div>
            </div>
            <div className="w-2/4">
                <div
                    className="w-24 border-4 flex flex-col p-2 items-center h-24 bg-gradient-to-bl from-yellow-500 to-orange-400 rounded-full hover:from-orange-500 hover:to-yellow-400 hover:cursor-pointer"
                    onClick={payload.matchDog}
                >
                    <MatchIcon />
                    <p className="text-white text-sm font-bold">Match!</p>
                </div>
            </div>
        </div>
    )
}
