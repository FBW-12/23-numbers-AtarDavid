import React, { Component, useRef } from 'react'
import { connect } from 'react-redux'

function Form(props) {

    const numberInput = useRef(null)

    const { fetching, onRequestNumber } = props;
    return (
        <div>
            <label htmlFor="number">Insert a number</label>
            <br />
            <input name="number" type="number" defaultValue="23" ref={numberInput} />
            <br />
            {fetching ? (
                <button disabled>Looking for fun facts...</button>
            ) : (
                    <button onClick={() => onRequestNumber(numberInput.current.value)}>Show info about this number</button>
                )}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        fetching: state.fetching
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestNumber: (inputValue) => dispatch({ type: "REQUEST", number: inputValue })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);