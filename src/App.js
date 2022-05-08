import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Moviedetails from './Moviedetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/Assignment-4'>
            <Home />
          </Route>
          <Route path='/about'>
            <About title="About Us"/>
          </Route>
          <Route path='/contact'>
            <Contact title="Contact Us"/>
          </Route>
          <Route path="/movie/:id">
            <Moviedetails />
          </Route>
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
