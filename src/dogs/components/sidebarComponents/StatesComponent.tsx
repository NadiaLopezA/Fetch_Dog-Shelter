import { states } from '../../../data/states';
import { State } from '../../../interfaces/Location/State';
import { BadgeComponent } from './';

export const StatesComponent = (payload: { statesArray: State[], addState: (event: React.ChangeEvent<HTMLSelectElement>) => void, setStateArray: React.Dispatch<React.SetStateAction<State[]>> }) => {
    return (
        <div>
            <p className="mb-2 ml-2 text-left text-l mt-6 font-medium text-cyan-800 dark:text-white">
                States
            </p>
            <label className="sr-only">Underline select</label>
            <select
                id="underline_select"
                className="ml-4 block py-2.5 px-0 w-64 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                onChange={(event) => payload.addState(event)}
                value="Choose a state"
            >
                <option>Choose a state</option>
                {
                    states.map((state, i: number) => (
                        <option key={i} value={JSON.stringify(state)}>{state.state}</option>
                    ))
                }
            </select>
            <div className="p-4">
                {payload.statesArray.map((state: State, i: number) => (
                    <BadgeComponent
                        key={i}
                        title={state.state}
                        deleteFunction={() => {
                            payload.setStateArray(payload.statesArray.filter((s) => s.code !== state.code));
                        }}
                    />
                ))}
            </div>
        </div>
    )
}
