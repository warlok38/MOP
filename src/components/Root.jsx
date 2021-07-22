import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { routes } from '../routes';
import { MainMenu } from './MainMenu';
import { Layout } from './Layout';
import './style.css';

export const Root = () => {
    return (
        // HashRouter нужен для того, чтобы на gh-pages все грузилось
        <HashRouter history={createBrowserHistory()}>
            <MainMenu />
            <Layout>
                <Switch>
                    <Route
                        path={'/'}
                        exact
                        render={(match) => (
                            <Redirect to="/react-spring" {...match} />
                        )}
                    />
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            component={route.component}
                            exact
                        />
                    ))}
                </Switch>
            </Layout>
        </HashRouter>
    );
};
