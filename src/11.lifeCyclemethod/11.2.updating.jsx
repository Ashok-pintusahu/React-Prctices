import React, { Component,PureComponent } from 'react';

export default class Updating extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Name: "Ashok"
        }
        console.log(" from constructor");
    }

    static getDerivedStateFromProps(state, props) {
        console.log("from getDerivedStateFromProps");
        return(
            null
        )
    }

    shouldComponentUpdate(){
        console.log("from shouldComponetUpdate");
        return true
    } 

    getSnapshotBeforeUpdate(prevprop,prevstate){
        console.log("getSnapshotBeforeUpdate");
        console.log(prevprop,prevstate);
        return null
    }

    componentDidUpdate(prevprop,prevstate){
        console.log("componentDidUpdat");
        console.log(prevprop,prevstate);
        return null
    }
    
    render() {
        const { Name } = this.state
        console.log('from render');
        return (
            <div onClick={()=>this.setState({
                ...this.state,
                Name:"pintu"
            })}>
                Hello {Name}!
            </div>
        );
    }
}
