import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import defaultImage from '../images/room-1.jpeg'
import PropTypes from 'prop-types';
import { RoomContext } from '../context/roomContext';

export default function Room({room}) {
  const context= useContext(RoomContext);
  const {deleteRoom} = context;
  console.log("the context in delete is", context)

  function reserveRoom(){
    alert("Thank you for choosing PavStel Hotel!")
  }

  const {name,slug, images,price} = room;
  const deleteBtn=<button className='deleteBtn' onClick={()=> deleteRoom(name)}>Delete room</button>;
  const reserveBtn=<button className='reserveBtn' onClick={reserveRoom}><strong>Reserve</strong></button>;
  const isAdmin=localStorage.getItem("isAdmin");
  return (
    <>
    <article className='room'>
        <div className='img-container'>
          <img src={images[0]||defaultImage} alt="room"/>
          <div className='price-top'>
            <h2>${price}</h2>
            <p>per night</p>
          </div>
          <Link to={`/rooms/${slug}`} className='btn-primary room-link'> Details </Link>
        </div>
        <p className='room-info'>{name}</p>
        {isAdmin==="yes"?deleteBtn:reserveBtn}
    </article>
   
    </>
  )
}

//checking the types of component's prop
Room.propTypes= {
  room: PropTypes.shape({
    name:PropTypes.string.isRequired,
    slug:PropTypes.string.isRequired,
    images:PropTypes.arrayOf(PropTypes.string).isRequired,
    price:PropTypes.number.isRequired
  })
}