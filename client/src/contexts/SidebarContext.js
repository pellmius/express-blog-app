import React, { useState, createContext } from 'react';

export const SidebarContext = createContext();

export const SidebarProvider = props => {
    const [sidebarVisible,toggleSidebar] = useState(false)
    
    return(
        <SidebarContext.Provider value={[sidebarVisible,toggleSidebar]}>
            {props.children}
        </SidebarContext.Provider>
    );
}