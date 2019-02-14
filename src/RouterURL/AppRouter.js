import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import Home from '../components/Home/Home';
import Event from '../components/Event/Event';
import Archive from '../components/Archive/Archive';
import LogIn from '../components/Form/LogIn';
import Register from '../components/Form/Register';
import EditInfo from '../components/EditInfo/EditInfo';
import EventDetail from '../components/Event/EventDetail/EventDetail';
import ArchiveDetail from '../components/Archive/ArchiveDetail/ArchiveDetail';

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Event} />
          <Route exact path="/archived" component={Archive} />
          <Route path="/log-in" component={LogIn} />
          <Route path="/register" component={Register} />
          <Route path="/edit-user-info" component={EditInfo} />
          <Route path="/events/:id/:slug" component={EventDetail} />
          <Route path="/archived/:id/:slug" component={ArchiveDetail} />
          <Route component={Home} />
        </Switch>
      </div>
    )
  }
}

export default AppRouter
