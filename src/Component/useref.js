import React, { useEffect, useRef, useState } from 'react'

const UserefHook = () => {
    const [data, setData] = useState("");
    // const [count, setCount] = useState(0);

    const count = useRef(0)
    useEffect(() => {
        // setCount(count + 1)
        count.current = count.current + 1
    })

    const elem = useRef("")
    const handleStyle = ()=>{
        elem.current.style.color = "#ff0000"
        // elem.current.style.display = "none" 
    }
    console.log(elem.current.value,"el,mmmmmmm")
    return (
        <>
            <div className='cntr'>
                <h1>Rendering Problem?</h1>
                <input type='text' value={data} onChange={(e)=> setData(e.target.value)}/>
                <h4>How Many Time Render the Code {count.current}</h4>
            </div>
            <div className='cntr'>
                <input type='text' value={data} onChange={(e)=> setData(e.target.value)} ref={elem}/>
                <button onClick={handleStyle}>Click</button>
            </div>
        </>
    )
}

export default UserefHook
