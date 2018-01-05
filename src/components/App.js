import React from 'react';
import '../App.css';
import Footer from './Footer';
import AddItem from './AddItem';
import VisibleItemList from './VisibleItemList';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome To My Grocery List App</h1>
      <h4>*Create shopping list by adding new items.</h4>
      <h4>*Click on items after purchased to strike-out.</h4>
    </header>
    <AddItem />
    <Footer />
    <VisibleItemList />
    <footer className="App-footer">
      <h1 className="App-code">
        <a target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/jffernan/my-grocery-list-app">
          Visit GitHub To View My Code
        </a>
      </h1>
    </footer>
  </div>
);

export default App;
