$(document).ready(function() {

  
  var border = $('#personal-border');
  var userMenu = $('.user-menu');
  var userBlock = $('.user-block');
  var description = $('.description-icon');
  
  $('.dropup-icon').hide();

  $('#canova-icon').click(function(){
    $("#canova-profile").css({"animation-play-state": "running"});
    $("#canova-profile-container").css({"animation-play-state": "running"});
    $(".profile-name-badge").css({"animation-play-state": "running"});
    $(".tim-canova").css({"animation-play-state": "running"});
    $(".candidate-name--profile").css({"animation-play-state": "running"});
    $(".description-icon").css({"animation-play-state": "running"});
    $(".close-icon").css({"animation-play-state": "running"});
  });
  
  $('.close-icon').click(function(){
    $("#canova-profile").css({"animation": "move-portrait-reverse 1.5s ease-in-out 1 forwards running"});
    $("#canova-profile-container").css({"animation": "close-profile-animation 1.5s ease-in-out 1 forwards running"});
    $(".profile-name-badge").css({"animation": "name-slide-out 1.5s ease-in-out 1 forwards running"});
    $(".tim-canova").css({"animation": "CLOSE 1.5s ease-in-out 1 running forwards alternate"});
    $(".candidate-name--profile").css({"animation": "text-slide-out 1.5s ease-in-out 1 running forwards alternate"});
    $(".description-icon").css({"animation": "fade-in 1s ease-in-out 1 forwards running"});
    $(".close-icon").css({"animation": "fade-out 1s ease-in-out 1 forwards running"});
  });
  
  $('.menu-icon').click(function() {
    if ($('.nav-links').hasClass('menu-slide-down')) {
      $('.nav-links').removeClass('menu-slide-down');
      $('.nav-links').addClass('menu-slide-up');
    } else {
      $('.nav-links').removeClass('menu-slide-up');
      $('.nav-links').addClass('menu-slide-down');
    }
    $(this).toggleClass('active');
    $('.menu-icon').toggleClass('active-icon');
  });
  
  userBlock.click(function() {
    $('.dropup-icon').toggle();
    $('.dropdown-icon').toggle();
    $('.user-container').toggleClass('active');
    if (userMenu.hasClass('menu-slide-down')) {
      userMenu.removeClass('menu-slide-down');
      userMenu.addClass('menu-slide-up');
    } else {
      userMenu.removeClass('menu-slide-up');
      userMenu.addClass('menu-slide-down');
    }
  });

  userBlock.mouseenter(function() {
    border.removeClass('remove-border');
    border.addClass('animate-border');
  });

  userBlock.mouseleave(function() {
    border.removeClass('animate-border');
    border.addClass('remove-border');
  });
  
  $('.menu-icon').mouseenter(function() {
    $('#menu-border').removeClass('remove-border');
    $('#menu-border').addClass('animate-border');
  });

  $('.menu-icon').mouseleave(function() {
    $('#menu-border').removeClass('animate-border');
    $('#menu-border').addClass('remove-border');
  });
});