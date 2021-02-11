import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import {  Route, Switch} from 'react-router-dom'

import Background from './food-bg.jpg';

const App = () => {

    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route exact path='/cart' component={CartPage}/>
                <Route path="*" component={MainPage}/>
            </Switch>

        </div>
    )
}

export default App;