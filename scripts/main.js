//JQuery document ready if script is added to head of file to wait for page to load before execute
$(document).ready(function(){
//getJSON data to retrieve data via AJAX = $.getJSON(url, data, callbackfunction)
//  url = resource for JSON file
  var url = "https://savingsmultipliedssh.firebaseio.com/itemlist.json";
//  data = argument to send data to webserver

//  callback = function for when document successfully receives a response

  $.getJSON(url, function(response){
  //var statusHTML directs to the unorder list in html document we want to append
  var statusHTML = "<ul class="ajax">";

    //$.each(array_or_object, function(index, value){};)
    //array = current index value of item or object = same as counter in a for loop
    //funcion(index, value){}; = structure of JSON data
    $.each(resonse, function(index, item){
      if (item.image){
        statusHTML +="<li class="image">";
      } else {
        statusHTML +="<li class="noimage">";
      }
      //append closing tag for list item item to make individual list item
      statusHTML += item.price: + "</li>";
    });
    //append closing ul tag to end the unordered list
    statusHTML += "</ul>";
    $("#ajax").html(statusHTML);
  });
});//end ready function
