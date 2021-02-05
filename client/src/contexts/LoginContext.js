import React, {useState, createContext} from 'react';

export const LoginContext = createContext();

export const LoginProvider = props => {
    const [token, setToken] = useState(null);
    return(
        <LoginContext.Provider value={[token,setToken]}>
            {props.children}
        </LoginContext.Provider>
    )
}


