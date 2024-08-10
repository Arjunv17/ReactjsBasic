import React, { useMemo, useState } from 'react'

const UsememoHook = () => {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const handleOne = () => {
        setCountOne(countOne + 1)
    }

    const handleTwo = () => {
        setCountTwo(countTwo + 1)
    }

    const evendata = useMemo(() => {
        let i = 0;
        while (i < 2000000000) {
            i++
        }
        return countOne % 2 === 0;
    }, [countOne])

    console.warn(evendata)

    return (
        <>
            <button onClick={handleOne}>CountOne - {countOne}</button>
            <h4>{evendata ? "Even" : "Odd"}</h4>
            <button onClick={handleTwo}>CountTwo - {countTwo}</button>
        </>
    )
}

export default UsememoHook
