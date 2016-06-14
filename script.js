$(document).ready(function(){
  $("#get").on("click", function(){
    $.ajax({
      url: "https://tunr-api.herokuapp.com/artists",
      type: "GET",
      dataType: "json"
    }).done(function(response){
      console.log(response);
      for (var i = 0; i<response.length;i++){
        $("ul").append("<li><a href='https://tunr-api.herokuapp.com/artists/" + response[i].id + "'>" + response[i].name + "</a></li>")
      }
    }).fail(function(response){
      console.log("FAIL!", response);
    });
  })

  $("#post").on("click", function(){
    var name = $("#artist-name").val();
    var photoUrl = $("#artist-photo-url").val();
    var nationality = $("#artist-nationality").val();
    $.ajax({
      type: 'POST',
      data: {
        artist: {
          photo_url: photoUrl,
          name: name,
          nationality: nationality
        }
      },
      dataType: 'json',
      url: "https://tunr-api.herokuapp.com/artists.json"
    }).done(function(response) {
      console.log(response);
      $("ul.articles").append("<li><a href='/artists/" + response.id + "'>" + response.name + "</a></li>");
    }).fail(function(response){
      console.log("ajax post request failed");
    });
  });
});
