$(document).ready(function() {
	//Mail
    $(".home__form").submit(function() { //Change
      var th = $(this);
      $.ajax({
          type: "POST",
          url: "mail.php", //Change
          data: th.serialize()
      }).done(function() {
          th.trigger("reset");
          alert("В ближайшее время с Вами свяжется наш специалист");
      });
      return false;
    });
    //slider home
    $('.education__slider').slick({
        vertical: true,
        verticalSwiping: true,
        arrows: false
    });
    $('.top-arrow').click(function(){
        $('.education__slider').slick('slickPrev');
    })
    $('.bott-arrow').click(function(){
        $('.education__slider').slick('slickNext');
    })
    $('.loan__slider .countries').slick({
        rows: 2,
        slidesPerRow: 4,
        infinite: false,
        dots: true,
        arrows: false
    });
})