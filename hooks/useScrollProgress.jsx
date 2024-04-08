import { useState, useEffect } from "react";

function useScrollProgress() {
    const [ completion, setCompletion ] = useState(0);
    useEffect(() =>{
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY 
            const scrollHeight = document.body.scrollHeight - window.innerHeight

            if (scrollHeight) {
                setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100)
            }
        }

        // add event listener
        window.addEventListener('scroll', updateScrollCompletion);

        // clear event
        return ( )=> window.removeEventListener('scroll', updateScrollCompletion )
    }, [])
   return completion;
}

export default useScrollProgress;
