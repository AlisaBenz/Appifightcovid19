<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
include('config.ini.php');
$conn = new mysqli('localhost','root','','ifightcovid19db');
if ($conn->connect_errno){
  die("Connection failed" . $conn->connect_error);
}


$username= $_POST['username'];
$password= $_POST['password'];
$role= $_POST['role'];
$datenow = date("Y-m-d");


$sql = "INSERT INTO `loginaddmin`(`username`,`password`,`role`,`date`)
         VALUES('$username','$password','$role','$datenow')";  
$result = mysqli_query($conn,$sql);                    
if($result){
    $callback= array(
        'status' => 200
        ,'msg' => 'Insert Success'
    );
}else{
    $callback=array(
    'status' => 404
    ,'msg' => "Insert Fail"
);
    }
    // echo($status);
    // echo json_encode();

?>