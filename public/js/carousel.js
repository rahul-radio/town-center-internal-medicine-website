var $item = $('.carousel-item'); 
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

$('.carousel img').each(function() {
var $src = $(this).attr('src');
var $color = $(this).attr('data-color');
$(this).parent().css({
  'background-image' : 'url(' + $src + ')',
  'background-color' : $color
});
$(this).remove();
});

$(window).on('resize', function (){
$wHeight = $(window).height();
$item.height($wHeight);
});

$('.carousel').carousel({
interval: 6000,
pause: "false"
});

var canvas = document.getElementById('my-first-canvas');
var context = canvas.getContext('2d');
context.strokeStyle = '#990000';
strokeRect ( left, top, width, height );
