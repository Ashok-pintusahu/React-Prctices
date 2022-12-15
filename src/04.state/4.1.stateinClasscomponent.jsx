import React from 'react';

class StateClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0,
            profile: {
                name: "Ashok",
                age: 50,
                job: "UI devloper",
                ismarried: false
            }
        }
    }
    render() {
        const { counter, profile: { name, age, job, ismarried } } = this.state
        return (
            <>
                <p>{counter}</p>
                {this.props.children}
                <h5>I am {name} and i am {age} years old, currently i am a {job},{ismarried ? "marrid" : "unmarried"} guy </h5>
                <h1>StateClass Component</h1>
                <button onClick={() => this.setState({
                    ...this.state,
                    counter: counter + 1,
                })}>Click here</button>
            </>
        )

    }
}

StateClass.defaultProps={
    institute:"Ksoft solution"
}

export default StateClass