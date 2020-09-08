var header = document.getElementById("nav-top");
var links = document.getElementsByClassName("top-link-1");
for(i=0; i<links.length; i++) {
    links[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}