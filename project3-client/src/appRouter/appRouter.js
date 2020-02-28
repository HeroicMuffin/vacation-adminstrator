import {Route} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

const AppRoutes = (props) => {
    const {routes} = props;
    const currentRoutes = routes.map((route, index) => {
        return <Route {...route} key={index}/>;
    });
    return <>{currentRoutes}</>;
};


const mapStateToProps = (state, ownProps) => ({
    isAdmin: state.isAdmin
});

const AppRoutesContainer = connect(mapStateToProps, null)(AppRoutes);

export default AppRoutesContainer;

