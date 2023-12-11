jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
	var slideCount = $('#slider-advert ul li').length;
	var slideWidth = $('#slider-advert ul li').width();
	var slideHeight = $('#slider-advert ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider-advert').css({ width: slideWidth, height: slideHeight });
	
	$('#slider-advert ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider-advert ul li:last-child').prependTo('#slider-advert ul');

    function moveLeft() {
        $('#slider-advert ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider-advert ul li:last-child').prependTo('#slider-advert ul');
            $('#slider-advert ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider-advert ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider-advert ul li:first-child').appendTo('#slider-advert ul');
            $('#slider-advert ul').css('left', '');
        });
    };

    $('a.control-prev').click(function () {
        moveLeft();
    });

    $('a.control-next').click(function () {
        moveRight();
    });

});    
