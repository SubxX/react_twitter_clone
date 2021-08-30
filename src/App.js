import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import home from './pages/home';
import Signin from './pages/signin';

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" component={home} exact />
          <Route path="/login" component={Signin} exact />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
