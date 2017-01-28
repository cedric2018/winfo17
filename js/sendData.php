<?php
  $file = json_decode(file_get_contents("mgh_data.json"));
  header("Content-type: application/json");
  print json_encode($file);
?>
