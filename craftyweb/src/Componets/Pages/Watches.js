import React from 'react'
import WatchesData from '../DataFile/WatchesData';
import Card from '../Card';
import Footer from '../Footer';


const Watches = () => {
  return (
    <>
      <figure className="text-center mt-2 bg-light">
        <blockquote className="blockquote">
          <p>“Everyone looks at your watch and it represents who you are, your values and your personal style.”</p>
        </blockquote>
        <figcaption className="blockquote-footer">
        Kobe Bryant
        </figcaption>
      </figure>

      <div className="row d-flex justify-content-around">
        {WatchesData.map((val, index) => {
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
export default Watches;
