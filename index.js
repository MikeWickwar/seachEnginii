var button = document.getElementById('button');
var iny = document.getElementById('sItem');
$(document).ready(function(){
  $("#tabl").hide();
})
button.addEventListener('click',function(){

var getter = $.ajax({
  url: 'https://www.reddit.com/subreddits/search.json?q=' +iny.value,
  method: "GET",
  dataType: "json",
});

getter.done(function(responce){
  console.log(responce);
  var a = responce.data.children;
  for (var i = 0; i < a.length; i++) {
    console.log(a[i].data.display_name);  //test
    $('#tabl').append("<tr><td>"+a[i].data.title+"</td><td><img id='hImg' src='"+a[i].data.header_img+"'</td><td>"+a[i].data.display_name+"</td></tr>")
    $('#tabl').css({'height' : '100%','width' : '100%'})
    $("#tabl").show();

  }

});
});


//start with thte error on ln 20
