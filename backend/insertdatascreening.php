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

$id = $_GET['id'];
$user_id = $_POST['user_id']; //เรียกuser_id 
$questionnaire1= $_POST['questionnaire1'];
$questionnaire2= $_POST['questionnaire2'];
$questionnaire3= $_POST['questionnaire3'];
$questionnaire4= $_POST['questionnaire4'];
$questionnaire5= $_POST['questionnaire5'];
$questionnaire6= $_POST['questionnaire6'];
$questionnaire7= $_POST['questionnaire7'];
$questionnaire8= $_POST['questionnaire8'];
$selected= $_POST['selected '];


$datenow = date("Y-m-d");
$status = 0;
$statustext = '';
$score = 0;
$scoretext='';
// $screening_id=''; 
// $result ='';

if ($questionnaire1 == '1') {
  $status += 1 ;
}
if ($questionnaire2 == '1') {
    $status += 1 ;
  }
if ($questionnaire3 == '1') {
    $status += 1 ;
  }
if ($questionnaire4 == '1') {
    $status += 1 ;
  }
if ($questionnaire5 == '1') {
    $status += 1 ;
  }
if ($questionnaire6 == '1') {
    $status += 1 ;
  }
if ($questionnaire7 == '1') {
    $status += 1 ;
  }
if ($questionnaire8 == '1') {
    $status += 1 ;
  }
if ($selected == '1') {
  $status += 1 ;
}


if($status >4 ){
    $statustext="สถานะเสี่ยงมาก ";
}
elseif($status >3 ){
    $statustext="สถานะเสี่ยง";
}
elseif($status >2 ){
    $statustext="สถานะปานกลาง";
}
else{
    $statustext="สถานะปกติ";
}

if($status >4 ){
  $scoretext="4คะแนน";
}
elseif($status >3 ){
  $scoretext="3คะแนน";
}
elseif($status >2 ){
  $scoretext="2คะแนน";
}else{
  $scoretext="1คะแนน ";
}

$sql = "INSERT INTO `screeningquestion1`( `user_id`,`date`,`status`,`score`)
         VALUES('$user_id','$datenow','$statustext', '$scoretext')";
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

echo($status);


?>