import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Main from './pages/main.jsx'
import Notfoundpages from './pages/Notfoundpages.jsx'
import {Routes, Route, Link} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
    <Routes> 
      <Route path='/'element={<Main/>}/>
      <Route path='*'element={<Notfoundpages/>}/>
    </Routes>
    </div>
  )
}
export default App
