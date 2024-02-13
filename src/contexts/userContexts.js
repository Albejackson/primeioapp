import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserStore = ({children}) => {
    const [login, setLogin] = useState(false)
    const [data, setDate] = useState({})
    
    useEffect(() => {
        setDate({name: 'Alber', age: 29})
    })

    return (
        <UserContext.Provider value={{login, setLogin}}>
            {children}
        </UserContext.Provider>
    )
}