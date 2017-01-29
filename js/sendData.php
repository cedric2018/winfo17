<?php
  # This will send JSON data to be parsed in Javascript
  # Reads in a json file in the same directory
  $file = json_decode(file_get_contents("mgh_data.json"));
  header("Content-type: application/json");
  print json_encode($file);
?>
