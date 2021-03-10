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
import Vacancies from '../../pages/Vacancies/Vacancies';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import CarService from '../../pages/CarService/CarService';
import DeliveryInRussia from '../../pages/DeliveryInRussia/DeliveryInRussia';
import Actions from '../../pages/Actions/Actions';
import Action from '../../pages/Action/Action';
import TechnicalMaintenance from '../../pages/TechnicalMaintenance/TechnicalMaintenance';
import GuaranteePage from '../../pages/GuaranteePage/GuaranteePage';
import DetailsAutoService from '../../pages/DetailsAutoService/DetailsAutoService';
import Header from '../Header/Header';
import SuspensionDiagnosis from '../../pages/SuspensionDiagnosis/SuspensionDiagnosis';
import BodyRepair from '../../pages/BodyRepair/BodyRepair';

function App() {
  return (
    <Router>
      <div>
        <FloatingButton />
        <Header />
        <Switch>
          <Route exact path="/components" component={Components} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/" component={Main} />
          <Route exact path="/news" component={News} />
          <Route exact path="/about-company" component={AboutCompany} />
          <Route exact path="/vacancies" component={Vacancies} />
          <Route exact path="/autoservice" component={CarService} />
          <Route exact path="/delivery" component={DeliveryInRussia} />
          <Route exact path="/actions" component={Actions} />
          <Route exact path="/guarante" component={GuaranteePage} />

          <Route exact path="/action/:id" component={Action} />

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
      </div>
    </Router>
  );
}

export default App;
