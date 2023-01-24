import { Fragment } from "react";
import "./Header.scss";

function Header() {
  return (
    <Fragment>
      <header>
        {/* Top Nav start */}
        <div className="container-fluid bg-dark">
          <div className="row align-items-center">
            <div className="col-md-2 d-flex">
              <h3 className="my-3 " id="heading">
                SHOP ATTIRE
              </h3>
            </div>
            <div className="col-md-6">
              <form className="form-inline mb-2">
                <div className="input-group">
                  <input
                    id="myInput"
                    type="search"
                    className="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <button type="button" className="btn btn-outline-secondary">
                    Search
                  </button>
                  <i class="fa-solid fa-cart-shopping"></i>
                </div>
              </form>
            </div>
            <div className="col-md-3 d-flex justify-content-center justify-content-md-end">
              <div>
                <button type="button" className="btn btn-primary cart">
                  Login
                </button>
              </div>
            </div>
            <div className="col-md-1 d-flex justify-content-center justify-content-md-end">
              <a className="me-2 btn btn-outline-secondary my-2">
                <i className="cart fa fa-shopping-cart"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Category Nav start  */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  All Products
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Women
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item cursor">All</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item cursor">Dresses</a>
                  <a className="dropdown-item cursor">Pants</a>
                  <a className="dropdown-item cursor">Skirts</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Men
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item cursor">All</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item cursor">Shirts</a>
                  <a className="dropdown-item cursor">Pants</a>
                  <a className="dropdown-item cursor">Hoodies</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Kids
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item cursor">All</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item cursor">Girls</a>
                  <a className="dropdown-item cursor">Boys</a>
                </div>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </Fragment>
  );
}

export default Header;
