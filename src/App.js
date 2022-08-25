import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Users';
import Employee from './Employee';
import Jsx from './Jsx';
import Student from './Student';
import Member from './Member';
import Form from './Form';
import Profile from './Profile';
import Fnasprops from './Fnasprops';
import Componentdidmount from './Componentdidmount';
import Componentdidupdate from './Componentdidupdate';
import Componentwillunmount from './Componentwillunmout';
import Luseeffect from './Luseeffect';
import Style from './Style';
import { Button } from 'react-bootstrap'

function App() {

  const [data, setData] = useState(0)
  const [name, setName] = useState('Parth')
  const [inputName, setInputName] = useState(null)
  const [print, setPrint] = useState(false)
  const [status, setStatus] = useState(true)
  const [show, setShow] = useState(true)


  function updateData() {
    setData(data + 1)
  }

  function getData(val) {
    setInputName(val.target.value)
    setPrint(false)
  }

  function passData() {
    alert('Hello from app');
  }

  return (
    <div className="App">

      {/* State In React Functional component */}
      {/* 
          <h1>{data}</h1>
          <button onClick={updateData}>Click Me</button><br></br> */}

      {/* State In React Functional component */}
      {/* <Employee />  */}

      {/* Props in React Functional component */}
      {/* <h1>Props in Functional Component</h1>
      <Student name={name} email="parth@test.com" other={{ address: "Dholka", mobile: "000" }} />
      <button onClick={() => { setName('Shreya') }}>Update Name</button> */}

      {/* Props in React Class component */}
      {/* <Member name={name} email="parth@test.com" other={{ address: "Dholka", mobile: "000" }} />
      <button onClick={() => { setName('Shreya') }}>Update Name</button> */}
      {/* <Member name="Peter" email="peter@test.com" other={{ address: "Dholka", mobile: "011100" }} /> */}

      {/* Get Input Box Value */}
      {/* {
        print? <h1>{inputName}</h1> : null
      }
     
      <input type="text" onChange={getData} ></input>
      <button onClick={()=>{setPrint(true)}}>Print Data</button>
       */}

      {/* Hide / Show element and Toggle Element */}
      {/* {
          status ? <h1>Hello World!</h1> : null
        } */}

      {/* <button onClick={()=>setStatus(false)}>Hide</button>
        <button onClick={()=>setStatus(true)}>Show</button> 

        <button onClick={()=>setStatus(!status)}>Toggle</button>*/}
      {/* Hide / Show element and Toggle Element */}

      {/* Rendering Form */}
      {/* <Form /> */}
      {/* Rendering Form */}

      {/* Conditional Rendering and Login Logout */}
      {/* <Profile /> */}
      {/* Conditional Rendering */}

      {/* Pass functions as props */}
      {/* <Fnasprops data={passData} /> */}
      {/* Pass functions as props */}

      {/* Componentdidmount New */}
      {/* <Componentdidmount /> */}
      {/* Componentdidmount New */}

      {/* Component Did Update */}
      {/* <Componentdidupdate /> */}
      {/* Component Did Update */}

      {/* Component Will unmount */}
      {/* {
          show ? <Componentwillunmount /> : <h1>Child Component Removed</h1>
        }
        <button onClick={()=>setShow(!show)}>Toggle Component Remove</button> */}
      {/* Component Will unmount */}

      {/* UseEffect1 Hooks */}
      {/* <Luseeffect name={data}></Luseeffect>
      <button onClick={()=>setData(data+1)} >Update Props</button> */}
      {/* UseEffect1 Hooks */}

      {/* Styles in React Js */}
      {/* <Style />
      <Button onClick={() => alert('Button CLicked')}>Test Button</Button>{' '}
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button> */}
      {/* Styles in React Js */}

      {/*Handle array in React */}

      {/*Handle array in React */}


    </div>
  );
}

export default App;
