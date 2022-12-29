import React,{useState} from 'react'
import './Box.css'
import Form from 'react-bootstrap/Form';
// import { Link } from "react-router-dom"
import Area1 from './area/Area1';

function Box(props) {

const [ procede , setProcede] = useState(false)
const [page ,  setPage] = useState(false)
const [dropvalue ,  setDropValue] = useState(false)
const [dataresp , setDataresp] = useState('')


const procedebtn = ()=>{
  setPage(!page)
  setDataresp(props.response)
}

const openarea = (e) =>{
  setProcede(true)
  let val = e.target.value
  setDropValue(val)
 console.log(val);
} 



  return (
    <>
{page ? <Area1 dropvalue={dropvalue} dataresp={dataresp} uid={props.response.message.uid} procedebtn={procedebtn}/>  :
  <div className='menubar'>
  <div  className=" ">
  <Form.Select onChange={openarea}  aria-label="Default select example ">
    
    <option > Select Area </option>
    {props.response.message.userareamappings.map((data , index)=>{
      
    
      return(
        <option key={index} value={data.areaid} >{(data.category!=null)?data.category.categoryname_en:data.adon.title_en}</option>
      )
    })}
        {/* <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option> */}
      </Form.Select>
  
  
      <button disabled={procede===false} className='btn btn-secondary procedebtn' onClick={procedebtn} > 
       procede  </button>
  </div>
  </div>  }

    </>
  )
}

export default Box
