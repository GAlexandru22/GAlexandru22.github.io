function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    
  }
  function navbar(){
  var z = document.getElementById("navSpacing");
  var y = document.getElementById("navContainer");
  if ($(window).width() < 600){   
      y.className = "";
      z.className = "";
    }

    else{   
      z.className = "space-between";
      y.className = "container";
    }
  }
    setInterval(navbar, 1);  
  