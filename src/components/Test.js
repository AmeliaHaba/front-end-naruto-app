import React, { Component } from "react";

class Length extends Component {
    constructor() {
        super()
        this.state = {
            phrase: ""
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        })
    }

    render() {
        return (
        <>
            <input
                type="text"
                name="phrase"
                placeholder="Put phrase here"
                maxLength = "10"
                value={this.state.phrase}
                onChange={this.onChangeHandler}
            />
            <p>{this.state.phrase.length}</p>
        </>
        )
    }
}



export default Length;