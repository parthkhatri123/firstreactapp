import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Form() {


    const [nameuser, setNameuser] = useState("")
    const [interest, setInterest] = useState("")
    const [tnc, setTnc] = useState(false)


    function getFormData(e) {
        e.preventDefault()
        console.log(nameuser, interest, tnc)
    }
    return (
        <div className="App">
            {/* Basic Form Element */}
            <h1>Handle Form in React</h1>
            <form onSubmit={getFormData}>
                <input type='text' placeholder='enter name' onChange={(e) => setNameuser(e.target.value)} /><br /><br />
                <select onChange={(e) => setInterest(e.target.value)}>
                    <option>Please Select</option>
                    <option>MacBook</option>
                    <option>Lenovo</option>
                </select><br /><br />
                <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} /><span>Accept Terms and Conditions</span><br /><br />
                <input type="submit" />
            </form>
        </div>
    );
}

export default Form;
