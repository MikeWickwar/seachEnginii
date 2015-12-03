var button = document.getElementById('button');
var iny = document.getElementById('sItem');
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
    $('#tabl').append("<tr><td>"+a[i].data.display_name+"</td><td><img id='hImg' src='"+a[i].data.header_img+"'</td></tr>")
    
  }

});
});


//start with thte error on ln 20
