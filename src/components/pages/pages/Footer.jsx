import "../css/Footer.css";
export default function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="footer__container container">
          <div class="footer__nav">
            <div class="footer__nav__left">
              <a class="footer__nav__link" href="#">
                <img
                  class="footer__nav__link__img"
                  src="./images/logo.svg"
                  alt=" logo"
                />
              </a>
              <address class="footer__nav__address">
                Воспроизводство, копирование, использование информации с сайта
                «NAMANGANLIKLAR24.UZ» возможно только с предварительного
                письменного разрешения редакции.
              </address>
            </div>
            <div class="footer__nav__knew">
              <ul class="footer__nav__knew__list">
                <li class="footer__nav__knew__item">
                  <a class="footer__nav__knew__link" href="#">
                    Информация о сайте
                  </a>
                </li>
                <li class="footer__nav__knew__item">
                  <a class="footer__nav__knew__link" href="#">
                    Напишите нам
                  </a>
                </li>
                <li class="footer__nav__knew__item">
                  <a class="footer__nav__knew__link" href="#">
                    Реклама
                  </a>
                </li>
                <li class="footer__nav__knew__item">
                  <a class="footer__nav__knew__link" href="#">
                    Прислать новость
                  </a>
                </li>
              </ul>
              <ul class="footer__nav__knew__list">
                <li class="footer__nav__knew__item">
                  <a class="footer__nav__knew__link" href="#">
                    Использование материалов
                  </a>
                </li>
                <li class="footer__nav__knew__item">
                  <a class="footer__nav__knew__link" href="#">
                    Темы дня
                  </a>
                </li>
                <li class="footer__nav__knew__item">
                  <a class="footer__nav__knew__link" href="#">
                    Наша команда
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer__bottom">
            <div class="footer__bottom__left">
              <h2 class="footer__bottom__left__title">Наши социальные сети</h2>
            </div>
            <div class="footer__bottom__knew">
              <ul class="footer__bottom__knew">
                <li class="footer__bottom__item">
                  <a href="#" class="footer__bottom__link">
                    <img
                      class="footer__bottom__knew"
                      src="./images/free-icon-facebook-1384053 1.svg"
                      alt="Facebook"
                      width="25"
                      height="25"
                    />
                  </a>
                </li>
                <li class="footer__bottom__item">
                  <a href="" class="footer__bottom__link">
                    <img
                      class="footer__bottom__knew"
                      src="./images/free-icon-instagram-2111463 1.svg"
                      alt="instagram"
                      width="25"
                      height="25"
                    />
                  </a>
                </li>
                <li class="footer__bottom__item">
                  <a href="" class="footer__bottom__link">
                    <img
                      class="footer__bottom__knew"
                      src="./images/free-icon-telegram-2111646 1.svg"
                      alt="telegram"
                      width="25"
                      height="25"
                    />
                  </a>
                </li>
                <li class="footer__bottom__item">
                  <a href="" class="footer__bottom__link">
                    <img
                      class="footer__bottom__knew"
                      src="./images/free-icon-youtube-1384060 1.svg"
                      alt="youtube"
                      width="25"
                      height="25"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
