import "../css/Home.css";
export default function Home() {
  return (
    <>
      <div className="header__banner">
        <div className="header__banner__container container">
          <span className="header__banner__link">
            <img
              className="header__banner__img"
              src="./images/home-banner.png"
              alt="banner"
              width="1200"
              height="128"
            />
          </span>
        </div>
      </div>
      <main className="container">
        <section className="main-grid main-container ">
          <div className="main__wrap">
            {" "}
            <div className="main-item">
              <div class="main__item__title">
                Кандидат на пост канцлера ФРГ Шольц назвал условия коалиционного
                соглашения..
              </div>
              <div className="main__item__text">
                Лидер Социал-демократической партии Германии (СДПГ) и кандидат
                на должность...
              </div>
              <div className="main__item__image">
                <img src="./images/germaniy-flag.png" />
              </div>
              <div className="main__item__magizne">
                <img src="./images/kv-img.png" alt="img" />
                <p>ИА Красная Весна 15:55</p>
              </div>
            </div>
            <div className="main-item">
              <div class="main__item__title">
                Ученые доказали экспериментальным путем пользу покровных культур
              </div>
              <div className="main__item__text">
                Новое исследование ученых университета Иллинойса объединяет
                полевые данные...
              </div>
              <div className="main__item__image">
                <img src="./images/wheat.png" alt="" />
              </div>
              <div className="main__item__magizne">
                <img src="./images/gazeta-ru.png" alt="" />
                <p>Газета.Ru 12:54</p>
              </div>
            </div>
            <div className="main-item">
              <div className="main__item__title">
                Baidu запустила публичный сервис роботакси Apollo Go в <br />
                Шанхае
              </div>
              <div className="main__item__text">
                Автопарк Baidu состоит из модифицированных электромобилей EV...
              </div>
              <div className="main__item__image">
                <img src="./images/baidu-car.png" alt="" />
              </div>
              <div className="main__item__magizne">
                <img src="./images/heteg.png" alt="" />
                <p>Хайтек+ 13:44</p>
              </div>
            </div>
          </div>
          <div className="main__wrap">
            {" "}
            <div className="main-item">
              <div class="main__item__title">
                Стали известны ёмкости аккумуляторов всех моделей iPhone 13
              </div>
              <div className="main__item__text">
                Во время презентации iPhone 13 Apple придала большое значения...
              </div>
              <div className="main__item__image">
                <img src="./images/apple13.png" alt="" />
              </div>
              <div className="main__item__magizne">
                <img src="./images/diger.png" alt="" />
                <p>ИА Digger.ru 14:25</p>
              </div>
            </div>
            <div className="main-item">
              <div class="main__item__title">
                Nature: ученые смогли доказать природное происхождение
                коронавируса SARS-CoV-2
              </div>
              <div className="main__item__text">
                Во время презентации iPhone 13 Apple придала большое значение...
              </div>
              <div className="main__item__image">
                <img src="./images/labaratory.png" alt="" />
              </div>
              <div className="main__item__magizne">
                <img src="./images/lenta-ru.png" alt="" />
                <p>Lenta.ru 10:54</p>
              </div>
            </div>
            <div className="main-item">
              <div className="main__item__title">
                Китайская марка JAC повысила цены на лифтбек и пикап в br России
              </div>
              <div className="main__item__text">
                Две модели китайского бренда JAC из пяти, представленных на
                российском...
              </div>
              <div className="main__item__image">
                <img src="./images/card.png" alt="" />
              </div>
              <div className="main__item__magizne">
                <img src="./images/tarantas-nyus.png" alt="" />
                <p>Тарантас Ньюс 10:44</p>
              </div>
            </div>
          </div>
        </section>
        <section className="main__flex main-containe">
          <p class="main__flex__text">
            Хотите быть в курсе свежих новостей? Включите уведомления!
          </p>
          <span className="main__flex__link">Включит </span>
        </section>
        <section className="main__news main-container1">
          <p className="main__news__title">В мире</p>
          <div className="main__news__section">
            <div className="main__new">
              <div className="main__news__items">
                <img
                  className="main__news__items_image"
                  src="./images/plain-on-the-sky.png"
                  alt=""
                />
                <div className="main__news__items__text">
                  <div className="items__title">
                    Китайский Чунцин запустил чартерный рейс для студентов до
                    Британии
                  </div>
                  <div className="items__text__text">
                    Чартерный рейс с 244 китайскими студентами вылетел из города
                    центрального подчинения Чунцина на юго-западе Китая в
                    британский Манчестер...
                  </div>
                  <div className="items__text__magzine">
                    <img src="./images/kv-img.png" alt="" />
                    <p>ИА Красная Весна 12:25</p>
                  </div>
                </div>
              </div>
              <div className="main__news__items">
                <img
                  className="main__news__items_image"
                  src="./images/angela-merkel.png"
                  alt=""
                />
                <div className="main__news__items__text">
                  <div className="items__title">
                    В Германии выпустят ограниченную партию плюшевых мишек в
                    образе Меркель
                  </div>
                  <div className="items__text__text">
                    БЕРЛИН, 19 сентября. / ТАСС/. Знаменитая фабрика по
                    производству плюшевых игрушек в городе Кобург (федеральная
                    земля Бавария) изготовила уникального...
                  </div>
                  <div className="items__text__magzine">
                    <img src="./images/tass.png" alt="" />
                    <p>ТАСС 11:35</p>
                  </div>
                </div>
              </div>
              <div className="main__news__items">
                <img
                  className="main__news__items_image"
                  src="./images/china-town.png"
                  alt=""
                />
                <div className="main__news__items__text">
                  <div className="items__title">
                    Акции КНР утратили доверие инвесторов. Что делать с бумагами
                    прямо сейчас
                  </div>
                  <div className="items__text__text">
                    За последние месяцы инвесторы в китайский рынок пережили
                    настоящее потрясение — из-за ужесточения регулирования
                    технологического сектора и критики некоторых...
                  </div>
                  <div className="items__text__magzine">
                    <img src="./images/rbk-investtetsiya.png" alt="" />
                    <p>РБК Инвестиции 09:35</p>
                  </div>
                </div>
              </div>
              <div className="main__news__items">
                <img
                  className="main__news__items_image"
                  src="./images/china-flag.png"
                  alt=""
                />
                <div className="main__news__items__text">
                  <div className="items__title">
                    Китай раскритиковал заключенный Австралией, США и
                    Великобританией антикитайский союз AUKUS
                  </div>
                  <div className="items__text__text">
                    Не только Франция, которая лишилась многомиллиардного
                    контракта с Австралий, осталась недовольна созданием
                    трехстороннего оборонного альянса AUKUS, пишет
                    Anna-News.info
                  </div>
                  <div className="items__text__magzine">
                    <img src="./images/solenka-info.png" alt="" />
                    <p>Solenka.info 19:43</p>
                  </div>
                </div>
              </div>
              <button className="main__news__button">Показать ещё </button>
            </div>
            <div className="main__news__about">
              <div className="main__news__list">
                <p className="about__title">Главное</p>
                <div className="main__news__about__item">
                  <p className="about__text">
                    В Фергане создадут узбекско- <br />
                    пакистанский университет
                  </p>
                  <p className="about__logo">Sputnik Узбекистан 14:09</p>
                  <div className="divider"></div>
                </div>
                <div className="main__news__about__item">
                  <p className="about__text">
                    В Фергане создадут узбекско- <br />
                    пакистанский университет
                  </p>
                  <p className="about__logo">Sputnik Узбекистан 14:09</p>
                  <div className="divider"></div>
                </div>
                <div className="main__news__about__item">
                  <p className="about__text">
                    В Фергане создадут узбекско- <br />
                    пакистанский университет
                  </p>
                  <p className="about__logo">Sputnik Узбекистан 14:09</p>
                  <div className="divider"></div>
                </div>
                <div className="main__news__about__item">
                  <p className="about__text">
                    В Фергане создадут узбекско- <br />
                    пакистанский университет
                  </p>
                  <p className="about__logo">Sputnik Узбекистан 14:09</p>
                </div>
              </div>
              <img
                className="main__news__about__image"
                src="./images/banner-aside.png"
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
