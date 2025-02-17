import "../css/Article.css";
export default function Article() {
  return (
    <div>
      <main className="main">
        <section className="main__top__container container">
          <div className="main__top__container__left">
            <div className="left__title__logo">
              <img
                src="../../../images/solenka-info.png"
                alt=""
                width="30px"
                height="30px"
              />
              FBM.ru 22:23
            </div>
            <div className="left__title__text">
              Илон Маск принял участие во Всемирной сетевой конференции в Китае
            </div>
            <div className="left__image">
              <img
                src="../../../images/Rectangle 91 (1).png"
                alt=""
                width="797"
                height="300"
              />
            </div>
            <p className="left__text"></p>
            <p className="tetx__item">
              Илон Маск (Elon Musk, Руководитель фирмы Tesla и других проектов)
              уже второй раз за полторы недели обратился к китайским правящим
              кругам и гражданам. В видеоролике он уверил их в своей готовности
              инвестировать средства в развитие и расширять бизнес на территории
              этой страны. Особое внимание будет уделяться небезопасности
              обрабатываемых данных.
            </p>
            <p className="tetx__item">
              Они будут храниться только в самом Китае и поэтому будут доступны
              правительству Поднебесной в любой момент.
            </p>
            <p className="tetx__item">
              Новые заявления Илон Маск сделал во время видеообращения к
              аудитории мероприятия World Internet Conference, которое прошло в
              конце недели в Поднебесной. Компанию ему составили руководители
              Cisco Systems (Чак Роббинс), Intel (Пэт Гелсингер) и Qualcomm
              (Кристиано Амон), а интересы бизнеса Китайской Народной Республики
              представляли руководители Alibaba и Xiaomi.
            </p>
            <p className="tetx__item">
              Открывал мероприятие Лю Хэ (Liu He, Вице-премьер Госсовета КНР),
              который привёл слова Си Цзиньпина (Xi Jinping) о стремлении
              Поднебесной работать со всеми державами над созданием прозрачной
              цифровой экономики.
            </p>
            <p className="tetx__item">
              В ближайшее время Tesla собирается не только сделать шире объёмы
              производства автомобилей на электрической тяге в шанхайском
              филиале, но и разработать силами местной студии недорогую модель
              электрического автомобиля (стоимостью менее 25 000 долларов).
            </p>
            <p className="tetx__item">
              Уже в настоящий момент собранные в Китайской Народной Республике
              электрокары Tesla Model Y и Model 3 поставляются на экспорт в
              Европу.
            </p>

            <div className="divider1"></div>
          </div>
          <div className="main__top__container__right">
            <div className="legenda__about">
              <div className="legenda__list">
                <p className="about__title">Главное</p>
                <div className="legenda__about__item">
                  <p className="about__text">
                    В Фергане создадут узбекско- <br />
                    пакистанский университет
                  </p>
                  <p className="about__logo">Sputnik Узбекистан 14:09</p>
                  <div className="divider"></div>
                </div>
                <div className="legenda__about__item">
                  <p className="about__text">
                    В Фергане создадут узбекско- <br />
                    пакистанский университет
                  </p>
                  <p className="about__logo">Sputnik Узбекистан 14:09</p>
                  <div className="divider"></div>
                </div>
                <div className="legenda__about__item">
                  <p className="about__text">
                    В Фергане создадут узбекско- <br />
                    пакистанский университет
                  </p>
                  <p className="about__logo">Sputnik Узбекистан 14:09</p>
                  <div className="divider"></div>
                </div>
                <div className="legenda__about__item">
                  <p className="about__text">
                    В Фергане создадут узбекско- <br />
                    пакистанский университет
                  </p>
                  Name
                  <p className="about__logo">Sputnik Узбекистан 14:09</p>
                </div>
              </div>
              <img
                className="legenda__about__image"
                src="../../../images/banner-aside.png"
                alt=""
                width="393"
                height="338"
              />
            </div>
          </div>
        </section>
        <section className="park__container container">
          <p className="park__container__title">По вашим интересам</p>
          <div className="park__container__items">
            <div className="park__container__item">
              <p className="item_title1">
                Стали известны ёмкости аккумуляторов всех моделей iPhone 13
              </p>
              <p className="item_text1">
                Во время презентации iPhone 13 Apple придала большое значения...
              </p>
              <div className="item_image">
                <img src="../../../images/diger.png" alt="" />
                <p>Digger.ru 14:25</p>
              </div>
            </div>
            <div className="park__container__item">
              <p className="item_title1">
                Nature: ученые смогли доказать природное происхождение
                коронавируса SARS-CoV-2
              </p>
              <p className="item_text1">
                Во время презентации iPhone 13 Apple придала большое значение...
              </p>
              <div className="item_image">
                <img src="../../../images/lenta-ru.png" alt="" />
                <p>Lenta.ru 10:54</p>
              </div>
            </div>
            <div className="park__container__item">
              <p className="item_title1">
                Китайская марка JAC повысила цены на лифтбек и пикап в России
              </p>
              <p className="item_text1">
                Две модели китайского бренда JAC из пяти, представленных на
                российском...
              </p>
              <div className="item_image">
                <img src="../../../images/tarantas-nyus.png" alt="" />
                <p>Digger.ru 14:25</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
