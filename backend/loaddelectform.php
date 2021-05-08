<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Methods: GET');
include('config.ini.php');

$conn = new mysqli('localhost','root','','ifightcovid19db');
if ($conn->connect_errno){
  die("Connection failed" . $conn->connect_error);
}

$data14day = date( "Y-m-d" , strtotime('-30 day'));
$datenow =  date("Y-m-d");

$sql = "DELETE FROM  `form14daytable` WHERE `date` >=$data14day ";

if ($conn->query($sql) === TRUE) {
  echo "Record deleted successfully";
} else {
  echo "Error deleting record: " . $conn->error;
}

$conn->close();
 ?>






