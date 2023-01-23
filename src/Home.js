import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomeCover from "./HomeCover";
import Slider from "./Slider";

function Home() {
  return (
    <Fragment>
      <Header></Header>
      <HomeCover></HomeCover>
      <Slider></Slider>
      <Footer></Footer>
    </Fragment>
  );
}

export default Home;
