import { AscendingIcon, DescendingIcon } from '../';


export const ResultPageDataOrder = (payload: { changeSortFilter: (data: string) => void, sortType: string, changeSortType: (data: string) => void }) => {
    return (
        <div className="flex flex-col items-end">
            <div className="flex mr-12">
                <p className="text-sm font-bold mr-2">Order by: </p>
                <button
                    className="bg-gray-50  text-gray-900 border-2"
                    onClick={() => { (payload.sortType === "asc") ? payload.changeSortType("desc") : payload.changeSortType("asc") }}
                >
                    {
                        (payload.sortType === "asc")
                            ?
                            <AscendingIcon />
                            :
                            <DescendingIcon />
                    }
                </button>
                <select
                    id="breeds"
                    className="h-6 text-[10px] rounded-r-lg mr-2 border-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                    onChange={(event) => payload.changeSortFilter(event.target.value)}
                >
                    <option>Breed</option>
                    <option>Age</option>
                    <option>Name</option>
                </select>
            </div>
            <div></div>
        </div>
    )
}
