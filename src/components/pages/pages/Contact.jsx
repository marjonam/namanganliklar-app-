import "../css/Contact.css";
export default function Contact() {
  return (
    <div>
      {" "}
      <main className="main">
        <div className="main-container container">
          <div className="contaienr__input">
            <h3 className="contact__text">Напишите нам</h3>
            <form action="" className="input__left">
              <div className="contact__top">
                <input
                  type="text"
                  className="contact__nav__text"
                  placeholder="Имя"
                  required
                />
                <input
                  type="tel"
                  className="contact__nav__text"
                  placeholder="Номер телефона"
                  required
                />
              </div>
              <div className="contact__button">
                <input
                  type="email"
                  className="input__button__text"
                  placeholder="Электронная почта"
                  required
                />

                <textarea
                  name=""
                  id=""
                  className="input__button__btn1"
                  cols="30"
                  rows="10"
                  placeholder="Текст"
                ></textarea>
              </div>
              <input
                type="submit"
                value="Отправить"
                className="input__button__btn"
              />
            </form>
          </div>
          <div className="container__description">
            <div className="main__news__about">
              <div className="main__news__list">
                <div className="main__news__about__item">
                  <p className="about__text">Электронная почта</p>
                  <p className="about__logo">info@namanganliklar24.uz</p>
                  <div className="divider"></div>
                </div>
                <div className="main__news__about__item">
                  <p className="about__text">Номер телефона</p>
                  <p className="about__logo">+998 88 522-54-76</p>
                  <div className="divider"></div>
                </div>
                <div className="main__news__about__item">
                  <p className="about__text">Адрес</p>
                  <p className="about__logo">Ташкент, площадь Мустакиллик, 6</p>
                  <div className="divider"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
