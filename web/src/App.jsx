import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './containers/home'
import Sounds from './containers/sounds'

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/sounds" component={Sounds} />
            </Switch>
        </Router>
    )
}
