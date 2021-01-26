import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { baseReducer } from './reducers/baseReducer';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

const store = createStore(baseReducer)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={AboutMe} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contacts" exact component={Contacts} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
