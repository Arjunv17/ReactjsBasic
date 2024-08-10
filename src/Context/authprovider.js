import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [color, setColor] = useState("red")
    const getPrint = (data)=>{
        console.log(data, "data")
    }

    return (
        <AuthContext.Provider value={{color, getPrint}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
