import React from 'react'
import { Link } from 'react-router-dom'

const Homecard = (props) => {
    return (
        <>
            <div className="d-flex justify-content-center border border-dark my-2">
                <div className="card" style={{ width: '18rem' }}>
                    <img src={props.img} className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <Link to={props.link} className="btn btn-primary">{props.cardname}</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Homecard
