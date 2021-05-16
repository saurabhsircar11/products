import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import configureStore from "./redux/store";
import ListContainer from "./containers/ListContainer";
import CartContainer from "./containers/CartContainer";

const store = configureStore();
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/products" component={ListContainer} />
        <Route path="/cart" component={CartContainer} />
        <Route path="/">
          <Redirect to="/products" />
        </Route>
      </Switch>
    </Router>
  );
}

const ReduxApp = () => (
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>
);
export default ReduxApp;
