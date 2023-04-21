import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="mt-2 bg-light border border-dark p-2">

                <ul className="nav justify-content-center">
                    <li className="nav-item">
                    <p>Copyright ©2023 <mark>ECOM</mark> Inc.</p>
                    </li>
                </ul>
                <div className="d-flex justify-content-center">
                    <p className="border border-top-0 border-start-0 border-bottom-0 border border-3 border-dark px-2 border-start"><ins>Legel stuff</ins></p>
                    <p className="border border-top-0 border-start-0 border-bottom-0 border border-3 border-dark px-2 border-start"><ins>Privacy policy</ins></p>
                    <p className="border border-top-0 border-start-0 border-bottom-0 border border-3 border-dark px-2 border-start"><ins>Security</ins></p>
                    

                </div>
            </div>
        </>
    )
}

export default Footer
