import { cities } from '../../../assets/data/stateAndCities';

export const CityComponent = (payload: {setCity: React.Dispatch<React.SetStateAction<string>>}) => {
    return (
        <div>
            <p className="mb-2 ml-2 text-left text-l mt-6 font-medium text-cyan-800 dark:text-white decoration-cyan-800">
                City
            </p>
            <label className="sr-only">Underline select</label>
            <select
                id="underline_select"
                onChange={(event) => payload.setCity(event.target.value)}
                className="ml-4 block py-2.5 px-0 w-64 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
                <option value="">Choose a city</option>

                {cities.map((city, i: number) => (
                    <option key={i}>{city}</option>
                ))}
            </select>
        </div>
    )
}
