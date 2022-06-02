$(document).ready(function () {

    const DateTime = easepick.DateTime;
    const bookedDates = [
        '2022-05-28',
        '2022-05-29',
    ].map(d => {
        if (d instanceof Array) {
          const start = new DateTime(d[0], 'YYYY-MM-DD');
          const end = new DateTime(d[1], 'YYYY-MM-DD');

          return [start, end];
        }

        return new DateTime(d, 'YYYY-MM-DD');
    });

    if($('#datepicker').length > 0){
        const picker = new easepick.create({
            element: "#datepicker",
            css: [
                "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.0.2/dist/index.css",
                "../css/calendar.css",
            ],
            zIndex: 10,
            strict: false,
            lang: "ru-RU",
            format: "DD MMMM YYYY",
            grid: 3,
            RangePlugin: {
                elementEnd: "#datepicker2",
                tooltip: false,
                strict: false,
                repick: true,
            },
            LockPlugin: {
                presets: false,
            },
            plugins: [
                "RangePlugin",
                "LockPlugin"
            ],
            LockPlugin: {
                minDate: new Date(),
                minDays: 3,
                inseparable: true,
                filter(date, picked) {
                    if (picked.length === 1) {
                      const incl = date.isBefore(picked[0]) ? '[)' : '(]';
                      return !picked[0].isSame(date, 'day') && date.inArray(bookedDates, incl);
                    }
        
                    return date.inArray(bookedDates, '[)');
                  },
                  
            },
            setup(picker) {
               


                  const prices = [];
    
                  $('.calendar_item').each(function (index, value) {
                    let title = $(this).text()
                    let priceTotal = $(this).attr('data-time')
                    prices[priceTotal] = title
                  })
                

              
    
                // add price to day element
                picker.on('view', (evt) => {
                    
                  const { view, date, target } = evt.detail;
                  const d = date ? date.format('YYYY-MM-DD') : null;
                  if (view === 'CalendarDay' && prices[d]) {
                    const span = target.querySelector('.day-price') || document.createElement('span');
                    span.className = 'day-price';
                    span.innerHTML = `${prices[d]}`;
                    target.append(span);
               
                  }
                  if (view === 'CalendarFooter') {
                    const span = target.querySelector('.footer_btn') || document.createElement('span');
                    span.className = 'footer_inner';
                    span.innerHTML = `<div class="footer_text">Минимум 3 ночи</div>
                    <div class="footer_subtext">Отель работает с мая</div>`;
                    target.append(span )
                  
                  }
                });
                picker.on('select', (evt) => {
                    picker.hide()
                });
            }
          
        })
    }

    if($('#datepicker_solo').length > 0){
        const picker = new easepick.create({
            element: "#datepicker_solo",
            css: [
                "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.0.2/dist/index.css",
                "../css/calendar.css"
            ],
            zIndex: 10,
            lang: "ru-RU",
            format: "DD MMMM YYYY",
            grid: 3,
            RangePlugin: {
                tooltip: false
            },
            LockPlugin: {
                presets: false,
            },
            plugins: [
                "RangePlugin",
                "LockPlugin"
            ],
            LockPlugin: {
                minDate: new Date(),
                minDays: 2,
                inseparable: true,
            }
        })
    }

    if($('#filter_data').length > 0){
        const picker = new easepick.create({
            element: "#filter_data",
            css: [
                "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.0.2/dist/index.css",
                "../css/calendar_filter.css",
            ],
            zIndex: 1,
            autoApply: false,
            lang: "ru-RU",
            grid: 3,
            format: "MM/DD/YYYY",
            RangePlugin: {
                elementEnd: "#filter_data2",
                tooltip: false
            },
            locale: {
                cancel: "Отменить",
                apply: "Выбрать"
            },
            LockPlugin: {
                presets: false,
            },
            plugins: [
                "RangePlugin",
                "LockPlugin"
            ],
            LockPlugin: {
                minDate: new Date(),
                minDays: 3,
                inseparable: true,
                filter(date, picked) {
                    if (picked.length === 1) {
                      const incl = date.isBefore(picked[0]) ? '[)' : '(]';
                      return !picked[0].isSame(date, 'day') && date.inArray(bookedDates, incl);
                    }
        
                    return date.inArray(bookedDates, '[)');
                  },
                  
            },
            
            setup(picker) {
               


                  const prices = [];
    
                  $('.calendar_item').each(function (index, value) {
                    let title = $(this).text()
                    let priceTotal = $(this).attr('data-time')
                    prices[priceTotal] = title
                  })
                

              
    
                // add price to day element
                picker.on('view', (evt) => {
                  
                  const { view, date, target } = evt.detail;
                  const d = date ? date.format('YYYY-MM-DD') : null;
                  if (view === 'CalendarDay' && prices[d]) {
                    const span = target.querySelector('.day-price') || document.createElement('span');
                    span.className = 'day-price';
                    span.innerHTML = `${prices[d]}`;
                    target.append(span);
               
                  }
                  if (view === 'CalendarFooter') {
                    const span = target.querySelector('.footer_btn') || document.createElement('span');
                    span.className = 'footer_inner';
                    span.innerHTML = `<div onclick="$('.mobile_filter-title').click()" class="footer_over"></div>`;
                    target.append(span )
                  
                  }
                });
               
            }
          
        })
    }
    $('.mobile_filter-inp').click(function (){
        $('.mobile_filter').toggleClass('active')
    })

	$('.popup_calendar-clean').click(function (){



    })
        




    if($('#datepicker_inline').length > 0){
        const picker = new easepick.create({
            element: "#datepicker_inline",
            css: [
                "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.0.2/dist/index.css",
                "../css/calendar.css"
            ],
            zIndex: 10,
            lang: "ru-RU",
            inline: true,
            format: "DD MMMM YYYY",
            grid: 1,
            RangePlugin: {
                elementEnd: "#datepicker_inline",
                tooltip: false
            },
            LockPlugin: {
                presets: false
            },
         
            plugins: [
                "RangePlugin",
                "LockPlugin",
            ],
            LockPlugin: {
                minDate: new Date(),
                minDays: 2,
                inseparable: true,
                filter(date, picked) {
                    if (picked.length === 1) {
                      const incl = date.isBefore(picked[0]) ? '[)' : '(]';
                      return !picked[0].isSame(date, 'day') && date.inArray(bookedDates, incl);
                    }
        
                    return date.inArray(bookedDates, '[)');
                  },
            },
            setup(picker) {
    
    
                const prices = [];
  
                $('.calendar_item').each(function (index, value) {
                  let title = $(this).text()
                  let priceTotal = $(this).attr('data-time')
                  prices[priceTotal] = title
                })
  
  
              // add price to day element
              picker.on('view', (evt) => {
                const { view, date, target } = evt.detail;
                const d = date ? date.format('YYYY-MM-DD') : null;
    
                if (view === 'CalendarDay' && prices[d]) {
                  const span = target.querySelector('.day-price') || document.createElement('span');
                  span.className = 'day-price';
                  span.innerHTML = `${prices[d]}`;
                  target.append(span);
                }
              });
          }
      
        })
    }
    
    if($('#datepicker_mobile').length > 0){
        const picker = new easepick.create({
            element: "#datepicker_mobile",
            css: [
                "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.0.2/dist/index.css",
                "../css/calendar.css"
            ],
            zIndex: 10,
            lang: "ru-RU",
            inline: true,
            format: "DD MMMM YYYY",
            grid: 3,
            RangePlugin: {
                elementEnd: "#datepicker_mobile",
                tooltip: false
            },
            LockPlugin: {
                presets: false
            },
         
            plugins: [
                "RangePlugin",
                "LockPlugin",
            ],
            LockPlugin: {
                minDate: new Date(),
                minDays: 2,
                inseparable: true,
                filter(date, picked) {
                    if (picked.length === 1) {
                      const incl = date.isBefore(picked[0]) ? '[)' : '(]';
                      return !picked[0].isSame(date, 'day') && date.inArray(bookedDates, incl);
                    }
        
                    return date.inArray(bookedDates, '[)');
                  },
            },
            setup(picker) {
    
    
                const prices = [];
  
                $('.calendar_item').each(function (index, value) {
                  let title = $(this).text()
                  let priceTotal = $(this).attr('data-time')
                  prices[priceTotal] = title
                })
  
  
              // add price to day element
              picker.on('view', (evt) => {
                const { view, date, target } = evt.detail;
                const d = date ? date.format('YYYY-MM-DD') : null;
    
                if (view === 'CalendarDay' && prices[d]) {
                  const span = target.querySelector('.day-price') || document.createElement('span');
                  span.className = 'day-price';
                  span.innerHTML = `${prices[d]}`;
                  target.append(span);
                }
              });
            
          }
      
        });
    }
    
    if($('#datepicker_author').length > 0){
        const picker = new easepick.create({
            element: "#datepicker_author",
            css: [
                "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.0.2/dist/index.css",
                "../css/calendar.css"
            ],
            zIndex: 10,
            lang: "ru-RU",
            inline: true,
            format: "DD MM",
            RangePlugin: {
                elementEnd: "#datepicker_author",
                tooltip: false
            },
            LockPlugin: {
                presets: false
            },
            plugins: [
                "RangePlugin",
                "LockPlugin",
            ],
            LockPlugin: {
                minDate: new Date(),
                minDays: 0,
                inseparable: true,
                filter(date, picked) {
                    if (picked.length === 1) {
                      const incl = date.isBefore(picked[0]) ? '[)' : '(]';
                      return !picked[0].isSame(date, 'day') && date.inArray(bookedDates, incl);
                    }
        
                    return date.inArray(bookedDates, '[)');
                  },
            },
    
        });
        $('.popup_calendar-clean').click(function (){
            $('#author_form')[0].reset();
            var calendarDays = document.querySelector('.easepick-wrapper').shadowRoot.querySelectorAll('.days-grid .day:not(.not-available)');
				for (var i=0; i < calendarDays.length; i++){
					calendarDays[i].classList.remove("in-range", "start", "end");
				}
        })
       
    }

    

    $('.main_search').click(function () {
        
      
        if($(window).width() < 576){
            $('.main_search-inp').blur()
            $('body, html').addClass('active')
            $.fancybox.open({
                src: '.mobile_seatch',
                type: 'inline',
                touch: false,
                autoFocus: false,
            });
        }
    
    })
    $('.mobile_seatch-close').click(function () {
        $('body, html').removeClass('active')
     
        if($(window).width() < 576){
            $('body, html').removeClass('active')
            $.fancybox.close();
        }
        $('.mobile_seatch .city_search-wrapper').scrollTop(0)
    })


    $('.header_inp').focus(function (){
        $('.header_search').addClass('active')
        $('.search_body').addClass('active')
    })
    
    $('.header_inp').keyup(function (){
        if($(this).val().length > 0){
            $('.serch_recently').addClass('none')
            $('.search_result').addClass('active')
        }
        else{
            $('.serch_recently').removeClass('none')
            $('.search_result').removeClass('active')  
        }
    })
    $('.header_inp').blur(function (){
        $('.header_search').removeClass('active')
        $('.search_body').removeClass('active')
        $('.header_inp').val('')
        $('.serch_recently').removeClass('none')
        $('.search_result').removeClass('active')  
    })
    $('.header_search-delete').click(function () {
        $('.header_inp').val('')
    })

    $('.city_search-delete').click(function () {
        $('.city_search-inp').val('')
    })

    $('.interesting_card-like').click(function () {
        $(this).toggleClass('active')
    })



    $('.place_show').click(function () {
        $('.place_show, .place_text-hidden').toggleClass('active')
    })

    $('.room_slider').slick({
        infinite: false,
        slidesToShow: 2.62,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows:false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows:false,
                    slidesToShow: 1.22,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows:false,
                    slidesToShow: 0.984,
                    variableWidth: false,
                    centerMode: true,
                    centerPadding: '0',
                }
            },
        ]
    })


    $('.room_slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        if($('.room_slider .slick-next ').hasClass('slick-disabled')){
            $('.room_slider').addClass('last_slide')
        }
        else{
            $('.room_slider').removeClass('last_slide')
        }
      });




    $('.img_slider').slick({
        fade:true,
        // autoplay: true,
        // autoplaySpeed: 4000,
        dots:true,
        infinite: false,
        
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows:false,
                }
            },
        ]
    }).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {



        if (!event.target.classList.contains('similar_slider')) {
            return;
        }
    })
    $('.img_slider').on('swipe', function (event, slick, currentSlide, nextSlide) {

        let thisClick = $(this).closest('.img_slider')
        thisClick.find('li').removeClass('before after');
        thisClick.find('li.slick-active').next().addClass('after')
        thisClick.find('li.slick-active').prev().addClass('before')
        if(thisClick.find('li:last-child').hasClass('after')){
            thisClick.find('li.before').prev().addClass('before')
        }
       else if(thisClick.find('li:last-child').hasClass('slick-active')){
            thisClick.find('li.slick-active').prev().prev().addClass('before')
            thisClick.find('li.slick-active').prev().prev().prev().addClass('before')
        }
        else if(thisClick.find('li:first-child').hasClass('before')){
            thisClick.find('li.after').next().addClass('after')
        }
        else if(thisClick.find('li').eq(0).hasClass('slick-active')){
            thisClick.find('li.slick-active').next().next().addClass('after')
            thisClick.find('li.slick-active').next().next().next().addClass('after')
        }
    })

    $('.img_slider li, .img_slider .slick-arrow').on('click', function (){
        let thisClick = $(this).closest('.img_slider')
        thisClick.find('li').removeClass('before after');
        thisClick.find('li.slick-active').next().addClass('after')
        thisClick.find('li.slick-active').prev().addClass('before')
        if(thisClick.find('li:last-child').hasClass('after')){
            thisClick.find('li.before').prev().addClass('before')
        }
       else if(thisClick.find('li:last-child').hasClass('slick-active')){
            thisClick.find('li.slick-active').prev().prev().addClass('before')
            thisClick.find('li.slick-active').prev().prev().prev().addClass('before')
        }
        else if(thisClick.find('li:first-child').hasClass('before')){
            thisClick.find('li.after').next().addClass('after')
        }
        else if(thisClick.find('li').eq(0).hasClass('slick-active')){
            thisClick.find('li.slick-active').next().next().addClass('after')
            thisClick.find('li.slick-active').next().next().next().addClass('after')
        }
    })


 

    $('.img_slider').each(function () {
        $(this).find('li.slick-active').next().addClass('after')
                                              .next().addClass('after')
                                                     .next().addClass('after')
    });

















    $('.faq_item-title').click(function (){
        $('.faq_item-title').not(this).next().slideUp(600)
        $(this).next().slideToggle(600)
        $(this).toggleClass('active')
        $('.faq_item-title').not(this).removeClass('active')
    })

    $('.place_promo-top').click( function (){
        $(this).toggleClass('active')
        $(this).next().slideToggle(600)
    })
    $('.place_promo .form_inp').keyup( function (){
        if($(this).val().length > 0){
            $('.place_promo-btn').removeClass('disable')
        }
        else{
            $('.place_promo-btn').addClass('disable')
        }
    })


    
    


    $('.place_promo-btn').click( function (e){
       
        setTimeout(() => {
            $('.place_promo-top, .place_promo-bot').remove();
        }, 200);
        $('.place_promo-done').addClass('active')  
    })

    $('.similar_slider').slick({
        infinite: false,
        slidesToShow:3,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows:false,
                    slidesToShow:2.5,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows:false,
                    slidesToShow:1.9,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows:false,
                    slidesToShow: 0.984,
                    variableWidth: false,
                    centerMode: true,
                    centerPadding: '0',
                }
            },
        ]
    })

 





    $('.img_slider').on('touchstart', function(event) {
        event.stopPropagation();
      });

        $.fn.extend({
            toggleText: function (a, b) {
                if (this.html() == a) { this.html(b) }
                else { this.html(a) }
            }
        });









    $('.room_card-more, .tariffs_card-more , .confirmation_subtitle .more').click( function (){
        $('.popup_rooms-slider ').slick('refresh')
      })
    
      $('.similar_slide-like').click(function (){
          $(this).toggleClass('active')
      })


    $('.popup_rooms-slider').slick({
        infinite: false,
        slidesToShow: 2.6,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows:false,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows:false,
                    slidesToShow: 1.22,
                    variableWidth: false,
                }
            },
        ]
    })

    $('.popup_rooms-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        if($('.popup_rooms-slider .slick-next ').hasClass('slick-disabled')){
            $('.popup_rooms-slider').addClass('last_slide')
        }
        else{
            $('.popup_rooms-slider').removeClass('last_slide')
        }
      });


    $('select').each(function () {
        var $this = $(this), numberOfOptions = $(this).children('option').length;
      
        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');
      
        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());
      
        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);
      
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val(),
                Onclick: $this.children('option').eq(i).attr('onclick'),
            }).appendTo($list);
        }
      
        var $listItems = $list.children('li');
      
        $styledSelect.on("click", function (e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function () {
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();

        });
      
        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
        });
      
        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });
      
      
      });

      $('input[type=tel]').mask('+7 (999) 999-99-99');
    

      $('.form_inp-wrapper .select-options li:first-child').text('Отмена')

      $('.form_inp-wrapper .select-options li:first-child').click( function (){
          $(this).closest('.form_inp-wrapper').find('.select-styled').text('Выбрать')
      })


  
  





    if($('.header').length > 0){

            window.onscroll = function showHeader() {
                let headerFix = document.querySelector('.header');
                if($('.header').hasClass('header_flex')){
                if (window.pageYOffset > 100 && window.pageYOffset > window.scrolltop) {
                  headerFix.classList.add('fixed');
                  } else {
                    headerFix.classList.remove('fixed');
            
                  }
                  scrolltop = pageYOffset;
                }
                else if($('.header').hasClass('header_home')){
                    if (window.pageYOffset > 100 && window.pageYOffset > window.scrolltop) {
                        headerFix.classList.add('fixed');
                        } else {
                          headerFix.classList.remove('fixed');
                  
                        }
                        scrolltop = pageYOffset;  
                 }

                else{
                    if($(window).width() <767){
                        if (window.pageYOffset > 100 && window.pageYOffset > window.scrolltop) {
                            headerFix.classList.add('fixed');
                            } else  {
                              headerFix.classList.remove('fixed');
                      
                            }
                            scrolltop = pageYOffset;  
                    }
                }
                if (window.pageYOffset > 300) {
                    headerFix.classList.add('scroll');
                } else  if (window.pageYOffset < 300){
                    headerFix.classList.remove('scroll');
                }
            };
    
 
    }


    $('.info_block-show').click( function (){
        $(this).toggleText('Спрятать', 'Читать дальше');
        $(this).prev().slideToggle(600)
    })


      $(document).on('click', '.popup_btn', function () {
        event.preventDefault();
        var idPopup = $(this).attr('href');
        $.fancybox.close( 
        );
        $.fancybox.open({
            src: idPopup,
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
      });   


      $('.servise_tab-top').click(function (){
          if($(this).find('.servise_done').length > 0){

          }
          else{
            $(this).next().slideToggle(600)
            $(this).toggleClass('active')
          }
         
      })

      $('.servise_done').click(function (){
        $(this).next().slideToggle(300)
      })



      $('.confirmation_tab-show').click( function (e){
        $(this).prev().slideToggle(600)
        $(this).toggleClass('active')
        $(this).toggleText('Свернуть', 'Развернуть');
        $('.confirmation_time').dragscroll.reset()
    })

    $('.place_inner-btn').click( function (){
        $(this).toggleClass('active')
        $(this).find('.text').toggleText('В закладки', 'Сохранено');
    })


    function copyToClipboard(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        $temp.remove();
      }

      $('.reservation_cart-copy').click( function (){
        copyToClipboard('.reservation_cart-number span')
      })

      $('.place_viewing-close').click( function (e){
        $('.place_viewing-wrapper').addClass('close')
      })

      if($(window).width() < 745){
        if($('.place_img-left .place_img-right').length < 1){
            $('.place_img-right').prepend($('.place_img-left'));
        }

      }


      $('.place_img-right ').slick({
        responsive: [
            {
                breakpoint: 4000,
                settings: "unslick",
            },
            {
                breakpoint: 745,
                settings: {
                    slidesToShow: 1,
                    arrows:false,
                    variableWidth: true,
                    dots:true,
                }
            },
        ]
      });

      $(window).on('resize', function () {
        if ($(window).width() < 745) {
           
          if($('.place_img-left .place_img-right').length === 0){
            $('.place_img-right').prepend($('.place_img-left'));
           
          }
          $('.place_img-right ').slick('refresh');
        }
        else{
            $('.place_img-right ').slick('destroy');
            $('.place_imgs').prepend($('.place_img-left'));
        }
        
      });
    

      
        
     




 

      







    $('.date_people-item_count > span').on('click', function() {
        var input = $(this).closest('.date_people-item_count').find('input'); // инпут
        var value = parseInt(input.val()) || 0; // получаем value инпута или 0
        if ($(this).hasClass('count-arrow-minus')) {
            if(value > 0){
                value = value - 1; // вычитаем из value 
               
              }
        ;
        }
        if ($(this).hasClass('count-arrow-plus')) {
            value = value + 1; // прибавляем к value 1
        };
        if (value <= 0)(
            $(this).parent().find('.count-arrow-minus').addClass('disable')
        )
        else{
            $(this).parent().find('.count-arrow-minus').removeClass('disable')
        }
        input.val(value).change(); // выводим полученное value в инпут; триггер .change() - на случай, если на изменение этого инпута у вас уже объявлен еще какой-то обработчик
      });



      $('.people_popup').click(function (){
          let adults = $(this).find('.date_people-item_count.adults .header_count-inp').val()
          let child = $(this).find('.date_people-item_count.child .header_count-inp').val()
          let baby = $(this).find('.date_people-item_count.baby .header_count-inp').val()
          let childTotal = parseInt(child) + parseInt( baby) 
          if(adults > 0){
            if(childTotal <= 0){
                $('.form_inp-wrapper.people .people_value').html(`<span>${adults}</span> взрослых, без детей`)
              }
              else{
                $('.form_inp-wrapper.people .people_value').html(`<span>${adults}</span> взрослых,  <span> ${childTotal}</span> детей`)
              }
              $('.place_form-btn').removeClass('disable')
          }
          else{
            $('.form_inp-wrapper.people .people_value').html(' 0  взрослых, без детей ')
            $('.place_form-btn').addClass('disable')
          }

       
      })




      function strip_tags(str) {

        str = str.toString();
        
        return str.replace(/<\/?[^>]+>/gi, "");
        
        }

      $('.mobile_date').on('click',function (){
        perem = strip_tags($("#datepicker_mobile").val()).trim();

        if(!perem)

        {

            $('.mobile_date-btn').addClass('disable')

        }

       else

       {

        $('.mobile_date-btn').removeClass('disable')

       }
      })




      $('.calendar_filter').on('click',function (){
        perem = strip_tags($("#datepicker_author").val()).trim();

        if(!perem)

        {

            $('.popup_calendar-btn').addClass('disable')

        }

       else

       {

        $('.popup_calendar-btn').removeClass('disable')

       }
      })


      $('.popup_calendar').on('click',function (){
        perem = strip_tags($("#datepicker_inline").val()).trim();

        if(!perem)

        {

            $('.popup_calendar-btn').addClass('disable')

        }

       else

       {

        $('.popup_calendar-btn').removeClass('disable')

       }
      })



      if($('.popup_reviews').length > 0){
        var slider = document.querySelector('.range-slider'),
        inputMin = document.getElementById('minval').value,
        inputMax = document.getElementById('maxval');
            
    var noUi = noUiSlider.create(slider, {
        connect: [true, false],
        behaviour: 'tap',
        start: inputMin,
        // padding: 50,
        range: {
            'min': [0, 0],
            '0%': [   0,  0 ],
            '10%': [   1,  1 ],
            '20%': [  2, 2 ],
            '30%': [  3, 3 ],
            '40%': [  4, 4 ],
            '50%': [  5, 5 ],
            '60%': [  6, 6 ],
            '70%': [  7, 7 ],
            '80%': [  8, 8 ],
            '90%': [  9, 9 ],
            // '90%': [  500, 500 ],
            'max': [ 10, 10 ]
        },
        pips: {mode: 'range', density: 10}

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

        $('.popup_reviews .noUi-pips .noUi-value-horizontal').each(function(i, item) {
            if(Number(slider.noUiSlider.get().slice(0, -3)) >= Number(item.firstChild.textContent)){
                $(item).prev().addClass('active');
                // $(item).addClass('active');
            }else{
                $(item).prev().removeClass('active');
                // $(item).removeClass('active');
            }
        });
    }

      }

      
 

    



   
      $('.popup_filter-btn').click(function (){
        $(this).parent().removeClass('active')
    })
    $('.interesting_title-span').click(function (){
   
        $(this).next().next().toggleClass('active')
        if($(window).width() < 576){
            $('body, html').removeClass('active')
            $('.main_search').click()
        }
    })
    
  
      $(document).mouseup( function(e){ 
		let div = $( ".people_popup" );
        let more = $( ".more_trigger" );
        let priceFilter = $( ".popup_filter" );
        let dateFilter = $( ".calendar_filter" );
        let cityChoice = $( ".city_choice" );
      
		if ( !div.is(e.target)
		    && div.has(e.target).length === 0 ) {
			div.removeClass('active')
		}
        if ( !more.is(e.target)
		    && more.has(e.target).length === 0 ) {
            more.removeClass('active')
		}
        $('.city_choice-btn').click(function (){
            $(this).parent().next().addClass('active')
            $(this).parent().removeClass('active')
            $('.mobile_seatch').addClass('active')
            if($(window).width() < 576){
                $('body, html').removeClass('active')
                $.fancybox.open({
                    src: '.mobile_seatch',
                    type: 'inline',
                    touch: false,
                    autoFocus: false,
                });
            }
         })
        $('.price_filter').click(function (){
            $('.popup_filter').toggleClass('active')
        })
        $('.date_filter').click(function (){
            $('.calendar_filter').toggleClass('active')
        })
   
        $('.more_trigger').click(function(event){
            event.preventDefault();
           
            $(this).toggleClass('active')
          } )
          $('.people_value').click(function (e){
            $(this).next().next().toggleClass('active')
        })
        $('.city_choice-close').click(function (){
            $(this).parent().removeClass('active')
        })
        if ( !$('.city_search').is(e.target)
        && $('.city_search').has(e.target).length === 0 ) {
            $('.city_search').removeClass('active')
        }
        if ( !cityChoice.is(e.target)
        && cityChoice.has(e.target).length === 0 ) {
            cityChoice.removeClass('active')
        }
        if ( !dateFilter.is(e.target)
        && dateFilter.has(e.target).length === 0 ) {
            dateFilter.removeClass('active')
        }
    
        if ( !priceFilter.is(e.target)
        && priceFilter.has(e.target).length === 0 ) {
            priceFilter.removeClass('active')
        }
        if ( !$('.marker_popup').is(e.target)
        && $('.marker_popup').has(e.target).length === 0 ) {
            $('.marker_popup, .header_marker').removeClass('active')
        }


        $(".header_marker").click(function (){
            $('.marker_popup').toggleClass('active')
            $(this).toggleClass('active')
        })
	});
    $('.popup_calendar-btn').click(function (){
        $('.calendar_filter').removeClass('active')
    })



    if($('.place_wrapper-right').length > 0){
  
        block_pos = $('.place_wrapper-right').offset().top;
        // определяем первоначальное положение блока
        wrap_pos = $('.place_wrapper-right').offset().top;
        // позиция контейнера
        header_height = 20;
        if($('.header').hasClass('page')){
            header_height = 92;
        }
        block_height = $('.place_form').outerHeight();
        
        // высота блока
        wrap_height = $('.place_wrapper-right').outerHeight();
        // высота контейнера
        block_width = $('.place_form').outerWidth();
        pos_absolute = $('.place_wrapper').outerHeight();
        // ширина блока
        $(window).scroll(function () {
          
            if ($(window).scrollTop() - $('.place_wrapper').offset().top + header_height > pos_absolute - header_height - block_height / 2 ) {
        // Если страницу прокрутили дальше, чем высота родителя минус высота фикс. блока, то стопорим блок
                $('.place_form').css({
                    'position': 'absolute',
                    'top': pos_absolute - block_height ,
                    'width': block_width
                });

            }
            else if ($(window).scrollTop() > block_pos  - header_height) {
        // Если страницу прокрутили дальше, чем находится наш блок, то мы этот блок фиксируем и отображаем сверху
                $('.place_form').css({
                    'position': 'fixed',
                    'top': 0 + header_height,
                    'width': block_width
                });
            } else {
        // Если же позиция скролла меньше (выше), чем наш блок, то возвращаем все назад
                $('.place_form').css({
                    'position': 'static'
                });
            }
        })
        
      }
      $(window).scroll(function () {
        if($('.place_viewing-wrapper').length > 0){
        
             if($(window).scrollTop() + $(window).height() - 250 < $('.place_viewing-wrapper').position().top){
                $('.place_viewing-wrapper').css({
                    'position': 'fixed',
                    'top': 'auto',
                    'bottom': 50,
           });
            }
            else if ($(window).scrollTop() - $('.place_wrapper').offset().top + header_height > pos_absolute - $('.place_viewing-wrapper').position().top + 150 && $(window).scrollTop() + $(window).height() - 250 > $('.place_viewing-wrapper').position().top) {

                $('.place_viewing-wrapper').css({
                         'position': 'absolute',
                         'top': $('.place_wrapper').outerHeight() + 30,
                        'bottom': 'auto',
                });
      
    }
          }
      })



      if($('.tariffs_items').length > 0){
        $('.tariffs_item').click(function (){
            $('.place_form-btn').removeClass('disable')
            $('.place_mobile-btn').removeClass('disable')
        })
      }

      $('.confirmation_wrapper .check_label').click( function(){
          if($('.confirmation_wrapper .check_inp').eq(1).is( ":checked" )){
            $('.confirmation_information .form_inp-wrapper').eq(2).addClass('active')

          }
          else{
            $('.confirmation_information .form_inp-wrapper').eq(2).removeClass('active')   
          }
      })

      function rightCheck(){
        if($('.confirmation_chek.right .check_inp').is( ":checked" ) <= 0){
            $('.place_form-btn , .place_mobile-btn').addClass('disable')
        }
        else{
            $('.place_form-btn , .place_mobile-btn').removeClass('disable')
        }
      }

      if($('.confirmation_chek.right').length > 0){
        rightCheck()
        $('.confirmation_chek.right').click(function (){
            rightCheck()
        })
      }
       
      $('.room_card-title.tooltip, .similar_slide-title.tooltip').each(function(i){
        $(this).append("<span class='tooltip_text'>" + $(this).text() +  "</span>")
        $(this).attr('title', '')
      })




      if($('.place_img').length === 2){
          $('.place_img-right').addClass('duo')
      }
      if($('.place_img').length === 3){
        $('.place_img-right').addClass('three')
      }
      if($('.place_img').length === 4){
        $('.place_img-right').addClass('four')
      }
      if($('.place_img').length > 4){
        $('.place_img-right').addClass('more_imgs')
      }

      $('.popup_reviews-rating label').click( function (){
          $(this).addClass('active')
          $('.popup_reviews-rating label').not($(this)).removeClass('active')
      })


      if($('.popup_reviews-area_wrapper').length > 0){
        $('.popup_reviews-area').keyup(function (){
            $(this).parent().find('.area_count .current').text($(this).val().length)
            $(this).parent().find('.area_count .total').text($(this).attr('maxlength'))
        })
        $('.popup_reviews-area_wrapper .area_count .total').text($('.popup_reviews-area').attr('maxlength'))
      }

  

      $('.reviews_tab-title').click( function(){
       
            $('.popup_reviews').animate({scrollTop: 200}, 200);

          $(this).next().slideToggle(600)
          $(this).toggleClass('active')
     
        
      })

      $('.mobile_filter-icon').click( function (){
          $('#filter_data').click()
      })


      $('.weekend_plan-tabs').on('click', '.weekend_plan-tab:not(.active)', function() {
        $(this).addClass('active').siblings().removeClass('active')
            .closest('.weekend_plan').find('.weekend_plan-content').removeClass('active').eq($(this).index()).addClass('active'); 
      })

      $('.weekend_plan-show').click(function (){
          $('.weekend_plan-item').toggleClass('active')
          $(this).toggleText('Скрыть все', 'Показать все');
      })


        $('.cookie_close, .cookie_btn').click(function (){
            $(this).parent().addClass('active')
        })



        $('.password_show').click(function (){
            $(this).toggleClass('active')
            if ($(this).hasClass('active')){
                $(this).prev().attr('type', 'text');
            } else{
                $(this).prev().attr('type', 'password');
            }
        })
     
        $('.login_open').click(function (){
  
            if($(window).width() < 576){
                $.fancybox.open({
                    src: '.login_popup',
                    type: 'inline',
                    touch: false,
                    autoFocus: false,
                });
            }
            else{
                $('.login_popup').toggleClass('active')
            }
        })
        $('.login_popup-close').click(function (){
  
            if($(window).width() < 576){
                $.fancybox.close({

                });
            }
            else{
                $('.login_popup').removeClass('active')
            }
        })

        $('.search_form-inp').keyup(function (){
            if($('.search_form-inp').val().length > 0){
                $('.search_page-form').addClass('active')
            }
            else{
                $('.search_page-form').removeClass('active')
            }
        })
        if($('.search_form-inp').length > 0){
            if($('.search_form-inp').val().length > 0){
                $('.search_page-form').addClass('active')
            }
        }
       
   


        $('.search_form-delete').click(function (){
            $(this).parent().removeClass('active')
            $(this).parent().find('.search_form-inp').val('')
        })


        $('.search_body-delete').click(function (){
            $(this).parent().find('.search_body-inp').val('')
        })

        $('.search_body-inp').keyup(function (){
            if($(this).val().length > 0){
                $('.serch_recently, .search_body-find').addClass('none')
                $('.search_result').addClass('active')
            }
            else{
                $('.serch_recently, .search_body-find').removeClass('none')
                $('.search_result').removeClass('active')  
            }
        })




        $('.office_reviews-arrow').click(function (){
            $(this).parent().find('.office_reviews-content').slideToggle(600)
            $(this).toggleClass('active')
            $(this).find('.office_reviews-arrow_text').toggleText('Свернуть', 'Развернуть');
        })






        $('.office_mobile-arrow, .office_person-close').click(function (){
            $('.office_person').toggleClass('active')
        })





})