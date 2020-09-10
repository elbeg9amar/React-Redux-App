import React,{useEffect} from 'react';
import { connect } from "react-redux";

import './App.css';
import Jokes from './component/Jokes'
import {getData} from './store/actions/JokesAction'

function App({getData}) {

useEffect(() =>{
  getData();
},[getData])

  return (
    <div className="App">
      <header><h1>Jokes</h1></header>
      <Jokes />
    </div>
  );
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps, { getData })(App);
