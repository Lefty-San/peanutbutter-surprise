// js file. this will be fun
$(function(){
    console.log('jQuery loaded and running \n pixels available in document window ' + window.innerHeight);
});

//  condensed slider functions
var sml = ['pixPerf', 'final', 'design', 'sol', 'ux', 'us', 'projectSpecs'];
function smlImage() {
  var smlDex = sml[current-1];
  $('#image').attr("class", smlDex);
}

//slider logic
var current=1;
$(".num"+current).children().addClass("large");
$(".leftbutt").css('visibility','hidden');
  
//functions
function makeBigAF(translate){
	var TIMING = 1.5;
	TweenLite.to( $("[state='bigAF'] div svg"), TIMING, {
  	  	transform: "scale(10,10)" + translate,
  	  	zIndex: 1,
  	  	transformOrigin:"50% 50%",
  	  	ease:Power2.easeInOut
  	});
	TweenLite.to("[state='bigAF'] div svg g#Shadow", TIMING, {
	  	opacity:"0",
	  	transformOrigin:"50% 50%",
	  	zIndex: 1,
	  	ease:Power2.easeInOut
	});
	TweenLite.to("[state='bigAF'] div svg g#icon", TIMING, {
	  	transform: "translateY(-70px) translateZ(0) scale(0.25, 0.25)",
	  	zIndex: 1,
	  	transformOrigin:"50% 50%",
	  	ease:Power2.easeInOut
	});
	//lock scrolling
	$('body').css({'overflow':'hidden'});
    $(document).bind('scroll',function () { 
       	window.scrollTo(0,0); 
    });
	setTimeout(function(){$(".x").show();}, (TIMING*1000));
	setTimeout(function(){$("article").show();}, (TIMING*1000));
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
	if (current != 1){
		current--;
	}
	smlImage();
	norm("#image", .3);

	if ($("#image").hasClass("pixPerf")){
		$(".leftButt").css('visibility','hidden');
	}
	$(".rightButt").css('visibility','visible');
	moveCirc(current+1, current);
}
function moveRight(){
	if (current != 7){
		current++;
	}
	smlImage();
	norm("#image", .3);

	if ($("#image").hasClass("projectSpecs")){
		$(".rightButt").css('visibility','hidden');
	}
	$(".leftButt").css('visibility','visible');
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
$(".leftButt").click(animateLeft);
$(".rightButt").click(animateRight);

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
  var CLASSNAME = $(this).attr('class').replace('svg ', '');
  switch (CLASSNAME){
  	case "wireframes":
  	case "mobile":
  		makeBigAF("translateX(10px)");
  		break;
  	case "wireframes":
  		$('article p').load("arts/wireframes.txt");
  		break;
  	case "mobile":
  		$('article p').load("arts/mobile.txt");
  		break;
  	case "proto":
  	case "desktop":
  		makeBigAF("translateX(-7px)");
  		break;
  	case "proto":
  		$('article p').load("arts/proto.txt");
  		break;
  	case "desktop":
  		$('article p').load("arts/desktop.txt");
  		break;
  	case "user":
  	case "poc":
  		makeBigAF("translateY(-15px) translateX(8px)");
  		break;
  	case "user":
  		$('article p').load("arts/user.txt");
  		break;
  	case "poc":
  		$('article p').load("arts/poc.txt");
  		break;
  	case "eval":
  	case "presen":
  		makeBigAF("translateY(-15px) translateX(-8px)");
  		break;
  	case "eval":
  		$('article p').load("arts/eval.txt");
  		break;
  	case "presen":
  		$('article p').load("arts/presen.txt");
  		break;
  	case "usability":
  	case "custom":
  		makeBigAF("translateY(-30px)");
  		break;
  	case "usability":
  		$('article p').load("arts/usability.txt");
  		break;
  	case "custom":
  		$('article p').load("arts/custom.txt");
  		break;
  	default:
  		console.log("It didn't work");
  		break;
  }
});


//hide x until needed
$(".x").hide();
//hide text until svgs are clicked
$("article").hide();
//listen for x click then make small AF
$(".x").click(function(){
  var TIMING = .75;
  $("article").hide();
  norm("[state='bigAF'] div svg", TIMING);
  norm("[state='bigAF'] div svg g#Shadow", TIMING);
  norm("[state='bigAF'] div svg g#icon", TIMING);

  //allow user to scroll again
  $(document).unbind('scroll'); 
  $('body').css({'overflow':'visible'});
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
