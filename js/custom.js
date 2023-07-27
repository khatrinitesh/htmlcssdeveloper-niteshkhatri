$(document).ready(function(){

    $(function(){
        $(".circle_percent").each(function() {
            var $this = $(this),
                $dataV = $this.data("percent"),
                $dataDeg = $dataV * 3.6,
                $round = $this.find(".round_per");
            $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");	
            $this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
            $this.prop('Counter', 0).animate({Counter: $dataV},
            {
                duration: 2000, 
                easing: 'swing', 
                step: function (now) {
                    $this.find(".percent_text").text(Math.ceil(now)+"%");
                }
            });
            if($dataV >= 51){
                $round.css("transform", "rotate(" + 360 + "deg)");
                setTimeout(function(){
                    $this.addClass("percent_more");
                },1000);
                setTimeout(function(){
                    $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
                },1000);
            } 
        });
    });

    $(function(){
        // Prevent closing from click inside dropdown
    $(document).on('click', '.dropdown-menu', function (e) {
        e.stopPropagation();
    });
    
    // make it as accordion for smaller screens
    if ($(window).width() < 992) {
        $('.dropdown-menu a').click(function(e){
        e.preventDefault();
            if($(this).next('.submenu').length){
            $(this).next('.submenu').toggle();
            }
            $('.dropdown').on('hide.bs.dropdown', function () {
        $(this).find('.submenu').hide();
        })
        });
    }
    });

    $(function(){
        var owl = $('.screenshot_slider').owlCarousel({
            loop: true,
            responsiveClass: true,
            nav: false,
            margin: 0,    
            stagePadding: 0,
            autoplayTimeout: 4000,
            smartSpeed: 400,
            center: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });
    });

    $(function(){
        function makeTimer() {
            var startTime = new Date("22 July 2017 20:00:00 GMT+02:00");
              startTime = (Date.parse(startTime) / 1000);
              var now = new Date();
              now = (Date.parse(now) / 1000);
                var timePassed = now - startTime;
                var years = Math.floor(timePassed / (86400 * 365));
                var months = Math.floor((timePassed / (86400 * 30.41)) - (years * 12));
                var days = Math.floor((timePassed / 86400) - (years * 365) - (months * 30.41));
                var hours = Math.floor( (timePassed / 3600 )  - (years * (24 * 365)) - (months * (24 * 30.41)) - (days * 24) ) ;
                var minutes = Math.floor( (timePassed / 60) - ( years * (1440 * 365) ) - (months * (1440 * 30.41)) - (days * (60 * 24)) - (hours * 60 ) );
                var seconds = Math.floor(timePassed - (years * (86400 * 365)) - (months * (86400 * 30.41)) - (days * 86400) - (hours * 3600) - (minutes * 60) );
                if (months < "10") { months = "0" + months; }
                if (days < "10") { days = "0" + days; }
                if (hours < "10") { hours = "0" + hours; }
                if (minutes < "10") { minutes = "0" + minutes; }
                if (seconds < "10") { seconds = "0" + seconds; }
              $("#years").html(years + "<span>Years</span>");
             $("#months").html(months + "<span>Months</span>");
             $("#days").html(days + "<span>DAYS</span>");
              $("#hours").html(hours + "<span>HR</span>");
              $("#minutes").html(minutes + "<span>MIN</span>");
              $("#seconds").html(seconds + "<span>SEC</span>");
      }
      setInterval(function() { makeTimer(); }, 1000);
    });

    $(function(){
       $.fn.WBslider = function() {
	return this.each(function() {
		var $_this = $(this),
			$_input = $('input', $_this),
			$_current_value = $('.current-value', $_this),
			$_min_value = $('.min-value', $_this).text(),
			$_max_value = $('.max-value', $_this).text(),
			thumbwidth = 50; // set this to the pixel width of the thumb
			 
		// set range max to current year
		$_input.attr('max', $_max_value);
		$('.max-value', $_this).text($_max_value); 
		//$_input.val($_max_value - 10);

		$_input.on('input change keyup', function() {
			var $_this = $(this),
				val = parseInt($_input.val(), 10);

			if (val < 30) {
				val = '< 31';
			}
			if (val === '') { // Stop IE8 displaying NaN
				val = 0;
			}

			$_current_value.text( val );

			var pos = (val - $_input.attr('min'))/($_input.attr('max') - $_input.attr('min'));

			// position the title with the thumb
			var thumbCorrect = thumbwidth * (pos - 0.5) * -1,
				titlepos = Math.round( ( pos * $_input.width() ) - thumbwidth/4 + thumbCorrect );

			$_current_value.css({'left': titlepos});

			// show "progress" on the track
			pos = Math.round( pos * 99 ); // to hide stuff behide the thumb
			var grad = 'linear-gradient(90deg, #9be9c0 ' + pos + '%,#e7e7e7 ' + (pos+1) + '%)';
			$_input.css({'background': grad});

		}).on('focus', function() {
			if ( isNaN( $(this).val() ) ) {
				$(this).val(0);
			}
		}).trigger('change');
		
		$(window).on('resize', function() {
			$_input.trigger('change');
		});
	});
};

$(function() {

	$('.slider').WBslider();

});
    });
    $(function(){
        $(".owl-carousel").owlCarousel({
            loop: false,
            margin: 10,
            dots: false,
            nav: true,
            items: 4,
            responsive: {
                0: {
                  items: 1
                },
            
                600: {
                  items: 2
                },
            
                1024: {
                  items: 4
                },
            
                1366: {
                  items: 4
                }
              }
        });
        $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
        $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
        var owl = $(".owl-carousel");
        owl.owlCarousel();
        $(".next-btn").click(function () {
            owl.trigger("next.owl.carousel");
        });
        $(".prev-btn").click(function () {
            owl.trigger("prev.owl.carousel");
        });
        $(".prev-btn").addClass("disabled");
        $(owl).on("translated.owl.carousel", function (event) {
            if ($(".owl-prev").hasClass("disabled")) {
                $(".prev-btn").addClass("disabled");
            } else {
                $(".prev-btn").removeClass("disabled");
            }
            if ($(".owl-next").hasClass("disabled")) {
                $(".next-btn").addClass("disabled");
            } else {
                $(".next-btn").removeClass("disabled");
            }
        });
    });
}); 