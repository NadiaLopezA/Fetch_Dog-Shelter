import { DoubleSlider } from './';

export const AgeComponent = (payload: { minVal: number, maxVal: number, setMinVal: React.Dispatch<React.SetStateAction<number>>, setMaxVal: React.Dispatch<React.SetStateAction<number>>}) => {

    return (
        <div>
            <p className="mb-4 text-left ml-2 text-l font-medium text-cyan-800">
                Age Range
            </p>
            <DoubleSlider
                minVal={payload.minVal}
                maxVal={payload.maxVal}
                setMinVal={payload.setMinVal}
                setMaxVal={payload.setMaxVal}
            />
        </div>
    )
}
