import React from 'react';
import './App.css';
import Dashboard from './components';
import { store } from './reduxState';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
