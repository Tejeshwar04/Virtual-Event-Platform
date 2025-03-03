<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "vep_db";

$conn = new mysqli($servername, $username, $password, $dbname);
header("Access-Control-Allow-Origin: *");


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
