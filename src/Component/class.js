import React, { Component } from 'react'

export class Test extends Component {
    constructor() {
        super();
        this.state = { color: "Blue" }
    }

    render() {
        return (
            <>
                <h1>This is {this.state.color} color!!</h1>
            </>
        )
    }
}

export default Test
