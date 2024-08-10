import React, { useContext } from 'react'
import { AuthContext } from '../Context/authprovider'
import SuperChildContext from './superChild'

const ChildContext = () => {
    const { color, getPrint } = useContext(AuthContext)

    return (
        <>
            <SuperChildContext />
            <h1 style={{ color: color }}>Child Component!!</h1>
            <button onClick={()=>getPrint("Styles")}>Click</button>
        </>
    )
}

export default ChildContext
