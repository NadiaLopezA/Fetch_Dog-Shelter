
export const BadgeComponent = ({ title, deleteFunction }: {title: string, deleteFunction: () => void}) => {
    return (
        <>
            <span id="badge-dismiss-purple" className="inline-flex items-center px-2 py-1 mr-4 mt-1 text-sm font-medium text-orange-800 bg-orange-100 rounded dark:bg-orange-900 dark:text-orange-300">
                {title}
                <button type="button" onClick={deleteFunction} className="inline-flex items-center p-1 ml-2 text-sm text-orange-400 bg-transparent rounded-sm hover:bg-orange-200 hover:text-orange-900 dark:hover:bg-orange-800 dark:hover:text-orange-300" data-dismiss-target="#badge-dismiss-orange" aria-label="Remove">
                    <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>                    
                </button>
            </span>
        </>
    )
}
