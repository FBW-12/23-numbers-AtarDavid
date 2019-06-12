import React, { Component } from 'react'
import { connect } from 'react-redux'

class Form extends Component {
    render() {
        const { onRequestNumber } = this.props;
        return (
            <div>
                <label htmlFor="number">Insert a number</label>
                <br />
                <input name="number" type="number" defaultValue="23" />
                <br />
                <button onClick={onRequestNumber}>Show info about this number</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestNumber: () => dispatch({ type: "REQUEST" })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);