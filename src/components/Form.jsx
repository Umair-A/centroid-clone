import React from 'react';

function Form() {
    return(
        <div class="container">
        <form>
          <div className="form-group">
            <label for="userName">UserName:</label>
            <input type="text" className="form-control" id="email" placeholder="Enter UserName" name="name" />
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" name="remember" /> Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    );
}

export default Form;