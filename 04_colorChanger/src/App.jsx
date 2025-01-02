import { useState } from "react"


function App() {
  const[color , setColor] = useState("orange")


  
  return (
    
    <div>
      <div className="w-full h-screen" style={{backgroundColor : color}}>       
        <div className="fixed flex justify-center bottom-12 inset-x-0 px-2" >
          <div className="fixed flex justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() =>  setColor("red")} className="outline-none px-4 rounded-lg "
            style={{backgroundColor : "red" }}> Red</button>
             <button onClick={() => setColor("blue")} className="outline-none px-4 rounded-lg "
            style={{backgroundColor : "blue" }}> Blue</button>
             <button onClick={() => setColor("green")} className="outline-none px-4 rounded-lg "
            style={{backgroundColor : "green" }}> Green</button>
             <button onClick={() => setColor("yellow")} className="outline-none px-4 rounded-lg "
            style={{backgroundColor : "yellow" }}> Yellow</button>
             <button onClick={() => setColor("pink")} className="outline-none px-4 rounded-lg "
            style={{backgroundColor : "Pink" }}>Pink</button>
          </div>
        </div>
      </div>
    </div>
    )
}

export default App
