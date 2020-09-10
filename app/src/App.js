import React,{useEffect} from 'react';
import { connect } from "react-redux";

import './App.css';
import Jokes from './component/Jokes'
import {getData} from './store/actions/JokesAction'

function App({getData, loadingJokes, errorMessage}) {

useEffect(() =>{
  getData();
},[getData])

  return (
    <div className="App">
      <header><h1>Jokes</h1></header>
      {
        !loadingJokes 
        ? <Jokes /> 
        : <img src="https://i.pinimg.com/474x/40/a7/d5/40a7d54f63dd89c338575a17b5f91a71.jpg" alt="waiting pic"/>
      }
      {
        errorMessage !=='' ? <img src={errorMessage} alt="wating"/> : null
      }

      
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loadingJokes: state.loadingJokes,
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps, { getData })(App);
