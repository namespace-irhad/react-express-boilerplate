import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HelloWorld from './views/helloWorld';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/hello-world" />
      <Route exact path="/hello-world" component={HelloWorld} />
    </Switch>
  );
};

export default Routes;
