<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
include('config.ini.php');
$conn = new mysqli('localhost','root','','ifightcovid19db');
if ($conn->connect_errno){
  die("Connection failed" . $conn->connect_error);
}

$topic= $_POST['addform1'];
$ans1=$_POST['addform3']; 
$ans2=$_POST['addform4'];
$ans3=$_POST['addform5'];
$ans4=$_POST['addform6'];



// $datenow = date("Y-m-d");
$topictext = '';

$ans1text = '';
$ans2text = '';
$ans3text = '';
$ans4text = '';

$sql = "INSERT INTO `addformquestion`(`topic`,`ans1`,`ans2`,`ans3`,`ans4`)
         VALUES('$topic','$ans1','$ans2','$ans3','$ans4')";
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

// echo($status)


?>