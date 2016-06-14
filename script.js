$(document).ready(function(){
  $("#get").on("click", function(){
    $.ajax({
      url: "https://tunr-api.herokuapp.com/artists",
      type: "GET",
      dataType: "json"
    }).done(function(response){
      console.log(response);
    }).fail(function(response){
      console.log("FAIL!", response);
    });
  })
});
