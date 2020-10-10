//	AOS

AOS.init({
    easing: 'ease-in-out-sine',
    once: true
});
 
//	Mmenuind

var menu = new MmenuLight(
    document.querySelector('#menu'),
    'all'
);

var navigator = menu.navigation({});
var drawer = menu.offcanvas({
    position: "right"
});

document.querySelector('a[href="#menu"]')
    .addEventListener('click', evnt => {
        evnt.preventDefault();
        drawer.open();
    });


//	кастомные селект оптионс

$(function () {
    jcf.replaceAll();
});

//	поиск - свой селект оптионс
$('.search-collections').click(function (e) { 
    e.preventDefault();
    e.stopPropagation();
    $('.search-collections').toggleClass('active');
    $('.drop-search').toggle('fast');
})

$(document).mouseup(function (e) {
    if ($(e.target).data('toggle-search-collection') == undefined && $(e.target).parents('.search-collections').length == 0) {
        $('.drop-search').hide('fast');
        $('.search-collections').removeClass('active');
    } 
    
    if ($('.side-bttn').has(e.target).length === 0){ 
        $('.side-bttn').removeClass('menu-btn_active');
        $('.side-bttn').children('.submenu__content').removeClass('submenu__content_active');
        $('.hero__main').removeClass('search-fadeout');
    }
});

//	Configurator

window.addEventListener('load', function () {

    if ($('#cnfg-v1').length > 0) {

        var toTop = document.querySelector('#main-wrapper');
        var CnfgOpeners = document.querySelectorAll('[data-activate-config="true"]');
        var CnfgCloser = document.querySelectorAll('[data-deactivate-config="true"]');
        var departureWindow = document.querySelector('#main-departure');
        var configWindow = document.getElementById('cnfg-v1');
        var tabsExcludeCnfg = document.querySelectorAll('#main-departure [data-tab-anchor]:not([data-activate-config="true"])');

        var bttns = document.querySelector('.is-button-active');
        var body = document.querySelector('body');
        var buttons_wrap = document.querySelector('.tabs__buttons_wrap');
        var modal = document.getElementById('modal-container');

        function toggleConfig(e) {


            function afterModal() {
                buttons_wrap.classList.add('modal-fixed');
                body.classList.add('modal-active');
                configWindow.classList.add('cnfg-active');
            }

            function beforeModal() {
                body.classList.remove('modal-active');
                departureWindow.scrollIntoView({ behavior: 'smooth' });
            }

            e.preventDefault();
            e.stopPropagation();
            configWindow.classList.remove('tab-active');
            modal.className = '';
            modal.classList.add('one');
            setTimeout(afterModal, 1000);

            CnfgCloser.forEach(function (e) {
                e.addEventListener('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    configWindow.classList.remove('cnfg-active');
                    modal.classList.add('out');
                    buttons_wrap.classList.remove('modal-fixed');
                    bttns.classList.remove('is-button-active');
                    setTimeout(beforeModal, 500);
                });
            })
        }

        // scroll to Top 
        document.querySelector('.js-scrollIntoView').addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            toTop.scrollIntoView({ behavior: 'smooth' });
        });

        // scroll to Configurator 
        document.querySelector('.js-scroll').addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            departureWindow.scrollIntoView({ behavior: 'smooth' });
        });

        // open configurator 
        CnfgOpeners.forEach(function (e) {
            e.addEventListener('click', toggleConfig);
        });

        // open tab
        tabsExcludeCnfg.forEach(function (e) {
            e.addEventListener('click', function (e) {
                e.preventDefault();
                configWindow.classList.add('tab-active');
                departureWindow.scrollIntoView({ behavior: 'smooth' });
            });
        });
    }
});

// Multiple slider

$(function () {
    $('.product__carousel .product__list_slider').each(function (index) {
        $(this).attr('id', 'carousel-' + index);
    });
    $('.product__carousel .product__list_slider').each(function (index) {
        const product__list_sliders = new Swiper(this, {
            slidesPerView: 4,
            spaceBetween: 20,
            speed: 300,
            autoplay: false,
            loop: true,
            navigation: {
                nextEl: '.product__carousel .swiper-button-next',
                prevEl: '.product__carousel .swiper-button-prev',
            },
            breakpoints: {
                690: {
                    slidesPerView: 1
                },
                900: {
                    slidesPerView: 2
                },
                1500: {
                    slidesPerView: 2
                },
                1675: {
                    slidesPerView: 3
                }
            }
        });
    }); 
    $('.line__carousel').each(function (index) {
        $(this).attr('id', 'carousel-line-section-' + index);
    });
    $('.line__carousel .product__list_slider').each(function (index) {
        let product__lines_sliders = new Swiper(this, {
            slidesPerView: 2,
            spaceBetween: 20,
            speed: 300,
            autoplay: false,
            loop: true,
            navigation: {
                nextEl: '.line__carousel .grid__control .swiper-button-next',
                prevEl: '.line__carousel .grid__control .swiper-button-prev',
            },
            breakpoints: {
                690: {
                    slidesPerView: 1
                }, 
                1440: {
                    slidesPerView: 1
                }
            }
        });
    }); 
    $('.line__carousel .js-tabs-item').on('click', function(e) {    
        let swContainer = this.parentNode.parentNode.parentNode.parentNode;
        let swActiveTab = swContainer.querySelectorAll('[data-tab-target="'+ this.dataset.tabAnchor +'"]');
        if (!!swActiveTab[0].querySelector('.carousel .product__list_slider')) {  
            let swNavContainer = swContainer.querySelectorAll('.grid__control');
            let activeSwiper = swActiveTab[0].querySelector('.carousel .product__list_slider').swiper;
            console.log(activeSwiper); 
            activeSwiper.navigation.nextEl = '#' + swContainer.id + ' .grid__control .swiper-button-next'; 
            activeSwiper.navigation.prevEl = '#' + swContainer.id + ' .grid__control .swiper-button-prev';    
        }
    }); 
});



//	карусель брендов 1
var SwiperTabTop = new Swiper('.tab__carousel_top', {
    loop: true,
    slidesPerView: 8,
    navigation: {
        nextEl: '.tab__carousel_top .swiper-button-next',
        prevEl: '.tab__carousel_top .swiper-button-prev',
    }, 
    breakpoints: { 
        480: {
            slidesPerView: 2, 
        },
        900: {
            slidesPerView: 3, 
        },
        1200: {
            slidesPerView: 5, 
        }
    }
})

//	карусель брендов 2
var SwiperTabTop = new Swiper('.carousel_brands', {
    loop: true,
    slidesPerView: 8,
    navigation: {
        nextEl: '.brands .swiper-button-next',
        prevEl: '.brands .swiper-button-prev',
    },
    //     autoplay: {
    //         delay: 3500,
    //     },
    breakpoints: { 
        480: {
            slidesPerView: 2, 
        },
        900: {
            slidesPerView: 3, 
        },
        1200: {
            slidesPerView: 5, 
        }
    }
})
//	карусель алфавит
var SwiperTabBottom = new Swiper('.tab__carousel_bottom', {
    loop: true,
    slidesPerView: 4,
    navigation: {
        nextEl: '.tab__carousel_bottom .swiper-button-next',
        prevEl: '.tab__carousel_bottom .swiper-button-prev',
    },
    breakpoints: { 
        480: {
            slidesPerView: 1, 
        },
        900: {
            slidesPerView: 2, 
        },
        1200: {
            slidesPerView: 3, 
        }
    }
})

//	карусель обзоров
var SwiperReviews = new Swiper('.articles__reviews_slider', {
    loop: true,
    slidesPerView: 1,

    spaceBetween: 120,
    // autoplay: {
    //     delay: 5000,
    // },
    navigation: {
        nextEl: '.articles__reviews_slider .swiper-button-next',
        prevEl: '.articles__reviews_slider .swiper-button-prev',
    },
})
 
// var SwiperPortfolio = new Swiper('.brands__slider', {
//     slidesPerView: 7,
//     loop: true,
//     spaceBetween: 50,
//     autoplay: {
//         delay: 3500,
//     },
//     navigation: {
//         nextEl: '.brands__wrap .swiper-button-next',
//         prevEl: '.brands__wrap .swiper-button-prev',
//     },
//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//             loop: true,
//             lazy: true,
//         },
//         480: {
//             slidesPerView: 2,
//             loop: true,
//             lazy: true,
//         },
//         900: {
//             slidesPerView: 3,
//             loopAdditionalSlides: 1,
//             loop: true,
//             lazy: true,
//         },
//         1200: {
//             slidesPerView: 5,
//             loop: true,
//             loopAdditionalSlides: 3,
//             lazy: true,
//         }
//     }
// });

// карусель недавно просмотреных
  
var SwiperRecently = new Swiper('.product__carousel_recently .swiper-container', {
    loop: true,
    slidesPerView: 7,
    spaceBetween: 20,
    navigation: {
        nextEl: '.carousel_recently .swiper-button-next',
        prevEl: '.carousel_recently .swiper-button-prev',
    },
}) 

// карусель Галереи продукта

var ProductGallery = new Swiper('.js-product-gallery-main', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 5000, 
})
 
// карусель Галереи продукта - уменьшеные

var ProductThumbsGallery = new Swiper('.js-gallery-thumbs', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
        nextEl: '.gallery-thumbs-wrap .swiper-button-next',
        prevEl: '.gallery-thumbs-wrap .swiper-button-prev',
    },
})


// карусель ПДФ файлов

var ProductPdfSlider = new Swiper('.carousel_pdf .swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
        nextEl: '.carousel_pdf .swiper-button-next',
        prevEl: '.carousel_pdf .swiper-button-prev',
    },
})


// карусель чертежей

var ProductSchemeSlider = new Swiper('.carousel_scheme .swiper-container', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 8,
    navigation: {
        nextEl: '.carousel_scheme .swiper-button-next',
        prevEl: '.carousel_scheme .swiper-button-prev',
    },
})

// ajax подгрузка вопросов конфигуратора
$(function () {

    var questions = $('#questions');

    function refreshSelects() {
        var selects = questions.find('select');

        // Улучшаем элемент selects с помощью плагина Chose
        selects.chosen();

        // Ждем изменений
        selects.unbind('change').bind('change', function () {

            // Выбранная опция
            var selected = $(this).find('option').eq(this.selectedIndex);
            // Ищем атрибут data-connection
            var connection = selected.data('connection');


            // Удаляем следующий контейнер li (к=если есть)
            selected.closest('#questions li').nextAll().remove();

            if (connection) {
                fetchSelect(connection);
            }

        });
    }

    var working = false;

    function fetchSelect(val) {

        if (working) {
            return false;
        }
        working = true;

        $.getJSON('dsasdasd', { key: val }, function (r) {

            var connection, options = '';

            $.each(r.items, function (k, v) {
                connection = '';
                if (v) {
                    connection = 'data-connection="' + v + '"';
                }

                options += '<option value="' + k + '" ' + connection + '>' + k + '</option>';
            });

            if (r.defaultText) {

                // Плагин Chose требует, чтобы был добавлен пустой элемент опции
                // если нужно выводить текст "Пожалуйста, выберите"

                options = '<option></option>' + options;
            }

            // Строим разметку для раздела select

            $('<li>\
				<p>' + r.title + '</p>\
				<select data-placeholder="' + r.defaultText + '">\
					' + options + '\
				</select>\
				<span class="divider"></span>\
			</li>').appendTo(questions);

            refreshSelects();

            working = false;
        });

    }

    $('#preloader').ajaxStart(function () {
        $(this).show();
    }).ajaxStop(function () {
        $(this).hide();
    });

    // В начале загружаем выбор продукта
    fetchSelect('productSelect');
});


// if (document.getElementsByClassName("opener").size != 0) { 

// let coll = document.getElementsByClassName("filter-opener");
// let i;

// function initAllOpeners(...OpenersArray) {
//     for (let opener of Openers) {
//         i++;
//         opener[i].addEventListener("click", function () {
//             this.classList.toggle("active");
//             var content = this.nextElementSibling;
//             if (content.style.maxHeight) {
//                 content.style.maxHeight = null;
//             } else {
//                 content.style.maxHeight = content.scrollHeight + "px";
//             }
//         });
//     }
// }
// initAllOpeners(coll.length);

// }

 
var map;
    function initMap() { 
        var pos = {lat: 55.752042, lng:37.616608}; 
        var pos1 = {lat: 55.682123, lng:37.433940};
        var pos2 = {lat: 55.778889, lng:37.615263};
        var pos3 = {lat: 55.743009, lng:37.658008};
        var opt = {
            center: pos,
            zoom: 11,
            styles: [
                {
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                    {
                        "visibility": "off"
                    }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#616161"
                    }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "stylers": [
                    {
                        "visibility": "off"
                    }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                    {
                        "visibility": "on"
                    }
                    ]
                },
                {
                    "featureType": "administrative.locality",
                    "stylers": [
                    {
                        "lightness": 50
                    }
                    ]
                },
                {
                    "featureType": "administrative.locality",
                    "elementType": "labels",
                    "stylers": [
                    {
                        "visibility": "on"
                    }
                    ]
                },
                {
                    "featureType": "administrative.neighborhood",
                    "stylers": [
                    {
                        "visibility": "off"
                    }
                    ]
                },
                {
                    "featureType": "administrative.province",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "lightness": 20
                    }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text",
                    "stylers": [
                    {
                        "visibility": "off"
                    }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#757575"
                    }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                    ]
                },
                {
                    "featureType": "road",
                    "stylers": [
                    {
                        "visibility": "on"
                    }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#ffffff"
                    }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                    {
                        "visibility": "on"
                    }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text",
                    "stylers": [
                    {
                        "visibility": "on"
                    }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "visibility": "on"
                    }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                    {
                        "visibility": "on"
                    }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "stylers": [
                    {
                        "visibility": "off"
                    }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#757575"
                    }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#dadada"
                    }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels",
                    "stylers": [
                    {
                        "visibility": "off"
                    }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "visibility": "on"
                    }
                    ]
                },
                {
                    "featureType": "road.local",
                    "stylers": [
                    {
                        "visibility": "off"
                    }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text",
                    "stylers": [
                    {
                        "visibility": "off"
                    }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                    ]
                }
            ]
        }
        var myMap = new google.maps.Map(document.getElementById("map"), opt)
        var mark1 = new google.maps.Marker({
            position: pos1,
            map: myMap,
            title: "улица Правды дом 1",
            icon: "images/map-icon.png"
        })
        var mark2 = new google.maps.Marker({
            position: pos2,
            map: myMap,
            title: "улица Правды дом 1",
            icon: "images/map-icon.png"
        })
        var mark3 = new google.maps.Marker({
            position: pos3,
            map: myMap,
            title: "улица Правды дом 1" ,
            icon: "images/map-icon.png"
        })
    }

    // Loop through the results array and place a marker for each
    // set of coordinates.
    window.eqfeed_callback = function(results) {
        for (var i = 0; i < results.features.length; i++) {
        var coords = results.features[i].geometry.coordinates;
        var latLng = new google.maps.LatLng(coords[1],coords[0]);
        var marker = new google.maps.Marker({
            position: latLng,
            map: map
        });
        }
    }
 

// Костыли

$('.product_top').hover( 
    function() {
    $('.product__grid_fix').find('.gallery-thumbs-wrap').addClass('animate__animated animate__bounce'); 
},
    function(){
    $('.product__grid_fix').find('.gallery-thumbs-wrap').removeClass('animate__animated animate__bounce'); 
});

$('div.side-bttn').on('click', function(e) { 
  $('.side-bttn').removeClass('menu-btn_active');
  $('.submenu__content').removeClass('submenu__content_active');
  
  $(this).toggleClass('menu-btn_active');
  $(this).children('.submenu__content').toggleClass('submenu__content_active');
  
  if ($( this ).hasClass('bttn__search')) { 
    $('.hero__main').addClass('search-fadeout');
    setTimeout(function () {
        $( '.submenu__content_wrap .search_widget .search_widget-control' ).focus(); 
    }, 100); 
  }
  if ($( this ).hasClass('bttn__login')) {  
    setTimeout(function () {
        $( '.submenu__content_wrap .co-form--login #email' ).focus(); 
    }, 100); 
  }
});  