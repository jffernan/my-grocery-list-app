import React from 'react';
import './App.css';
import Footer from './Footer';
import AddItem from './AddItem';
import VisibleItemList from '../containers/VisibleItemList';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome To My Grocery List App</h1>
    </header>
    <AddItem />
    <VisibleItemList />
    <Footer />
  </div>
);

export default App;
