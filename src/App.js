import React from 'react';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import {BrowserRouter, Route} from 'react-router-dom';



function App() {
  
  return (

        <BrowserRouter>

            <div> 

        
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
