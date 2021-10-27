
import './App.css';
import Cards from './components/Cards';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      
      <Switch>
        <Route path='/' exact component={Cards} />
  
      </Switch>
    </Router>
  </>
);
}

export default App;
