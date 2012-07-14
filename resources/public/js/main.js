$(document).ready(function() {
  // setup radio buttons
  $('.position-buttons').button();

  // setup radius slider
  $(".radius-slider").noUiSlider("init", { 
    dontActivate: "lower", 
    startMax: "50",
    scale: [0, 100], 
    tracker: function () {
      $(".radius-value").text(
        parseInt($(".radius-slider").noUiSlider("getValue")[0])+"px"
      );
    }
  });

  // setup padding slider
  $(".padding-slider").noUiSlider("init", { 
    dontActivate: "lower", 
    startMax: "20",
    scale: [0, 100], 
    tracker: function () {
      $(".padding-value").text(
        parseInt($(".padding-slider").noUiSlider("getValue")[0])+"px"
      );
    }
  });

  // setup margin slider
  $(".margin-slider").noUiSlider("init", { 
    dontActivate: "lower", 
    startMax: "10",
    scale: [0, 100], 
    tracker: function () {
      $(".margin-value").text(
        parseInt($(".margin-slider").noUiSlider("getValue")[0])+"px"
      );
    }
  });

});