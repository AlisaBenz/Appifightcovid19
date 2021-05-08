<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
// header('Access-Control-Allow-Methods: GET');
// header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
include('config.ini.php');


$sql = "SELECT * FROM `form14daytable`";
$result = mysqli_query($con,$sql);
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

