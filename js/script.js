// js file. this will be fun
$(function(){
    console.log('jQuery loaded and running \n pixels available in document window ' + window.innerHeight);
});

// Stop checking user Agent, check for screen dimentions
//Put this at the top so it can be used
console.log(window.outerWidth + '\n' + window.outerHeight);
var ow = window.outerWidth,
	oh = window.outerHeight;

$.fn.isOnScreen = function(x, y){
    
    if(x == null || typeof x == 'undefined') x = 1;
    if(y == null || typeof y == 'undefined') y = 1;
    
    var win = $(window);
    
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    
    var height = this.outerHeight();
    var width = this.outerWidth();
 
    if(!width || !height){
        return false;
    }
    
    var bounds = this.offset();
    bounds.right = bounds.left + width;
    bounds.bottom = bounds.top + height;
    
    var visible = (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    
    if(!visible){
        return false;   
    }
    
    var deltas = {
        top : Math.min( 1, ( bounds.bottom - viewport.top ) / height),
        bottom : Math.min(1, ( viewport.bottom - bounds.top ) / height),
        left : Math.min(1, ( bounds.right - viewport.left ) / width),
        right : Math.min(1, ( viewport.right - bounds.left ) / width)
    };
    
    return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;
    
};

if ( ow < 500 ) {
  $('body').addClass("smartPhone");
} else if ( 500 < ow && ow < 800 ) {
  $('body').addClass("tabletPort");
} else if ( 800 < ow && ow < 1300 ) {
  $('body').addClass("tabletLand");
} else if ( ow > 1300 ) {
  $('body').addClass("desktop");
} else {
  console.log("dude what are you doing? grab a more common device");
}
console.log($('body').attr("class"));

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
$(".leftButt").click(function(){
	console.log("clicked");
});
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
	setTimeout(function(){$(".x").show();}, (TIMING*1000));
	setTimeout(function(){$(".article1").show();}, (TIMING*1000));
	setTimeout(function(){$(".article2").show();}, (TIMING*1000));
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
		opacity: "",
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
		opacity: "",
		transformOrigin:"50% 50%",
		ease:Power2.easeInOut,
		onComplete: moveLeft
	});
}

function navDown(){
	var TIMING = .5;
	TweenMax.to($("nav"), TIMING,{
		rotationX: 0,
		transformPerspective: 500,
		transformOrigin: "50% 0%",
		ease:Bounce.easeOut
	});
	$("#page1").css("padding-top", $('nav').height());
}

function navUp(){
	var TIMING = .2;
	TweenLite.to($("nav"), TIMING,{
		rotationX: -90,
		transformPerspective: 300,
		transformOrigin: "50% 0",
		ease:Power2.easeIn
	});
	$("#page1").css("padding-top", "0");
}

currPage = 1;
function scrollFunc(e) {
	var win = $(window);
	//console.log("depth: " + $(window).scrollTop());

	if (win.scrollTop()<($("#page1").height()/1.75)){
		currPage = 1
	}
	else if ((win.scrollTop()>($("#page1").height()/1.75))&&(win.scrollTop()<($("#page1").height()+$("#page2").height()/1.75))){
		currPage = 2;
	}
	else if ((win.scrollTop()>($("#page1").height()+$("#page2").height()/1.75))&&(win.scrollTop()<($("#page1").height()+$("#page2").height()+$("#page3").height()/1.75))){
		currPage = 3;
	}
	else if ((win.scrollTop()>($("#page1").height()+$("#page2").height()+$("#page3").height()/1.75))&&(win.scrollTop()<($("#page1").height()+$("#page2").height()+$("#page3").height()+$("#page4").height()/1.75))){
		currPage = 4;
	}
	else {
		currPage = 5;
	}

	for (var i = 1; i < 6; i++) {
		if (i == currPage){
			$(".pagination div.o" + i).addClass("current");
			$(".pagination").addClass("p"+i);
		}
		else {
			$(".pagination div.o" + i).removeClass("current");
			$(".pagination").removeClass("p"+i);

		}
	};

	console.log("page: " + currPage);

    if ( typeof scrollFunc.x == 'undefined' ) {
        scrollFunc.x=window.pageXOffset;
        scrollFunc.y=window.pageYOffset;
    }
    var diffX=scrollFunc.x-window.pageXOffset;
    var diffY=scrollFunc.y-window.pageYOffset;

    if( diffY<0 ) {
        // Scroll down
        $("nav").attr("class","close");
    } else if( diffY>0 ) {
        // Scroll up
        $("nav").attr("class","open");
    } else {
        // First scroll event -- do nothing
    }
    scrollFunc.x=window.pageXOffset;
    scrollFunc.y=window.pageYOffset;
}
$("#page1").css("padding-top", $('nav').height());
window.onscroll=scrollFunc;

//slider logic
current=1;
moveCirc(1,1);
$(".leftbutt").css('visibility','hidden');
$(".leftButt").click(animateLeft);
$(".rightButt").click(animateRight);

//hide menu until clicked
menuHidden=true;
if ($('body').attr("class")=="smartPhone"){
	$(".menu ul").hide();
	$(".menu ul").css('margin-right', '-100px');
}
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
    if ($("body").attr('class')=="smartPhone"){
	    $(".menu ul").css('margin-right', '-100px');
	    $('.menu ul').hide();
	    menuHidden = true;
	}
});

//load in page2 svgs
  console.log('function run');
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
bigExists = false;
$("[state='small']").click(function(e){
	if(bigExists == false){
	  bigExists = true;
	  $(this).attr("state", "bigAF");

	  if ($(this).hasClass("wireframes")){
	  	  $('.article1 p').load("arts/wireframes.htm");
	  	  makeBigAF("translateX(10px)");
	  }
	  else if ($(this).hasClass("mobile")){
	  	  $('.article2 p').load("arts/mobile.htm");
	  	  makeBigAF("translateX(10px)");
	  }
	  else if ($(this).hasClass("proto")){
	  	  $('.article1 p').load("arts/proto.htm");
	  	  makeBigAF("translateX(-7px)");
	  }
	  else if ($(this).hasClass("desktop")){
	  	  $('.article2 p').load("arts/desktop.htm");
	  	  makeBigAF("translateX(-7px)");
	  }
	  else if ($(this).hasClass("user")){
	  	  $('.article1 p').load("arts/user.htm");
	  	  makeBigAF("translateY(-15px) translateX(8px)");
	  }
	  else if ($(this).hasClass("poc")){
	  	  $('.article2 p').load("arts/poc.htm");
	  	  makeBigAF("translateY(-15px) translateX(8px)");
	  }
	  else if ($(this).hasClass("eval")){
	  	  $('.article1 p').load("arts/eval.htm");
	  	  makeBigAF("translateY(-15px) translateX(-8px)");
	  }
	  else if ($(this).hasClass("presen")){
	  	  $('.article2 p').load("arts/presen.htm");
	  	  makeBigAF("translateY(-15px) translateX(-8px)");
	  }
	  else if ($(this).hasClass("usability")){
	  	  $('.article1 p').load("arts/usability.htm");
	  	  makeBigAF("translateY(-30px)");
	  }
	  else{
	  	  $('.article2 p').load("arts/custom.htm");
	  	  makeBigAF("translateY(-30px)");
	  }
	}
});


//hide x until needed
$(".x").hide();
//hide text until svgs are clicked
$(".article1").hide();
$(".article2").hide();
//listen for x click then make small AF
$(".x").click(function(){
  bigExists = false;
  var TIMING = .75;
  $(".article1").hide();
  $(".article2").hide();
  norm("[state='bigAF'] div svg", TIMING);
  norm("[state='bigAF'] div svg g#Shadow", TIMING);
  norm("[state='bigAF'] div svg g#icon", TIMING);

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
