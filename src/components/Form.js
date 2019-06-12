import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div>
                <label htmlFor="number">Insert a number</label>
                <br />
                <input name="number" type="number" defaultValue="23" />
                <br />
                <button onClick={() => { console.log("Do something") }}>Show info about this number</button>
            </div>
        )
    }
}
