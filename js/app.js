document.addEventListener("DOMContentLoaded", function(){
    
    var menu = document.querySelector(".menu");
    var mobileMenu = document.querySelector(".mobileMenu");
    
    //media:
    var smallMobile = window.matchMedia("(max-width: 350px)");
    var mobile = window.matchMedia("(min-width: 351px) and (max-width: 650px)");
    
    
    
    function mediaQuery(){
        
        if (smallMobile.matches){
            console.log("smallMobile");
            menu.style.display = "none";
            mobileMenu.style.display = "none";
        }
        
        else if(mobile.matches) {
            console.log("mobile");
            menu.style.display = "none";
            mobileMenu.style.display = "flex";
            }
            
        else {
            console.log("desktop");
            menu.style.display = "inherit";
            mobileMenu.style.display = "none";
            }
     
        }

    mediaQuery();
    mobile.addListener(function(mobile) {
        mediaQuery();     
    });
    
    mobileMenu.addEventListener("click", function(event) {
       //console.log("click"); 
        if (menu.style.display == "none") {
            menu.style.display = "inherit";
        }
        else if  (menu.style.display == "inherit") {
            menu.style.display = "none";
        }
    });
    
    
}); 