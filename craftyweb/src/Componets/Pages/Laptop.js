import React from 'react'
import LaptopData from '../DataFile/LaptopData';
import Card from '../Card';
import Footer from '../Footer';


const Laptop = () => {
  return (
    <>
      <figure className="text-center mt-2 bg-light">
        <blockquote className="blockquote">
          <p>“To join in the industrial revolution, you needed to open a factory; in the Internet revolution, you need to open a laptop.
            ”</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Alexis Ohanian
        </figcaption>
      </figure>

      <div className="row d-flex justify-content-around">
        {LaptopData.map((val, index) => {
          return (
            <Card
              key={val.id}
              productname={val.productname}
              price={val.price}
              img={val.img}
            />
          )
        })}
      </div>
      <Footer />
    </>
  )
}
export default Laptop;
