import React from 'react';

const Card = ({ id, name, email }) => {
    // append &set=set4 to get cats
    return (
        <div className="bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?size=200x200`} alt='Robot friend' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;