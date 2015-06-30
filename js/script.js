// js file. this will be fun
$(function(){
    console.log('jQuery loaded and running');
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