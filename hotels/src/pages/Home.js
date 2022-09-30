import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import {Link, Outlet} from "react-router-dom"


export default function Home() {
    return (
        <>
            <Hero>
                <Banner title='luxurious rooms' subtitle='Deluxe rooms starting from $299'>
                    <Link to='/rooms' className='btn-primary'>Our rooms</Link>
                </Banner>
            </Hero>
            <Outlet/>
            {/* <Services/>
            <FeaturedRooms/> */}
        </>
    )
}
