import React, { useState } from 'react'

const UseStateHook = () => {
const [name , setName] = useState("Techfriend Solutions")
const hanndleChnage = (e)=>{
    setName(e.target.value)
}

  return (
    <>
        <h1>{name}</h1>

        <input type='text' value={name} onChange={hanndleChnage}/>
    </>
  )
}

export default UseStateHook
