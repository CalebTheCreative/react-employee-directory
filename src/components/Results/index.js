import React, { Component } from "react";
import API from "../../utils/API";
import Card from "../Card";
import SearchContainer from "../SearchContainer";

class Results extends Component {
    state = {
        result: [],
        searchRes: ""
    };

    componentDidMount() {
        this.searchEmps();
    }

    searchEmps = () => {
        API.getRandomEmployees()
            .then(res => {
                console.log(res);
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

    handleFormSubmit = evt => {
        evt.preventDefault();
        const name = evt.target.name

        this.setState({ [name]: evt.target.value });

        this.filterEmps(this.state.searchRes);
    }

    handleInputChange = evt => {
        evt.preventDefault();
        const name = evt.target.name

        this.setState({ [name]: evt.target.value });
    }

    filterEmps = (id) => {
        const filteredEmps = this.state.result.filter(employee => {
            if (employee.lastName === id) {
                return employee.lastName;
            }
            else if (employee.firstName === id) {
                return employee.firstName;
            }
        });
            console.log("ID");
            console.log(id);
            console.log("---");
            this.setState({
                result: filteredEmps
            });
        }

    render() {
            return(
            <div className = "container" >
                <div className="row justify-content-center">
                    <SearchContainer
                        value={this.state.searchRes}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                </div>
                <div className="row justify-content-center">

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
            </div >
        )
    }
}

export default Results;