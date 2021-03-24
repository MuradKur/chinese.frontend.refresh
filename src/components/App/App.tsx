import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.scss';
import 'antd/dist/antd.css';
import 'animate.css';
import Components from '../../pages/Components/Components';
import Contacts from '../../pages/Contacts/Contacts';
import AboutCompany from '../../pages/AboutCompany/AboutCompany';
import Main from '../../pages/Main/Main';
import News from '../../pages/News/News';
import Prices from '../../pages/Prices/Prices';
import Vacancies from '../../pages/Vacancies/Vacancies';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import CarService from '../../pages/CarService/CarService';
import DeliveryInRussia from '../../pages/DeliveryInRussia/DeliveryInRussia';
import Actions from '../../pages/Actions/Actions';
import Action from '../../pages/Action/Action';
import Auth from '../../pages/Auth/Auth';
import TechnicalMaintenance from '../../pages/TechnicalMaintenance/TechnicalMaintenance';
import GuaranteePage from '../../pages/GuaranteePage/GuaranteePage';
import DetailsAutoService from '../../pages/DetailsAutoService/DetailsAutoService';
import Header from '../Header/Header';
import SuspensionDiagnosis from '../../pages/SuspensionDiagnosis/SuspensionDiagnosis';
import NewsDetails from '../../pages/NewsDetails/NewsDetails';
import Product from '../../pages/Product/Product';
import BodyRepair from '../../pages/BodyRepair/BodyRepair';
import Making from '../../pages/Making/Making';
import AuthProvider from '../../providers/AuthProvider';
import React from 'react';

class App extends React.Component {
  componentDidCatch(err: any) {
    console.log(err);
  }

  render() {
    return (
      <Router>
        <AuthProvider>
          <FloatingButton />
          <Header />
          <Switch>
            <Route exact path="/components" component={Components} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/" component={Main} />
            <Route exact path="/news" component={News} />
            <Route exact path="/news/:id" component={NewsDetails} />
            <Route exact path="/about-company" component={AboutCompany} />
            <Route exact path="/vacancies" component={Vacancies} />
            <Route exact path="/autoservice" component={CarService} />
            <Route exact path="/delivery" component={DeliveryInRussia} />
            <Route exact path="/actions" component={Actions} />
            <Route exact path="/guarante" component={GuaranteePage} />
            <Route exact path="/product/:id" component={Product} />
            <Route exact path="/prices/:id?" component={Prices} />
            <Route exact path="/action/:id" component={Action} />
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/making" component={Making} />

            <Route
              exact
              path="/autoservice/technical-maintenance"
              component={TechnicalMaintenance}
            />
            <Route exact path="/bodyrepair" component={BodyRepair} />
            <Route
              exact
              path="/suspensiondiagnosis"
              component={SuspensionDiagnosis}
            />
            <Route
              exact
              path="/autoservice/details"
              component={DetailsAutoService}
            />
            <Redirect to="/" />
          </Switch>
        </AuthProvider>
      </Router>
    );
  }
}

export default App;
