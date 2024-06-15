var canımankarambenim = [
    "https://i.pinimg.com/originals/50/89/a6/5089a6afcd11ab1ceeb01209ba226777.jpg",
    "https://res.allmacwallpaper.com/get/iMac-27-inch-wallpapers/Hills-In-The-Desert-2560x1440/8980-10.jpg",
]

document.body.style.backgroundImage = "url(" + canımankarambenim[Math.floor(Math.random() * canımankarambenim.length)] + ")"

function generateRandomNumber() { 
    // Generate a random number between 1 and 100
     var randomNumber = Math.floor(Math.random() * 100000) + 5000; 
    // Update the HTML content with the generated random number
     document.getElementById("randomNumber").innerHTML = "OY VEREN SAYISI: " + randomNumber; }


     function kyaybol() {
        var x = document.getElementById("kaybollann");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }






      function myfunction() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      
        function play() {
          var audio = document.getElementById("audio");
          audio.play();
        }
      
      function degisbeniz() {
        document.body.style.backgroundImage = 'url(assets/gbangi.gif)';  
      }
      
      function tamekran() {
        if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
         (!document.mozFullScreen && !document.webkitIsFullScreen)) {
          if (document.documentElement.requestFullScreen) {  
            document.documentElement.requestFullScreen();  
          } else if (document.documentElement.mozRequestFullScreen) {  
            document.documentElement.mozRequestFullScreen();  
          } else if (document.documentElement.webkitRequestFullScreen) {  
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
          }  
        } else {  
          if (document.cancelFullScreen) {  
            document.cancelFullScreen();  
          } else if (document.mozCancelFullScreen) {  
            document.mozCancelFullScreen();  
          } else if (document.webkitCancelFullScreen) {  
            document.webkitCancelFullScreen();  
          }  
        }  
      }

//made by flarnhess