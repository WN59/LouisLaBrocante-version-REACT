import React from 'react';
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../data';


function Home() {
  return (
      <div>
        <Navbar />

          <main className="main">
            <div className="content">
              <ul className="products">
               {
                 data.products.map( product =>
                  <li>
                    <div className="product">
                      <img className="product-image" src={product.image} alt="product" />
                      <div className="product-name">
                        <a href="product.html">{product.name}</a>
                      </div>
                        <div className="product-brand">{product.brand}</div>
                        <div className="product-price">{product.price} €</div>                      
                    </div>
                  </li>
                 )}
                </ul>
                </div>
            </main>
      </div>
  );
}

export default Home;
