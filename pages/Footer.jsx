import { Link } from "react-router-dom";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer-top">
          <Link to="/">
            <img
              className="footer-top__logo"
              src="../images/logo-namangan.svg"
              alt="site logo"
            />
          </Link>
          <div className="footer-top__lists">
            <p className="footer-top__caption">
              Воспроизводство, копирование, использование информации с сайта
              «NAMANGANLIKLAR24.UZ» возможно только с предварительного
              письменного разрешения редакции.
            </p>
            <ul className="footer-top__list">
              <li>Информация о сайте</li>
              <li>Напишите нам</li>
              <li>Реклама</li>
              <li>Прислать новость</li>
            </ul>
            <ul className="footer-top__list">
              <li>Использование материалов</li>
              <li>Темы дня</li>
              <li>Наша команда</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <h2 className="footer-botom__title">Наши социальные сети</h2>
          <div className="footer-botom__socials">
            <img
              src="../images/free-icon-facebook-1384053 1.svg"
              alt=" facebook"
            />
            <img
              src="../images/free-icon-instagram-2111463 1.svg"
              alt=" instagram"
            />
            <img
              src="../images/free-icon-telegram-2111646 1.svg"
              alt=" telegram"
            />
            <img
              src="../images/free-icon-youtube-1384060 1.svg"
              alt=" youtube"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
