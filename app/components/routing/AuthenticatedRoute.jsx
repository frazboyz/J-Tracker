import React from 'react';
import {Route, Redirect} from 'react-router';
import withConsumer from "../hocs/Consumer";

const AuthenticatedRoute = ({component: Component, store, ...routeProps}) => (
  <Route
    {...routeProps}
    render={props => {
      if (store.client !== null) {
        return <Component {...props}/>;
      } else {
        return <Redirect to={{pathname: "/"}}/>;
      }
    }}
  />
);

export default withConsumer(AuthenticatedRoute);
