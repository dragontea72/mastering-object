
 var name = 'kuddos';// global
function add(num1 , num2){
     result = num1 + num2;
    console.log("name inside ", name);
   // var  result = num1 + num2; // local
    function double(num){

        return num * 2;
    }
    var total = double(result);
    return result;
}

console.log("name outside ", name);
var sum = add (13, 21);
console.log(sum);
console.log('result outside', result);