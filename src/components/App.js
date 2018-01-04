import React from 'react';
import '../App.css';
import Footer from './Footer';
import AddItem from './AddItem';
import VisibleItemList from './VisibleItemList';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome To My Grocery List App</h1>
      <p>Create shopping list by adding new items & 'click' on items when purchased to cross-out.</p>
    </header>
    <AddItem />
    <Footer />
    <VisibleItemList />
  </div>
);

export default App;
