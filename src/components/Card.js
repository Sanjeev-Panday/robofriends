import React from 'react';
import './Card.css'
import 'tachyons';
const Card = (props)=>{
    const {name, email, id} = props;
    return (
        <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
            <img alt={`photo_${id}`} src={`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};
export default Card;