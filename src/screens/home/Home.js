import React,{Component} from 'react';
import './Home.css';
import Grid from '../../Grid';
import CountryData from '../../CountryData';
import {BrowserRouter as Router,Route} from 'react-router-dom';

class Home extends Component{
  render(){
    return(
      <div className="container">
        <Router>
          <Route path="/" exact component={Grid} />
          <Route path={"/country/:id"} exact component={CountryData} />
        </Router>
      </div>
    );
  }
}
export default Home;
