import { useEffect, useCallback, useRef } from 'react';
import './doubleSlider.css';

export const SliderComponent = ({ maxVal, setMaxVal }: { maxVal: number, setMaxVal: React.Dispatch<React.SetStateAction<number>> }) => {
    const max = 100
    const maxValRef = useRef<HTMLInputElement>(null);
    const range = useRef<HTMLInputElement>(null);

    // Convert to percentage
    const getPercent = useCallback(
        (value: number) => Math.round((value*100/max)),
        [max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        if (maxValRef.current) { 
            const maxPercent = getPercent(maxVal); // Preceding with '+' converts the value from type string to type number
            if (range.current) {                
                range.current.style.width = `${maxPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    return (
        <div className="container2 h-8">
            <input
                type="range"
                min={0}
                max={max}
                value={maxVal}
                ref={maxValRef}
                onChange={(event) => {
                    const value = Math.max(+event.target.value);
                    setMaxVal(value);
                    event.target.value = value.toString();
                }}
                className="thumb thumb--zindex-4"
            />

            <div className="slider">
                <div className="slider__track" />
                <div ref={range} className="slider__range" />                
                <div className="slider__right-value">{(maxVal === max) ? "+"+ maxVal : maxVal} km</div>
            </div>
        </div>
    );
}
