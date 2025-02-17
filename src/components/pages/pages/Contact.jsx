import "../css/Contact.css";
export default function Contact() {
  return (
    <div>
      {" "}
      <main class="main">
        <div class="main-container container">
          <div class="contaienr__input">
            <h3 class="contact__text">Напишите нам</h3>
            <form action="" class="input__left">
              <div class="contact__top">
                <input
                  type="text"
                  class="contact__nav__text"
                  placeholder="Имя"
                  required
                />
                <input
                  type="tel"
                  class="contact__nav__text"
                  placeholder="Номер телефона"
                  required
                />
              </div>
              <div class="contact__button">
                <input
                  type="email"
                  class="input__button__text"
                  placeholder="Электронная почта"
                  required
                />

                <textarea
                  name=""
                  id=""
                  class="input__button__btn1"
                  cols="30"
                  rows="10"
                  placeholder="Текст"
                ></textarea>
              </div>
              <input
                type="submit"
                value="Отправить"
                class="input__button__btn"
              />
            </form>
          </div>
          <div class="container__description">
            <div class="main__news__about">
              <div class="main__news__list">
                <div class="main__news__about__item">
                  <p class="about__text">Электронная почта</p>
                  <p class="about__logo">info@namanganliklar24.uz</p>
                  <div class="divider"></div>
                </div>
                <div class="main__news__about__item">
                  <p class="about__text">Номер телефона</p>
                  <p class="about__logo">+998 88 522-54-76</p>
                  <div class="divider"></div>
                </div>
                <div class="main__news__about__item">
                  <p class="about__text">Адрес</p>
                  <p class="about__logo">Ташкент, площадь Мустакиллик, 6</p>
                  <div class="divider"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
