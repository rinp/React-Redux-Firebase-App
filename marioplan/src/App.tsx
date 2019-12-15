import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {Navbar} from './components/layout/Navbar'
import {Dashboard} from './components/dashboard/Dashboard'

export const App: FC = () => {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/'component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
