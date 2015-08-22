$(document).ready(function(){

  $.getJSON("data/data.json", function(data){
    // $('.products').prepend("<h2>" + data.response.products[0].name.toUpperCase() + "</h2>");
    for(var i = 0; i < data.response.products[0].options.length; i++){
      var item = data.response.products[0].options[i];
      $('.products').append("<span class='productContainer'><img class='product' data-id='" + item.color + "' src='" + item.image + "'></span>");
      $('.product').click(function(){
        $('.cart')[0].innerHTML = "<h3>" + $(this).attr("data-id").toUpperCase() + "</h3><img src='" + this.src + "'>";
      });
    }
  })

})
