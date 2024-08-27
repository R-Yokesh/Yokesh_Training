<?php
    // Include the database configuration file
    include "config.php";

    if(isset($_GET['id'])){
        $delete_id = mysqli_real_escape_string($conn, $_GET['id']);
        // Execute SQL query to delete the specific short URL from the database
        $sql = mysqli_query($conn, "DELETE FROM url WHERE shorten_url = '{$delete_id}'");
        // Redirect to the homepage after deletion attempt
        if($sql){
            header("Location: ../");
        }else{
            header("Location: ../");
        }
    }
    // Check if all URLs are to be deleted
    elseif(isset($_GET['delete'])){
        $sql3 = mysqli_query($conn, "DELETE FROM url");
        // Redirect to the homepage after deletion attempt
        if($sql3){
            header("Location: ../");
        }else{
            header("Location: ../");
        }
    }
    // If no valid action, goes to the homepage
    else{
        header("Location: ../");
    }
?>
