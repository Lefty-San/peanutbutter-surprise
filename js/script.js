// js file. this will be fun
$(function(){
    console.log('jQuery loaded and running');
});

$(".wireframes").load("svg/UX/Wireframes.svg");
$(".interactive").load("svg/UX/InteractivePrototypes.svg");
$(".eval").load("svg/UX/HeuristicEvaluation.svg");
$(".usability").load("svg/UX/UsabilityTesting.svg");
$(".user").load("svg/UX/UserPersonas.svg");

$(".svg").click(function(){
	$(this).children().attr("state", "play");
	$(this).children().children().attr("state", "play");
	$(this).children("p").show();
	console.log("hover");
});