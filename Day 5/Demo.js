
var box1 = document.getElementById("num1");
var box2 = document.getElementById("num2");

var result = document.getElementById("result");

console.log(box1.value);
console.log(box2.value);


function addition()
{
    var box1value = Number(box1.value)
    var box2value = Number(box2.value)

    var total = box1value + box2value;
    result.textContent = total;



    result.textContent = total

}



