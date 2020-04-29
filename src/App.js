import React from 'react';
import { BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Login />

        <Route path="/register" component={Register}></Route>

      </BrowserRouter>

    </div>
  );
}

export default App;
