var ppl = {"person":[
{"id":10,"firstName":"John","lastName":"Doe"},
{"id":5,"firstName":"Jack","lastName":"Doe"},
{"id":7,"firstName":"James","lastName":"Doe" }]}

http://www.omdbapi.com/?t=Frozen&y=&plot=short&r=json


var roger = [];

var call = function(title) {
  $.ajax({
    type:'GET',
    dataType: 'json',
    url: "http://www.omdbapi.com/?t=" + title + "&y=&plot=short&r=json"
  }).done(function( result ) {
    roger.push(result);
  });
}

$('#search').click(function(){
  var title = $("#title").value();
  call(title);
});