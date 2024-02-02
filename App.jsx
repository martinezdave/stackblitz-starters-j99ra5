import { useState } from 'react'
import Example from './components/Example'
import Example2 from './components/Example2'
import Example3 from './components/Example3'
import Example4 from './components/Example4'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Example />
    <Example2 />
    <Example3 />
    <Example4 />
    </>
  )
}

export default App
