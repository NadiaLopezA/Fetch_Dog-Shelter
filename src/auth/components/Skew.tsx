

export const Skew = () => {
    return (
        <>
            <div
                className="w-full pointer-events-none overflow-hidden h-40"
                style={{ transform: "translateZ(0)" }}
            >
                <svg
                    className="absolute bottom-0 overflow-hidden h-40"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"                               
                >
                    <polygon
                        className="fill-white"
                        // points="2250 0 2560 100 0 100" 
                        points="0 40 2560 160 0 2560"                        
                    ></polygon>
                </svg>
            </div>
        </>
    );
}
