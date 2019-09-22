import React from 'react';
import './App.css';
import Hello from './Hello';
import { Provider } from 'react-redux';
import { store } from './state';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Hello></Hello>
      </div>
    </Provider>
  );
};

export default App;
