$(document).ready(function(){

//inputting random text into info temporarily

  $.getJSON('http://hipsterjesus.com/api/', {paras:1}).done(function(data) {
            $('.info').html( data.text );
        });

  $('.color').click(function(){
    $('.info').hide();
    $('.products').show();
  })
  $('.information').click(function(){
    $('.products').hide();
    $('.info').show();
  })

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
