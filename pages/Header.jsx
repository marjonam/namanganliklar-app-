import { Link } from "react-router-dom";
import "../css/Header.css";

export default function Header() {
  return (
    <div>
      <header className="">
        <div className="header">
          <div className="header__navfooter__nav">
            <div className="header__nav__container container">
              <Link to="/home">
                <img src="./images/logo-namangan.svg" />
              </Link>
              <div className="currency">
                <div className="currency-item">
                  <span className="currency__logo">$</span>
                  <span className="currency__text">10137.2</span>
                </div>
                <div className="currency-item">
                  <span className="currency__logo">P</span>
                  <span className="currency__text"> 138.26</span>
                </div>
              </div>
              <form className="global-search-form">
                <input
                  className="global-search-form__input"
                  type="text"
                  placeholder="Поиск"
                />
              </form>
              <div className="language-toggler">
                <span className="language-toggler__item language-toggler__item-active">
                  УЗ
                </span>
                <span className="language-toggler__item">РУ</span>
              </div>
              <button className="header__navfooter__nav__btn btn">Войти</button>
            </div>
          </div>
          <nav className="header__nav__container container">
            <ul className="header__nav__list">
              <li className="header__nav__item">
                <Link to="/">Главное</Link>
              </li>
              <li className="header__nav__item">
                <Link to="/list">Интересное</Link>
              </li>
              <li className="header__nav__item">
                <Link to="/article">Экономика</Link>
              </li>
              <li className="header__nav__item">
                <Link to="/contact">Политика</Link>
              </li>
              <li className="header__nav__item">
                <Link to="/tech">Общество</Link>
              </li>
              <li className="header__nav__item">
                <Link to="/tech">Технологии</Link>
              </li>
              <li className="header__nav__item">
                <Link to="#">Спорт</Link>
              </li>
              <li className="header__nav__item">
                <Link to="/tech">Культура</Link>
              </li>
              <li className="header__nav__item">
                <Link to="/tech">Происшествия</Link>
              </li>
              <li className="header__nav__item">
                <Link to="/tech">Наука</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
