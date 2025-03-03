<?php
include 'db.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

// Get the input data
$data = json_decode(file_get_contents("php://input"), true);

// Check if all fields are set
if (isset($data['username'], $data['email'], $data['password'], $data['mobile'])) {
    $username = mysqli_real_escape_string($conn, $data['username']);
    $email = mysqli_real_escape_string($conn, $data['email']);
    $password = password_hash($data['password'], PASSWORD_DEFAULT);
    $mobile = mysqli_real_escape_string($conn, $data['mobile']);

    // Check if user already exists
    $checkEmail = $conn->query("SELECT * FROM users WHERE email='$email'");
    if ($checkEmail->num_rows > 0) {
        echo json_encode(["message" => "User already exists"]);
    } else {
        // Insert new user
        $sql = "INSERT INTO users (username, email, password, mobile) 
                VALUES ('$username', '$email', '$password', '$mobile')";

        if ($conn->query($sql) === TRUE) {
            echo json_encode(["message" => "User registered successfully"]);
        } else {
            echo json_encode(["message" => "Error: " . $conn->error]);
        }
    }
} else {
    echo json_encode(["message" => "Invalid input"]);
}

$conn->close();
?>
