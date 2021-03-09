import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import routes from './routes';

class App extends Component {

    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    }

    render() {
        return (
            <BrowserRouter>
                <Header />
                    { this.showContentMenus(routes) }
                <Footer />
            </BrowserRouter>
        )
    }
}

export default App;
