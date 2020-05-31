import React from 'react';
import Navbar from './Navbar';
import data from '../data';
import {Link} from 'react-router-dom';
import './Home.css';


function ProductDetails(props) {

  const product = data.products.find(x => x.id === props.match.params.id);
  console.log(props.match.params.id);

  return (

     <div>

        <Navbar />

          <div className="details">

              <div>
                  <Link to="/"> Revenir en arrière</Link>
              </div>


              <div>
                  <h1>{product.name}</h1>  
                  <img className="product-details-image" src={product.image} />
                  <h1 className="product-brand">{product.brand}</h1>
                  <h1 className="product-price">{product.price} €</h1>
                  <p className="product-details"> {product.desc}</p>
                  <button className="btn btn-warning"> Ajouter au panier </button>
              </div>
              
          </div>

     </div>
  );
}

export default ProductDetails;
