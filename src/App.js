import React from "react";
import { Switch, Route } from "react-router-dom";

import AssignmentList from "./screens/AssignmentList";
import UXD1 from "./screens/UXD1";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/assignment1" component={UXD1} />
        <Route exact path="/" component={AssignmentList} />
      </Switch>
    </>
  );
}

export default App;
