import { useState } from 'react'
import './App.css'
import ContactList from "./components/ContactList"
import ContactRow from "./components/ContactRow"

// to view: http://localhost:5173/

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ContactList />
    </>
  )
}

export default App
