import React from "react";
import Home from "../components/pages/Home";
import AddTrip from "../components/pages/AddTrip";
import Register from "../components/pages/Register";
import Login from "../components/pages/Login";
import Graph from "../components/pages/Graph";
import {adminWithAuth, userWithAuth} from "../components/authRoute";
import LogoutContainer from "../components/pages/Logout"

export const routes = [
    {
        class: "fa fa-sign-out fa-2x",
        exact: true,
        title: "Logout",
        path: "/Logout",
        component: () => {
            return <LogoutContainer/>;
        }
    },
    {
        class: "fa fa-sign-in fa-2x",
        exact: true,
        title: "Login",
        path: "/Login",
        component: Login
    },
    {
        class: "fa fa-user-plus fa-2x",
        exact: true,
        title: "Register",
        path: "/Register",
        component: Register
    },
    {
        exact: true,
        title: "Home",
        path: "/",
        component: props => {
            const HomeWithAuth = userWithAuth(Home);
            return <HomeWithAuth {...props} />;
        }
    },
    {
        class: "fa fa-plus fa-2x",
        exact: true,
        title: "Add Trip",
        path: "/AddTrip",
        adminPermission: true,
        component: props => {
            const AddTripWithAuth = adminWithAuth(AddTrip);
            return <AddTripWithAuth {...props} />;
        }
    },
    {
        class: "fa fa-bar-chart fa-2x",
        exact: true,
        title: "Graph",
        path: "/Graph",
        adminPermission: true,
        component: props => {
            const GraphWithAuth = adminWithAuth(Graph);
            return <GraphWithAuth {...props} />;
        }
    }
];
