module.exports =
function check(str, bracketsConfig) {
  var arr = str.split('');
  var last = arr.pop();

    if (last == '(' || last == '[' || last == '{' || last > 0){
      return false;
    };
arr.push(last);
// function number () {
//   for ( var i = 0; i < arr.length; i++){
//
//   var numArr = [];
//
// }
// }

var fEl = 0;
var sEl = 0;
for (var i = 0; i < arr.length; i++){
  if ( arr[i] === '('){
    fEl += 1;
  };
  if ( arr[i] === ')'){
    sEl += 1;
  }
}
if (fEl == sEl){
  return true;
}
var a = 0;
var b = 0;
for ( var i = 0; i < arr.length; i++){
  if ( arr[i] === '['){
    a += 1;
  }
  if ( arr[i] === ']'){
    b += 1;
  }
  if ( a !== b){
    return false;
  }

}

var c = 0;
var d = 0;
for ( var i = 0; i < arr.length; i++){
  if ( arr[i] === '{'){
    c += 1;
  }
  if ( arr[i] === '}'){
    d += 1;
  }
  if ( c !== d){
    return false;
  }

}
    }
