import './App.css';
import Index from './pages/Index';
import ProductScreen from './pages/ProductScreen';
import Contact from './pages/Contact';
import styled from 'styled-components'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <AppContainer>
      <Router>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route path='/product/:id' component={ProductScreen} />    
          <Route path='/contact' component={Contact} />          
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App; 

const AppContainer = styled.p`
  max-width: 2000px;
  margin: auto;
`