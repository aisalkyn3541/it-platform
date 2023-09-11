import React from "react";
import img1 from "../../img/img1 (2).png";
import img2 from "../../img/img2 (2).png";
import img3 from "../../img//img3 (2).png";
import img4 from "../../img/img4 (2).png";
import Application from "../HomePage/Application";
import "./AboutUs.scss";

const AboutUsUs = () => {
  return (
    <div id="AboutUs">
      <div className="container">
        <div className="AboutUs">
          <h5>
            Главная / <span>О нас</span>
          </h5>
          <div className="AboutUs--text">
            <h2>О нас</h2>
            <p className="AboutUs--text--p1">
              Курсы IT-профессий Motion Web была основана в 2021-ом году в
              Бишкеке с целью дать возможность каждому человеку, даже без опыта
              в технологиях, гарантированно освоить IT-профессию.
            </p>
            <p className="AboutUs--text--p2">
              Форма обучения - онлайн, с применением электронного обучения и
              дистанционных образовательных технологий на образовательной
              платформе Moodle и прямые эфиры с преподавателем. 154
              академических часа трудоёмкости учебной деятельности отведено
              практическим занятиям и выполнению практических заданий.
            </p>
          </div>
          <div className="AboutUs--img">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
          </div>
          <div className="AboutUs--sert">
            <h1 className="AboutUs--sert--h1">Сертификат</h1>
            <p className="AboutUs--sert--p">
              По окончании обучения выдается онлайн сертификат.
            </p>
            <img src={img3} className="AboutUs--sert--img" alt="" />
          </div>
          <div className="AboutUs--list">
            <p className="AboutUs--list--p">Отзывы наших студентов</p>
            <div className="AboutUs--list--p--block">
              <div className="AboutUs--list--p--block--blocks">
                <img
                  src={img4}
                  className="AboutUs--list--p--block--blocks--img"
                  alt=""
                />
                <h5 className="AboutUs--list--p--block--blocks--h5">
                  Виктор Александарович
                </h5>
                <p className="AboutUs--list--p--block--blocks--p">
                  С радостью оставляю положительной отзыв! Пройдя курс "UX/UI
                  Designer с нуля" я с остался полностью доволен, что мой выбор
                  пал именно на данную школу. Если вы выберите данную школу -
                  вам обеспечена прокачка в выбранной вами области. Всячески
                  рекомендую и благодарю!
                </p>
                <h4 className="AboutUs--list--p--block--blocks--year">
                  23.02.2022 г
                </h4>
              </div>
              <div className="AboutUs--list--p--block--blocks">
                <img
                  src={img4}
                  className="AboutUs--list--p--block--blocks--img"
                  alt=""
                />
                <h5 className="AboutUs--list--p--block--blocks--h55">
                  Виктор Александарович
                </h5>
                <p className="AboutUs--list--p--block--blocks--p">
                  С радостью оставляю положительной отзыв! Пройдя курс "UX/UI
                  Designer с нуля" я с остался полностью доволен, что мой выбор
                  пал именно на данную школу. Если вы выберите данную школу -
                  вам обеспечена прокачка в выбранной вами области. Всячески
                  рекомендую и благодарю!
                </p>
                <h4 className="AboutUs--list--p--block--blocks--year">
                  23.02.2022 г
                </h4>
              </div>
              <div className="AboutUs--list--p--block--blocks">
                <img
                  src={img4}
                  className="AboutUs--list--p--block--blocks--img"
                  alt=""
                />
                <h5 className="AboutUs--list--p--block--blocks--h55">
                  Виктор Александарович
                </h5>
                <p className="AboutUs--list--p--block--blocks--p">
                  С радостью оставляю положительной отзыв! Пройдя курс "UX/UI
                  Designer с нуля" я с остался полностью доволен, что мой выбор
                  пал именно на данную школу. Если вы выберите данную школу -
                  вам обеспечена прокачка в выбранной вами области. Всячески
                  рекомендую и благодарю!
                </p>
                <h4 className="AboutUs--list--p--block--blocks--year">
                  23.02.2022 г
                </h4>
              </div>
              <div className="AboutUs--list--p--block--blocks">
                <img
                  src={img4}
                  className="AboutUs--list--p--block--blocks--img"
                  alt=""
                />
                <h5 className="AboutUs--list--p--block--blocks--h5">
                  Виктор Александарович
                </h5>
                <p className="AboutUs--list--p--block--blocks--p">
                  С радостью оставляю положительной отзыв! Пройдя курс "UX/UI
                  Designer с нуля" я с остался полностью доволен, что мой выбор
                  пал именно на данную школу. Если вы выберите данную школу -
                  вам обеспечена прокачка в выбранной вами области. Всячески
                  рекомендую и благодарю!
                </p>
                <h4 className="AboutUs--list--p--block--blocks--year">
                  23.02.2022 г
                </h4>
              </div>
              <div className="AboutUs--list--p--block--blocks">
                <img
                  src={img4}
                  className="AboutUs--list--p--block--blocks--img"
                  alt=""
                />
                <h5 className="AboutUs--list--p--block--blocks--h55">
                  Виктор Александарович
                </h5>
                <p className="AboutUs--list--p--block--blocks--p">
                  С радостью оставляю положительной отзыв! Пройдя курс "UX/UI
                  Designer с нуля" я с остался полностью доволен, что мой выбор
                  пал именно на данную школу. Если вы выберите данную школу -
                  вам обеспечена прокачка в выбранной вами области. Всячески
                  рекомендую и благодарю!
                </p>
                <h4 className="AboutUs--list--p--block--blocks--year">
                  23.02.2022 г
                </h4>
              </div>
            </div>
          </div>

          <Application />
        </div>
      </div>
    </div>
  );
};

export default AboutUsUs;
