// js file. this will be fun
$(function(){
    console.log('jQuery loaded and running \n pixels available in document window ' + window.innerHeight);
});

//slider logic
$(".leftButt").click(function(){
	console.log("clicked");
	$(".final").addClass("pixPerf").removeClass("final");
	$(".design").addClass("final").removeClass("design");
	$(".sol").addClass("design").removeClass("sol");
	$(".ux").addClass("sol").removeClass("ux");
	$(".us").addClass("ux").removeClass("us");
	$(".projectSpecs").addClass("us").removeClass("projectSpecs");
});
$(".rightButt").click(function(){
	console.log("clicked");
	$(".pixPerf").addClass("final").removeClass("pixPerf");
	$(".final").addClass("design").removeClass("final");
	$(".design").addClass("sol").removeClass("design");
	$(".sol").addClass("ux").removeClass("sol");
	$(".ux").addClass("us").removeClass("ux");
	$(".us").addClass("projectSpecs").removeClass("us");
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
});

// scroll listener
$("[scroll]").click( function(){
  var tar = $(this).attr("scroll");
  $('html, body').animate({
        scrollTop: $(tar).offset().top
    }, 1000);
    // add something to hide the menu when mobile dropdown
    $('.menu ul').hide();
    menuHidden = true;
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

$(".wireframes[state='small']").click(function(e){
  /*
  $("[state='small']").click(function(){
  	$(this).attr("state", "large");
  	$(this).children().children().attr("state", "large");
  	$(this).children().children().children().attr("state", "large");
  	$(".x").show();
  }); */
  $('.wireframes').attr("state", "bigAF");
  TweenLite.to( $(".wireframes div svg"), 2, {transform: "scale(7,7)", transformOrigin:"50% 50%", ease:Power2.easeInOut});
  TweenLite.to(".wireframes div svg g#Circle", 2, {transform: "scale(7,7)", transformOrigin:"50% 50%", ease:Power2.easeInOut});
  TweenLite.to(".wireframes div svg g#Shadow", 2, {opacity:"0", transformOrigin:"50% 50%", ease:Power2.easeInOut});
  TweenLite.to(".wireframes div svg g#icon", 2, {transform: "translateX(115px) translateY(-90px) translateZ(0) scale(0.25, 0.25)", transformOrigin:"50% 50%", ease:Power2.easeInOut});
	$(".x").show();
});
// TweenLite.to("#myID", 2, {backgroundColor:"#ff0000", width:"50%", top:"100px", ease:Power2.easeInOut});
$(".x").click(function(){
	$("[state='large'] #icon").css({'transform-origin': 'center', 'transform': 'scale(1,1)'}); //return to original size
	$("[state='large']").attr("state", "small");
	$(".x").hide();
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
        alert("pixels available on x-axis " + x + "\n pixels available on y-axis " + y);
  }

});
