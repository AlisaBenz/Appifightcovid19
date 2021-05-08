<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Methods: GET');
include('config.ini.php');

$conn = new mysqli('localhost','root','','ifightcovid19db');
if ($conn->connect_errno){
  die("Connection failed" . $conn->connect_error);
}
$sql = "DELETE FROM  `addformquestion` ";
if ($conn->query($sql) === TRUE) {
  echo "deleted successfully";
} else {
  echo "Error deleting record: " . $conn->error;
}

$conn->close();
 ?>




