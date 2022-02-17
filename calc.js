'use strict';
let result =document.getElementById("result");

function number(elem) {
   if (result.value === "0"){
       return;
   } else {
       result.value = result.value + elem.value;
   }
 }

function get_calc(elem) {
   if (result.value.slice(-1) === '+' ){
       return;
   } else if (result.value.slice(-1) === '-' ){
       return;
   } else if (result.value.slice(-1) === '*' ){
       return;
   } else if (result.value.slice(-1) === '/' ){
       return;
   } else {
       result.value = result.value + elem.value;
   }
}

function calc() {
    result.value = new Function( "return " + result.value)();
}
function clear_calc(){
    result.value = '';
}
