import { useState } from "react"



export const Filter = ({ children }) => {

    const [filterState, setFilterState] = useState("")
   

    const filterOnChange = (event) => {

        setFilterState(event.target.value)
    }


    return children({ filterState, filterOnChange })

}

