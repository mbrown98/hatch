import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import NavBar from "./components/layout/NavBar";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
