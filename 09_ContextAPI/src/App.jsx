import { useState} from "react";
import { MyContext } from "./MyContext";
import MyComponent from "./MyComponent";

import './App.css'

function App() {
  const [text, setText] = useState("who is that");

  return (
    <>
     <MyContext.Provider value={{ text, setText }}>
        <MyComponent />
      </MyContext.Provider>
    
      
    </>
  )
}

export default App
