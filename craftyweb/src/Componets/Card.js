import React from 'react'


function BasicCard(props) {
  return (
    <>
      <div className="card mb-3 shadow-lg p-3 mb-5 bg-body rounded text-center" style={{ width: '15rem' }}>
        <img src={props.img} className="img-thumbnail" alt='img' />
        <div className="card-body">
          <h5 className="card-title">{props.productname}</h5>
     <p className="fw-bold">{props.price}<span>&#8377;</span> </p>
          <a href="#" className="btn btn-primary mt-auto">BUY</a>
        </div>
      </div>
    </>
  )
}

export default BasicCard; 
