import React from "react";
import {BrowserRouter as Router, Link, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutesContainer from "../../../appRouter/appRouter";
import {routes} from "../../../appRouter/routers.config";
import "../../../../node_modules/font-awesome/css/font-awesome.min.css";
import "./index.css";
import {connect} from "react-redux";

function Navbar(props) {
    let currentRoutes = routes;
    //remove home but
    currentRoutes = currentRoutes.filter(e => e.title !== "Home");
    //remove login if already auth
    if (props.isConnected) currentRoutes = currentRoutes.filter(r => r.title !== "Login");
    else currentRoutes = currentRoutes.filter(r => r.title !== "Logout");

    if (!props.isAdmin) currentRoutes = currentRoutes.filter(e => undefined === e.adminPermission)

    return (
        <Router>
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to={"/"}>
                            <i className="fa fa-home fa-2x">
                                <h5>Home</h5>
                            </i>
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                {currentRoutes.map((route, index) => {
                                    return (
                                        <li className="nav-item" key={index}>
                                            <Link className="nav-link" to={route.path}>
                                                <i className={route.class}>
                                                    <h5>{route.title}</h5>
                                                </i>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Switch>
                            <AppRoutesContainer routes={routes}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}


const mapStateToProps = (state, ownProps) => ({
    isAdmin: state.isAdmin,
    isConnected: state.isConnected
});

const NavbarContainer = connect(mapStateToProps, null)(Navbar);

export default NavbarContainer;

