<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>PHP</title>
   <style>
       body {
           font-family: Arial, sans-serif;
           background-color: #f4f4f4;
           margin: 0;
           padding: 20px;
           text-align: center;
       }
       p {
           font-size: 32px;
           color: #333;
       }
       #text1{
         color: #007BFF;
       }      
       
       button {
           padding: 10px 20px;
           font-size: 16px;
           cursor: pointer;
           background-color: #007BFF;
           color: white;
           border: none;
           border-radius: 5px;
           transition: background-color 0.3s ease;
       }

       button:hover {
           background-color: #0056b3;
       }
   </style>
</head>
<body>

<?php 
echo "<p id= text1>Hello! I like Pizza</p><br>";
echo "<p>It's really good</p>";
//this is a comment 
$a = 10;
$b = 9;
$greeting = " Hello";
$greeting1 = " Everyone";

if($a <= 5){
    echo "<p>a is greater than 5</p>";
}

echo "<p>$greeting" . "$greeting1</p>";

function add($a, $b){
    $sum = $a + $b ;
    echo $sum;
}

add(10,9);
?>

</body>
</html>
