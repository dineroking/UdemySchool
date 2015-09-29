<?php
  /**
   * Project: UdemySchool.
   * By: Ronny Rosabal
   * Date: 9/7/15
   * Time: 4:19 PM
   * Content:
   */

  $emailTo = "ronnyrosabal@gmail.com";
  $subject = "email test";
  $body = "this is the body of the email";
  $headers = "From: ronnyrosabal@aol.com";

  if(mail($emailTo, $subject, $body, $headers)) {

    echo "email sent";

  } else {

    echo "email not sent";

  }

?>