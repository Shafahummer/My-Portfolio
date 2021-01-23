import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={AboutMe} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/contacts" exact component={Contacts} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
