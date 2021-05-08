<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
include('config.ini.php');
$conn = new mysqli('localhost','root','','ifightcovid19db');
if ($conn->connect_errno){
  die("Connection failed" . $conn->connect_error);
}
$datenow = date("Y-m-d");
$name= $_POST['name'];
$lastname= $_POST['lastname'];
$date_brithday= $_POST['date_brithday'];
$personid= $_POST['personid'];
$address= $_POST['address'];
$district= $_POST['district'];
$sub_district= $_POST['sub_district'];
$provine= $_POST['provine'];
$phone= $_POST['phone'];
// $updatestatus=$_POST['updatestatus'];

$sql = "INSERT INTO `users`(`name`,`lastname`,`personid`,`date_brithday`,`address`,`district`,`sub_district`,`provine`,`phone`)
         VALUES('$name','$lastname','$personid','$date_brithday','$address','$district','$sub_district','$provine','$phone')";	
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

// echo ($status);


?>