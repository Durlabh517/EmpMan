
import './App.css';
import React from "react";
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UpdateEmployee from './components/UpdateEmployee';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
function App() {
  return (
  
    <div>
       <Router>
        <HeaderComponent/>
        <div className="container">
          <Switch> 

            <Route path="/" exact component={ListEmployeeComponent}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route path="/addemployee/:id" component={AddEmployeeComponent}></Route>
            <Route path="/viewemployee/:id" component={ViewEmployeeComponent}></Route>

            {/* <Route path="/updateemployee/:id" component={UpdateEmployee}></Route> */}
          </Switch>
   
    </div> 

    <FooterComponent/>



      </Router>

    </div>
    
  );
}

export default App;
