import React from 'react';
import {Link, NavLink} from 'react-router-dom'
const NavBar = () => (
  <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary navpadding">
        {/* <a className="navbar-brand" to="#">Customers</a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <NavLink className="nav-link" exact to="/">Add Customer</NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" exact to="/customerlist">Customers List</NavLink>
            </li>
          </ul>

        </div>
        <Link className="btn btn-outline-light" exact to="/">Add New</Link>
      </nav>

    </div>
)
export default NavBar;