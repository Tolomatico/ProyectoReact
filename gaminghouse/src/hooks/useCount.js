import { useState } from "react"

export const useCount = (initial = 0, max = 5, min = 1) => {

    if (initial < min || initial > max) initial = min

  
    const [count, setCount] = useState(initial)

    const increment = () => {

        if (count < max)
            (setCount(count + 1))
    }

    const decrement = () => {

        if (count > min)
            setCount(count - 1)
    }

    


    return { count, increment, decrement}


}