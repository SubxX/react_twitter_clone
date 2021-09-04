import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import home from './pages/home';
import Signin from './pages/signin';
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./store/actions/userActions";


function App() {
  const dispatch = useDispatch();
  const loggedUser = JSON.parse(localStorage.getItem('tuser'));
  if (loggedUser) {
    dispatch(setUser(loggedUser));
  }

  return (
    <Router>
      <main>
        <Switch>
          <ProtectedRoute exact path="/" component={home} />
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


const ProtectedRoute = ({ component: Component, ...otherprops }) => {
  let authenticated;
  try {
    authenticated = JSON.parse(localStorage.getItem('tuser')) && true;
  } catch (error) {
    authenticated = false;
  }

  console.log(authenticated);

  return (
    <Route
      {...otherprops}
      render={(props) =>
        authenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />)
}