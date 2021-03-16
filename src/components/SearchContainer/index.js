import React from "react";

function SearchContainer(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="employeename">Employee Name: </label>
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="Search Employee"
                />
            </div>
        </form>
    )
}

export default SearchContainer;