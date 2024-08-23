<?php
echo "Hello World <br>";
$fname = "Yokesh";
$lname = "R";
$a = 10;
$b = 10;
$c = $a + $b;
echo "Sum of $a + $b = $c";
echo "<br>$fname" . "$lname <br>";
echo "This my first name : {$fname}<br>";


$fruits = array("apple","mango", "orange", "banana");

array_push($fruits, "kiwi" , "mosambi","coco");
array_pop($fruits);

foreach($fruits as $fruit)
{
    echo $fruit . "<br><br>";
}

setcookie("fav_star" , "CR7" , time() - 0,"/"); // to remove a cookie
setcookie("fav_Beverage" , "Coffee" , time() + (86400 * 3),"/");
setcookie("fav_food" , "pizza" , time()- 0,"/");
setcookie("fav_star" , "CR7" , time() + (86400 * 2),"/");

foreach($_COOKIE as $key => $value){
    echo "{$key} = {$value} <br>";
}

if(isset($_COOKIE["fav_food"])){
    echo "Buy Some {$_COOKIE["fav_food"]} !!!";
}
else{
    echo "I dont know your favourite food";
}
?> 
