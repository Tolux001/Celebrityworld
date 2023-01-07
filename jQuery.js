$(function(){
  //mobile view nav
  $('#topnav-btn').click(function(){
    $('#topnav').fadeIn(500); 
  });
  $('.fa-circle-xmark').click(function(){
    $('#topnav').fadeOut(500); 
  });
 
  $('.btn').click(function() {
    $('.btn').fadeOut(1000);
    $('#topnav').fadeOut(500); 
    $('.hidden').fadeIn(1000);
    $('.about-btn').fadeIn(1000);
  });
  
   $('.product-btn').click(function(){
     $('.active').removeClass('active');
  var clickedIndex = $('.product-btn').index($(this));
     $('.example').eq(clickedIndex).addClass('active');
     
  $('.slides').css('background-color',$(this).attr('data-color'));
  $("section").css("background-image",$(this).attr("data-pic"));
  $('.product-btn').css('color',$(this).attr('data-color'));
  $('.h4-btn').css('color',$(this).attr('data-color'));
 });
 
 $('.scrolltop-btn').click(function() {
   $('html, body').animate({
     'scrollTop': 0
   }, 2000);
 });

});