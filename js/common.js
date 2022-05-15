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
	if($('.resuls-map').length < 0){
		if(screen.width <= 991 && isMobile.iOS()){
			window.addEventListener('resize', () => {
			  document.querySelector('.resuls-map').style.setProperty('--height', `${window.innerHeight}px`);
			});

		}
		
	}
	// END correct height of map and filters
	
		// dropzone
		if($('.dropzone').length > 0){
			
			var modalShowCount = 0;
			
			Dropzone.autoDiscover = false; // remove error from console

			var dropzone = new Dropzone("#my-awesome-dropzone", { // Make the whole body a dropzone
			  // url: "/target-url", // Set the url
			  previewsContainer: '.popup-place-objec__previews',
			  parallelUploads: 1,
			  maxFiles: 5,
			  thumbnailHeight: null,
			  thumbnailWidth: null,
			  thumbnailMethod: 'contain',
			  // autoQueue: false,
			  // autoProcessQueue: false,
			  // maxFilesize: 1,
			  // filesizeBase: 1000,
			  acceptedFiles: "image/*,video/*",
			  // acceptedFiles: "image/*,video/*.jpeg,.jpg,.png,.gif,.jfif",
			  init: function() {
			  	this.on("addedfile", function(file) {
			  		console.log("addedfile");
					  // console.log(file.type);
					  // console.log(this.files);

					  // if(file.type.split('/')[0] === "video"){
					  // 	console.log("if!");
					  // 	 // dropzone.enqueueFile(file);
				   //      if(modalShowCount == 0){
				   //      	showFilesErroModal();
						 //  		modalShowCount++;
				   //      }
				   //      this.removeFile(file);
				  	// 	modalShowCount = 0;
					  // }
					  if (this.files[4]!=null){
				       this.removeFile(this.files[0]);
				     }
			  	});
			  },
			  previewTemplate: `<div class="dz-preview dz-file-preview">
				  <div class="dz-details">
				    <img class="dz-image" data-dz-thumbnail />
				  </div>
				  <div class="dz-progress">
				  	<span class="dz-text">Загрузка...</span>
				  	<div class="dz-upload-wrap">
				  		<span class="dz-upload" data-dz-uploadprogress></span>
				  	</div>
		  		   </div>
				  	<div class="dz-progress__del" data-dz-remove>
				  		<div class="icon-delet_b"></div>
				  	<div>
				  	<div class="dz-error-message"><span data-dz-errormessage></span></div>
				</div>
				</div>`
			});

			var minSteps = 6,
			    maxSteps = 60,
			    timeBetweenSteps = 100,
			    bytesPerStep = 100000;

			dropzone.uploadFiles = function(files) {
				console.log('uploadFiles');
				console.log(files);
			  var self = this;

			  for (var i = 0; i < files.length; i++) {

			    var file = files[i];
			    totalSteps = Math.round(Math.min(maxSteps, Math.max(minSteps, file.size / bytesPerStep)));

			    for (var step = 0; step < totalSteps; step++) {
			      var duration = timeBetweenSteps * (step + 1);
			      setTimeout(function(file, totalSteps, step) {
			        return function() {
			          file.upload = {
			            progress: 100 * (step + 1) / totalSteps,
			            total: file.size,
			            bytesSent: (step + 1) * file.size / totalSteps
			          };

			          self.emit('uploadprogress', file, file.upload.progress, file.upload.bytesSent);
			          console.log(file.upload.progress)
			          if (file.upload.progress == 100) {
			            file.status = Dropzone.SUCCESS;
			            self.emit("success", file, 'success', null);
			            self.emit("complete", file);
			            self.processQueue();
			            //document.getElementsByClassName("dz-success-mark").style.opacity = "1";
			          }
			        };
			      }(file, totalSteps, step), duration);
			    }
			  }
			}

		dropzone.accept = function(file, done) {
			  console.log('accept: ' + modalShowCount);
			  	var fileType = file.type.split('/')[0];
			  	var _self = this;
            file.acceptDimensions = done;

			  // file.acceptDimensions = done;
            
			  file.rejectDimensions = function() { 
			  		console.log('filetype in reject !' + fileType)
			  	

			  	if(this.width < 1920 || this.height < 1080 ){
			  		done("Image width or height too small.");
			  		// _self.removeAllFiles(true);
			  	}
			  	if(this.size < 1024*1024*10/*2MB*/){
			  		done("So big weight"); 
			  		// _self.removeAllFiles(true);
			  	}
			  	if(fileType === "video"){
			  		console.log('Video tupe!')
			  	}

			  }

			  if(file.type.split('/')[0] === "video"){
			  		done('video');
			  		// this.removeAllFiles(true)
			  	// dropzone.removeFile(file);
			  	// if(modalShowCount === 0) {
				  // 	showFilesErroModal()
					 //  modalShowCount++;
			  	// }
			  	// dropzone.removeFile(file);
		  		// modalShowCount = 0;
			  }

   		}

			dropzone.on("thumbnail", function(file){
			 
			  console.log(file.type);
			  console.log(this);
			  console.log("thumbnail: " + modalShowCount);
			  if(file.type.split('/')[0] === "video" || file.width < 1920 || file.height < 1080 || file.size > 1024*1024*10/*10MB*/){
			  	 file.rejectDimensions();
			  	 this.removeFile(file);
			  	 // this.removeAllFiles(true);
			  	 
			  	 if(modalShowCount === 0) {
				  	showFilesErroModal()
					  modalShowCount++;
			  	}
			  }else{
			  	file.acceptDimensions();
		  		$('#my-awesome-dropzone .dz-message').addClass('previewed');
			  }
			  // modalShowCount = 0;
			});


			dropzone.on("removedfile", file => {
			  console.log("A file has been removed");
			  if(!$('#my-awesome-dropzone .popup-place-objec__previews').children().length > 0){
			  	$('#my-awesome-dropzone .dz-message').removeClass('previewed');
			  	// modalShowCount = 0;
			  }
			});
		}
		
		function showFilesErroModal(){
			$.fancybox.open({
				  		src: '#gratitude-popup',
				  		type: 'inline',
				  		touch: false,
				  		autoFocus: false,
				  		afterLoad: function (instance, current) {
				  			$('body,html').addClass('active')
				  		},
				  		beforeClose: function(){
				  			$('body,html').removeClass('active')
				  		}
				  	});
		}
		// END dropzone
	document.addEventListener('DOMContentLoaded', function() {


		$(document).on('click', function(e) {
			var $target = $(e.target);
			
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
				
				var calendarDays = document.querySelector('.easepick-wrapper').shadowRoot.querySelectorAll('.days-grid .day:not(.not-available)');
				for (var i=0; i < calendarDays.length; i++){
					calendarDays[i].classList.remove("in-range", "start", "end");
				}

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

			// popups
				if($target.attr('id') === 'successfully-open' || $target.attr('id') === 'gratitude-open'){
					 $.fancybox.close();

					 // var fancyboxTarget = $target.attr('id').split('-').[0].spli

					 $.fancybox.open({
					 	src: '#' + $target.attr('data-open') + '-popup',
					 	type: 'inline',
					 	touch: false,
					 	autoFocus: false,
					 	afterLoad: function (instance, current) {
					 		$('body,html').addClass('active')
					 	},
					 	beforeClose: function(){
					 		$('body,html').removeClass('active')
					 	}
					 });

					 return false;
				}

				if($target.attr('id') === 'successfully-close' || $target.attr('id') === 'gratitude-close'){
					modalShowCount = 0;
					console.log('gratitude-close');
					$.fancybox.close();
				}
			// END popups
		
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

		// input phone mask
		if($('[type="tel"]').length > 0){
			$('[type="tel"]').mask('+7 (999) 999-99-99');
		}
		// END input phone mask

		// elstic textarea
		if($('textarea.form_inp').length > 0){
			function elasticArea() {
			    $('textarea.form_inp').each(function(index, element) {
			       var elasticElement = element,
			          $elasticElement = $(element),
			          initialHeight = initialHeight || $elasticElement.height(),
			          delta = parseInt( $elasticElement.css('paddingBottom') ) + parseInt( $elasticElement.css('paddingTop') ) || 0,
			          resize = function() {
			            $elasticElement.height(initialHeight);
			            $elasticElement.height( elasticElement.scrollHeight - delta );
			        };
			      $elasticElement.on('input change keyup', resize);
			      resize();
			    });
			  };
			elasticArea();
		}
		// END elstic textarea
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