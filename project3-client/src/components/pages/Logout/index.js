import React, {useEffect} from "react";
import {setIsConnected} from '../../../redux/actions'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

function Logout(props) {
    localStorage.clear()
    useEffect(() => {
        props.setIsConnected(false)
    });
    return <Redirect to="/Login"/>;

}

const mapDispatchToProps = (dispatch, ownProps) => ({
    setIsConnected: (payload) => {
        dispatch(setIsConnected(payload));
    }
});

const LogoutContainer = connect(null, mapDispatchToProps)(Logout);

export default LogoutContainer;


