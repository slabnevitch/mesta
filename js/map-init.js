ymaps.ready(init);
   
   // множественные маркеры
    var placemarks = [
    	{
    		altitude: 56.256517,
    		lattitude: 43.638521,
        balloon: [
              '<div><img src="http://forum.chukotken.ru/uploads/1245366154/sml_gallery_13807_52_13276.jpg" alt="" /></div>',
              '<div>основал купец Шалауров. Энтузиаст</div>'
            ],
				iconImageHref: 'img/search-results-page/map-markers/type.svg',
				iconImageSize: [150, 150],
				iconImageOffset: [-75, -75]
    	},
      {
        altitude: 56.259193,
        lattitude: 43.905626,
        balloon: [
              '<div><img src="http://forum.chukotken.ru/uploads/1245366154/sml_gallery_13807_52_13276.jpg" alt="" /></div>',
              '<div>основал купец Шалауров. Энтузиаст</div>'
            ],
        iconImageHref: 'img/search-results-page/map-markers/cities.svg',
        iconImageSize: [150, 150],
        iconImageOffset: [-75, -75]
      },
      {
        altitude: 56.270370,
        lattitude: 43.922620,
        balloon: [
              '<div><img src="http://forum.chukotken.ru/uploads/1245366154/sml_gallery_13807_52_13276.jpg" alt="" /></div>',
              '<div>основал купец Шалауров. Энтузиаст</div>'
            ],
        iconImageHref: 'img/search-results-page/map-markers/eco.svg',
        iconImageSize: [150, 150],
        iconImageOffset: [-75, -75]
      },
      {
        altitude: 56.295387,
        lattitude: 44.004503,
        balloon: [
              '<div><img src="http://forum.chukotken.ru/uploads/1245366154/sml_gallery_13807_52_13276.jpg" alt="" /></div>',
              '<div>основал купец Шалауров. Энтузиаст</div>'
            ],
        iconImageHref: 'img/search-results-page/map-markers/type.svg',
        iconImageSize: [150, 150],
        iconImageOffset: [-75, -75]
      },
      {
        altitude: 56.256422,
        lattitude: 44.019609,
        balloon: [
              '<div><img src="http://forum.chukotken.ru/uploads/1245366154/sml_gallery_13807_52_13276.jpg" alt="" /></div>',
              '<div>основал купец Шалауров. Энтузиаст</div>'
            ],
        iconImageHref: 'img/search-results-page/map-markers/helmet.svg',
        iconImageSize: [150, 150],
        iconImageOffset: [-75, -75]
      },
      {
        altitude: 56.271134,
        lattitude: 44.065958,
        balloon: [
              '<div><img src="http://forum.chukotken.ru/uploads/1245366154/sml_gallery_13807_52_13276.jpg" alt="" /></div>',
              '<div>основал купец Шалауров. Энтузиаст</div>'
            ],
        iconImageHref: 'img/search-results-page/map-markers/camera.svg',
        iconImageSize: [150, 150],
        iconImageOffset: [-75, -75]
      },
      {
        altitude: 56.301687,
        lattitude: 44.043642,
        balloon: [
              `<div class="result-card similar_slide">
              <div class="similar_slide-imgs img_slider">
                <div style="background-image: url(img/similar_slide.jpg);" class="similar_slide-img"><span class="icon-place_type"></span></div>
                <div style="background-image: url(img/place_img6.png);" class="similar_slide-img"><span class="icon-place_type"></span></div>
                <div style="background-image: url(img/place_page.png);" class="similar_slide-img"><span class="icon-place_type"></span></div>
              </div>
              <div class="similar_slide-info">
                <div class="similar_slide-top"><a href="#" title="" class="room_card-title">Шале 3-х местный Шале 3-х местный Шале 3-х местный</a>
                  <div class="similar_slide-like"><span class="icon-like_card"></span></div>
                </div><a href="#" class="result-card__link">
                  <div class="similar_slide-adres"><span class="icon-place_contacts-item2"></span>
                    <div class="similar_slide-adres_title">Московская область, Сергиево-ПосадсПосадсПосадсПосадс</div>
                    <div class="similar_slide-adres_distance">250км</div>
                  </div>
                  <div class="similar_slide-text">Её нарекли сердцем России, но под это описание подойдет любой из уютных городков Золотого кольца. Справедливее назвать столицу головой необъятной страны. Москва - шумная, дорогая, гордая, жестокая, но до неприличия красивая и притягательная. Ежегодно город принимает туристов со всего света, заковывая в холодные объятия. 
                  </div>
                  <div class="similar_slide-link">
                    <div class="similar_slide-sutitle">
                      <div class="similar_slide-rating">8.1/10<span class="icon-rating"></span></div>
                      <div class="similar_slide-reviews">11 отзывов</div>
                    </div>
                    <div class="similar_slide-btn btn">Подробнее</div>
                  </div></a>
              </div>
            </div>`
            ],
        iconImageHref: 'img/search-results-page/map-markers/children.svg',
        iconImageSize: [150, 150],
        iconImageOffset: [-75, -75]
        // getShape: function () {
        //             if(!this._isElement(this._$element)) {
        //                 return MyBalloonLayout.superclass.getShape.call(this);
        //             }

        //             var position = this._$element.position();

        //             return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
        //                 [position.left, position.top], [
        //                     position.left + this._$element[0].offsetWidth,
        //                     position.top + this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight
        //                 ]
        //             ]));
        //         },
      },
      {
        altitude: 56.392246,
        lattitude: 44.069734,
        balloon: [
              '<div><img src="http://forum.chukotken.ru/uploads/1245366154/sml_gallery_13807_52_13276.jpg" alt="" /></div>',
              '<div>основал купец Шалауров. Энтузиаст</div>'
            ],
        iconImageHref: 'img/search-results-page/map-markers/camera.svg',
        iconImageSize: [150, 150],
        iconImageOffset: [-75, -75]
      },
      {
        altitude: 56.402527,
        lattitude: 44.054285,
        balloon: [
              '<div><img src="http://forum.chukotken.ru/uploads/1245366154/sml_gallery_13807_52_13276.jpg" alt="" /></div>',
              '<div>основал купец Шалауров. Энтузиаст</div>'
            ],
        iconImageHref: 'img/search-results-page/map-markers/type.svg',
        iconImageSize: [150, 150],
        iconImageOffset: [-75, -75]
      }
    ];

    function init(){     
       var myMap = new ymaps.Map("map", {
            center: [56.353475, 44.009309],
            zoom: 11,
           	controls: ['zoomControl', 'fullscreenControl'], //оставляем только масштабирование
           	// behaviors: ['drag'] //оставляем только поведение drag
        });

       // Создание множественных маркеров в цикле
       placemarks.forEach(function(item, i, arr) {

       		var placemark = new ymaps.Placemark([item.altitude, item.lattitude], {
            balloonContent: item.balloon.join('')
       		},
       		{
       			iconLayout: 'default#image',
       			iconImageHref: item.iconImageHref,
       			iconImageSize: item.iconImageSize,
       			iconImageOffset: item.iconImageOffset
       		});

       		myMap.geoObjects.add(placemark);
       });

    }