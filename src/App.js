import './App.css';
import Form from "./components/form/form"
import Cardforward from './components/cardforward/cardforward';
import Cardbackward from './components/cardbackward/cardbackward'
import { useState } from 'react';

function App() {

  const [name, setname] = useState("xxxx")
  const [number, setnumber] = useState("xxxx xxxx xxxx xxxx")
  const [month, setmonth] = useState("xx")
  const [year, setyear] = useState("xx")
  const [cvc, setcvc] = useState("xxx")

  function handleName (e){
    setname(e)
  }

  function handleNumber(e){
    setnumber(e)
  }

  function handleMonth(e){
    setmonth(e)
  }

  function handleYear(e){
    setyear(e)
  }

  function handleCvc(e){
    setcvc(e)
  }

  return (
    <div>
      <div className="App">
        <div className='leftBar'></div>
        <div className='form'>
          <Form onName={handleName} onNumber={handleNumber} onMonth={handleMonth} onYear={handleYear} onCvc={handleCvc}/>
        </div>
      </div>
      <div className='cardForward'>
        <Cardforward name={name} number={number} month={month} year={year} />
      </div>
      <div className='cardBackward'>
        <Cardbackward cvc={cvc} />
      </div>
    </div>
    
  );
}

export default App;
