import React from 'react';
import Homecard from '../Homecard';
import Ourservies from "../Ourservies"
import Footer from '../Footer';
import HomeImg from '../HomeImg';




const Home = () => {
  return (

    <>
    
    
      <HomeImg/>
      <div className="container-fluid my-2">
     
        <div className="d-flex flex-wrap justify-content-around">

          <Homecard img="https://cdn.pixabay.com/photo/2015/11/05/22/31/sneakers-1024972_960_720.jpg"
            link="/Shoes"
            cardname="Shoes" />



          <Homecard img="https://cdn.pixabay.com/photo/2023/01/05/21/32/film-camera-7699766_960_720.jpg " link="/Camera" cardname="Camera" />


          <Homecard img="https://cdn.pixabay.com/photo/2021/06/03/09/00/watch-6306447_960_720.jpg" link="/Watches" cardname="Watches" />


          <Homecard img="https://images.unsplash.com/photo-1565630916779-e303be97b6f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" link="/Laptop" cardname="Laptop" />
        </div>

        <Ourservies />
        <Footer />
      </div>
    </>
  )
}

export default Home;
