$(function() {
    $( "#height__slider-range-min" ).slider({
      range: "min",
      value: 10,
      min: 100,
      max: 250,
      slide: function( event, ui ) {
        $( "#amount_height" ).val(ui.value + "cm");
      }
    });
    $(".ui-slider-handle").text("<>");
    $( "#amount_height" ).val($( "#height__slider-range-min" ).slider( "value") + "cm");
  });
  $(function() {
    $( "#weight__slider-range-min" ).slider({
      range: "min",
      value: 10,
      min: 0,
      max: 150,
      slide: function( event, ui ) {
        $( "#amount_weight" ).val(ui.value + "kg");
      }
    });
    $(".ui-slider-handle").text("<>");
    $( "#amount_weight" ).val($( "#weight__slider-range-min" ).slider( "value") + "kg");
  });
  ////
