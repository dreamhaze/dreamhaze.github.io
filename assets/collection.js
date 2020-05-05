(function () {
  $('.js-open-filter').on('click', function () {
    alertify.panel({
      target: $('[data-modal="collection-filter"]').html(),
      position: 'left',
      onOpen: function (modal) {
        InSalesUI.Filter.create($(modal));
      }
    });
  });
})();

(function () {
  if (Site.template != 'collection') {
    return;
  }

  var _reviewsOption = {
    slidesPerView: 3,
    spaceBetween: 16,
    breakpoints: {
      480: { slidesPerView: 1 },
      768: { slidesPerView: 2 }
    }
  };
})();
 
