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
});
});
