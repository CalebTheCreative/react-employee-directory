import React from "react";

function Card(props) {
    return (
        <tbody>
            <tr>
                <td><img src={props.picture} alt={props.firstName} /></td>
                <td>{props.firstName}</td>
                <td>{props.lastName}</td>
                <td>{props.country}</td>
                <td>{props.email}</td>
                <td>{props.phone}</td>
            </tr>
        </tbody>
    );
};

export default Card;