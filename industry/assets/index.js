// Прибиваем меню при скролле

(function () {
    $(window).scroll(function () {
        if ((window.pageYOffset > 250) && (window.innerWidth <= 768)) {
            $('.js-top-panel-fixed').addClass('fixed');
            $('.top-panel-wrapper').addClass('z-index');
        } else {
            $('.js-top-panel-fixed').removeClass('fixed');
            $('top-panel-wrapper').removeClass('z-index');
        }
    });

    $('.js-arrow-up').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 500);
        $(this).blur();
    });
})();

//	Промо слайдер на главной

var swiperMain = new Swiper('.hero__slider', {
    loop: true,
    speed: 3500,
    slidersPerView: 1,
    effect: "fade",
    autoplay: true,
    simulateTouch: false,
    navigation: {
        nextEl: '.hero .swiper-button-next',
        prevEl: '.hero .swiper-button-prev',
    },
});

$(window).scroll(function () {
    function parallax() {
        var scrolled = $(window).scrollTop();
        var position = $( ".icons__line_parallax" ).position().top - $(window).height()*2;  
        if  (scrolled >= position) { 
            $('.icons__line_parallax').css('background-position-y', 90 - (scrolled * 0.13) + 'px');
        }
    }
});


/**
 * PRODUCT_TABS
 */
$(document).ready(function () {
    $(".js-tabs").dataTabs({
        state: "tab", // роль плагина tab/accordion
        event: "click",
        activeIndex: 1, // активный элемент
        speedSwitching: 5000, // скорость авто переключения
        useToggle: false, // Скрытие активных вкладок
        autoSwitching: false, // авто переключение
        hideOnClosest: false, // hide on closest
        hideOnMouseout: false, // hide on Mouseout
        prevent: true, // preventDefault
        debug: false, // дебагер
        useHash: true, // использовать window.location.hash
        useJqMethods: true, // использовать jq методы анимаций?
        loop: false, // замкнуть цикл при переключении?
        initOpenTab: true, // инициализировать активный таб?
        pauseVideoAudio: true, // ставить на паузу аудио и видео при переключении табов?
        mouseoutTimeOut: false, // таймаут после снятия курсора
        jqMethodOpenSpeed: 300, // скорость открытия табы
        jqMethodOpen: "fadeIn", // jq метод открытия табы
        jqMethodCloseSpeed: 0, // скорость закрытия табы
        jqMethodClose: "slideUp", // jq метод закрытия табы
        onInit: function () { }, // плагин инициализировался (onInit)
        onTab: function () { }, // переключили таб (self)
        onMouseover: function () { }, // навели на блок табов (event, self)
        onMouseout: function () { } // убрали курсор с блока табов (event, self)
    });
});


/**
 * Created by narko on 25.03.2019.
 */


// ymaps.ready(init);
// var myMap;

// var myPlacemark2;
// var myPlacemark3;
// var myPlacemark4;

// var myPlacemark7;


// function init(){
//     myMap = new ymaps.Map("yMap", {
//         center: [55.725821, 37.624911],
//         zoom: 9,
//         controls: ['zoomControl']
//     }); 
//     // points

//     myPlacemark2 = new ymaps.Placemark([55.623301, 37.422551], {
//             hintContent: 'Miniso ТЦ САЛАРИС',
//             balloonContent: '<div class="map-title"><b>Miniso ТЦ САЛАРИС</b></div><div class="map-text"><span class="map-address">г. Москва, поселение Московский, д.Саларьево</span><br><span class="map-tel">+7(499) 136 44 44</span> <br><span class="map-worktime">Пн-Пт: c 10:00 до 22:00<br>Выходные: 09:30-22:00</span></div><button id="230" type="button" class="classic-btn select-shop">Выбрать</button>'
//         },
//         {   iconLayout: 'default#image',
//             iconImageHref: 'https://static-ru.insales.ru/files/1/6553/9615769/original/pin-red.svg',
//             iconImageSize: [15, 19],
//             idd:230
//         }
//     );
//     myPlacemark3 = new ymaps.Placemark([55.651379, 37.612389], {
//             hintContent: 'Miniso ТЦ АНГАРА',
//             balloonContent: '<div class="map-title"><b>Miniso ТЦ АНГАРА</b></div><div class="map-text"><span class="map-address">г.Москва, Чонгарский бульвар, д.7,</span><br><span class="map-tel">+7(499) 136 44 44</span>  <br><span class="map-worktime">Пн-Пт: c 10:00 до 22:00<br>Выходные: 09:30-22:00</span></div><button id="231" type="button" class="classic-btn select-shop">Выбрать</button>'
//         },
//         {   iconLayout: 'default#image',
//             iconImageHref: 'https://static-ru.insales.ru/files/1/6553/9615769/original/pin-red.svg',
//             iconImageSize: [15, 19],
//             idd:231
//         }
//     );
//     myPlacemark4 = new ymaps.Placemark([55.621404, 37.713953], {
//             hintContent: 'Miniso ТЦ Каширская Плаза',
//             balloonContent: '<div class="map-title"><b>Miniso ТЦ Каширская Плаза</b></div><div class="map-text"><span class="map-address">Каширское ш., 61Г</span><br><span class="map-tel">+7(499) 136 44 44</span> <br><span class="map-worktime">Пн-Пт: c 10:00 до 22:00<br>Выходные: 09:30-22:00</span></div><button id="238" type="button" class="classic-btn select-shop">Выбрать</button>'
//         },
//         {   iconLayout: 'default#image',
//             iconImageHref: 'https://static-ru.insales.ru/files/1/6553/9615769/original/pin-red.svg',
//             iconImageSize: [15, 19],
//             idd:238
//         }
//     ); 

//     myPlacemark7 = new ymaps.Placemark([55.744632, 37.566072], {
//             hintContent: 'Miniso ТРЦ Европейский',
//             balloonContent: '<div class="map-title"><b>Miniso ТЦ Европейский</b></div><div class="map-text"><span class="map-address">г.Москва, площадь Киевского вокзала, 2</span><br><span class="map-tel">+7(499) 136 44 44</span>  <br><span class="map-worktime">Пн-Пт: c 10:00 до 22:00<br>Выходные: 09:30-22:00</span></div><button id="241" type="button" class="classic-btn select-shop">Выбрать</button>'
//         },
//         {   iconLayout: 'default#image',
//             iconImageHref: 'https://static-ru.insales.ru/files/1/6553/9615769/original/pin-red.svg',
//             iconImageSize: [15, 19],
//             idd:241
//         }
//     ); 

//     myMap.geoObjects.add(myPlacemark2);
//     myMap.geoObjects.add(myPlacemark3);
//     myMap.geoObjects.add(myPlacemark4); 
//     myMap.geoObjects.add(myPlacemark7); 
//   //myMap.geoObjects.add(myPlacemark9);
// }

// ;
