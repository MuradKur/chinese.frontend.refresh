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
import Header from '../Header/Header';

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
          <Route path="/vacancies" component={Vacancies} />
          <Route path="/car-service" component={CarService} />
          <Route path="/delivery" component={DeliveryInRussia} />
          <Route path="/actions" component={Actions} />
          <Route path="/action/:id" component={Action} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
