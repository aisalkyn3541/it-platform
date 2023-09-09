import React from "react";
import men from "../../img/men1.png";
import imeges1 from "../../img/home1.png";
import imeges2 from "../../img/home2.png";
import imeges3 from "../../img/home3.png";
import imeges4 from "../../img/home4.png";
import './index.scss'
import Articles from "./Articles";
import Accor from "./Accor";
import Application from "./Application";
function HomePage() {
  return (
    <div id="home">
      <div className="container">
        <div className="home">
          <div className="home__title">
            <h1>IT образовательная платформа </h1>
            <p>
              Наша образовательная платформа вам даст необходимые практические
              знания для адаптации в IT-сфере.
            </p>
          </div>
          <div className="home__img">
            <img src={men} alt="" />
            <img className="home__img-icon" src={imeges1} alt="" />
            <img className="home__img-icon2" src={imeges2} alt="" />
            <img className="home__img-icon3" src={imeges3} alt="" />
            <img className="home__img-icon4" src={imeges4} alt="" />
          </div>
        </div>
      </div>
      <Articles />
      <Accor />
      <Application />
    </div>
  );
}

export default HomePage;
