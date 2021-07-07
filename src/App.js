import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./screens/HomePage";
import LandingPage from "./screens/LandingPage";
import ErrorPage from "./screens/ErrorPage";
import AuthScreen from "./screens/AuthScreen";
function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/auth" component={AuthScreen} />
          <Route path="/" component={LandingPage} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
