import React from 'react';

class Mounting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: "Ashok"
        }
        console.log("I am from constuctor" + `${this.state.Name}`);
    }

    static getDerivedStateFromProps(props, state) {
        console.log(state);
        console.log("I am from getDerivedStateFromProps");
        return {
            Name:"pintu"
        }
    }

    componentDidMount() {
        console.log("I am from componentDidMount");
    }

    render() {
        console.log("I am form render" + `${this.state.Name}`);
        return <h1> Hello world {this.state.Name}</h1>
    }
}

export default Mounting;