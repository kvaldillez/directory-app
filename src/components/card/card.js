import React from 'react';

import './card.css';

const Card = (props) => {
    const { id, name, email } = props.user;

    return (
        <div className='card-container'>
            <img alt='user' src={`https://robohash.org/${id}?set=set3&size=180x180`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

export default Card;