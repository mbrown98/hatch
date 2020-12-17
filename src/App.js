import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import NavBar from "./components/layout/NavBar";
import ProjectDetails from "./components/projects/ProjectDetails";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
