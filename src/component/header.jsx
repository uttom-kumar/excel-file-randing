import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">Uttom</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Excel File Rander</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'https://web-camara.vercel.app/'} target={'_blank'} className="nav-link" >Web Camara </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="https://qr-code-generator-free-webiste.vercel.app/" target={'_blank'} className="nav-link" >Qr-code</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;