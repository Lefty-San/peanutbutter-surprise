// js file. this will be fun
$(function(){
    console.log('jQuery loaded and running \n pixels available in document window ' + window.innerHeight);
});


//page2 svgs
$(".wireframes").load("svg/UX/Wireframes.svg");
$(".interactive").load("svg/UX/InteractivePrototypes.svg");
$(".eval").load("svg/UX/HeuristicEvaluation.svg");
$(".usability").load("svg/UX/UsabilityTesting.svg");
$(".user").load("svg/UX/UserPersonas.svg");

//page3 svgs
$(".custom").load("svg/UI/CustomInterfaceDesign.svg");
$(".desktop").load("svg/UI/DesktopUI.svg");
$(".interactive").load("svg/UI/InteractivePresentation.svg");
$(".mobile").load("svg/UI/MobileUI.svg");
$(".poc").load("svg/UI/POC.svg");

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
