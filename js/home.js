var linkHeader = document.getElementById("nav-top");
var links = linkHeader.getElementsByClassName("nav-items");
for(i=0; i<links.length; i++) {
    links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
    });
}
$(document).ready(function(){
    $(".carousel-control-prev, .carousel-control-next").hide();
    $("#slide").hover(
        function() { $(".carousel-control-prev, .carousel-control-next").show() },
        function() { $(".carousel-control-prev, .carousel-control-next").hide() });

    $(".btn-back-top").hide();
    $(window).scroll(function() {
        if ($(window).scrollTop() > 600) {
            $(".btn-back-top").show();
        }
        else {
            $(".btn-back-top").hide();
        }
      });
      
      $(".btn-back-top").on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0});
      });


    $(".drop-1").hover(
        function() { $(".drop-map").show()},
        function() { $(".drop-map").hide()}
    );

    $(".drop-2").hover(
        function() { $(".drop-price").show()},
        function() { $(".drop-price").hide()}
    );

    $(".drop-3").hover(
        function() { $(".drop-date").show()},
        function() { $(".drop-date").hide()}
    );

    $(".drop-4").hover(
        function() { $(".drop-go-to").show()},
        function() { $(".drop-go-to").hide()}
    );
    $(".drop-5").hover(
        function() { $(".drop-map-2").show()},
        function() { $(".drop-map-2").hide()}
    );
    $(".drop-6").hover(
        function() { $(".drop-date-2").show()},
        function() { $(".drop-date-2").hide()}
    );
    $(".drop-7").hover(
        function() { $(".drop-price-2").show()},
        function() { $(".drop-price-2").hide()}
    );
    $(".drop-8").hover(
        function() { $(".drop-giuong").show()},
        function() { $(".drop-giuong").hide()}
    );
});