import React from 'react'
import './Box.css'
import { Link } from "react-router-dom"
function box() {
  return (
    <>
    <section className='section'>
    <div className="container">

      <div className="box">
        <Link to="/Area1">  <button type="button" className="btn btn-light  linkbtn">Area 1</button> </Link>
      </div>

      <div className="box">
      <Link to="/Area2"> <button type="button" className="btn btn-light  linkbtn">Area 2</button> </Link>
      </div>

      <div className="box">
      <Link to="/Area3"> <button type="button" className="btn btn-light  linkbtn">Area 3</button>  </Link>
      
      </div>
    </div>
      </section>
    </>
  )
}

export default box
