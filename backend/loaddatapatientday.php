<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
include('config.ini.php');
$datenow = date("Y-m-d");
$sql = "SELECT count(*) FROM `screeningquestion1` where `status` = 'สถานะเสี่ยงมาก' and  `date` = '$datenow'";
$result = mysqli_query($con,$sql);    
$numrow = mysqli_num_rows($result);
if($numrow > 0 ){
    $data = array();
    while($row = mysqli_fetch_assoc($result)){
        $row['patientnow'] = $row['count(*)'];
        $data[] = $row;
        
    }
}
echo json_encode($data); 
echo mysqli_error($con); 


?>