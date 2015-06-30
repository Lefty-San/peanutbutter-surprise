// js file. this will be fun
$(function(){
    console.log('jQuery loaded and running \n pixels available in document window ' + window.innerHeight);
});


//page2 svgs
$('.wireframes').append($('<div>').load("svg/UX/Wireframes.svg"));//$(".wireframes").load("svg/UX/Wireframes.svg");
$(".proto").append($('<div>').load("svg/UX/InteractivePrototypes.svg"));
$(".eval").append($('<div>').load("svg/UX/HeuristicEvaluation.svg"));
$(".usability").append($('<div>').load("svg/UX/UsabilityTesting.svg"));
$(".user").append($('<div>').load("svg/UX/UserPersonas.svg"));

//page3 svgs
$(".custom").append($('<div>').load("svg/UI/CustomInterfaceDesign.svg"));
$(".desktop").append($('<div>').load("svg/UI/DesktopUI.svg"));
$(".presen").append($('<div>').load("svg/UI/InteractivePresentation.svg"));
$(".mobile").append($('<div>').load("svg/UI/MobileUI.svg"));
$(".poc").append($('<div>').load("svg/UI/POC.svg"));

$(".svg").click(function(){
	$(this).children().attr("state", "play");
	$(this).children().children().attr("state", "play");
	$(this).children("p").show();
});


// key log for window information
// matches to screen
var kkeys = [], myString = "83,67,82,69,69,78";

$(document).keydown(function(e) {

  kkeys.push( e.keyCode );

  if ( kkeys.toString().indexOf( myString ) >= 0 ) {

    $(document).unbind('keydown',arguments.callee);

    // do something awesome
    var x = window.innerWidth,
        y  = window.innerHeight;
        alert("pixels available on x-axis" + x + "\n pixels available on y-axis" + y);
  }

});
