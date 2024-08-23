<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Associative Arrays</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }

        form {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            width: 100%;
            max-width: 400px;
        }

        label, input[type="text"], input[type="submit"] {
            font-size: 1.5em;
            margin: 10px 0;
        }

        input[type="text"] {
            padding: 10px;
            width: 80%;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        input[type="submit"] {
            padding: 10px 20px;
            background-color: #28a745;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        input[type="submit"]:hover {
            background-color: #218838;
        }

        .result {
            margin-top: 20px;
            font-size: 1.5em;
            text-align: center;
        }
    </style>
</head>
<body>
    <form action="ex2.php" method="post">
        <label>Enter a Fruit</label>
        <input type="text" name="fruit">
        <input type="submit" value="Submit">
    </form>

    <?php 
    if (isset($_POST["fruit"])) {
        $fruits = array(
            "apple" => "Vitamin A",
            "mango" => "Vitamin E", 
            "orange" => "Vitamin C", 
            "banana" => "Vitamin D"
        );

        $fruit = strtolower(trim($_POST["fruit"]));
        $vitamins = isset($fruits[$fruit]) ? $fruits[$fruit] : "not found";

        echo "<div class='result'>
                The vitamin of the fruit is <b>{$vitamins}</b>
              </div>";
    }
    ?>
     
</body>
</html>
