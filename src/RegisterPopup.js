import React, { Component } from "react";
import Popup from "reactjs-popup";

class RegisterPopup extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        passwordcheck: ''
    }

    appChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    appClick = () => {
        if (this.state.password !== this.state.passwordcheck) {
            alert(`패스워드를 확인하세요.`)
        }
    }

    appKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.appClick();
        }
    }

    render() {

        const { name, email, password, passwordcheck } = this.state;
        const { appChange, appClick, appKeyPress } = this;
        return (
            <Popup trigger={<button>register</button>} position="right center">
                <div>
                    <input placeholder="Name" name="name" value={name} onChange={appChange}></input>
                    <input placeholder="Email" name="email" value={email} onChange={appChange}></input>
                    <input type="password" placeholder="Password" name="password" value={password} onChange={appChange}></input>
                    <input type="password" placeholder="Password Check" name="passwordcheck" value={passwordcheck} onChange={appChange}
                    onKeyPress={appKeyPress}></input>
                    <button onClick={appClick}>register</button>
                </div>
            </Popup>
        );
    }
}

export default RegisterPopup;
