$(document).ready(function(){
  $(".js-play").click(function(){
       
    $($(this).data("target"))[0].play();
    
  });
});
