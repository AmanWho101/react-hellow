import logo from './logo.svg';
import './App.css';
import Myimp from './comp/Greet'
import { Component } from 'react';
import MyclsImp from './comp/Welcom';
import Counter from './comp/Counter';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p className="p_c">
    //       hellow world! hellow world! hellow world! hellow world! hellow world! hellow world!
  
    //     </p>
        
    //   </header>
    // </div>
   <div className='App'> 
      
      <Counter/>
        </div>
  );
}

export default App;
