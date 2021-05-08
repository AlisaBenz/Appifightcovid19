<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include('config.ini.php');
$conn = new mysqli('localhost','root','','ifightcovid19db');


if ($conn->connect_errno){
  die("Connection failed" . $conn->connect_error);
}

$password = $_GET['password'];
$sql2 = "SELECT * FROM `loginaddmin` where `password`= '$password' ";
$result = mysqli_query($con,$sql2);    
$numrow = mysqli_num_rows($result);
if($numrow > 0 ){
    $data = array();
    while($row = mysqli_fetch_assoc($result)){
        $data[] = $row;
    }
}
echo json_encode($data); 
echo mysqli_error($con); 
?>