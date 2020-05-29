import React from 'react';
import Navbar from './Navbar'
import data from '../data';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';



function Home(props) {
  return (
        <ul className="products">
                {
                  data.products.map( product =>
                      <li key="id">
                          <div className="product">
                          <Link to={'/product/' + product.id}> 
                          <img className="product-image" src={product.image} alt="product" />
                          </Link>
                            <div className="product-name">
                                <Link to={'/product/' + product.id}> {product.name}</Link>
                            </div>
                            <div className="product-brand">{product.brand}</div>
                            <div className="product-price">{product.price} €</div>                      
                          </div>
                        </li>
                 )}
          </ul>  
  );
}

export default Home;
