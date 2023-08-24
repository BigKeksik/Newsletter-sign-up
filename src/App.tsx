import { useState } from 'react';
import './App.css';
import Home from './pages/Home/Home'
import Result from './pages/Result/Result'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [email, setEmail] = useState('')
  const onClick = (text: string) => {
    setEmail(text)
  }

  return(
    <Routes>
      <Route path='/' element={ <Home onClickSubmite={onClick}/>} />
      <Route path='/result' element={ <Result email={email} />} />
    </Routes>
  )
}

export default App;
