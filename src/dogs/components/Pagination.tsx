import { useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

import { useDogShelter } from '../../hooks';

import { DOG_SEARCH_PAGE_SIZE } from '../../helpers';

export const Pagination = (payload: { total: number }) => {
    const { searchDogResults } = useDogShelter();

    const [page, setPage] = useState(1);

    const numPages = Math.ceil(payload.total / DOG_SEARCH_PAGE_SIZE) || 1

    const changePage = (page: number, executeSearch = true) => {
        if (page > numPages) page = numPages
        if (Number.isNaN(page)) page = 1
        setPage(page)
        if (!executeSearch) return
        if (page < 1) page = 1
        setPage(page)

        const from = (page - 1) * DOG_SEARCH_PAGE_SIZE
        const itemsLeft = payload.total - from
        searchDogResults({
            from,
            size: Math.min(DOG_SEARCH_PAGE_SIZE, itemsLeft)
        });
    }
    return (
        <div className="flex flex-col items-end mt-16 mr-8 bottom-0 border-gray-200 bg-white">
            <div className='items-end'>
                <input
                    type="numeric"
                    value={page}
                    onChange={(event) => changePage(Number(event.target.value), false)}
                    onBlur={(event) => changePage(Number(event.target.value))}
                    className="w-12 rounded-md border-0 mr-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                /> of {numPages} pages
                <a
                    href="#"
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 ml-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    onClick={() => page > 1 ? changePage(page - 1) : null}
                >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-3 w-3" aria-hidden="true" />
                </a>
                <a
                    href="#"
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    onClick={() => page < numPages ? changePage(page + 1) : null}
                >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-3 w-3" aria-hidden="true" />
                </a>
            </div>
        </div>
    )
}
