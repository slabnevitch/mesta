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
	// if('objectFit' in document.documentElement.style === false){
	//   Array.prototype.forEach.call(document.querySelectorAll('._fit'), function(el){

	//     var image = el.querySelector('img');
	//     el.style.backgroundImage = 'url("'+image.src+'")';
	//     el.classList.add('ibg');
	//     el.classList.remove('_fit');
	// 	 });
	// }
	// End ibg class

	document.addEventListener('DOMContentLoaded', function() {
		console.log('DOMContentLoaded!');

		// item-results-filter__dd toggle
		$(document).on('click', function(e) {
			var $target = $(e.target);
			if($('.item-results-filter__dd').length > 0){

				var $filterDropdowns = $('.item-results-filter__dd');

				if($target.hasClass('results-filter__item') || $target.closest('.results-filter__item').length > 0 && !$target.closest('.item-results-filter__dd').length > 0){
					console.log('click if')
					var $parent = $target.closest('.results-filter__item');
					$parent.toggleClass('active');
					$parent.siblings().removeClass('active');

					if($parent.hasClass('results-filter__item--dates')){
						console.log($parent.find('.show').height());
					}
				}else if(!$target.hasClass('results-filter__item') && !$target.closest('.results-filter__item').length > 0){
					console.log('click else')
					$('.results-filter__item').removeClass('active');
				}

			}
		});
		// END item-results-filter__dd toggle

		// noUiSlider
		if(document.querySelector('.range-slider') !== null){
			var slider = document.querySelector('.range-slider'),
				inputMin = document.getElementById('minval'),
				inputMax = document.getElementById('maxval');
					
			var noUi = noUiSlider.create(slider, {
				connect: true,
				behaviour: 'tap',
				start: [0, 1000],
				range: {
					min: 0,
					max: 5000 
				}
				// format: wNumb({
				// 	decimals: 0,
				// 	thousand: ' '
				// }),
			});

			slider.noUiSlider.on('update', getValues);
			slider.noUiSlider.on('set', getValues);

			function getValues() {
				console.log(slider.noUiSlider.get()[0])
				inputMin.value = slider.noUiSlider.get()[0];
				inputMax.value = slider.noUiSlider.get()[1];			
			}

			inputMax.addEventListener('change', function() {
				slider.noUiSlider.set([null, +inputMax.value]);
			});
			inputMin.addEventListener('change', function() {
				console.log('min change!')
				slider.noUiSlider.set([+inputMin.value, null]);
			});

		}
		// END noUiSlider
	});
})();