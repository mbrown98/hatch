import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import NavBar from "./components/layout/NavBar";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn.js";
import SignUp from "./components/auth/SignUp.js";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
