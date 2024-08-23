<?php

session_start();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="prac1.php" method="post">
        <label>username : </label><br>
        <input type="text" name="username"><br>
        <label>password : </label><br>
        <input type="password" name="password"><br>
        <input type="submit" name="login" value="login">
    </form>
</body>
</html>

<?php

if(isset($_POST["login"])){
    
    
    if(!empty($_POST["username"]) && $_POST["password"]){
        $_SESSION["username"] = $_POST["username"];
        $_SESSION["password"] = $_POST["password"];

        header("Location: home.php");


    }
    else{
        echo"missing username/password <br>";
    }
}

?>