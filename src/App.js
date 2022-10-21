import React, { useState, useEffect,useRef , createContext } from 'react';
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
import Larray from './Larray';
import Lnestedlist from './Lnestedlist';
import Reusecomponents from './Reusecomponents'; 
import Reactfragment from './Reactfragment';
import Statelifting from './Statelifting';
import Purecomponents from './Purecomponent';
import Lusememo from './Lusememo';
import LRef from './LRef';
import Luseref from './Luseref';
import Lcontrolled from './Lcontrolled';
import Luncontrolled from './Luncontrolled';
import Hoc from './Hoc';
import Lroute from './Lroute';
import Dynamicroute from './Dynamicroute';
import Apifetch from './Apifetch';
import Previousstate from './Previousstate';
import { Commoncontext } from './components/Commoncontext';
import Practice from './Practice';
import Lcontext from './Lcontext';
import Lcontext3 from './Lcontext3';

export const GlobalInfo = createContext();

function App() {

  const [data, setData] = useState(0)
  const [name, setName] = useState('Parth')
  const [inputName, setInputName] = useState(null)
  const [print, setPrint] = useState(false)
  const [status, setStatus] = useState(true)
  const [show, setShow] = useState(true)
  const [color,setColoe] = useState('green')
  const [day,setDay] = useState('Monday')
  const inputFref=useRef(null)
  
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

  function parentCall(a)
  {
    alert('Name is :' + a.name + ' , Email is :' + a.email);
  }

    function forwardred()
    {
        inputFref.current.value = '5000'
    }


    function getDay(item)
    {
      console.log( item)
      setDay(item)
    }

  return (
    <GlobalInfo.Provider value={{'Color' : color,getDay:getDay}}>
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
      <Form />
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
      {/* <h1>Bootstrap table with list in react</h1>
      <Larray /> */}
      {/*Handle array in React */}

      {/*Nested array with nested list */}
      {/* <Lnestedlist /> */}
      {/*Nested array with nested list */}

      {/* Reuse components */}
      {/* <Reusecomponents /> */}
      {/* Reuse components */}

      {/* React Fragment */}
      {/* <Reactfragment /> */}
      {/* React Fragment */}

      {/* State LIfting Up */}
      {/* <Statelifting data={parentCall} /> */}
      {/* State LIfting Up */}

      {/* Pure Component */}
      {/* <Purecomponents count={data} />
      <button onClick={()=>setData(data+1)}>Update Count</button> */}
      {/* Pure Component */}

      {/* useMemo Hooks */}
      {/* <Lusememo /> */}
      {/* useMemo Hooks */}

      {/* Ref in React Js */}
      {/* <LRef /> */}
      {/* Ref in React Js */}

      {/*Use Ref in Functional component */}
      {/* <Luseref ref={inputFref} /><br ></br><br></br>
      <button onClick={forwardred}>Update DOM using Forward Ref</button> */}
      {/*Use Ref in Functional component */}

      {/* Controlled Component */}
      {/* <Lcontrolled></Lcontrolled> */}
      {/* Controlled Componenet */}

      {/* Uncontrolled Componenet */}
      {/* <Luncontrolled></Luncontrolled> */}
      {/* Uncontrolled Componenet */}

      {/* HOC Component */}
      {/* <Hoc></Hoc> */}
      {/* HOC Component */}

      {/* Routing in React */}
      {/* <Lroute /> */}
      {/* Routing in React */}

      {/* Dynamic Routing in React */}
      {/* <Dynamicroute /> */}
      {/* Dynamic Routing in React */}

      {/* API Call */}
      {/* <Apifetch /> */}
      {/* API Call */}

      {/* Previous State */}
      {/* <Previousstate /> */}
      {/* Previous State */}

      {/* Context API */}
      {/* <Commoncontext.Provider>
        <h1>Context API</h1>
      </Commoncontext.Provider> */}
      {/* Context API */}

      {/* <Practice /> */}

      {/* <h1>App Component Context API {day}</h1> */}
      {/* <Lcontext/>
      <Lcontext3 /> */}
    </div>
    </GlobalInfo.Provider>
  );
}

export default App;
