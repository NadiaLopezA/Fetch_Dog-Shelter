import { BadgeComponent } from './';

export const BreedsComponent = ( payload: { dogBreedsArray: string[], addBreed: (event: React.ChangeEvent<HTMLSelectElement>) => void, breedsSelectedArray: string[], setBreedsSelectedArray: React.Dispatch<React.SetStateAction<string[]>>}) => {
    return (
        <div>
            <p className="mb-2 ml-2 text-left text-l mt-10 font-medium text-cyan-800">
                Breeds
            </p>
            <label className="sr-only">Underline select</label>
            <select
                id="underline_select"
                name="breedSelected"
                className="ml-4 block py-2.5 px-0 w-64 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                onChange={(event) => payload.addBreed(event)}
                value="Choose a breed"
            >
                <option>Choose a breed</option>
                {
                    payload.dogBreedsArray.map((breed: string, i: number) => (
                        <option key={i}>{breed}</option>
                    ))
                }

            </select>
            <div className="p-4">
                {payload.breedsSelectedArray.map((breed: string, i: number) => (
                    <BadgeComponent
                        key={i}
                        title={breed}
                        deleteFunction={() => {
                            payload.setBreedsSelectedArray(payload.breedsSelectedArray.filter((a) => a !== breed));
                        }}
                    />
                ))}
            </div>
        </div>
    )
}
