$(function(){

  $.ajax("accordian.json",{

    success: function(data) {
      window.data = data;
      $(".accordian").append( data[1]["paragraph"] );
      

    },

    error: function() {
      console.log("failed to load accordian.json");
    }

  });

});




