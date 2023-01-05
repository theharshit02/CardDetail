import React, { useState } from 'react'
import styles from './form.module.css'
import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Form = (props) => {

    const [holderName, setholderName] = useState("")
    const [cardNumber, setcardNumber] = useState("")
    const [month, setmonth] = useState("")
    const [year, setyear] = useState("")
    const [cvc, setcvc] =useState("")
    const [err, seterr] = useState(false)



    const handleSubmit = (e) => {
        e.preventDefault()
        if(holderName.length === 0 || cardNumber.length === 0 || month.length === 0 || year.length===0 || cvc.length === 0){
            seterr(true)
            notify()
        }
        else {
            seterr(false)
            props.onName(holderName)
            props.onNumber(cardNumber)
            props.onMonth(month)
            props.onYear(year)
            props.onCvc(cvc)
            notify()
        }

    }

    
    const notify = () => {
        if (!err){
            toast.success('Success', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
        }
        else if(err){
            toast.error('Failed', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            })
        }
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>CARDHOLDER NAME</p>
        <input onChange={(e)=>setholderName(e.target.value)} placeholder='e.g. Jane Appleseed' className={styles.inputBoxBig} type="text" /><br/>
        {err&&holderName.length<=0 ? <label>Enter Card Holder Name</label>:""}
        
        <p>CARD NUMBER</p>
        <input onChange={(e)=>setcardNumber(e.target.value)} placeholder='e.g. 1234 5678 9123 0000' className={styles.inputBoxBig} type="number" /><br/>
        {err&&cardNumber.length<=0 ? <label>Enter Card Number</label>:""}

        <div className={styles.information}>

            <div>
                <p>EXP DATE (MM/YY)</p>
                <div className={styles.information}>
                    <div>
                        <div>
                            <input onChange={(e)=>setmonth(e.target.value)} placeholder='MM' className={styles.inputBoxSmall} type="number" />
                        </div>
                        {err&&month.length<=0 ? <label>Enter Month</label>:""}
                    </div>

                    <div>
                        <div>
                            <input onChange={(e)=>setyear(e.target.value)} placeholder='YY' className={styles.inputBoxSmall} type="number" /><br/>
                        </div>
                        {err&&year.length<=0 ? <label>Enter Year</label>:""}
                    </div>
                </div> 
            </div>
            
            
            
            <div className={styles.cvc}>
                <div>
                    <p>CVC</p>
                    <input onChange={(e)=>setcvc(e.target.value)} placeholder='e.g. 123' className={styles.inputBoxSmall} type="number" /><br/>
                </div>
                {err&&cvc.length<=0 ? <label>Enter CVC</label>:""}
            </div>
        </div>
        
       
        
        <br/><br/>
        <button className={styles.button} type="submit">Confirm</button>
        <ToastContainer/>
      </form>
    </div>
  )
}

export default Form
