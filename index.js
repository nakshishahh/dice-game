for(let i = 0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click" , h);
function h(){
   var button = this.innerHTML;
   makeSound(button);
   animation(button);
};
}
function animation(cKey){
   var active = document.querySelectorAll("." + cKey);
   active.classList.add("pressed");
   setTimeout(function(){
      active.classList.remove("pressed");
   },100)

   }

   document.addEventListener("keydown" , function(event){
      makeSound(event.key);
      animation(event.key);

   });
   function makeSound(key){
      switch (key) {
         case "w":
            var kick = new Audio("sounds/tom-1.mp3");
            kick.play();
            
            break;
            case "a":
               var tom1 = new Audio("sounds/tom-2.mp3");
               tom1.play();
               break;
      
            case "s":
                  var tom2 = new Audio("sounds/tom-3.mp3");
                  tom2.play();
                  break;
      
            case "d":
                     var tom3 = new Audio("sounds/tom-4.mp3");
                     tom3.play();
                     break;
      
             case "j":
                        var tom4 = new Audio("sounds/snare.mp3");
                        tom4.play();
                        
                        
                        break;
      
            case "k":
                           var crash = new Audio("sounds/crash.mp3");
                           crash.play();
                           break;
                     
             case "l":
                var crash = new Audio("sounds/kick-bass.mp3");
                 crash.play();
                break;
      
         default:
            console.log(button.innerHTML);
   
            
      }};
     
   
   
   
    


