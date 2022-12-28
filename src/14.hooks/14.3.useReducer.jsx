import React, { useReducer } from 'react';
const initialState = {
    counter: 0, showText: false
}
const reducer = (state, action) => {

    if (action.type === "incriment") {
        return {
            ...state,
            counter: state.counter + 1,
            // showText: state.showText
        }
    } 
    else if (action.type === "toggleText") {
        return {
            ...state,
            // counter: state.counter + 1,
            showText: !state.showText
        }
    } 
    else {
        return state
    }
    // switch (action.type) {
    //     case "incriment":
    //         return {...state,
    //             counter: state.counter + 1,
    //             // showText: state.showText
    //         }
    //     case "toggleText":
    //         return {...state,
    //             // counter: state.counter,
    //             showText: !state.showText
    //         }
    //     default:
    //         return state;
    // }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleClick = () => {

        dispatch({ type: "incriment" })
        dispatch({ type: "toggleText" })
    }
    return (
        <div>
            <hr />
            counter{state.counter}<br />
            {state.showText && <p>useReducer</p>}
            <button onClick={() => handleClick()}>useReducer</button>
        </div>
    );
}

export default UseReducer;
