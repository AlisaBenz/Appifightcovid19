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
// $id = $_GET['id'];
$user_id = $_POST['user_id'];
$healthquestion1= $_POST['healthquestion1'];
$healthquestion2= $_POST['healthquestion2'];
$datenow = date("Y-m-d");


$diseasetext = '';
$historyofillnesstext = '0';



$sql = "INSERT INTO `healthquestion`(`username`,`disease`,`historyofillness`,`date`,`user_id`)
         VALUES('รอก่อน','$healthquestion1','$healthquestion2','$datenow','$user_id')";	
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




?>