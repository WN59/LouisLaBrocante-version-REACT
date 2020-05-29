import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import data from './data';
import {BrowserRouter, Route, Link} from 'react-router-dom';



function App() {
  
  return (

        <BrowserRouter>

            <div> 

              <Navbar />

                  <div>
                      <main className="main">
                        <div className="content">
                            <Route path="/product/:id" component={ProductDetails} />
                            <Route path="/" exact={true} component={Home} />
                          </div>
                      </main>
                  </div>

            </div>

        </BrowserRouter>
              
  );
}

export default App;
