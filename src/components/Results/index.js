import React, { Component } from "react";
import API from "../../utils/API";
import Card from "../Card";
import SearchContainer from "../SearchContainer";

class Results extends Component {
    state = {
        result: [],
        searchRes: "",
        abc: true,
        ascending: true,
        empSorted: []
    };

    componentDidMount() {
        if (this.state.empSorted.length < 1) {
            this.setState({
                empSorted: this.state.result
            })
        }
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
        // eslint-disable-next-line array-callback-return
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

    handleSortLast = () => {
        let sortedResults = [];
        
        if (this.state.abc){
            sortedResults = this.state.result.sort((a,b) => {
                let lowerA = a.lastName.toLowerCase();
                let lowerB = b.lastName.toLowerCase();
                if (lowerA < lowerB){
                    return -1
                }
                if (lowerA > lowerB){
                    return 1
                }
                return 0
            })
        } else {
            sortedResults = this.state.result.sort((a, b) => {
                let lowerA = a.lastName.toLowerCase();
                let lowerB = b.lastName.toLowerCase();
                if (lowerA > lowerB)
                    return -1
                if (lowerA < lowerB)
                    return 1
                return 0
            })
        }
        this.setState({
            abc: !this.state.abc,
            empSorted: sortedResults
        })
    }

    render() {
        return (
            <div className="container" >

                <div className="row justify-content-center">
                    <SearchContainer
                        value={this.state.searchRes}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                </div>
                {/* <div className="row justify-content-center">
                    <button className="btn sortLast" onClick={this.handleSortLast}>Sort by Last Name</button>
                </div> */}
                <div className="row justify-content-center">

                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Photo</th>
                                <th scope="col">First Name</th>
                                <th scope="col" onClick={this.handleSortLast}>Last Name</th>
                                <th scope="col">Country</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                            </tr>
                        </thead>
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

                    </table>
                </div>
            </div >
        )
    }
}

export default Results;