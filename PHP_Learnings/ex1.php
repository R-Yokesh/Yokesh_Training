<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercise 1</title>

    
</head>
<body>
    <form action="ex1.php" method="post">
        <label>Quantity:</label><br><br>
        <input type="text" name="quantity">
        <input type="submit" value="total">
    </form>
    
</body>
</html>

<?php 
    $item = "Dosa";
    $price = "1.99";
    $quantity = $_POST["quantity"];
    $total = null;

    $total = $quantity * $price;

    echo "<b>You have ordered</b> {$quantity} x {$item}<br>";
    echo "<b>Your Total is:</b> \${$total} <br>";

    // $version = phpversion();
    // echo $version;

    for($i=2;$i<=100;$i+=2) {
        echo "$i ". "<br>";
    }

?>