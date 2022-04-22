// jQuery(function() {

// 	// ibg class
// 		if('objectFit' in document.documentElement.style === false){
// 		  Array.prototype.forEach.call(document.querySelectorAll('._fit'), function(el){

// 		    var image = el.querySelector('img');
// 		    el.style.backgroundImage = 'url("'+image.src+'")';
// 		    el.classList.add('ibg');
// 		    el.classList.remove('_fit');
//  		 });
// 		}
// 	// End ibg class


	// jQuery(document).ready(function() {
	// 	console.log('jQuery document ready');
	// });

// 	//SVG Fallback
// 	// if(!Modernizr.svg) {
// 	// 	$("img[src*='svg']").attr("src", function() {
// 	// 		return $(this).attr("src").replace(".svg", ".png");
// 	// 	});
// 	// };

// 	//E-mail Ajax Send
// 	//Documentation & Example: https://github.com/agragregra/uniMail
// 	$("form").submit(function() { //Change
// 		var th = $(this);
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php", //Change
// 			data: th.serialize()
// 		}).done(function() {
// 			alert("Thank you!");
// 			setTimeout(function() {
// 				// Done Functions
// 				th.trigger("reset");
// 			}, 1000);
// 		});
// 		return false;
// 	});

// 	//Chrome Smooth Scroll
// 	try {
// 		$.browserSelector();
// 		if($("html").hasClass("chrome")) {
// 			$.smoothScroll();
// 		}
// 	} catch(err) {

// 	};

// 	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
// });

// $(window).on('load', function() {

// 	$(".loader_inner").fadeOut();
// 	$(".loader").delay(400).fadeOut("slow");

// });

(function() {
	// ibg class
	if('objectFit' in document.documentElement.style === false){
	  Array.prototype.forEach.call(document.querySelectorAll('._fit'), function(el){

	    var image = el.querySelector('img');
	    el.style.backgroundImage = 'url("'+image.src+'")';
	    el.classList.add('ibg');
	    el.classList.remove('_fit');
		 });
	}
	// End ibg class


	// correct height of map and filters
		if(screen.width <= 991 && isMobile.iOS()){
			console.log('ios detected');
			window.addEventListener('resize', () => {
			  document.querySelector('.resuls-map').style.setProperty('--height', `${window.innerHeight}px`);
			});

		}
	// END correct height of map and filters
	
	document.addEventListener('DOMContentLoaded', function() {
		console.log('DOMContentLoaded!');

		// console.log(picker);

		$(document).on('click', function(e) {
			var $target = $(e.target);
			console.log(e.target)
			
			// item-results-filter__dd toggle
			if($('.item-results-filter__dd').length > 0){

				var $filterDropdowns = $('.item-results-filter__dd');

				if($target.hasClass('results-filter__item') || $target.closest('.results-filter__item').length > 0 && !$target.closest('.item-results-filter__dd').length > 0){
					var $parent = $target.closest('.results-filter__item');
					$parent.toggleClass('active');
					$parent.siblings().removeClass('active');

					if($target.closest('.results-filter__item').hasClass('results-filter__item--dates')){
						$('#datepicker-static').click();
					}

				}else if(!$target.hasClass('results-filter__item') && !$target.closest('.results-filter__item').length > 0){
						$('.results-filter__item').removeClass('active');
				}
				if(screen.width >= 991){
					if($target.attr('id') === 'calendar-select'){
						$target.closest('.results-filter__item').removeClass('active');
						return false;
					}

				}

			}
			// END item-results-filter__dd toggle

			// results-map toggle
			if($target.closest('.results-filter__map-open').length > 0 || $target.hasClass('results-filter__map-open')){
				$('.resuls-map').addClass('active');
				$('html').addClass('map-open');
			}
			if($target.hasClass('resuls-map__close') || $target.closest('.resuls-map__close').length > 0){			
				$('.resuls-map').removeClass('active');
				$('html').removeClass('map-open');
			}
			// END results-map toggle

			// results-map mobile toggle
			if($target.attr('id') === 'mob-map-show' || $target.closest('#mob-map-show').length > 0){
				$('.resuls-map').addClass('active');
				$('html').addClass('map-open');
			}
			if($target.attr('id') === 'mob-filters-show' || $target.closest('#mob-filters-show').length > 0){			
				$('.resuls-map').removeClass('active');
			}
			// END results-map mobile toggle

			// mobile filters toggle
			if($target.attr('id') === 'mob-filters-show' || $target.closest('#mob-filters-show').length > 0){
				// $('.results-filter').addClass('active');
				$('html').addClass('mob-filters-open');
			}
			if($target.hasClass('header-results-filter__close') || $target.closest('.header-results-filter__close').length > 0){
				// $('.results-filter').removeClass('active');
				$('html').removeClass('mob-filters-open');
			}
			// END mobile filters toggle

			// filter-tags active class toggle
			if($target.closest('.filter-tag').length > 0){
				$target.closest('.filter-tag').toggleClass('active');
				if($('.filter-tags-wrapper .filter-tag').index($target.closest('.filter-tag')) === $('.filter-tags-wrapper .filter-tag').length - 1){
					$('.filter-tags').scrollLeft($('.filter-tags-wrapper .filter-tags').width() + $('.filter-tags-wrapper .filter-tags').eq(0).scrollLeft());
				}

			}

			// END filter-tags active class toggle

			// calendar mobile toggle
			if($target.closest('.item-results-filter__calendar-button').length > 0 || $target.hasClass('item-results-filter__calendar-button')){
				$('html').addClass('filter-calendar-open');
				// $('#datepicker-static').click();
			}
			if($target.hasClass('filter-cover')){
				$('html').removeClass('filter-calendar-open');
			}
			if($target.attr('id') === 'calendar-select'){
				$('html').removeClass('filter-calendar-open');
			}
			if($target.attr('id') === 'calendar-reset'){
				// $('#datepicker-static').val('');
				// $('#datepicker-static2').val('');

				// console.log(document.querySelector('.easepick-wrapper').shadowRoot.querySelectorAll('.day'));

				var calendarDays = document.querySelector('.easepick-wrapper').shadowRoot.querySelectorAll('.days-grid .day:not(.not-available)');
				for (var i=0; i < calendarDays.length; i++){
					calendarDays[i].classList.remove("in-range", "start", "end");
				}
				console.log($('#filter-datepikers').eq(0))
				$('#filter-datepikers')[0].reset();

				if(screen.width <= 991){
					$('html').removeClass('filter-calendar-open');
				}else{
					$target.closest('.results-filter__item').removeClass('active');
				}
				return false;
			}
			if(screen.width <= 991){
				if($target.attr('id') === 'datepicker-static' || $target.attr('id') === 'datepicker-static2'){
					$('html').addClass('filter-calendar-open');
				}
			}
			// END calendar mobile toggle

			// service items active class toggle
			if($('.place_service-item').closest('.item-results-filter__dd').length > 0){
				if($target.closest('.place_service-item').length > 0 && !$target.closest('.place_service-item').hasClass('disabled')){
					$target.closest('.place_service-item').toggleClass('active');
				}
			}
			// END service items active class toggle

			// pagination dwopdown toggle
			if($target.closest('.search-results-cards__pagin').length > 0 || $target.hasClass('search-results-cards__pagin')){
				$target.closest('.search-results-cards__pagin').toggleClass('active');
			}
			if($target.hasClass('pagin-dropdown__item')){
				$target.closest('.search-results-cards__pagin').removeClass('active');
				$('.search-results-cards__places-val').text($target.text());
			}
			if(!$target.closest('.search-results-cards__pagin').length > 0 && !$target.hasClass('search-results-cards__pagin')){
				$('.search-results-cards__pagin').removeClass('active');
			}
			// END pagination dwopdown toggle
		
		});//document.click

		// noUiSlider
		if(document.querySelector('.range-slider') !== null){
			var slider = document.querySelector('.range-slider'),
				inputMin = document.getElementById('minval').value,
				inputMax = document.getElementById('maxval');
					
			var noUi = noUiSlider.create(slider, {
				connect: [true, false],
				behaviour: 'tap',
				start: inputMin,
				// padding: 50,
				range: {
					'min': [100, 100],
					// '10%': [   100,  100 ],
					'25%': [   200,  200 ],
					'50%': [  300, 300 ],
					'75%': [  400, 400 ],
					// '90%': [  500, 500 ],
					'max': [ 500, 500 ]
				},
				pips: {mode: 'range', density: 100}

			});

			slider.noUiSlider.on('update', getValues);

			var pips = slider.querySelectorAll('.noUi-value');
			var markers = slider.querySelectorAll('.noUi-marker');
			
			for (var i = 0; i < pips.length; i++) {
			    pips[i].addEventListener('click', clickOnPip);
			}
			for (var i = 0; i < markers.length; i++) {
			    markers[i].addEventListener('click', clickOnMarker);
			}

			function clickOnPip() {
			    var value = Number(this.firstChild.textContent);
			    slider.noUiSlider.set(value);
			}
			function clickOnMarker() {
					var currentPipIndex = Array.prototype.slice.call(markers).indexOf(this),
							value = Number(pips[currentPipIndex].firstChild.textContent);
			    
			    this.classList.add('downed');
			    for (var i = 0; i < markers.length; i++) {
			    	if(markers[i] !== this) markers[i].classList.remove('downed');
			    }
			    slider.noUiSlider.set(value);
			}

			function getValues() {
				console.log(Number(slider.noUiSlider.get().slice(0, -3)))
				document.getElementById('minval').value = slider.noUiSlider.get();

				for (var i = 0; i < slider.querySelectorAll('.noUi-value').length; i++) {
						if(Number(slider.noUiSlider.get().slice(0, -3)) === Number(slider.querySelectorAll('.noUi-value')[i].firstChild.textContent)){
							 slider.querySelectorAll('.noUi-marker')[i].classList.add('downed');
							 slider.querySelectorAll('.noUi-value')[i].classList.add('active');
						    for (var n = 0; n < slider.querySelectorAll('.noUi-marker').length; n++) {
						    	if(slider.querySelectorAll('.noUi-marker')[n] !== slider.querySelectorAll('.noUi-marker')[i]) slider.querySelectorAll('.noUi-marker')[n].classList.remove('downed');
						    }
						}else{
							slider.querySelectorAll('.noUi-value')[i].classList.remove('active');
						}
				}

				$('.item-results-filter__dd .noUi-pips .noUi-value-horizontal').each(function(i, item) {
					if(Number(slider.noUiSlider.get().slice(0, -3)) >= Number(item.firstChild.textContent)){
						$(item).prev().addClass('active');
						// $(item).addClass('active');
					}else{
						$(item).prev().removeClass('active');
						// $(item).removeClass('active');
					}
				});
			}

			if($('.item-results-filter__dd .noUi-pips').length > 0){
				$('.item-results-filter__dd .noUi-pips .noUi-value-horizontal').each(function(i, item) {
					if(i == 0 || i == 4){
						var $km = $('<span class="pips-km"> км</span>')
						$(item).append($km)
					}
				});

			}
		}
		// END noUiSlider

		// result-form check
		if($('.item-results-filter__form').length > 0){
			$('.item-results-filter__form .item-results-filter__input').on('change', function() {
				console.log('change', $(this))
				$(this).closest('.results-filter__item').find('.item-results-filter__sort-key')
					.text($(this).val().toLowerCase());
			});
		}
		// END result-form check

		// filter-tags scroll check
		if($('.filter-tags-wrapper').length){
			$('.filter-tags').on('scroll', function(e) {				
				if(($(this).width() + e.target.scrollLeft) >= e.target.scrollWidth - $('.filter-tags-wrapper').find('.filter-tag').last().width()){
					$('.filter-tags-wrapper').addClass('cover-disabled');
				}else{
					$('.filter-tags-wrapper').removeClass('cover-disabled');
				}
			});
		}
		// END filter-tags scroll check
	});
	
	// tags fixed on mobile
		if($('.filter-tags-wrapper').length > 0){
			var $tagsWrapper = $('.filter-tags-wrapper'),
					tagsTop = $tagsWrapper.offset().top;

			$(document).on('scroll', function() {
				if($(this).scrollTop() > tagsTop && screen.width <= 991){
					 $tagsWrapper.addClass('fixed');
					 if(!$('.header').hasClass('fixed')){
					 	 $tagsWrapper.css('top', $('.header').height() + 'px');
					 }else{
					 	$tagsWrapper.css('top', 0);

					 }
				}else{
					 $tagsWrapper.removeClass('fixed');
					 $tagsWrapper.css('top', 0);
				}
			});
		}

	// END tags fixed on mobile
})();