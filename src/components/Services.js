import React from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

class Services extends React.Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'Free Cocktails',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
            },
            {
                icon: <FaHiking />,
                title: 'Endless Hiking',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free Shuttle',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
            },
            {
                icon: <FaBeer />,
                title: 'Strongest Beers',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
            },
        ]
    }
    render() {
        return (
            <section className='services'>
            <Title title='services' />
            <div className='services-center'>
                {this.state.services.map((item, index) => {
                    return (
                        <article key={index}>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    )
                })}
            </div>
            </section>
            
        )
    }
}

export default Services;