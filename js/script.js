// js file. this will be fun
$(function(){
    console.log('jQuery loaded and running \n pixels available in document window ' + window.innerHeight);
});

//hide x until needed
$(".x").hide();

//hide menu until clicked
var menuHidden=true;
$(".menu ul").hide();
$(".menu .image").click(function(){
	if (menuHidden == false){
		menuHidden=true;
		$(".menu ul").hide();
	}
	else{
		menuHidden = false;
		$(".menu ul").show();
	}
	console.log("menuHide= \r" + menuHidden);
});

// scroll listener
$("[scroll]").click( function(){
  var tar = $(this).attr("scroll");
  $('html, body').animate({
        scrollTop: $(tar).offset().top
    }, 1000);
    // add something to hide the menu when mobile dropdown
    $('.menu .image').click();
});

//page2 svgs
$('.wireframes').prepend($('<div>').load("svg/UX/Wireframes.svg"));//$(".wireframes").load("svg/UX/Wireframes.svg");
$(".proto").prepend($('<div>').load("svg/UX/InteractivePrototypes.svg"));
$(".eval").prepend($('<div>').load("svg/UX/HeuristicEvaluation.svg"));
$(".usability").prepend($('<div>').load("svg/UX/UsabilityTesting.svg"));
$(".user").prepend($('<div>').load("svg/UX/UserPersonas.svg"));

//page3 svgs
$(".custom").prepend($('<div>').load("svg/UI/CustomInterfaceDesign.svg"));
$(".desktop").prepend($('<div>').load("svg/UI/DesktopUI.svg"));
$(".presen").prepend($('<div>').load("svg/UI/InteractivePresentation.svg"));
$(".mobile").prepend($('<div>').load("svg/UI/MobileUI.svg"));
$(".poc").prepend($('<div>').load("svg/UI/POC.svg"));

$("[state='small']").click(function(){
	$(this).attr("state", "large");
	$(this).children().children().attr("state", "large");
	$(this).children().children().children().attr("state", "large");
	$(".x").show();
	console.log("Clicked");
});

$(".x").click(function(){
	$("[state='large'] #icon").css({'transform-origin': 'center', 'transform': 'scale(1,1)'}); //return to original size
	$("[state='large']").attr("state", "shrink");
	$(".x").hide();
	console.log("Unclicked");
})


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
