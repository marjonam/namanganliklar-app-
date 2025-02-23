import "../css/List.css";
export default function List() {
  return (
    <div>
      {" "}
      <div className="header__banner">
        <div className="header__banner__container container">
          <a className="header__banner__link" href="#">
            <img
              className="header__banner__img"
              src="../../../images/namangan/yangi-uylar.png"
              alt="banner"
              width="1200"
              height="128"
            />
          </a>
        </div>
      </div>
      <main className="main">
        <div className="main__container container">
          <div className="main__container__left">
            <p className="main__title">Интересное</p>

            <ul className="main__container__list">
              <li className="main__container__item">
                <img
                  className="item__image"
                  src="../../../images/namangan/tawkeny-30-let.png"
                  width="210px"
                  height="165px"
                  alt=""
                />
                <div className="item__left">
                  <div className="left__title">
                    Отопление Ташкента на 30 лет переходит в управление
                    французской Veolia
                  </div>
                  <div className="left__text">
                    Система теплоснабжения Ташкента на 30 лет будет передана в
                    управление французской компании Veolia для модернизации и
                    реконструкции, сообщает 22 сентября пресс-служба...
                  </div>
                  <div className="left__date">
                    <img
                      className="date__image"
                      src="../../../images/kv-img.png"
                      width="20px"
                      height="20px"
                      alt=""
                    />
                    <div className="date__text">ИА Красная Весна 15:26</div>
                  </div>
                </div>
              </li>
              <li className="main__container__item">
                <img
                  className="item__image"
                  src="../../../images/namangan/iphone-13.png"
                  width="210px"
                  height="165px"
                  alt=""
                />
                <div className="item__left">
                  <div className="left__title">
                    Пользователи жалуются на новую проблему iPhone 13, связанную
                    с камерой
                  </div>
                  <div className="left__text">
                    Пользователи смартфона Apple iPhone 13 продолжают сообщать о
                    новых проблемах, с которыми они сталкиваются при
                    использовании флагмана, поступившего в продажу только
                    позавчера...
                  </div>
                  <div className="left__date">
                    <img
                      className="date__image"
                      src="../../../images/namangan/pepelas.png"
                      width="20px"
                      height="20px"
                      alt=""
                    />
                    <div className="date__text">Пепелац Ньюс 07:35</div>
                  </div>
                </div>
              </li>
              <li className="main__container__item">
                <img
                  className="item__image"
                  src="../../../images/namangan/Xbox-Series.png"
                  width="210px"
                  height="165px"
                  alt=""
                />
                <div className="item__left">
                  <div className="left__title">
                    Halo Infinite сравнили на Xbox One, Xbox One X, Xbox Series
                    S и Xbox Series X
                  </div>
                  <div className="left__text">
                    Ютубер с канала ElAnalistaDeBits сравнил Halo Infinite на
                    консолях Xbox One, Xbox One X, Xbox Series S и Xbox Series
                    X. Графика впечатляет на всех платформах. Также
                    отмечается...
                  </div>
                  <div className="left__date">
                    <img
                      className="date__image"
                      src="../../../images/namangan/klub-dns.png"
                      width="20px"
                      height="20px"
                      alt=""
                    />
                    <div className="date__text">Клуб DNS 15:33</div>
                  </div>
                </div>
              </li>
              <li className="main__container__item">
                <img
                  className="item__image"
                  src="../../../images/namangan/cobaalt-nexia.png"
                  width="210px"
                  height="165px"
                  alt=""
                />
                <div className="item__left">
                  <div class="left__title">
                    В Узбекистане показали тюнинговые варианты моделей Lacetti,
                    Cobalt, Nexia и Spark
                  </div>
                  <div className="left__text">
                    «В сети наши потребители обсуждали тему сильного
                    преобладания белого цвета в модельном ряду UzAuto Motors.
                    Почему вы не делаете двухцветные автомобили? Этот вопрос
                    был...
                  </div>
                  <div className="left__date">
                    <img
                      className="date__image"
                      src="../../../images/namangan/sputnik.png"
                      width="20px"
                      height="20px"
                      alt=""
                    />
                    <div className="date__text">Sputnik Узбекистан 18:43</div>
                  </div>
                </div>
              </li>
              <li className="main__container__item">
                <img
                  className="item__image"
                  src="../../../images/namangan/13pro.png"
                  width="210px"
                  height="165px"
                  alt=""
                />
                <div className="item__left">
                  <div className="left__title">
                    Время автономной работы iPhone 13 Pro Max стало рекордным
                    для смартфонов Apple
                  </div>
                  <div className="left__text">
                    Линейка смартфонов iPhone 13 от Apple была презентована на
                    прошлой неделе. Прием предзаказов на устройство стартовал 22
                    сентября, а 24 сентября новинка появилась в магазинах.
                  </div>
                  <div className="left__date">
                    <img
                      className="date__image"
                      src="../../../images/namangan/ireactor.png"
                      width="20px"
                      height="20px"
                      alt=""
                    />
                    <div className="date__text">iReactor 12:25</div>
                  </div>
                </div>
              </li>
              <li className="main__container__item">
                <img
                  className="item__image"
                  src="../../../images/namangan/Huobi.png"
                  width="210px"
                  height="165px"
                  alt=""
                />
                <div className="item__left">
                  <div className="left__title">
                    Криптобиржа Huobi закрыла регистрацию пользователей из Китая
                  </div>
                  <div className="left__text">
                    Крупнейшая в Китае биржа для торговли биткоинами Huobi
                    приостановила регистрацию пользователей из КНР. Ранее
                    местный Центробанк назвал нелегальными все транзакции...
                  </div>
                  <div className="left__date">
                    <img
                      className="date__image"
                      src="../../../images/namangan/kompaniya.png"
                      width="20px"
                      height="20px"
                      alt=""
                    />
                    <div className="date__text">Компания 11:35</div>
                  </div>
                </div>
              </li>
              <li className="main__container__item">
                <img
                  className="item__image"
                  src="../../../images/namangan/kino-za-5-dney.png"
                  width="210px"
                  height="165px"
                  alt=""
                />
                <div className="item__left">
                  <div className="left__title">
                    В Узбекистане пройдет международный конкурс молодых
                    кинематографистов «Кино за 5 дней»
                  </div>
                  <div className="left__text">
                    В Узбекистане 22 сентября стартовал конкурс молодых
                    кинематографистов «Кино за пять дней». Мероприятие проходит
                    в рамках Ташкентского Международного...
                  </div>
                  <div className="left__date">
                    <img
                      className="date__image"
                      src="../../../images/namangan/fergana.png"
                      width="20px"
                      height="20px"
                      alt=""
                    />
                    <div className="date__text">Фергана 15:44</div>
                  </div>
                </div>
              </li>
              <li className="main__container__item">
                <a href="../../../images/">
                  <img
                    className="item__image"
                    src="../../../images/namangan/Elon-Musk-Tesla.png"
                    width="210px"
                    height="165px"
                    alt=""
                  />
                  <div className="item__left">
                    <div className="left__title">
                      Илон Маск принял участие во Всемирной сетевой конференции
                      в Китае
                    </div>
                    <div className="left__text">
                      Илон Маск (Elon Musk, Руководитель фирмы Tesla и других
                      проектов) уже второй раз за полторы недели обратился к
                      китайским правящим кругам и гражданам.
                    </div>
                    <div className="left__date">
                      <img
                        className="date__image"
                        src="../../../images/solenka-info.png"
                        width="20px"
                        height="20px"
                        alt=""
                      />
                      <div className="date__text">FBM.ru 22:23</div>
                    </div>
                  </div>
                </a>
              </li>
              <a className="main__news__button" href="#">
                Показать ещё{" "}
              </a>
            </ul>
          </div>
          <div className="main__container__right">
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
                src="../../../images/banner-aside.png"
                alt=""
                width="393"
                height="653"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
