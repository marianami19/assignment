import { Fragment } from "react";
import "./Footer.scss";

function Footer() {
  return (
    <Fragment>
      <footer>
        <div className="container-fluid bg-dark text-white p-5">
          <div className="row text-center">
            <div className="col-md-3">
              <h6>Women</h6>
              <ul>
                <li>Dresses</li>
                <li>Pants</li>
                <li>Skirts</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h6>Men</h6>
              <ul>
                <li>Shirts</li>
                <li>Pants</li>
                <li>Hoodies</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h6>Kids</h6>
              <ul>
                <li>Girls</li>
                <li>Boys</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h6>Links</h6>
              <ul>
                <li>Home</li>
                <li>Login</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="text-center">Copyright @shopattire 2022</div>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;
