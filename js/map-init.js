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
           	controls: ['zoomControl'], //оставляем только масштабирование
           	// behaviors: ['drag'] //оставляем только поведение drag
        });

       // Создание множественных маркеров в цикле
       placemarks.forEach(function(item, i, arr) {

       		var placemark = new ymaps.Placemark([item.altitude, item.lattitude], {
 
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