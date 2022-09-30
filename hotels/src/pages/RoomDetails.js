import React, { useContext } from 'react';
//import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero';
import { Link, useParams } from 'react-router-dom';
import Banner from '../components/Banner';
import { RoomContext } from '../context/roomContext';


export default function RoomDetails() {
  const { slug } = useParams();
  const { getRoom } = useContext(RoomContext);
  function reserveRoom(){
    alert("Thank you for choosing PavStel Hotel!")
  }
  const myRoom = getRoom(slug);
  const reserveBtn=<button className='reserveBtn' onClick={reserveRoom}><strong>Reserve</strong></button>;
  console.log("this is my slug ", myRoom)
  const isAdmin=localStorage.getItem("isAdmin")

  if (!myRoom) {
    return (
      <div className="error">
        <h3> no such room could be found...</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }

  const { name, description, capacity, size, price, extras, breakfast, pets, images,youtube } = myRoom;
  const [mainImage, ...moreImages] = images;
  const srcImg=`https://www.youtube.com/embed/${youtube}`
  console.log(mainImage)
  return (
    <>
      <Hero hero='roomsHero' style={{ background: `url("${images}") center/cover no-repeat` }}>
        <Banner title={`${name} room`} subtitle='Prices from $199'>
          <Link to='/rooms' className='btn-primary'>
            Back to rooms
          </Link>
          {isAdmin? null: reserveBtn}
        </Banner>
      </Hero>
      <section className='single-room'>
        <div className='single-room-images'>
          {moreImages.map((item, index) => {
            return <img key={index} src={item} alt={item.name} />
          })}
        </div>
        <br />

        <div className="single-room-info">
          <div> <iframe width="760" height="430" src={srcImg}
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          </div>
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <div>
            <h6>extras </h6>
            <ul className="extras">
              {extras.map((item, index) => (
                <li key={index}>+ {item}</li>
              ))}
            </ul>
          </div>
          <article className="info">
            <h3>info</h3>
            <h6>price : ${price}</h6>
            <h6>size : {size} SQFT</h6>
            <h6>
              max capacity :
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
          
        </div>
        {/* <section className="room-extras"> */}
          
        </section>
      </>
      );

}
