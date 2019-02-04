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
        arrows: false,
        responsive: [
          {
            breakpoint: 769,
            settings: {
              rows: 2,
              slidesPerRow: 2
            }
          }]
    });
    //Кнопка адаптивного меню
    var toggles = document.querySelectorAll(".cmn-toggle-switch");

    for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
    });
    }
    $('.cmn-toggle-switch').on('click', function() {
      $('.nav__menu').fadeToggle();
    });
    $('.countries-btn').on('click', function() {
        $('.countries-submenu').fadeToggle();
    });
    $(document).mouseup(function (e)
        {
            var container = $(".countries-submenu");

            if (!container.is(e.target) && container.has(e.target).length === 0 && container.css('display')=='block') {
                $('.countries-submenu').fadeToggle();
            }
        });
})