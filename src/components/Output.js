import React, { Component } from 'react'
import { connect } from 'react-redux'

class Output extends Component {
    render() {
        const { fetching, output, error } = this.props
        return (
            <>
                <header className="header">
                    <h1 >&Pi;</h1>
                    <h2>Numbers</h2>
                </header>
                <main className="main">
                    <p>{output}</p>
                    {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
                </main>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.fetching,
        output: state.output,
        error: state.error
    };
};

export default connect(mapStateToProps)(Output);
