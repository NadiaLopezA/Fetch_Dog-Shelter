
export const SubmitButton = (payload: { onSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void }) => {
    return (
        <div>
            <div className="flex flex-col items-end mt-10">
                <button
                    className="inline-flex items-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100"
                    onClick={(event) => payload.onSubmit(event)}
                >
                    <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                        Search!
                    </span>
                </button>
            </div>
        </div>
    )
}
