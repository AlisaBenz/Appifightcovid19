<?php
$con = new mysqli('localhost','root','','ifightcovid19db');
if ($con->connect_errno){
  die("Connection failed" . $conn->connect_error);
}

?>