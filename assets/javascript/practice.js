$(document).ready(function(){

var place, date;

$.ajax({
    Method:  "GET /query",
    url: "https://console.api.ai/api-client/#/editAgent/37e77a06-cec4-4d8a-a0bd-7fdf7ee167e8/"
}).done(function(e){
    date = e.result.parameters.date-period;
    place = e.result.parameters.geo-city;
});

console.log( "going to "+place+" on " + date);

})