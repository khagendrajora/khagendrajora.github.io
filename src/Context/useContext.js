import { createContext, useEffect, useState } from "react";



export const AnimationContext=createContext()



export const Context=({children})=>{

    const [threshold, setThreshold] = useState(0.2);

    const updateThreshold = () => {
        if (window.innerWidth <= 576) {
            setThreshold(0.1);
        } else if (window.innerWidth <= 800) {
            setThreshold(0.1);
        } else {
            setThreshold(0.2);
        }
    };

    useEffect(() => {
        updateThreshold();

        window.addEventListener('resize', updateThreshold);

        return () => {
            window.removeEventListener('resize', updateThreshold);
        };
    }, []);

return(
    <AnimationContext.Provider value={{threshold,updateThreshold}}>
        {children}
    </AnimationContext.Provider>
)
}