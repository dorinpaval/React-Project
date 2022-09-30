import React from 'react';
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'
import RoomsContainer from '../components/RoomsContainer'
//import RoomFilter from '../components/RoomFilter';

export default function AllRooms() {
  return (
    <>
      <Hero hero='roomsHero'>
        <Banner title='Our Rooms' subtitle='Come and enjoy your private time!'>
          <Link to='/' className='btn-primary'>
            Home page
          </Link>
          </Banner>
          </Hero>
          <RoomsContainer/>    
    </>
  )
}
