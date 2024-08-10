import React, { useEffect, useState } from 'react'

const UseeffectHook = () => {
const [count, setCount] = useState(0)
const [name, setName] = useState(100)

useEffect(()=>{
    console.log("Print USeEffect")
},[name])


  return (
   <>
   <h1>Number Count is {count}</h1>
   <h1>Number Name is {name}</h1>
   <button onClick={()=> setCount(count + 1)}>Click Count</button>
   <button onClick={()=> setName(name + 1)}>Click Name</button>
   </>
  )
}

export default UseeffectHook
