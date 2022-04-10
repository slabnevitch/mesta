$(document).ready(function () {

    const DateTime = easepick.DateTime;
    const bookedDates = [
        '2022-04-28',
        '2022-04-29',
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
                "../css/calendar.css"
            ],
            zIndex: 10,
            lang: "ru-RU",
            format: "DD MMMM YYYY",
            grid: 3,
            RangePlugin: {
                elementEnd: "#datepicker2",
                tooltip: false
            },
            LockPlugin: {
                presets: false
            },
            plugins: [
                "RangePlugin",
                "LockPlugin"
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

    if($('#datepicker-static').length > 0){
        const picker = new easepick.create({
            element: "#datepicker-static",
            css: [
                "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.0.2/dist/index.css",
                "css/calendar-static.css"
            ],
            zIndex: 50,
            lang: "ru-RU",
            format: "DD/MM/YYYY",
            grid: 3,
            RangePlugin: {
                elementEnd: "#datepicker-static2",
                tooltip: false
            },
            LockPlugin: {
                presets: false
            },
            plugins: [
                "RangePlugin",
                "LockPlugin"
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
            LockPlugin: {
                presets: false
            },
            plugins: [
                
                "LockPlugin"
            ],
            LockPlugin: {
                minDate: new Date(),
                minDays: 2,
                inseparable: true,
            }
        })
    }

    if($('#datepicker_solo2').length > 0){
        const picker = new easepick.create({
            element: "#datepicker_solo2",
            css: [
                "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.0.2/dist/index.css",
                "../css/calendar.css"
            ],
            zIndex: 10,
            lang: "ru-RU",
            format: "DD MMMM YYYY",
            grid: 3,
            LockPlugin: {
                presets: false
            },
            plugins: [
                
                "LockPlugin"
            ],
            LockPlugin: {
                minDate: new Date(),
                minDays: 2,
                inseparable: true,
            }
        })
    }
    if($('#datepicker_solo3').length > 0){
        const picker = new easepick.create({
            element: "#datepicker_solo3",
            css: [
                "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.0.2/dist/index.css",
                "../css/calendar.css"
            ],
            zIndex: 10,
            lang: "ru-RU",
            format: "DD MMMM YYYY",
            grid: 3,
            LockPlugin: {
                presets: false
            },
            plugins: [
                
                "LockPlugin"
            ],
            LockPlugin: {
                minDate: new Date(),
                minDays: 2,
                inseparable: true,
            },
        })
    }





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
            grid: 3,
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








    $('.header_inp').focus(function (){
        $('.header_search').addClass('active')
    })
    $('.header_inp').blur(function (){
        $('.header_search').removeClass('active')
    })
    $('.header_search-delete').click(function () {
        $('.header_inp').val('')
    })

    $('.interesting_card-like').click(function () {
        $(this).toggleClass('active')
    })



    $('.place_show').click(function () {
        $('.place_show, .place_text-hidden').toggleClass('active')
    })

    $('.room_slider').slick({
        infinite: false,
        slidesToShow: 2.6,
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
    })

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
                    slidesToShow: 1.22,
                    variableWidth: false,
                }
            },
        ]
    })

    $('.room_card-more, .tariffs_card-more ').click( function (){
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
            console.log(1);
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

    if($('.header').length > 0){
        window.onscroll = function showHeader() {
            let headerFix = document.querySelector('.header');
    
            if (window.pageYOffset > 100 && window.pageYOffset > window.scrolltop) {
              headerFix.classList.add('fixed');
              } else {
                headerFix.classList.remove('fixed');
        
              }
              scrolltop = pageYOffset;
        };
    }





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
      $.fn.extend({
        toggleText: function (a, b) {
            if (this.html() == a) { this.html(b) }
            else { this.html(a) }
        }
    });

      $('.servise_tab-top').click(function (){
          $(this).next().slideToggle(600)
          $(this).toggleClass('active')
      })

      $('.confirmation_tab-show').click( function (e){
        $(this).prev().slideToggle(600)
        $(this).toggleClass('active')
        $(this).toggleText('Свернуть', 'Развернуть');
        $('.confirmation_time').dragscroll.reset()
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
                    autoplay: true,
                    autoplaySpeed: 4000,
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
        perem = strip_tags($("#datepicker_inline").val()).trim();

        if(!perem)

        {

            $('.mobile_date-btn').addClass('disable')

        }

       else

       {

        $('.mobile_date-btn').removeClass('disable')

       }
      })


      $('.form_inp-wrapper.people').click(function (){
          $(this).find('.people_popup').addClass('active')
      })

      $(document).mouseup( function(e){ 
		var div = $( ".people_popup" ); // тут указываем ID элемента
		if ( !div.is(e.target)
		    && div.has(e.target).length === 0 ) {
			div.removeClass('active')
		}
	});



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
                console.log(1);
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
       
      $('.room_card-title.tooltip').each(function(i){
        $(this).append("<span class='tooltip_text'>" + $(this).text() +  "</span>")
        $(this).attr('title', '')
      })
 


})