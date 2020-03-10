import React, {useEffect} from "react";
import axios from "axios";
import myHook from "../../myHookers/customHook";
import "./index.css";
import {setIsAdmin, setIsConnected} from '../../../redux/actions'
import {connect} from "react-redux";

function Login(props) {
    const initState = {email: "", password: null};
    const [data, handleChange] = myHook(initState);
    useEffect(() => {
        if (data.password === null && props.isAdmin !== false) props.setIsAdmin(false)
    });
    const loginApi = async () => {
        const result = await axios.post("http://localhost:3200/login", {...data});
        const {data: response} = result;
        const {token, redirect, isAdmin, message} = response;
        if (redirect && token) {
            debugger
            localStorage.setItem("token", token)
            localStorage.setItem("IsAdmin", isAdmin)
            props.setIsAdmin(isAdmin)
            props.setIsConnected(true)
            props.history.push("/")
        } else {
            alert(message);
        }
    };

    return (
        <form>
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email address</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    name="password"
                    onChange={handleChange}
                />
            </div>

            <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={loginApi}
            >
                Log in
            </button>
        </form>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    setIsAdmin: (payload) => {
        dispatch(setIsAdmin(payload));

    },
    setIsConnected: (payload) => {
        dispatch(setIsConnected(payload));
    }

});

const mapStateToProps = (state, ownProps) => ({
    isAdmin: state.isAdmin
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;


