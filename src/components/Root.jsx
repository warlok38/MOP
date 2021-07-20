import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { routes } from '../routes';
import { MainMenu } from './MainMenu';
import './style.css';

export const Root = () => {
    return (
        // HashRouter нужен для того, чтобы на gh-pages все грузилось
        <HashRouter history={createBrowserHistory()}>
            <Switch>
                <Route path="/" component={MainMenu} exact />
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        render={route.component}
                        exact
                    />
                ))}
            </Switch>
        </HashRouter>
    );
};
