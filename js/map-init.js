ymaps.ready(init);
   
   // множественные маркеры
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

    function init(){     
       var myMap = new ymaps.Map("map", {
            center: [56.353475, 44.009309],
            zoom: 11,
           	controls: [], //оставляем только масштабирование
           	// behaviors: ['drag'] //оставляем только поведение drag
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

       // Создание множественных маркеров в цикле
       placemarks.forEach(function(item, i, arr) {

       		var placemark = new ymaps.Placemark([item.altitude, item.lattitude], {
            // balloonContent: item.balloon.join('')
       		},
       		{
       			iconLayout: 'default#image',
       			iconImageHref: item.iconImageHref,
       			iconImageSize: item.iconImageSize,
       			iconImageOffset: item.iconImageOffset
       		});

       		myMap.geoObjects.add(placemark);
       });
   		
 			myMap.controls.add(zoomControl);

    }