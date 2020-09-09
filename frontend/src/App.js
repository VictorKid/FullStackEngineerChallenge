import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import AdminPage from "./pages/Admin/AdminPage";
import EmployeeDetailPage from "./pages/Employee/EmployeeDetailPage";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <div>
          <Switch>
            <Route path="/employee/:employeeId">
              <EmployeeDetailPage />
            </Route>
            <Route path="/">
              <AdminPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </AppContainer>
  );
}

export default App;
