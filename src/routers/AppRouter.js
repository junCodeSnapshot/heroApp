//Convencion para decir que es el sistema de routas principal!!!!

import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";

import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/Login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const {user} = useContext(AuthContext)

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute isAutenticated={user.logged} component={LoginScreen} exac path="/login"/>
                    <PrivateRoute isAutenticated={user.logged} component={DashboardRoutes} path="/"/>
                </Switch>
            </div>
        </Router>
    )
}
