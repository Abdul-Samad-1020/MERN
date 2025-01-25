<?php
// Database configuration
$host = 'localhost';
$dbname = 'your_database_name';
$username = 'your_database_username';
$password = 'your_database_password';

// Create a connection to the database
try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}

// Initialize variables for form input and errors
$name = $email = $password = $confirm_password = "";
$name_err = $email_err = $password_err = $confirm_password_err = "";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Sanitize and validate name
    if (empty(trim($_POST['name']))) {
        $name_err = "Please enter your name.";
    } else {
        $name = htmlspecialchars(trim($_POST['name']));
    }

    // Sanitize and validate email
    if (empty(trim($_POST['email']))) {
        $email_err = "Please enter your email address.";
    } elseif (!filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL)) {
        $email_err = "Invalid email format.";
    } else {
        $email = htmlspecialchars(trim($_POST['email']));
        
        // Check if email already exists
        $stmt = $conn->prepare("SELECT id FROM users WHERE email = :email");
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        if ($stmt->rowCount() > 0) {
            $email_err = "This email is already registered.";
        }
    }

    // Validate password
    if (empty(trim($_POST['password']))) {
        $password_err = "Please enter a password.";
    } elseif (strlen(trim($_POST['password'])) < 6) {
        $password_err = "Password must be at least 6 characters long.";
    } else {
        $password = trim($_POST['password']);
    }

    // Validate confirm password
    if (empty(trim($_POST['confirm_password']))) {
        $confirm_password_err = "Please confirm your password.";
    } elseif (trim($_POST['confirm_password']) !== $password) {
        $confirm_password_err = "Passwords do not match.";
    }

    // If no errors, proceed with user registration
    if (empty($name_err) && empty($email_err) && empty($password_err) && empty($confirm_password_err)) {
        $hashed_password = password_hash($password, PASSWORD_DEFAULT); // Hash the password

        $sql = "INSERT INTO users (name, email, password) VALUES (:name, :email, :password)";
        $stmt = $conn->prepare($sql);

        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $hashed_password);

        if ($stmt->execute()) {
            echo "Registration successful. You can now <a href='login.php'>log in</a>.";
        } else {
            echo "Something went wrong. Please try again later.";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .signup-form {
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
        }

        .signup-form h2 {
            margin-bottom: 20px;
            text-align: center;
        }

        .form-group {
            margin-bottom: 15px;
        }

        .form-group label {
            display: block;
            margin-bottom: 5px;
        }

        .form-group input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        .form-group .error {
            color: red;
            font-size: 0.9rem;
        }

        .form-group button {
            width: 100%;
            padding: 10px;
            background-color: #1db954;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        .form-group button:hover {
            background-color: #1aa34a;
        }

        .form-group a {
            display: block;
            margin-top: 10px;
            text-align: center;
            text-decoration: none;
            color: #1db954;
        }

        .form-group a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>

<div class="signup-form">
    <h2>Sign Up</h2>
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" value="<?php echo $name; ?>">
            <span class="error"><?php echo $name_err; ?></span>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" value="<?php echo $email; ?>">
            <span class="error"><?php echo $email_err; ?></span>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password">
            <span class="error"><?php echo $password_err; ?></span>
        </div>
        <div class="form-group">
            <label for="confirm_password">Confirm Password</label>
            <input type="password" id="confirm_password" name="confirm_password">
            <span class="error"><?php echo $confirm_password_err; ?></span>
        </div>
        <div class="form-group">
            <button type="submit">Sign Up</button>
        </div>
        <a href="login.php">Already have an account? Log in</a>
    </form>
</div>

</body>
</html>
