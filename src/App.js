import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAction } from './actions/loginAction';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    let { username, password } = this.state;
    this.props.loginAction(username, password);
    this.setState({ username: '', password: '' });
  }

  render() {
    let { username, password } = this.state;
    let { loginReducer: { isLoginPending, isLoginSuccess, loginError } } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <form className="form" name="loginForm" onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input name="username" onChange={e => this.setState({username: e.target.value})} value={username}></input>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="passsword" name="password" onChange={e => this.setState({password: e.target.value})} value={password}></input>
            </div>

            <input type="submit" value="Login"></input>
          </form>
          
          <div>
            <pre>{JSON.stringify(this.props)}</pre>
          </div>

          { isLoginPending && <div>Please wait...</div> }
          { isLoginSuccess && <div>Success.</div> }
          { loginError && <div>{loginError.message}</div> }
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  loginAction: (username, password) => dispatch(loginAction(username, password))
})

export default connect(mapStateToProps, mapDispatchToProps) (App);
