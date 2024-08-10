import React, { useCallback, useState } from 'react'
import Child from './child';

const Parent = () => {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState([]);
    const handleOne = () => {
        setCountOne(countOne + 1)
    }
    const fun = useCallback(() => {
        console.log("Arjun!!")
    }, [countTwo])

    return (
        <>
            <Child fun={fun} countTwo={countTwo}/>
            <button onClick={handleOne}>CountOne - {countOne}</button>
        </>
    )
}

export default Parent
