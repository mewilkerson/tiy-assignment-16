$(function(){

  $.ajax("accordian.json",{

    success: function(data) {
      window.data = data;
      // $(".panel one").append( data[1]["paragraph"] );

      $(".panel-one").click(function(){
        $(".panel-one p").show(1000);
        $(".panel-two p").hide();
        $(".panel-three p").hide();
        $(".panel-one p").append( data[0]["paragraph"] );
      });
        $(".panel-two").click(function(){
        $(".panel-one p").hide();
        $(".panel-two p").show(1000);
        $(".panel-three p").hide();
        $(".panel-two p").append( data[1]["paragraph"] );
      });
        $(".panel-three").click(function(){
        $(".panel-one p").hide();
        $(".panel-two p").hide();
        $(".panel-three p").show(1000);
        $(".panel-three p").append( data[2]["paragraph"] );
      });

    },

    error: function() {
      console.log("failed to load accordian.json");
    }

  });

});




