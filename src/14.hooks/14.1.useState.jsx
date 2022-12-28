import React,{useState} from 'react';

function UseState() {
  const [counter, setCounter] = useState(0);
  const [showText, setShowText] = useState(false);
  const handleClick=()=>{
      setCounter(counter + 1)
      setShowText(!showText)
  }
  return (
      <div>
          counter{counter}<br />
          {showText && <p>useState</p>}
          <button onClick={() =>handleClick()}>UseState</button>
      </div>
  );
}

export default UseState;
