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
				connect: [true, false],
				// behaviour: 'tap',
				start: [200],
				// padding: 50,
				range: {
					'min': [0],
					'10%': [   100,  100 ],
					'30%': [   200,  200 ],
					'50%': [  300, 300 ],
					'70%': [  400, 400 ],
					'90%': [  500, 500 ],
					'max': [ 550]
				},
				pips: {mode: 'range', density: 100}

			});

			slider.noUiSlider.on('update', getValues);
			// slider.noUiSlider.on('set', getValues);

			function getValues() {
				console.log(slider.noUiSlider.get())
				inputMin.value = slider.noUiSlider.get();

				$('.item-results-filter__dd .noUi-pips .noUi-value-horizontal').each(function(i, item) {
					if(Number(slider.noUiSlider.get().slice(0, -3)) >= Number(item.firstChild.textContent)){
						$(item).prev().addClass('active');
					}else{
						$(item).prev().removeClass('active');
					}
				});
			}

			if($('.item-results-filter__dd .noUi-pips').length > 0){
				$('.item-results-filter__dd .noUi-pips .noUi-value-horizontal').each(function(i, item) {
					if(i == 1 || i == 5){
						var $km = $('<span class="pips-km"> км</span>')
						$(item).append($km)
					}
				});

			}
		}
		// END noUiSlider
	});
})();