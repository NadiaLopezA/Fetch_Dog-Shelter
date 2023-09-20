import { DogIcon } from './';

export const TitleComponent = (payload: { openSideBar: boolean }) => {
    return (
        <div className={`${payload.openSideBar ? "hidden" : ""} lg:contents`}>
            <div className='flex'>
                <DogIcon />
                <p className="mb-8 ml-2 text-left text-l mt-4 font-bold text-gray-900">
                    What are you looking for?
                </p>
            </div>
        </div>
    )
}
