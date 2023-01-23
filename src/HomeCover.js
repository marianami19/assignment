import { Fragment } from "react";
import "./Home.scss";

function HomeCover() {
  return (
    <Fragment>
      <div className="card border-0">
        <div className="coverImg"></div>
        <div className="card-img-overlay text-white d-flex justify-content-center align-items-center flex-column overlay-dark">
          <h1 className="text-shadow text-uppercase display-1">Shop Attire</h1>
          <h2 className="display-6 lineUp">Right through your screen!</h2>
        </div>
      </div>
    </Fragment>
  );
}

export default HomeCover;
