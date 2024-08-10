import React, { useState } from 'react'

const Test1 = () => {
    const [color, setColor] = useState("Yellow")
    return (
        <>
            <h1>This is {color} color!!</h1>
        </>
    )
}

export default Test1
