import "../css/Footer.css";
export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer__container container">
          <div className="footer__nav">
            <div className="footer__nav__left">
              <a className="footer__nav__link" href="#">
                <img
                  className="footer__nav__link__img"
                  src="./images/logo.svg"
                  alt=" logo"
                />
              </a>
              <address className="footer__nav__address">
                Воспроизводство, копирование, использование информации с сайта
                «NAMANGANLIKLAR24.UZ» возможно только с предварительного
                письменного разрешения редакции.
              </address>
            </div>
            <div className="footer__nav__knew">
              <ul className="footer__nav__knew__list">
                <li className="footer__nav__knew__item">
                  <p className="footer__nav__knew__link" href="#">
                    Информация о сайте
                  </p>
                </li>
                <li className="footer__nav__knew__item">
                  <p className="footer__nav__knew__link" href="#">
                    Напишите нам
                  </p>
                </li>
                <li className="footer__nav__knew__item">
                  <p className="footer__nav__knew__link" href="#">
                    Реклама
                  </p>
                </li>
                <li className="footer__nav__knew__item">
                  <p className="footer__nav__knew__link" href="#">
                    Прислать новость
                  </p>
                </li>
              </ul>
              <ul className="footer__nav__knew__list">
                <li className="footer__nav__knew__item">
                  <p className="footer__nav__knew__link" href="#">
                    Использование материалов
                  </p>
                </li>
                <li className="footer__nav__knew__item">
                  <p className="footer__nav__knew__link" href="#">
                    Темы дня
                  </p>
                </li>
                <li className="footer__nav__knew__item">
                  <p className="footer__nav__knew__link" href="#">
                    Наша команда
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__bottom__left">
              <h2 className="footer__bottom__left__title">
                Наши социальные сети
              </h2>
            </div>
            <div className="footer__bottom__knew">
              <ul className="footer__bottom__knew">
                <li className="footer__bottom__item">
                  <img
                    className="footer__bottom__knew"
                    src="./images/free-icon-facebook-1384053 1.svg"
                    alt="Facebook"
                    width="25"
                    height="25"
                  />
                </li>
                <li className="footer__bottom__item">
                  <img
                    className="footer__bottom__knew"
                    src="./images/free-icon-instagram-2111463 1.svg"
                    alt="instagram"
                    width="25"
                    height="25"
                  />
                </li>
                <li className="footer__bottom__item">
                  <img
                    className="footer__bottom__knew"
                    src="./images/free-icon-telegram-2111646 1.svg"
                    alt="telegram"
                    width="25"
                    height="25"
                  />
                </li>
                <li className="footer__bottom__item">
                  <img
                    className="footer__bottom__knew"
                    src="./images/free-icon-youtube-1384060 1.svg"
                    alt="youtube"
                    width="25"
                    height="25"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
