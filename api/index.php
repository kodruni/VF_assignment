<?php

include 'data.php';
require_once 'User.php';

$users =[];
foreach ($data as $item) {
  $user = new User('name', 'credit', 'last_tud');
  $user->fromArray($item);
  array_push($users, $user);
}

header('Content-type: application/json');
echo json_encode($users);