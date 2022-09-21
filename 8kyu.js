// Training JS #1: create your first JS function and print "Hello World!"


function helloWorld(){
  let str = "Hello World!"
  console.log(str)
}


// Training JS #2: Basic data types--Number

var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250

function equal1(){
  var a=v1   
  var b=v1   
  return a+b;
}
function equal2(){
  var a= v3 
  var b= v1  
  return a-b;
}
function equal3(){
  var a=  v5
  var b= v1  
  return a*b;
}
function equal4(){
  var a= v4 
  var b= v5  
  return a/b;
}
function equal5(){
  var a= v2 
  var b= v4  
  return a%b;
}


// Training JS #4: Basic data types--Array

function getLength(arr){

  return arr.length
}
function getFirst(arr){
  return arr[0]
}
function getLast(arr){
  return arr[arr.length-1]
}
function pushElement(arr){
  var el=1;
arr.push(el)
  
  return arr
}
function popElement(arr){
 
arr.pop()
  return arr;
}


// Training JS #6: Basic data types--Boolean and conditional statements if..else

function trueOrFalse(val){
  if (val == false || val == null)    return "false";             
  else   return "true";
}

// Training JS #7: if..else and ternary operator

function saleHotdogs(n){
  return n<5 ? n*100 : n>=5 && n<10 ? n*95:  n*90 ;

}

// Training JS #8: Conditional statement--switch

function howManydays(month){
  var days;
  switch (month){
  case 2:
  days = 28
     break;
      case 4:
      days = 30
      break;
      case 6:
      case 9:
      case 11:
      days = 30
      break;
  case 2:
      days = 28
      break;
      default:
      days= 31
  }
  
  return days;
}

// Training JS #14: Methods of Number object--toString() and toLocaleString()

function colorOf(r,g,b){
return "#" + toHex(r) + toHex(g) + toHex(b);
  function toHex(n){
    var result = n.toString(16);
    return result.length ==1 ? "0"+result : result;
  }
}
