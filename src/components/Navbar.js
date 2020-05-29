import React from 'react';
import $ from 'jquery';
import Popper from 'popper.js';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Navbar() {
  return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand"> Louis Web Brocante </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item active">
                            <a className="nav-link" href="#">Accueil <span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Qui sommes nous ?</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Les évènements
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Ré-ouverture Braderie</a>
                            <a className="dropdown-item" href="#">Distribution Masques COVID-19</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Thé Dansant - Jean Pierre Velders reporté !</a>
                            </div>
                        </li>
                        </ul>

                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Connexion</a>
                        </li>
                        </ul>
                   

                </div>
            </nav>
      </div>
  );
}

export default Navbar;
