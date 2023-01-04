import React, { useState } from 'react'
import './Area1.css'
// import Form from 'react-bootstrap/Form';
// import { Link } from "react-router-dom"
import Swal from 'sweetalert2'
import QrReader from 'react-qr-scanner'
import Login from '../Login'


function Area1(props) {
  const [camScanner, setCamScanner] = useState(false)
  const [logout, setLogout] = useState(false)
  

  const previewStyle = {
    height: 240,
    width: 320,
  }

  const [result, setResult] = useState({
    delay: 100,
    result: null,
  });

  const handleScan = (data) => {
    console.log('scanner');
    if (data) {
      setResult({
        result: data.text,
      });

      console.log(props.dataresp);
      let ticket = JSON.parse(data.text)
      console.log(ticket)
      const aid = props.dropvalue.slice(0, props.dropvalue.indexOf('&'))
      
      let scannerobj = {
        ticket: ticket,
        uid: props.uid,
        curr_areaid: aid
      }
  
      func(scannerobj)



    }
  };


  const func = async (data) => {
    let result = await fetch("http://192.168.1.5:4000/api/scanners/updatescanner", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    let resp = await result.json()

    if (resp.status === 200) {
      Swal.fire('OK', resp.message, 'success').then(r => {
        setCamScanner(false)
        props.setCount(props.count+1)
      })
    } else if (resp.status === 201) {
      Swal.fire('Expire', resp.message, 'error').then(r => {
        setCamScanner(false)
      })
    }
    else {
      Swal.fire('Invalid', resp.message, 'error').then(r => {
        setCamScanner(false)
      })
    }
    console.log(props.dropvalue);
  }


  const handleError = (error) => {
    console.log('in error', error);
  };

  const logoutuser = () => {
    setLogout(true)
  }

  // const handleareaChange = (e) =>{
  //   console.log(e.target.value);
  // }

  return (
    <>
      {logout ? <Login /> : <section>

        <nav className="areanav bg-dark">

          <div className="secondnav d-flex">

            <div className="switch">
              <div className="icon">
                <i onClick={props.procedebtn} className="fa-solid fa-circle-arrow-left"></i>
              </div>
              <p>SWITCH</p>
            </div>

            <div className="areaname">
              <h4>{props.dropvalue.slice(props.dropvalue.indexOf('&') + 1)}</h4>
              <div className="count">

              <p>Count ,  {props.count}</p>
              </div>
            </div>


            <div className="logout">
              <div onClick={logoutuser} className="icon">
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
              </div>
              <p>LOGOUT</p>
            </div>
          </div>
        </nav>

        {/* <nav className="areanav  bg-dark ">
          <div className='secondnav d-flex'>

            <div className="area">

              <div className="areaname">

                <h4>{props.dropvalue.slice(props.dropvalue.indexOf('&') + 1)}</h4>
              </div>

              <div className="switch">
                <div className="icon">
                  <i onClick={props.procedebtn} className="fa-solid fa-circle-arrow-left"></i>
                </div>
                <p>SWITCH</p>
              </div>
            </div>

            <div className="logout">
              <div onClick={logoutuser} className="icon">
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
              </div>
              <p>LOGOUT</p>
            </div>
          </div>
        </nav> */}

        <div className="scan">
          {!camScanner ? <button type="button" className="btn btn-outline-secondary scanbtn" onClick={() => setCamScanner(true)}>Scan Now</button> :
            <div className='d-flex flex-column '>
              <QrReader
                delay={result.delay}
                style={previewStyle}
                onError={handleError}
                onScan={handleScan}
                
              />
              <button onClick={() => setCamScanner(false)} className='mt-2 btn btn-dark'>Back</button>
            </div>

          }

          {/* <p>{result.result}</p> */}

        </div>

      </section>}

    </>
  )
}

export default Area1
