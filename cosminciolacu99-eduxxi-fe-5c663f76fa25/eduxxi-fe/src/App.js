import LandingPage from './components/landingPage/LandingPage';
import { Route, Redirect, withRouter } from "react-router-dom";
import { Switch } from "react-router";
import Home from './Home';
import ContactPage from './components/ContactPage/ContactPage';
import LoginPage from './components/LoginPage/LoginPage';
import Routes from './api/routes/routes';
import Regsiterpage from './components/RegisterPage/RegsiterPage';

// For form recomand Formik - un tool misto pentru formulare
function App() {
  return (
    <Home>
      <Switch>  
        <Route path={Routes.LANDING} exact component={LandingPage} />
        <Route path={Routes.CONTACT} exact component={ContactPage} />
        <Route path={Routes.LOGIN} exact component={LoginPage} />
        <Route path={Routes.REGISTER} exact component={Regsiterpage} />

        {/* <Redirect to="/" /> */}
      </Switch>
    </Home>
  );
}

export default App;
