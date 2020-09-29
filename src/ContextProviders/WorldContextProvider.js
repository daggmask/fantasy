import React, { createContext, useState } from "react";
export const WorldContext = createContext();

const WorldContextProvider = (props) => {

    const values = {

    }

    return(
        <WorldContext.Provider value={values}>
            {props.children}
        </WorldContext.Provider>
    )
}
export default WorldContextProvider