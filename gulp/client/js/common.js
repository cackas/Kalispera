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
})