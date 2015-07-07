// js file. this will be fun
$(function(){
    console.log('jQuery loaded and running \n pixels available in document window ' + window.innerHeight);
});

//  condensed slider functions
var sml = ['pixPerf', 'final', 'design', 'sol', 'ux', 'us', 'projectSpecs'],
     imgIndex = 0;
function smlImage() {
  var smlDex = sml[imgIndex];
  $('#image').attr("class", smlDex);
}


//slider logic
var current=1;
$(".num"+current).children().addClass("large");
$(".leftbutt").css('visibility','hidden');
$(".leftButt").click(function(){
	console.log("clicked");
  
//functions
function makeBigAF(translate){
	TweenLite.to( $("[state='bigAF'] div svg"), 2, {
  	  	transform: "scale(10,10)" + translate,
  	  	zIndex: 1,
  	  	transformOrigin:"50% 50%",
  	  	ease:Power2.easeInOut
  	});
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
}
//hideMenu function must be called onComplete
function hideMenu(){
	$(".menu ul").hide();
}
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

//make an image or svg normal after animation
function norm(img, time){
	TweenMax.to( $(img), time, {
		transform: "scale(1, 1) translateX(0px) translateY(0px)",
		opacity: "1",
		zIndex: 0,
		transformOrigin:"50% 50%",
		ease:Power2.easeInOut
	});
}

//move icons after animations
function moveLeft(){
	$(".final").addClass("pixPerf").removeClass("final");
	$(".design").addClass("final").removeClass("design");
	$(".ux").addClass("design").removeClass("ux");
	$(".sol").addClass("ux").removeClass("sol");
	$(".us").addClass("sol").removeClass("us");
	$(".projectSpecs").addClass("us").removeClass("projectSpecs");

	norm("#image", .3);

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
	$(".sol").addClass("us").removeClass("sol");
	$(".ux").addClass("sol").removeClass("ux");
	$(".design").addClass("ux").removeClass("design");
	$(".final").addClass("design").removeClass("final");
	$(".pixPerf").addClass("final").removeClass("pixPerf");

	norm("#image", .3);

	if ($("#image").hasClass("projectSpecs")){
		$(".rightButt").css('visibility','hidden');
	}
	$(".leftButt").css('visibility','visible');

	if (current != 7){
		current++;
	}
	moveCirc(current-1, current);
}

//animate buttons and icons on OurProcess
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
$(".menu ul").css('margin-right', '-100px');
$(".menu .image").click(function(){
	if (menuHidden == false){
		menuHidden=true;
		TweenLite.to($(".menu ul"), .2,{
			marginRight: '-100px',
			transformOrigin:"50% 50%",
			ease: Power2.easeIn,
			onComplete: hideMenu
		});

	}
	else{
		menuHidden = false;
		$(".menu ul").show();
		TweenLite.to($(".menu ul"), .5,{
			marginRight: '0px',
			transformOrigin:"50% 50%",
			ease: Bounce.easeOut
		});
	}
});

// scroll listener
$("[scroll]").click( function(){
  var tar = $(this).attr("scroll");
  $('html, body').animate({
        scrollTop: $(tar).offset().top
    }, 1000);
    // add something to hide the menu when mobile dropdown
    $(".menu ul").css('margin-right', '-100px');
    $('.menu ul').hide();
    menuHidden = true;
});

//load in page2 svgs
$('.wireframes').prepend($('<div>').load("svg/UX/Wireframes.svg"));//$(".wireframes").load("svg/UX/Wireframes.svg");
$(".proto").prepend($('<div>').load("svg/UX/InteractivePrototypes.svg"));
$(".eval").prepend($('<div>').load("svg/UX/HeuristicEvaluation.svg"));
$(".usability").prepend($('<div>').load("svg/UX/UsabilityTesting.svg"));
$(".user").prepend($('<div>').load("svg/UX/UserPersonas.svg"));

//load in page3 svgs
$(".custom").prepend($('<div>').load("svg/UI/CustomInterfaceDesign.svg"));
$(".desktop").prepend($('<div>').load("svg/UI/DesktopUI.svg"));
$(".presen").prepend($('<div>').load("svg/UI/InteractivePresentation.svg"));
$(".mobile").prepend($('<div>').load("svg/UI/MobileUI.svg"));
$(".poc").prepend($('<div>').load("svg/UI/POC.svg"));

//listen for clicked svgs and make big AF
$("[state='small']").click(function(e){
  $(this).attr("state", "bigAF");
  if ($(this).hasClass("wireframes")||$(this).hasClass("mobile")){
  	  makeBigAF("translateX(10px)");
  }
  if ($(this).hasClass("proto")||$(this).hasClass("desktop")){
  	  makeBigAF("translateX(-7px)");
  }
  if ($(this).hasClass("user")||$(this).hasClass("poc")){
  	  makeBigAF("translateY(-15px) translateX(8px)");
  }
  if ($(this).hasClass("eval")||$(this).hasClass("presen")){
  	  makeBigAF("translateY(-15px) translateX(-8px)");
  }
  if ($(this).hasClass("usability")||$(this).hasClass("custom")){
  	  makeBigAF("translateY(-30px)");
  }
});

//listen for x click then make small AF
$(".x").click(function(){
  norm("[state='bigAF'] div svg", 2);
  norm("[state='bigAF'] div svg g#Shadow", 2);
  norm("[state='bigAF'] div svg g#icon", 2);
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

    // do something awesome AF
    var x = window.innerWidth,
        y  = window.innerHeight;
        alert("pixels available on x-axis " + x + "\n pixels available on y-axis " + y);
  }

});

// Stop checking user Agent, check for screen dimentions
console.log(window.outerWidth + '\n' + window.outerHeight);
var ow = window.outerWidth,
      oh = window.outerHeight;

    if ( ow < 500 ) {
      $('body').addClass("smartPhone");
    } else if ( 500 < ow && ow < 1300 ) {
      $('body').addClass("tablet");
    } else if ( ow > 1300 ) {
      $('body').addClass("desktop");
    } else {
      console.log("dude what are you doing? grab a more common device");
    }
});
