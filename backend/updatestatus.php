<?php
header('Access-Control-Allow-Methods: GET,PUT,POST');
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
// header('Access-Control-Allow-Credentials: true');
include('config.ini.php');


$conn = new mysqli('localhost','root','','ifightcovid19db');
if ($conn->connect_errno){
  die("Connection failed" . $conn->connect_error);
}


$id = $_POST['id'];
$updatestatus = $_POST['updatestatus'];
echo $id;
echo $updatestatus;
$sql = "UPDATE `users` SET `updatestatus` = '$updatestatus' where `id` = '$id' ";
if ($conn->query($sql) === TRUE) {
  echo "Record updated successfully";
} else {
  echo "Error updating record: " . $conn->error;
 
}

$conn->close();
?>


