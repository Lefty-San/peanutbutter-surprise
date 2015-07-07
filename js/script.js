// js file. this will be fun
$(function(){
    console.log('jQuery loaded and running \n pixels available in document window ' + window.innerHeight);
});

//functions
function moveCirc(curr, next){
	TweenLite.to($(".num"+curr).children(), .5, {
		transform: "scale(1, 1)",
		transformOrigin: "50% 50%",
		ease:Power2.easeInOut
	});
	TweenLite.to($(".num"+next).children(), .5, {
		transform: "scale(2, 2)",
		transformOrigin: "50% 50%",
		ease:Power2.easeInOut
	});
}

function norm(img){
	TweenMax.to( $(img), .3, {
		transform: "scale(1, 1) translateX(0px)",
		opacity: "1",
		transformOrigin:"50% 50%",
		ease:Power2.easeInOut,
	});
}

function moveLeft(){
	$(".final").addClass("pixPerf").removeClass("final");
	$(".design").addClass("final").removeClass("design");
	$(".sol").addClass("design").removeClass("sol");
	$(".ux").addClass("sol").removeClass("ux");
	$(".us").addClass("ux").removeClass("us");
	$(".projectSpecs").addClass("us").removeClass("projectSpecs");

	norm("#image");

	if ($("#image").hasClass("pixPerf")){
		$(".leftButt").css('visibility','hidden');
	}
	$(".rightButt").css('visibility','visible');
	if (current != 1){
		current--;
	}
	moveCirc(current+1, current);
}

function moveRight(){
	console.log("clicked");
	$(".us").addClass("projectSpecs").removeClass("us");
	$(".ux").addClass("us").removeClass("ux");
	$(".sol").addClass("ux").removeClass("sol");
	$(".design").addClass("sol").removeClass("design");
	$(".final").addClass("design").removeClass("final");
	$(".pixPerf").addClass("final").removeClass("pixPerf");

	norm("#image");

	if ($("#image").hasClass("projectSpecs")){
		$(".rightButt").css('visibility','hidden');
	}
	$(".leftButt").css('visibility','visible');

	if (current != 7){
		current++;
	}
	moveCirc(current-1, current);
}

function animateRight(){
	TweenMax.to( $(".rightButt"), .1, {
		transform: "scale(.75, .75) translateX(5px)", 
		transformOrigin:"50% 50%", 
		ease:Power2.easeInOut,
		repeat:1,
		yoyo: true
	});
	TweenMax.to( $("#image"), .3, {
		transform: "scale(.9, .9) translateX(15px)",
		opacity: ".26",
		transformOrigin:"50% 50%",
		ease:Power2.easeInOut,
		onComplete: moveRight
	});
}
function animateLeft(){
	TweenMax.to( $(".leftButt"), .1, {
		transform: "scale(.75, .75) translateX(-5px)", 
		transformOrigin:"50% 50%", 
		ease:Power2.easeInOut,
		repeat:1,
		yoyo: true,
	});
	TweenMax.to( $("#image"), .3, {
		transform: "scale(.9, .9) translateX(-15px)",
		opacity: ".26",
		transformOrigin:"50% 50%",
		ease:Power2.easeInOut,
		onComplete: moveLeft
	});
}

//slider logic
current=1;
moveCirc(1,1);
$(".leftbutt").css('visibility','hidden');
$(".leftButt").click(function(){
	animateLeft();
});
$(".rightButt").click(function(){
	animateRight();
});

//hide x until needed
$(".x").hide();

//hide menu until clicked
menuHidden=true;
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

$("[state='small']").click(function(e){
  $(this).attr("state", "bigAF");
  if ($(this).hasClass("wireframes")||$(this).hasClass("mobile")){
  	  TweenLite.to( $("[state='bigAF'] div svg"), 2, {
  	  	transform: "scale(10,10) translateX(10px)", 
  	  	zIndex: 1, 
  	  	transformOrigin:"50% 50%", 
  	  	ease:Power2.easeInOut});
  }
  if ($(this).hasClass("proto")||$(this).hasClass("desktop")){
  	  TweenLite.to( $("[state='bigAF'] div svg"), 2, {
  	  	transform: "scale(10,10) translateX(-7px)",
  	  	 zIndex: 1, 
  	  	 transformOrigin:"50% 50%", 
  	  	 ease:Power2.easeInOut
  	  	});
  }
  if ($(this).hasClass("user")||$(this).hasClass("poc")){
  	  TweenLite.to( $("[state='bigAF'] div svg"), 2, {
  	  	transform: "scale(10,10) translateY(-15px) translateX(8px)", 
  	  	zIndex: 1, 
  	  	transformOrigin:"50% 50%", 
  	  	ease:Power2.easeInOut
  	  });
  }
  if ($(this).hasClass("eval")||$(this).hasClass("presen")){
  	  TweenLite.to( $("[state='bigAF'] div svg"), 2, {
  	  	transform: "scale(10,10) translateY(-15px) translateX(-8px)", 
  	  	zIndex: 1, 
  	  	transformOrigin:"50% 50%", 
  	  	ease:Power2.easeInOut
  	  });
  }
  if ($(this).hasClass("usability")||$(this).hasClass("custom")){
  	  TweenLite.to( $("[state='bigAF'] div svg"), 2, {
  	  	transform: "scale(10,10) translateY(-30px)", 
  	  	zIndex: 1, 
  	  	transformOrigin:"50% 50%", 
  	  	ease:Power2.easeInOut
  	  });
  }
  TweenLite.to("[state='bigAF'] div svg g#Shadow", 2, {
  	opacity:"0", 
  	transformOrigin:"50% 50%", 
  	zIndex: 1,
  	ease:Power2.easeInOut
  });
  TweenLite.to("[state='bigAF'] div svg g#icon", 2, {
  	transform: "translateY(-70px) translateZ(0) scale(0.25, 0.25)", 
  	zIndex: 1,
  	transformOrigin:"50% 50%", 
  	ease:Power2.easeInOut
  });
  $(".x").show();
});
$(".x").click(function(){
	 TweenLite.to( $("[state='bigAF'] div svg"), 2, {transform: "scale(1,1)", zIndex: 0, transformOrigin:"50% 50%", ease:Power2.easeInOut});
  TweenLite.to("[state='bigAF'] div svg g#Shadow", 2, {opacity:"1", transformOrigin:"50% 50%", zIndex: 0, ease:Power2.easeInOut});
  TweenLite.to("[state='bigAF'] div svg g#icon", 2, {transform: "translateX(0) translateY(0) translateZ(0) scale(1, 1)", zIndex: 0, transformOrigin:"50% 50%", ease:Power2.easeInOut});
	$("[state='bigAF']").attr("state", "small");
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