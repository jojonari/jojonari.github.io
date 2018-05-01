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

  setMonthWork();
  setMonthActivity();
})(jQuery); // End of use strict

function setMonthWork(){
  //CA**24
  $("#monthsWork").html(getMonthDiff(new Date(2018, 04-1, 16)) + " 개월 (2018. 04 - 현재)");
}

function setMonthActivity(){
  //자바카페
  $("#monthsJavacafe").html(getMonthDiff(new Date(2016, 07-1, 01)) + " 개월 (2016. 07 - 현재)");
  //풋살동호회
  $("#monthsFootsal").html(getMonthDiff(new Date(2016, 05-1, 01)) + " 개월 (2016. 05 - 현재)");
}

function getMonthDiff(joinDayDate){
  var joinDate2 = new Date();
  var years = joinDate2.getFullYear() - joinDayDate.getFullYear();
  var months = joinDate2.getMonth() - joinDayDate.getMonth();
  var days = joinDate2.getDate() - joinDayDate.getDate();
  return years * 12 + months + (days >= 0 ? 0 : -1);
}
