$(document).ready(function(){
  
  // Which direction?
  // The direction reps what happens after it has clicked the second time.
  // For example, on click, the slider goes up, and on the second click, the slider goes "DOWN" = option3.
  var option1 = { direction: "up" };
  var option2 = { direction: "right" };
  var option3 = { direction: "down" };
  var option4 = { direction: "left" };

  // How long in milliseconds?  1000 ms = 1 second
  // Set the time of the animation here:
  var duration = 500;

  // Use this if you want the slider to go down, then "UP"
  $(".toggle-up").click(function(e) { 
      e.preventDefault(); 
        $('.slider-up').toggle("slide", option1, duration);
  });

  // Use this if you want the slider to go left and then "RIGHT"
      $(".toggle-right").click(function (e) {
        e.preventDefault(); 
        $('.slider-right').toggle("slide", option2, duration);
  }); 

  // Use this if you want the slider to go up and then "DOWN"
      $(".toggle-down").click(function (e) {
        e.preventDefault(); 
        $('.slider-down').toggle("slide", option3, duration);
  });

  // Use this if you want the slider to go right and then "LEFT"
      $(".toggle-left").click(function (e) {
        e.preventDefault(); 
        $('.slider-left').toggle("slide", option4, duration);
  });

      // This is for retreiving the instructions on how to use the plug in
    $(".toggle-plugin").click(function(e) { 
      e.preventDefault(); 
        $('.slider-plugin').toggle("slide", option3, duration);
  });

  function updateAutoScroll(element) {
      var $element = $(element);

      if (element.scrollHeight > element.clientHeight) 
          $element .css("overflow-y", "scroll");
      else 
          $element .css("overflow-y", "auto");
  }

  $(".slider-plugin").each(function() { updateAutoScroll(this); });

}); // doc ready

