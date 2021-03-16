import React from "react";

function Card(props) {
    return(
        <div>
            <img src={props.picture.thumbnail} alt="Employee"/>
            <p>{props.name}</p>
            <p>{props.country}</p>
            <p>{props.email}</p>
            <p>{props.phone}</p>
        </div>
    );
};

export default Card;