import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./screens/HomePage";
import LandingPage from "./screens/LandingPage";
import ErrorPage from "./screens/ErrorPage";
function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/" component={LandingPage} />
          <Route component={ErrorPage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
