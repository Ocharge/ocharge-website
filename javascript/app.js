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
    $( "#points" ).show();
    $('#recharge').hide();
    $("#deals").hide();
    $(".off-po").addClass("on-po");
    $(".off-re").removeClass("on-re");
    $(".off-de").removeClass("on-de");
  });
});
// deals
$(function() {
  $( ".deals" ).click(function() {
    $( "#deals" ).show();
    $('#recharge').hide();
    $("#points").hide();
    $(".off-de").addClass("on-de");
    $(".off-re").removeClass("on-re");
    $(".off-po").removeClass("on-po");
  });
});
// Recharge
$(function() {
  $( ".recharge" ).click(function() {
    $( "#recharge" ).show();
    $('#deals').hide();
    $("#points").hide();
    $(".off-re").addClass("on-re");
    $(".off-de").removeClass("on-de");
    $(".off-po").removeClass("on-po");
  });
});
// Mobile slides!
$(function() {
  $( ".points-dot" ).click(function() {
    // phones
    $( "#points" ).show();
    $('#recharge').hide();
    $("#deals").hide();
    // texts
    $(".points").show();
    $('.recharge').hide();
    $(".deals").hide();
    // colors
    $(".off-po").addClass("on-po");
    $(".off-re").removeClass("on-re");
    $(".off-de").removeClass("on-de");
  });
});