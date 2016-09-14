// Nav hamburger menu
$(function() {
  $( ".icn" ).click(function() {
    $( ".hide-nav" ).toggleClass( "show-nav", 400 );
  });
});
// Nav-home hamburger menu
$(function() {
  $( ".icn-home" ).click(function() {
    $( ".hide-nav" ).toggleClass( "show-nav", 400 );
  });
});
$('#points').hide();
$('#deals').hide();
// points
$(function() {
  $( ".points" ).click(function() {
    $( "#points" ).fadeIn( 300 );
    $('#recharge').fadeOut(300);
    $("#deals").fadeOut(300);
    $(".off-po").addClass("on-po", 300);
    $(".off-re").removeClass("on-re", 300);
    $(".off-de").removeClass("on-de", 300);
  });
});
// deals
$(function() {
  $( ".deals" ).click(function() {
    $( "#deals" ).fadeIn( 300 );
    $('#recharge').fadeOut(300);
    $("#points").fadeOut(300);
    $(".off-de").addClass("on-de", 300);
    $(".off-re").removeClass("on-re", 300);
    $(".off-po").removeClass("on-po", 300);
  });
});
// Recharge
$(function() {
  $( ".recharge" ).click(function() {
    $( "#recharge" ).fadeIn( 300 );
    $('#deals').fadeOut(300);
    $("#points").fadeOut(300);
    $(".off-re").addClass("on-re", 300);
    $(".off-de").removeClass("on-de", 300);
    $(".off-po").removeClass("on-po", 300);
  });
});