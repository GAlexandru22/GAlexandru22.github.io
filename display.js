function navbar(){

    var w = document.getElementById("scroll_down")
    if ($(window).width() < 1700){   

        w.className = "display";
      }
  
      else{   

        w.className = ""
      }
    }
      setInterval(navbar, 1);  