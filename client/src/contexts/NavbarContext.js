import React, { useState, createContext } from 'react';

export const NavbarContext = createContext();

export const NavbarProvider = props => {
    const [userObj,setUserObj] = useState(null);
    return (
        <NavbarContext.Provider value={[userObj,setUserObj]}>
            {props.children}
        </NavbarContext.Provider>
    )
}


