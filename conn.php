$email = $_POST['email'];
$message = $_POST['message'];

$query = "INSERT INTO contact_form_responses (email, message) VALUES ('$email', '$message')";
mysqli_query($conn, $query);