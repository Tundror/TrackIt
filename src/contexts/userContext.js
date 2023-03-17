import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [token, setToken] = useState("")
    const [userImage, setUserImage] = useState("")
    return(
        <UserContext.Provider value={{token, setToken, userImage, setUserImage}}>
            {children}
        </UserContext.Provider>
    )
}
