import React from "react";

function Searchform(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Type an employee full name to begin"
          id="search"
        />
        <br />
        
      </div>
    </form>
  );
  
}

export default Searchform;
