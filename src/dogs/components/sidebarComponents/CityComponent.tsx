

export const CityComponent = (payload: { city: string, onInputChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void }) => {
    return (
        <div>
            <p className="mb-3 ml-2 text-left text-l mt-6 font-medium text-cyan-800 dark:text-white decoration-cyan-800">
                City
            </p>
            <input
                className="appearance-none border-b-2 ml-2 bg-transparent w-[16.5rem] text-black text-sm py-1 px-2"
                type="text"
                placeholder="Type a city"
                name="city"  
                autoComplete="off"              
                value={payload.city}
                onChange={(event) => payload.onInputChange(event)}
            />
        </div>
    )
}
