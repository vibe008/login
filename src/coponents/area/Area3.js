import React from 'react'
import './Area1.css'
import { Link } from "react-router-dom"
function Area3() {
  return (
    <>
            <section>
        <nav className="navabar">
            <div className="area">
              <div className="preview">
                    <Link to="/Box">
                    <i class="fa-solid fa-circle-arrow-left"></i>   
                    </Link>
                </div>
              <h5>Area 3</h5>
            </div>
            <div className="logout">

                <div className="log">
                    <Link>
                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                    </Link>
                    <p>Logout</p>
                </div>


          

            </div>
        </nav>

        <div className="scan">
            {/* <div className="scaner">

            </div> */}
        <button type="button" class="btn btn-outline-secondary scanbtn">Scan Now</button>
        </div>
      </section>
    </>
  )
}

export default Area3
