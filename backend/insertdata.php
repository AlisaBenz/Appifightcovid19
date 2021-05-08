<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
include('config.ini.php');

$conn = new mysqli('localhost','root','','ifightcovid19db');
if ($conn->connect_errno){
  die("Connection failed" . $conn->connect_error);
}

// $id = $_GET['id'];
$user_id = $_POST['user_id'];
$symptom1= $_POST['symptom1'];
$symptom2= $_POST['symptom2'];
$symptom3= $_POST['symptom3'];
$symptom4= $_POST['symptom4'];
$symptom5= $_POST['symptom5'];
$symptom6= $_POST['symptom6'];
$symptom7= $_POST['symptom7'];
$lat= $_POST['lat'];
$lag= $_POST['lng'];
$datenow = date("Y-m-d");
$status = 0;
$statustext = '';
// $user_id='id';

if ($symptom1 == 'มี') {
  $status += 1 ;
}
if ($symptom2 == 'มี') {
    $status += 1 ;
  }
if ($symptom3 == 'มี') {
    $status += 1 ;
  }
if ($symptom4 == 'มี') {
    $status += 1 ;
  }
if ($symptom5 == 'มี') {
    $status += 1 ;
  }
if ($symptom6 == 'มี') {
    $status += 1 ;
  }
if ($symptom7 == 'มี') {
    $status += 1 ;
  }

if($status >=2 ){
    $statustext="เสี่ยง";
}else{
    $statustext="ปกติ";
}
$sql = "INSERT INTO `form14daytable`(`date`,`status`,`lat`,`lag`,`user_id`)
         VALUES('$datenow','$statustext','$lat', '$lag','$user_id')";
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

echo json_encode($statustext);



?>