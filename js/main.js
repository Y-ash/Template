$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 500) {
            // $(".fixed-top").addClass("navbar-dark");
            // $(".fixed-top").addClass("bg-dark");
            $(".fixed-top").css('backgroundColor', 'rgb(37, 35, 35)');
        }
        else
        {
            $(".fixed-top").delay(5000).css('backgroundColor', 'rgba(0, 0, 0, 0)');
            // $(".fixed-top").removeClass("navbar-dark");
            // $(".fixed-top").removeClass("bg-dark");
        }
    })
  })