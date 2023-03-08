import './App.css';
import { Detail } from './Components/Detail/Detail';
import { Message } from './Components/Message/Message';
import { Example } from './Components/Example/Example';
import { HomePage } from './Components/HomePage/HomePage';
import { Route, Switch, Redirect } from 'react-router-dom';
import { LandingPage } from './Components/LandingPage/LandingPage';
import { CreatePokemon } from './Components/CreatePokemon/CreatePokemon';
import axios from 'axios';
axios.defaults.baseURL = 'https://henry-pokemon-pi-production.up.railway.app/'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={'/pruebas'} component={Example} />
        <Route exact path={'/'} component={LandingPage} />
        <Route exact path={'/pokemons'} component={HomePage} />
        <Route exact path={'/create'} component={CreatePokemon} />
        <Route exact path={'/pokemons/:id'} component={Detail} />
        <Route exact path={'/not found'} component={Message} />
        <Redirect from='*' to={'not found'} />
      </Switch>
    </div>
  );
}

export default App;
