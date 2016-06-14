$(document).ready(function(){
  $("#get").on("click", function(){
    $.ajax({
      url: "https://tunr-api.herokuapp.com/artists",
      type: "GET",
      dataType: "json"
    }).done(function(response){
      for (var i = 0; i<response.length;i++){
        $("ul.artists").append("<li><a href='/artists/" + response[i].id + "'>" + response[i].name + "</a></li>")
      }
    }).fail(function(response){
      console.log("FAIL!", response);
    });
  })
});
