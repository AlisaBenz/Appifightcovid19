<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
include('config.ini.php');

$text =  1;

$sql = "SELECT count(*) FROM `screeningquestion1` GROUP BY `status` ";
$result = mysqli_query($con,$sql);    
$numrow = mysqli_num_rows($result);
if($numrow > 0 ){
    $data = array();
    while($row = mysqli_fetch_assoc($result)){
        $text2 = "count{$text}";
        $row[$text2] = $row['count(*)'];
        $text += 1;
        $data[] = $row;
        
    }
}
echo json_encode($data); 
echo mysqli_error($con); 


?>