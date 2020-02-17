function Sum (a, b) {
  let result = undefined
  if(typeof a == 'number' && typeof b == 'number'){
  result = a + b
  }
return result;
}


function AddList(arr){
  let result = undefined;
  result = 0;
  if(arr.length > 0){
  for (var i = 0, i < arr.length; i++){

    result = result + arr[i];
  }
   }
}
return result;

function DivideBy(x,y){
  if( typeof x == "number" && typeof y == "number"){
    result = x/y
  }
}
return result;

function ContainsString(){
 if(typeof a == "string" && typeof b == "string"){
   result = true
 }
}
return result;


function ReSortedNumbers(){
  let array = "parameter"
  if(typeof array = 'string'){
    return String;
  }
  else{
    if(typeof array = "null")
    reutrn null;
  }
}


function Adder(){

}
export { Sum, AddList };

