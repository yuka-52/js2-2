'use strict';

 function clickbutton(target) {
      let result = document.getElementById("result")
      let target_value = target.innerHTML;
     
      if (target_value == "AC") {
       console.log("AC");
     } else if (target_value == "=") {
       console.log("=");
     } else {
       console.log("それ以外");
     }
 }
