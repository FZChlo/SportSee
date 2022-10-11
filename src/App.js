import './App.css';
import Header from "./Components/Header/Header"
import Dashboard from './Containers/Dashboard/Dashboard';
import Home from './Containers/Home/Home';
import VerticalLayout from './Components/VerticalLayout/VerticalLayout';
import Error from './Containers/Error/Error';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {

  return (

    <div className="App">

          <Router>
              <Header />
              <VerticalLayout />
              <main>
                  <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/user/:userId" component={Dashboard} />
                      <Route path="*" component={Error} />
                  </Switch>
              </main>
          </Router>

    </div>
  );
}

export default App;