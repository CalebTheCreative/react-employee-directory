// ==================================
// Dependencies
// ==================================

import React from "react";

// ==================================
// Search Container Component
// ==================================
function SearchContainer(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="searchRes">Employee Name:<span> </span></label>
                <input
                    value={props.searchRes}
                    className="form-control"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="Enter Name"
                    name="searchRes"
                    id="searchRes"
                />
                <button className="btn" onClick={props.handleFormSubmit}>Submit</button>
            </div>
        </form>
    )
}

export default SearchContainer;