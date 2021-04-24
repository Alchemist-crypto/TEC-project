 'user strict'
 var myIndex = 0;
 carousel();

 function carousel() {
     var i;
     var x = document.getElementsByClassName("textSlide");
     for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
         x[i].style.animationName = "textslider";
         x[i].style.animationDuration = "0.5s";
     }
     myIndex++;
     if (myIndex > x.length) { myIndex = 1 }

     x[myIndex - 1].style.display = "block";
     setTimeout(carousel, 7000);
 }