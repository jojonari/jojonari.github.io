(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  setMonthWorkOnHanuri();
})(jQuery); // End of use strict

function setMonthWorkOnHanuri(){
  var joinDayDate = new Date(2015, 10-1, 01);
  var joinDate2 = new Date();
  var years = joinDate2.getFullYear() - joinDayDate.getFullYear();
  var months = joinDate2.getMonth() - joinDayDate.getMonth();
  var days = joinDate2.getDate() - joinDayDate.getDate();
  var differentMonth = years * 12 + months + (days >= 0 ? 0 : -1);
  $("#monthsWork").html(differentMonth + " 개월 (2015. 10 - 현재)");
}
