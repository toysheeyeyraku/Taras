
$(document).ready(function () {
    $('.burger').on('click', function () {
        
        if(!$('#burgermenu').hasClass('header-burger-after-active')){
            $('#burgermenu').addClass('header-burger-after-active');
           
        }
        else{
            console.log("DDDD")
            $('#burgermenu').removeClass('header-burger-after-active');
            
        }
    });
    $( window ).resize(function() {
        window.location.reload();
      });

});