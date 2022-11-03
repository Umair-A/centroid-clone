import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Form() {

  const[ name, setName] = useState("");
  const[ password, setPassword] = useState("");

  const handleSubmit = (event)=>{
    event.preventDefault();
  }

    return(
        <div className='container01'>
        <form onSubmit={handleSubmit} >
          <div className="form-group">
            <label for="userName">UserName:</label>
            <input
              type="text" 
              className="form-control" 
              id="name" 
              placeholder="Enter UserName" 
              name="name" 
              value={name}
              onChange={(e)=> setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input 
              type="password" 
              className="form-control" 
              id="pwd"
              placeholder="Enter password" 
              name="pswd" 
              value={password}
              onChange={(e) =>setPassword(e.target.value)}
             />
          </div>
          <Link to="/login">
            <button 
              type="submit" 
              className="btn btn-primary">Login
            </button>
          </Link> 
          
        </form>
      </div>
    );
}

export default Form;