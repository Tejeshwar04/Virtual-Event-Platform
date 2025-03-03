<?php
include 'db.php';

// Allow CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'];
$date = $data['date'];
$description = $data['description'];

$sql = "INSERT INTO events (name, date, description) VALUES ('$name', '$date', '$description')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["status" => "success", "message" => "Event added successfully"]);
} else {
    echo json_encode(["status" => "error", "message" => "Error: " . $conn->error]);
}

$conn->close();
?>
