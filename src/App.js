import Main from './components/Main';
import React, {useState} from 'react';
import './App.css'

function App() {
  const [zod, setZod] = useState("");
  const [day, setDay] = useState("");

  const handleZodiac = (e) => {
    let sz = e.target.innerText.toLowerCase()
    setZod(sz)
  }

  const handleDay = (e) => {
    let dt = e.target.innerText.toLowerCase()
    setDay(dt)
  }  

  return (
    <>
      <Main zodiac={zod} day={day} handleZodiac={handleZodiac} handleDay={handleDay} />
    </>
  );
}

export default App;
