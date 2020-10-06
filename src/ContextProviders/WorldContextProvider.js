import React, { createContext, useState } from "react";
import FantasyWorld from "../classes/FantasyWorld";
import FantasyWorldCreator from "../classes/FantasyWorldCreator";
export const WorldContext = createContext();

const WorldContextProvider = (props) => {
    const [world, setWorld] = useState("")
    const values = {
        world,
        setWorld
    }

    return(
        <WorldContext.Provider value={values}>
            {props.children}
        </WorldContext.Provider>
    )
}
export default WorldContextProvider