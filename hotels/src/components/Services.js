import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

class Services extends Component {
    state={
        services: [
            {
                icon:<FaCocktail/>,
                title:"FREE cocktails",
                text:"A delicious and full bodied cocktail bursting with unique flavors, Bloody Marys have a huge fan base. Vodka lovers are sure to be happy when they see it on your menu."
            },
            {
                icon:<FaBeer/>,
                title:"FREE beers",
                text:"There are so many impressive beers out there, and it’s fun to navigate the different styles and regional strengths"
            },
            {
                icon:<FaShuttleVan/>,
                title:"FREE shuttle",
                text:"Eum quibusdam similique quo enim nobis id eius molestiae nam exercitationem asperiores sed earum similique"
            }
            ,{
                icon:<FaHiking/>,
                title:"Long trails",
                text:"Hikers can walk as far as they want, there is no physical strain unless they walk among hills or mountains."
            }
        ]
    }

    newServices=this.state.services.map((elem, index) =>{
        return <article key={index} className='service'>
            <span> {elem.icon}</span>
            <h5> {elem.title}</h5>
            <p> {elem.text}</p>
             </article>
    } )


    render() {
        return (
            <section className='services'>
                <Title title='services'></Title>
                <div className='services-center'> {this.newServices}</div>
            </section>
        );
    }
}

export default Services;