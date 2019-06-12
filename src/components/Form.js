import React, { Component, useRef } from 'react'
import { connect } from 'react-redux'

function Form(props) {

    const numberInput = useRef(null)

    const { onRequestNumber } = props;
    return (
        <div>
            <label htmlFor="number">Insert a number</label>
            <br />
            <input name="number" type="number" defaultValue="23" ref={numberInput} />
            <br />
            <button onClick={() => onRequestNumber(numberInput.current.value)}>Show info about this number</button>
        </div>
    )
}


const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestNumber: (inputValue) => dispatch({ type: "REQUEST", number: inputValue })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);