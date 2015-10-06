<?php
  /**
   * Project: UdemySchool.
   * By: Ronny Rosabal
   * Date: 10/6/2015
   * Time: 4:38 PM
   * Content: understanding get variables
   */


?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title></title>
  </head>
  <body>

    <div>

      <?php

        if($_GET["fname"]){

          echo "Your name is " . $_GET['fname'];

        }

      ?>

      <form>
        <label for="fname">fname:</label><input id="fname" name="fname" type="text">
        <label for="lname">lname:</label><input id="lname" name="lname" type="text">
        <input type="submit" value="send">
      </form>


    </div>

  </body>
</html>
