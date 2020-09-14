$(document).ready(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() > 500) { 
          $('.navbar').removeClass('bg-transparent');
      } else {
          $('.navbar').addClass('bg-transparent');
      }
    });
});