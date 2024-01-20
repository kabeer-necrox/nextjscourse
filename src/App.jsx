import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

const dec=()=>{
  setCount(count -1)

}

const inc=()=>{
  
  setCount(count +1)
  
}
  return (
    <>
  <h1>this is the counter app</h1>

  <h1> {count}</h1>

  <button onClick={inc}>increment</button>
  <button onClick={dec}>decrement</button>
     
    </>
  )
}

export default App
