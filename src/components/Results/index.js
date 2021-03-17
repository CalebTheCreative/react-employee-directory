import React, { Component } from "react";
import API from "../../utils/API";
import Card from "../Card";

class Results extends Component {
    state = {
        result: [],
        searchRes: "",
        filteredRes: []
    };

    searchEmps = () => {
        API.getRandomEmployees()
            .then(res => {
                this.setState({
                    result: res.data.results.map((evt, i) => ({
                        picture: evt.picture.large,
                        firstName: evt.name.first,
                        lastName: evt.name.last,
                        country: evt.location.country,
                        email: evt.email,
                        phone: evt.phone,
                        key: i
                    }))
                })
            })
    };

    componentDidMount() {
        this.searchEmps();
    }

    render() {
        return (
            <div className="container">
                <div className="row">

                    <table>
                        <tbody>
                            <tr>
                                <th>Photo</th>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Country</td>
                                <td>Email</td>
                                <td>Phone</td>
                            </tr>

                            {[...this.state.result].map((i) =>
                                <Card
                                    picture={i.picture}
                                    firstName={i.firstName}
                                    lastName={i.lastName}
                                    country={i.country}
                                    email={i.email}
                                    phone={i.phone}
                                    key={i.key}
                                />
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Results;