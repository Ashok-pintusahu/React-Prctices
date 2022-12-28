import React from 'react';

function UseEffect() {
    const [state,setState]=React.useState({
        name:"Sanjay"
    })
    React.useEffect(()=>{
        console.log("from useEffect mounting");
    },[state])
    console.log("before return");
  return (
    <div onClick={()=> setState({
        ...state,
        name:"sahu"
    })}>
        {console.log("insie return")}
      I am {state.name}
    </div>
  );
}

export default UseEffect;
