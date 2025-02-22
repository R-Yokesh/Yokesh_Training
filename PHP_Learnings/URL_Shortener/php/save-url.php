<?php
    // Include the database configuration file
    include "config.php";

    // Sanitize and process input values
    $og_url = mysqli_real_escape_string($conn, $_POST['shorten_url']);
    $shorten_url = str_replace(' ', '', $og_url);
    $hidden_url = mysqli_real_escape_string($conn, $_POST['hidden_url']);

    // Check if the short URL is provided
    if(!empty($shorten_url)){
        if(preg_match("/\//i", $shorten_url)){
            $explodeURL = explode('/', $shorten_url);
            $shortURL = end($explodeURL);

            // Update the short URL if it's not already in use
            if($shortURL != ""){
                $sql = mysqli_query($conn, "SELECT shorten_url FROM url WHERE shorten_url = '{$shortURL}' && shorten_url != '{$hidden_url}'");
                if(mysqli_num_rows($sql) == 0){
                    $sql2 = mysqli_query($conn, "UPDATE url SET shorten_url = '{$shortURL}' WHERE shorten_url = '{$hidden_url}'");
                    echo $sql2 ? "success" : "Error - Failed to update link!";
                }else{
                    echo "The short url that you've entered already exist. Please enter another one!";
                }
            }else{
                echo "Required - You have to enter short url!";
            }
        }else{
            echo "Invalid URL - You can't edit domain name!";
        }
    }else{
        echo "Error- You have to enter short url!";
    }
?>
