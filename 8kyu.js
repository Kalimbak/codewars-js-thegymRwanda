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
  //pop an element from arr
arr.pop()
  return arr;
}
