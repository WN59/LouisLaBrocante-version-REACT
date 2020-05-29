import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';
import './Home.css';


function ProductDetails(props) {

 

  return (

    <div className="details">

        <div>
            <Link to="/"> Revenir en arrière</Link>
        </div>


        <div>
            <h1>{this.props.match.params.title}</h1>  
        </div>
        
    </div>
  );
}

export default ProductDetails;
