import React, { useContext } from 'react'
import { AuthContext } from '../Context/authprovider'

const SuperChildContext = () => {
    const { color } = useContext(AuthContext)

    return (
        <>
            <h1 style={{ color: color }}>Super Child Component!!</h1>
        </>
    )
}

export default SuperChildContext
