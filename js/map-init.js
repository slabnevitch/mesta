ymaps.ready(init);

var placemarks = [
{
    altitude: 56.256517,
    lattitude: 43.638521,

    iconImageHref: 'img/search-results-page/map-markers/type.svg',
    iconImageSize: [150, 150],
    iconImageOffset: [-75, -75]
},
{
    altitude: 56.259193,
    lattitude: 43.905626,

    iconImageHref: 'img/search-results-page/map-markers/cities.svg',
    iconImageSize: [150, 150],
    iconImageOffset: [-75, -75]
},
{
    altitude: 56.270370,
    lattitude: 43.922620,

    iconImageHref: 'img/search-results-page/map-markers/eco.svg',
    iconImageSize: [150, 150],
    iconImageOffset: [-75, -75]
},
{
    altitude: 56.295387,
    lattitude: 44.004503,
    iconImageHref: 'img/search-results-page/map-markers/type.svg',
    iconImageSize: [150, 150],
    iconImageOffset: [-75, -75]
},
{
    altitude: 56.256422,
    lattitude: 44.019609,

    iconImageHref: 'img/search-results-page/map-markers/helmet.svg',
    iconImageSize: [150, 150],
    iconImageOffset: [-75, -75]
},
{
    altitude: 56.271134,
    lattitude: 44.065958,

    iconImageHref: 'img/search-results-page/map-markers/camera.svg',
    iconImageSize: [150, 150],
    iconImageOffset: [-75, -75]
},
{
    altitude: 56.301687,
    lattitude: 44.043642,

    iconImageHref: 'img/search-results-page/map-markers/children.svg',
    iconImageSize: [150, 150],
    iconImageOffset: [-75, -75]
},
{
    altitude: 56.392246,
    lattitude: 44.069734,
    iconImageHref: 'img/search-results-page/map-markers/camera.svg',
    iconImageSize: [150, 150],
    iconImageOffset: [-75, -75]
},
{
    altitude: 56.402527,
    lattitude: 44.054285,
    iconImageHref: 'img/search-results-page/map-markers/type.svg',
    iconImageSize: [150, 150],
    iconImageOffset: [-75, -75]
}
];

function init () {
    var myMap = new ymaps.Map('map', {
            center: [56.353475, 44.009309],
            zoom: 11,
            controls: [] //оставляем только масштабирование
        }, {
            searchControlProvider: 'yandex#search'
        });

        // Создание макета содержимого балуна.
        // Макет создается с помощью фабрики макетов с помощью текстового шаблона.
       var BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
        `<div class="resuls-map__tooltip">
          <div class="result-card similar_slide">
            <div class="similar_slide-imgs img_slider">
              <div style="background-image: url(img/similar_slide.jpg);" class="similar_slide-img"><span class="icon-place_type"></span></div>
              <div style="background-image: url(img/place_img6.png);" class="similar_slide-img"><span class="icon-place_type"></span></div>
              <div style="background-image: url(img/place_page.png);" class="similar_slide-img"><span class="icon-place_type"></span></div>
            </div>
            <div class="similar_slide-info">
              <div class="similar_slide-top"><a href="#" class="room_card-title">Арт-пространство Винзавод</a>
                <div class="similar_slide-like"><span class="icon-like_card"></span></div>
              </div><a href="#" class="result-card__link">
                <div class="similar_slide-adres"><span class="icon-place_contacts-item2"></span>
                  <div class="similar_slide-adres_title">Московская область, Сергиево-ПосадсПосадсПосадсПосадс</div>
                  <div class="similar_slide-adres_distance">250км</div>
                </div>
                <div class="similar_slide-text">На берегу Волги, в окружении загородной природы разместился эко-отель Веточ..</div>
                <div class="similar_slide-link">
                  <div class="similar_slide-sutitle">
                    <div class="similar_slide-rating">8.1/10<span class="icon-rating"></span></div>
                    <div class="similar_slide-reviews">11 отзывов</div>
                  </div>
                  <div class="result-card__bottom-box">
                    <div class="result-card__reservation"><span class="icon-hotel"></span>Бронь от отеля</div>
                    <div class="similar_slide-btn btn">Подробнее</div>
                  </div>
                </div></a>
            </div>
          </div>
        </div>`, {

            // Переопределяем функцию build, чтобы при создании макета начинать
            // слушать событие click на кнопке-счетчике.
            build: function () {
                // Сначала вызываем метод build родительского класса.
                BalloonContentLayout.superclass.build.call(this);
                $('.resuls-map__tooltip .img_slider').slick({
                    fade:true,
                    // autoplay: true,
                    // autoplaySpeed: 4000,
                    dots:true,
                    infinite: false
                });
                // А затем выполняем дополнительные действия.
                // $('#counter-button').bind('click', this.onCounterClick);
                // $('#count').html(counter);
            },

            // Аналогично переопределяем функцию clear, чтобы снять
            // прослушивание клика при удалении макета с карты.
            clear: function () {
                // Выполняем действия в обратном порядке - сначала снимаем слушателя,
                // а потом вызываем метод clear родительского класса.
                // $('#counter-button').unbind('click', this.onCounterClick);
                BalloonContentLayout.superclass.clear.call(this);
            }

        });

       var zoomControl = new ymaps.control.ZoomControl({
            options: {
                size: "small",
                float: "none",
                position: {
                    top: screen.width > 991 ? 80 : 65,
                    right: screen.width > 991 ? 36 : 19
                }
            }
        });

   placemarks.forEach(function(item, i, arr) {
        
        var placemark = new ymaps.Placemark([item.altitude, item.lattitude], {
                // balloonContent: BalloonContentLayout
            }, {
                balloonContentLayout: BalloonContentLayout,

                iconLayout: 'default#image',
                iconImageHref: item.iconImageHref,
                iconImageSize: item.iconImageSize,
                iconImageOffset: item.iconImageOffset,
                // Запретим замену обычного балуна на балун-панель.
                // Если не указывать эту опцию, на картах маленького размера откроется балун-панель.
                balloonPanelMaxMapArea: 0,

                hideIconOnBalloonOpen: false,
                balloonOffset: [0, -15]
            });

        myMap.geoObjects.add(placemark);
   });


    myMap.controls.add(zoomControl);
}