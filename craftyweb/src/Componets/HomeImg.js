import React from 'react'
import { Link } from 'react-router-dom';




const HomeImg = () => {
  return (

    <>
      <div className="p-5 d-flex justify-content-start align-items-center bg-image " style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1527445741084-0d3c140baf80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1653&q=80")`,
        backgroundRepeat: "no-repeat",
        height: "25rem",
        backgroundSize: 'cover'
      }}>
        <div className="mask">
          <div className="d-flex justify-content-start align-items-center  h-100">
            <div className="text-white">
              <h1 className="mb-3 bg-light text-dark">Hello <span style={{textTransform: "uppercase"}}> ,</span></h1>

              <h1 className="mb-3 bg-light text-dark">Welcome to Crafty Commerce</h1>
              <h4 className="mb-3 bg-light text-dark"> “Always deliver more than expected.”</h4>
              <Link className="btn btn-outline-light btn-lg bg-primary" to='/Shoes'>Go to shopping</Link>
            </div>
          </div>
        </div>
      </div>


    </>


  )
}

export default HomeImg; 
