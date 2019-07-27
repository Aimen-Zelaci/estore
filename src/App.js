import React from 'react';
import {Route,Switch} from 'react-router-dom';
import ProductList from './components/ProductList';
import Description from './components/Description';
import Cart from './components/Cart';
import Default from './components/Default';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = ()=> {
    return(
      <React.Fragment>
          <Navbar />
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/description" component={Description} />
            <Route path="/Cart" component = {Cart} />
            <Route  component={Default} />
          </Switch>
    </React.Fragment>
      );




}

export default App ;
