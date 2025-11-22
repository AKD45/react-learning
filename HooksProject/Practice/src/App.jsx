import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increase()
  {
    setCount(count+1);
  }
  function decrease()
  {
    if(count>0){
      setCount(count-1);
    }
    else{
      setCount(0)
      window.alert("min-limit is 0");
    }
  }

  return (
    <>
      <h1>Counter:{count}</h1>
      <button onClick={increase}>Increase</button><br />
      <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default App
