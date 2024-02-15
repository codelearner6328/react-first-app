import React from 'react'
import PropTypes from 'prop-types'
import CirclePallete from './CirclePallete';
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.modeBootstrap} bg-${props.modeBootstrap}`}>
            <NavLink className="navbar-brand" exact to="/">{props.title}</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" exact to="/">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/about">{props.aboutText}</NavLink>
                    </li>
                    <li className="nav-item">
                        <CirclePallete />
                    </li>
                </ul>

                <div className={`custom-control custom-switch text-${props.modeBootstrap === 'light' ? 'dark' : 'light'}`}>
                    <input type="checkbox" className="custom-control-input" onClick={props.toggleMode} id="customSwitch1" />
                    <label className="custom-control-label" htmlFor="customSwitch1" >Mode</label>
                </div>


                {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
            </div>
        </nav >
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string,
};

Navbar.defaultProps = {
    title: "Leaning Something",
    aboutText: "About this site",
}