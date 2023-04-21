import CameraData  from '../DataFile/CameraData'
import Card from '../Card';
import Footer from '../Footer';

const Camera = () => {
  return (
    <><figure className="text-center mt-2 bg-light">
      <blockquote className="blockquote">
        <p> "It's not enough to just own a camera. Everyone owns a camera. To be a photographer, you must understand, appreciate, and harness the power you hold!"</p>
      </blockquote>
      <figcaption className="blockquote-footer">
      Mark Denman
      </figcaption>
    </figure>

      <div className="row d-flex justify-content-around">
        {CameraData.map((val, index) => {
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
      <Footer /></>

  )
}

export default Camera