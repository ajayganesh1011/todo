import React from 'react'
import { Link } from "react-router-dom";
import Imagecard from '../components/Imagecard';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Todo from '../components/Todo';
import Gallery from '../components/Gallery';

function Landing() {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <h1 className="navbar-brand text-danger">TODO APP</h1>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/table">Table</Link>
                                </li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item btn btn-success me-3">
                                <Link className="nav-link" to="/slog">Styled Login</Link>
                            </li>
                            <li className="nav-item btn btn-primary">
                                <Link className="nav-link" to="/log">Login</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>

            <div>
                {/* Hero Section */}
                <header className="bg-primary text-white text-center py-5" style={{ minHeight: "60vh" }}>
                    <div className="container">
                        <h1 className="display-4 fw-bold">Welcome to Stylish Landing</h1>
                        <p className="lead">Discover the simplicity and elegance of modern design.</p>
                        <a href="#features" className="btn btn-light btn-lg mt-3">
                            Explore Features
                        </a>
                    </div>
                </header>

                {/* Features Section */}
                <section id="features" className="py-5 bg-light">
                    <div className="container">
                        <h2 className="text-center fw-bold mb-4">Our Features</h2>
                        <div className="row text-center">
                            <div className="col-md-4 mb-4">
                                <div className="card shadow-sm border-0">
                                    <div className="card-body">
                                        <i className="bi bi-lightning-fill text-primary" style={{ fontSize: "3rem" }}></i>
                                        <h5 className="card-title mt-3">Fast Performance</h5>
                                        <p className="card-text">
                                            Experience blazing fast performance with cutting-edge technology.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card shadow-sm border-0">
                                    <div className="card-body">
                                        <i className="bi bi-shield-check text-primary" style={{ fontSize: "3rem" }}></i>
                                        <h5 className="card-title mt-3">Top Security</h5>
                                        <p className="card-text">
                                            We prioritize your safety with advanced security measures.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card shadow-sm border-0">
                                    <div className="card-body">
                                        <i className="bi bi-palette-fill text-primary" style={{ fontSize: "3rem" }}></i>
                                        <h5 className="card-title mt-3">Modern Design</h5>
                                        <p className="card-text">
                                            A clean, minimal, and user-friendly design tailored for you.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <img
                                    src="https://via.placeholder.com/500x400"
                                    alt="About us"
                                    className="img-fluid rounded shadow"
                                />
                            </div>
                            <div className="col-md-6">
                                <h2 className="fw-bold">About Us</h2>
                                <p className="lead">
                                    We are committed to delivering the best digital experiences by merging technology
                                    with creativity.
                                </p>
                                <p>
                                    Our team of experts is passionate about helping you achieve your goals by
                                    providing exceptional products and services.
                                </p>
                                <a href="#contact" className="btn btn-primary mt-3">
                                    Get in Touch
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section id="gallery" className="py-5">
                    <h1>Gallery</h1>
                    <Gallery/>
                </section>


                {/* Footer Section */}
                <footer className="bg-dark text-white text-center py-4">
                    <div className="container">
                        <p className="mb-0">&copy; 2024 Stylish Landing. All Rights Reserved.</p>
                        <p className="mt-2">
                            <a href="#features" className="text-white me-3">
                                Features
                            </a>
                            <a href="#about" className="text-white">
                                About Us
                            </a>
                        </p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Landing