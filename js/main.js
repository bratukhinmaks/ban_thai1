$(document).ready(function () {
  var scroll_start = 0;
  var startchange = $('#startchange');
  var offset = startchange.offset();
  let nav = $('#nav')
  if (startchange.length) {
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();
      if (scroll_start > 900) {
        console.log(scroll_start);
        nav.addClass("navbar-light");
        nav.removeClass("navbar-dark");
      } else {
        console.log(scroll_start);
        nav.addClass("navbar-dark");
        nav.removeClass("navbar-light");
      }
    });
  }
});
