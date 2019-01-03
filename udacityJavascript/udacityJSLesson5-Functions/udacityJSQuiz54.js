/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(max){
  var str = "";
  for (var i = 0; i < max; i++){
    str += "ha";
  }
  return str + "!";
}

console.log(laugh(10));
