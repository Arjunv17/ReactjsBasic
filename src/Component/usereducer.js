import React, { useReducer, useState } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "Inc":
            return { count: state.count + 1 };
        case "Dec":
            return { count: state.count === 0 ? 0 : state.count - 1 };

        default:
            return state;
    }
}


const UsereducerHook = () => {
    // const [count, setCount] = useState(0)

    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: "Inc" })}>Inc</button>
            <button onClick={() => dispatch({ type: "Dec" })}>Dec</button>
        </>
    )
}

export default UsereducerHook
