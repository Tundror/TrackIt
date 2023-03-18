import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [token, setToken] = useState("")
    const [userImage, setUserImage] = useState("")
    const [percentage, setPercentage] = useState(0)
    
    return(
        <UserContext.Provider value={{token, setToken, userImage, setUserImage, percentage, setPercentage}}>
            {children}
        </UserContext.Provider>
    )
}
