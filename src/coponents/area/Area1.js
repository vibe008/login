import React, { useState } from 'react'
import './Area1.css'
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'
import QrReader from 'react-qr-scanner'


function Area1(props) {
  const [camScanner , setCamScanner]=useState(false)

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
    console.log(props.dropvalue);
    console.log(props.dataresp);
    let ticket = JSON.parse(data.text)
    console.log(ticket)
    let scannerobj = {
      ticket: ticket,
      uid: props.uid,
      curr_areaid: props.dropvalue
    }
  func(scannerobj)

    

    }
  };


const func = async (data)=>{
  let result =  await fetch("http://192.168.1.5:4000/api/scanners/updatescanner" , {
    method:'post',
    headers:{
   'Content-Type':'application/json',
    },
    body:JSON.stringify(data)
   })
   let resp = await result.json()
  
   if(resp.status===200){
    Swal.fire('OK',resp.message,'success').then(r=>{
      setCamScanner(false)
    })
   }else if(resp.status===201){
    Swal.fire('Expire',resp.message,'error').then(r=>{
      setCamScanner(false)
    })
   }
   else{
    Swal.fire('Invalid',resp.message,'error').then(r=>{
      setCamScanner(false)
    })
   }
}


  const handleError = (error) => {
    console.log('in error', error);
  };


// const handleareaChange = (e) =>{
//   console.log(e.target.value);
// }

  return (
    <>
      <section>
        <nav className="navabar">
          <div className="area">
            {/* <div className="preview">
                    <Link to="/">
                    <i className="fa-solid fa-circle-arrow-left"></i>   
                    </Link>
                </div> */}
            <h5>{props.dropvalue} </h5>
          </div>
          <div className="logout">

            {/* <Form.Select onChange={handleareaChange} aria-label="Default select example ">
              <option > Select Area </option>
              {props.dataresp.message.userareamappings.map((data, index) => {
                return (
                  <option key={index} value={data.areaid} >{(data.category != null) ? data.category.categoryname_en : data.adon.title_en}</option>
                 
                )
              })}

            </Form.Select> */}

                    <div className="d-flex flex-column align-items-center">
                    <i  onClick={props.procedebtn} className="fa-solid fa-circle-arrow-left"></i> 
                    <p className='mt-2'>Switch</p>  
                </div>
            <div className="d-flex flex-column align-items-center">
              <Link to='/'>
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
              </Link>
              <p>Logout</p>
            </div>




          </div>
        </nav>

        <div className="scan">
          {!camScanner?<button type="button" className="btn btn-outline-secondary scanbtn" onClick={()=>setCamScanner(true)}>Scan Now</button>:
          <div className='d-flex flex-column '>
              <QrReader
          delay={result.delay}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
        />
        <button onClick={()=>setCamScanner(false)} className='mt-2 btn btn-dark'>Back</button>
          </div>
          
          }
          
          {/* <p>{result.result}</p> */}
          
        </div>

      </section>
    </>
  )
}

export default Area1
