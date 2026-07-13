import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div>

            <nav
                className="navbar navbar-expand-lg shadow"
                style={{ background: "linear-gradient(to right, #8B0000, #C62828, #E53935)" }}
            >
                <div className="container-fluid">
                    <a className="navbar-brand text-white fw-bold fs-4" href="#">
                        🩸 BLOOD BANK MANAGEMENT
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link text-white px-3 fw-semibold" to="/">➕ Add Donor</Link>
                            <Link className="nav-link text-white px-3 fw-semibold" to="/view">🩸 View Donors</Link>
                        </div>
                    </div>
                </div>
            </nav>
            </div>
            )
}

            export default NavigationBar