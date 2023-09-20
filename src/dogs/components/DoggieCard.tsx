import { Dog } from '../../interfaces';
import { HeartIcon } from '../';

export const DoggieCard = (payload: {dog: Dog, isSelected: boolean }) => {
    return (
        <div className="w-40 sm:w-40 lg:w-64 h-content hover:cursor-pointer shadow rounded-md">
            <div className="rounded-md">
                <img src={payload.dog.img} className="rounded-md rounded-b-none h-40 sm:w-40 lg:w-64 object-cover object-center" />
            </div>
            <p className="bg-slate-100 w-full text-center text-black text-md font-extrabold mr-2 px-2.5 py-0.5 rounded">{ payload.isSelected && <HeartIcon />}{payload.dog.name}</p>
            <p className="mt-2 mb-4 text-sm text-cyan-700 text-center font-bold">{payload.dog.breed} </p>
            <div className="flex">
                <p className="ml-4 mt-1 text-xs text-gray-900"><span className="font-bold">Age: </span>{payload.dog.age}</p>
                <p className="ml-2 mt-1 text-xs text-gray-900 mb-2"><span className="font-bold">Address: </span>{payload.dog.location?.city}, {payload.dog.location?.state}, {payload.dog.location?.zip_code}</p>                
            </div>
        </div>
    )
}
