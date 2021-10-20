import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../src/components/Home/Home/Home';
import './App.css';
import About from './components/About/About';
import Appoinment from './components/Appoinment/Appoinment';
import CovidCare from './components/CovidCare/CovidCare';
import CreateAccount from './components/CreateAccount/CreateAccount';
import Doctors from './components/Doctors/Doctors';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Notfound from './components/Notfound/Notfound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import TotallDoctors from './components/TotallDoctors/TotallDoctors';
import Traning from './components/Traning/Traning';
import AuthProvider from './Context/AuthProvider';
function App() {
  return (
    <div className="App">
          <AuthProvider>
          <BrowserRouter>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <Route exact path="/doctors">
                <TotallDoctors></TotallDoctors>
              </Route>
              <Route exact path="/traning">
                <Traning></Traning>
              </Route>
              <Route exact path="/covid">
                <CovidCare></CovidCare>
              </Route>
              <Route exact path="/about">
                <About></About>
              </Route>
              <Route exact path="/login">
                <Login></Login>
              </Route>
              <Route exact path="/register">
                <CreateAccount></CreateAccount>
              </Route>
              <PrivateRoute exact path="/appoinment">
                <Appoinment></Appoinment>
              </PrivateRoute>
              <Route path="/service/:id">
                <Doctors/>
              </Route>
              <Route path="*">
                <Notfound></Notfound>
              </Route>
            </Switch>
            <Footer></Footer>
          </BrowserRouter>
          </AuthProvider>
    </div>
  );
}

export default App;
