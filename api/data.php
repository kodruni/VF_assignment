<?php

$file = fopen("fullstack.csv", "r");
$csvData = array();
while (($row = fgetcsv($file, 0, ",")) !== FALSE) {
  $csvData[] = $row;
}
echo json_encode($csvData);