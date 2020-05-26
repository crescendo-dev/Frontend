import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false, 
    }
  }
  
  openModal = () => {
    this.setState({ isModalOpen: true });
  }
  
  closeModal = () => {
    this.setState({ isModalOpen: false }); 
  }

  render(){
  return (
    <div>
      <div class="sidenav">
        <div class="login-main-text">
          <h2>Application<br></br> Login Page</h2>
          <p>Login or register from here to access.</p>
        </div>
      </div>
      <div class="main">
        <div class="col-md-6 col-sm-12">
          <div class="login-form">
            <form>
              <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" placeholder="Email" />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" placeholder="Password" />
              </div>
              <button type="submit" class="btn btn-dark btn-space">Login</button>
              <button type="submit" class="btn btn-secondary" onClick={this.openModal}>Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
