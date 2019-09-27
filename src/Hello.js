import React from 'react';
import './Hello.css';

const Hello = (props) => {
    return(
        <div className="f1 tc">
            <h1>{props.greeting}</h1>
            <p>Welcome to React</p>
        </div>
    );
}

export default Hello;