import React, { Component } from 'react';
import { RoomContext } from '../context/roomContext'
import Loading from './Loading';
import Room from './Room'
import Title from './Title'

class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        const { loading, featuredRooms } = this.context;
        const newFeaturedRooms = featuredRooms.map((item) => {
            return <Room key={item.id} room={item} />
        })
        return (
            <section className='featured-rooms'>
                <Title title='Featured Rooms' />
                <div className='featured-rooms-center'>
                    {loading ? <Loading /> : newFeaturedRooms}
                </div>
            </section>
        );
    }
}

export default FeaturedRooms;