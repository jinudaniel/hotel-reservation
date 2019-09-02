import React from 'react';

const Banner = ({title, subtitle, children}) => {
    return (
        <div className='banner'>
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}

export default Banner;