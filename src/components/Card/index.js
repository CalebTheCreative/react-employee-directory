import React from "react";

function Card(props) {
    return(
        <tr>
            <th><img src={props.picture} alt={props.firstName}/></th>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.country}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
        </tr>
    );
};

export default Card;