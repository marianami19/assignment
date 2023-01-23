import { Fragment } from "react";
import FeaturedProds from "./plugins/featured-products";

function Slider() {
  return (
    <Fragment>
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-dark"
        data-bs-ride="carousel"
      >
        <div className="container mb-5">
          <h1 className="display-6 p-3 m-3 text-center">Featured Products</h1>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row p-2 m-2">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-11 col-xs-12">
                  <FeaturedProds></FeaturedProds>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 d-none d-md-block d-lg-block d-xl-block">
                  <FeaturedProds></FeaturedProds>
                </div>
                <div className="col-xl-3 col-lg-4 d-none d-lg-block d-xl-block">
                  <FeaturedProds></FeaturedProds>
                </div>
                <div className="col-xl-3 d-none d-xl-block">
                  <FeaturedProds></FeaturedProds>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row p-2 m-2">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-11 col-xs-12">
                  <FeaturedProds></FeaturedProds>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 d-none d-md-block d-lg-block d-xl-block">
                  <FeaturedProds></FeaturedProds>
                </div>
                <div className="col-xl-3 col-lg-4 d-none d-lg-block d-xl-block">
                  <FeaturedProds></FeaturedProds>
                </div>
                <div className="col-xl-3 d-none d-xl-block">
                  <FeaturedProds></FeaturedProds>
                </div>
              </div>
            </div>
            <div className="carousel-item .d-none .d-lg-block">
              <div className="row p-2 m-2">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-11 col-xs-12">
                  <FeaturedProds></FeaturedProds>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 d-none d-md-block d-lg-block d-xl-block">
                  <FeaturedProds></FeaturedProds>
                </div>
                <div className="col-xl-3 col-lg-4 d-none d-lg-block d-xl-block">
                  <FeaturedProds></FeaturedProds>
                </div>
                <div className="col-xl-3 d-none d-xl-block">
                  <FeaturedProds></FeaturedProds>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Fragment>
  );
}

export default Slider;
