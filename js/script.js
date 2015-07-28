// js file. this will be fun
$(function(){
    console.log('jQuery loaded and running \n pixels available in document window ' + window.innerHeight);

    var $svgs = $('.svg');
    $svgs.each(function(index, elem){
        var $elem = $(elem);
        var pos = $elem.offset();
        $elem.data('orig-x', pos.left);
        $elem.data('orig-y', pos.top);
        $elem.data('pageNo', +$(elem).attr("scroll").replace("#page", ""));
        //console.log($elem.width());
        $elem.data('width', $elem.width());
        $elem.data('height', $elem.height());
    });
    var $recs = $('.pu');
    $recs.each(function(index, elem){
        var $elem = $(elem);
        var pos = $elem.offset();
        $elem.data('orig-x', pos.left);
        $elem.data('orig-y', pos.top);
        $elem.data('pageNo', 5);
        $elem.data('width', $elem.width());
        $elem.data('height', $elem.height());
        $elem.data('margin', parseInt($elem.parent().css("margin-top")));
        console.log($(elem).data());
    });
});

//initiate ourWork object
var ourWork = {
  height:"",
  width:"",
  margins:""
};

//hide x until needed
$(".x").hide();
var canExit = false;
//hide text until svgs are clicked
$(".article1").hide();
$(".article2").hide();
//listen for x click then make small AF
$(".x, .pu, .shade, .svgs, nav, .pagination").click(function(){
	if (canExit == true){
	  bigExists = false;
	  var TIMING = .75;
	  $(".article1").hide();
	  $(".article2").hide();
    if(currPage == 5){
        normWork(TIMING);
    }
    else{
    	  normSVG("[state='bigAF'] div svg", TIMING, 1);
    	  normSVG("[state='bigAF'] div svg path:not(g path)", TIMING, .12);
    	  normSVG("[state='bigAF'] div svg g", TIMING, 1);
    }
	  canExit = false;
	  $(".shade").css("display", "none");
	  $("[state='bigAF']").attr("state", "small");
	  $(".x").hide();
	}
});

function orientationCheck(){

  var ow = window.outerWidth,
  	oh = window.outerHeight;
  $('body').removeClass();
  if ( ow < 500 ) {
    $('body').addClass("smartPhone");
    $(".pagination").hide();
  } else if ( 500 < ow && ow < 800 ) {
    $('body').addClass("tabletPort");
  } else if ( 800 < ow && ow < 1300 ) {
    $('body').addClass("tabletLand");
  } else if ( ow > 1300 ) {
    $('body').addClass("desktop");
  }
  device = $('body').attr("class");
  if (device == "smartPhone"){
      ourWork.height = "190px";
      ourWork.width = "284px";
      ourWork.margins = "18px";
  }
  else if (device == "tabletPort"){
      ourWork.height = "215px";
      ourWork.width = "325px";
      ourWork.margins = "16px";
  }
  else if (device == "tabletLand"){
      ourWork.height = "193px";
      ourWork.width = "290px";
      ourWork.margins = "14px";
  }
  else {
      ourWork.height = "193px";
      ourWork.width = "290px";
      ourWork.margins = "20px";
  }
  console.log("Orientation: " +device);
}

window.addEventListener('orientationchange', orientationCheck);

// Stop checking user Agent, check for screen dimentions
//Put this at the top so it can be used
orientationCheck();
console.log(window.outerWidth + '\n' + window.outerHeight);
$(window).on("resize", orientationCheck);

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
});
TweenMax.set($('.svgs'),{perspective:1000});
//functions
function makeBigAF(ths, size){
	var TIMING = 1;
  var obj = {
    origX: $(ths).data("orig-x"),
    origY: $(ths).data("orig-y"),
    pageNo: $(ths).data("pageNo"),
    h: $(ths).data("height"),
    w: $(ths).data("width")
  }

  console.log("orig-x: "+obj.origY);
  var pagePos = $("#page"+obj.pageNo).offset();
  var pageHeight = pagePos.top;

	TweenLite.to($("[state='bigAF'] div svg path:not(g path)"), TIMING, {
	  	opacity:"0",
	  	transformOrigin:"50% 50%",
	  	zIndex: 2,
	  	ease:Power4.easeInOut
	});
	if (device == "smartPhone"){
    if (obj.pageNo == 2){
      TweenLite.to($("[state='bigAF'] div svg g"), TIMING/1.1, {
    	  	transform: "translateY(-235px) translateX(10px) translateZ(0) scale(0.25, 0.25)",
    	  	zIndex: 3,
    	  	transformOrigin:"50% 50%",
    	  	ease:Power1.easeOut
    	});
    }
    else if (obj.pageNo == 3){
      TweenLite.to($("[state='bigAF'] div svg g"), TIMING/1.1, {
    	  	transform: "translateY(-200px) translateX(10px) translateZ(0) scale(0.25, 0.25)",
    	  	zIndex: 3,
    	  	transformOrigin:"50% 50%",
    	  	ease:Power1.easeOut
    	});
    }
  }
  else {
    TweenLite.to($("[state='bigAF'] div svg g"), TIMING, {
  	  	transform: "translateY(-270px) translateX(10px) translateZ(0) scale(0.5, 0.5)",
  	  	zIndex: 3,
  	  	transformOrigin:"50% 50%",
  	  	ease:Power4.easeInOut
  	});
  }
  if(device == "smartPhone"){
    if(obj.pageNo == 3)
      var addr = -200;
    else if(obj.pageNo == 2)
      var addr = -150;
  }
  else if (device == "tabletPort"){
    if (obj.pageNo == 2)
      var addr = 100;
    else
      var addr = 100;
  }
  else if (device == "tabletLand"){
    if (obj.pageNo == 2)
      var addr = 124;
    else
      var addr = 124;
  }
  else{
    if (obj.pageNo == 2)
      var addr = 30;
    else {
      var addr = 30;
    }
  }
  var transY = "translateY("+String(-(obj.origY-pageHeight)+addr)+"px)";
  var trans = "translateX("+String(($(".mainContainer").width()/2) - obj.origX - +size.replace("px","")/2)+"px) "+transY;

  TweenLite.to($("[state='bigAF'] div svg"),TIMING,{
    width: size,
    height: size,
    transform: trans,
    zIndex: 3
  });
  if (obj.pageNo == 5){
    $("[state='bigAF']").parent().css("margin", 0);
    if (device == "smartPhone"){
      TweenLite.to( $("[state='bigAF']"), TIMING, {
        width: "100vw",
        height: "100vh",
        margin:0,
        zIndex:3,
        x: 0,
        transformOrigin: "50% 50%",
        ease:Power4.easeInOut
      });
    }
    else {//if(device == "tabletPort"){
      TweenLite.to( $("[state='bigAF']"), TIMING, {
        width: "100vw",
        height: "75vh",
        marginLeft: -obj.origX,
        zIndex:3,
        x: 0,
        transformOrigin: "50% 50%",
        ease:Power4.easeInOut
      });
    }
    var pngTL = new TimelineLite();
    $("[state='bigAF'] .img").show();
    pngTL.to($("[state='bigAF'] .bg"), TIMING/5, {opacity: 0})
         .to($("[state='bigAF'] .img"), .8*TIMING, {opacity: 1});
  }
	setTimeout(function(){$(".article"+String(obj.pageNo-1)).show();}, (TIMING*1000));
	setTimeout(function(){$(".x"+String(obj.pageNo-1)).show();}, (TIMING*1000));
  if (obj.pageNo == 5){
    setTimeout(function(){$(".x3").show();}, (TIMING*1000));
  }
	setTimeout(function(){canExit = true;}, (TIMING*1000));
}

function load(section, htm){
  $(section).empty();
  $.ajax({
    url: htm,
    cache: false
  })
    .done(function(html) {
      $(section).append(html);
  });
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
function normSVG(img, time, opacity){
  if($(img).parent().parent().hasClass("svg") || $(img).hasClass("pu")){
    var width = $(img).parent().parent().data("width");
    var height = $(img).parent().parent().data("height");
  }
  else{
    var width = "auto";
    var height = "auto";
  }
  TweenMax.to( $(img), time, {
		transform: "scale(1, 1) translateX(0px) translateY(0px)",
    width: width,
    height: height,
		opacity: opacity,
		zIndex: 0,
		transformOrigin:"50% 50%",
		ease:Power2.easeInOut
	});
}

//make an image or svg normal after animation
function norm(img, time, opacity){
	TweenMax.to( $(img), time, {
		transform: "scale(1, 1) translateX(0px) translateY(0px)",
		opacity: opacity,
		zIndex: 0,
		transformOrigin:"50% 50%",
		ease:Power2.easeInOut
	});
}

function normWork(time){
  $("[state = 'bigAF']").parent().css("margin", ourWork.margins);
  $("[state = bigAF]").css("position", "relative");
  TweenLite.to($("[state = bigAF]"), time,{
    width: ourWork.width,
    height: ourWork.height,
    margin: 0,
    zIndex: 0,
    top: 0,
    left: 0,
    transformOrigin: "50% 50%",
    ease:Power4.easeInOut
  });
}

//move icons after animations
function moveLeft(){
	if (current != 1){
		current--;
	}
	smlImage();
	norm("#image", .3, 1);

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
	norm("#image", .3, 1);

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

currPage = 1;
function scrollFunc(e) {
	var win = $(window);

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

  if (currPage == 1){
    $('nav').attr("class","open");
  }
  else{
    $('nav').attr("class","close");
  }

  //pagination logic
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
}
window.onscroll=scrollFunc;

//down arrow Bounce
var arrowBNC = new TimelineMax({repeat: -1});

arrowBNC.to($(".dwnArrow"), .3, {y: "-10px", ease: Power2.easeIn})
        .to($(".dwnArrow"), 1, {y: "0px", ease: Bounce.easeOut})
        .to($(".dwnArrow"), 1, {});

//slider logic
current=1;
moveCirc(1,1);
$(".leftbutt").css('visibility','hidden');
$(".leftButt").click(animateLeft);
$(".rightButt").click(animateRight);

//hide menu until clicked
menuHidden=true;
if (device=="smartPhone"){
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
  if (tar == "this"){
    if (device == "smartPhone"){
      if ($(this).attr("state")=="small"){
        $("html, body").animate({
          scrollTop: $(this).offset().top - 17
        },1000);
        canExit = true;
      }
    }
    else{
      if ($(this).attr("state")=="small"){
        $("html, body").animate({
          scrollTop: $(this).offset().top - 150
        },1000);
        canExit = true;
      }
    }
  }
  else{
    $('html, body').animate({
          scrollTop: $(tar).offset().top
    }, 1000);
  }
  if (tar != "#page1"){
    setTimeout(function () {$("nav").attr("class","close");}, 1000);
  }
  // add something to hide the menu when mobile dropdown
  if (device=="smartPhone"){
	    $(".menu ul").css('margin-right', '-100px');
	    $('.menu ul').hide();
	    menuHidden = true;
	}
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
bigExists = false;
$("[state='small']").click(function(e){
	if(bigExists == false){
	  $(".shade").css("display", "block");
	  bigExists = true;
	  $(this).attr("state", "bigAF");
	  //$(this).children().children().css("position", "absolute");
    if (device == "smartPhone")
      makeBigAF($(this), "1000px");
    else if (device == "tabletPort")
      makeBigAF($(this), "667px");
    else if (device == "tabletLand")
      makeBigAF($(this), "667px");
    else
      makeBigAF($(this), "724px");
	}
  var url = "arts/"+$(this).attr("class").replace("svg ", "") + ".htm";
  console.log(url);
  if ($(this).data("pageNo") != 5)
    load(".article" + ($(this).data("pageNo")-1), url);
  else {
    //space x for our work
    var row;
    if (device == "smartPhone"){
      row = +$("[state='bigAF']").attr("num").replace("j","");
    }
    else if(device == "tabletPort"){
      row = Math.floor(+$("[state='bigAF']").attr("num").replace("j","")/2);
    }
    else{
      row = Math.floor(+$("[state='bigAF']").attr("num").replace("j","")/3);
    }
    var num = 40 + row * ((2* (+$(this).data("margin")+2)) + +$(this).data("height"));
    $(".x3").css("margin-top",  String(num)+"px");
  }
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
