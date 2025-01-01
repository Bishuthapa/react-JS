import { useState } from 'react'
import './App.css'

function App() {
  

  let [count, setCounter] = useState(0);

let Increment = function() {
  //count = count + 1
  //setCounter(count); 
  setCounter(count + 1); 
}

let Decrement = function() {
  //count = count - 1
  //setCounter(count);
   setCounter(count - 1); 
  }

  return (
    <>
      <h3>Counter: {count} </h3>

      <button onClick={Increment}>Increment</button><br/><br/>
      <button onClick={Decrement}>Decrement</button>
   

      <h1>{count}</h1>
    </>
  )
}

export default App
