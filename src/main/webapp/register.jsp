<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./register.css">
    <title>Register</title>
    <link rel="shortcut icon" href="./assets/images/dog.jpg" type="dog.png">
    <script src="./modelRegistration.js" defer></script>
    <script src="./controllerRegistration.js" defer></script>
</head>
<body>
<header class="footer">
    <div class="user">
        <button type="button" class='button' id="log_in" onclick="document.location='login.jsp'">Log in</button>
    </div>
</header>
<main>
    <form method="post" class="form-row" name="register_form">
        <section class="main">
            <img class="dog_logo" src="./assets/images/dog_jump.jpg" alt="whip">
            <div class="filter">
                <div class="form">
                    <b>EMAIL</b>
                    <input type="email" id="email" class="form-input" name="email" placeholder="EMAIL:" required>
                </div>
                <div class="form">
                    <b>USERNAME</b>
                    <input type="text" id="username" class="form-input" name="username" placeholder="username:"
                           pattern="[a-zA-Z0-9]{1,40}" required>
                </div>
                <div class="form">
                    <b>PASSWORD</b>
                    <input type="password" id="password" class="form-input" name="password" placeholder="password:"
                           pattern="[A-za-z0-9]{1,40}" required>
                </div>
                <div class="form">
                    <b>CONFIRM PASSWORD</b>
                    <input type="password" id="password" class="form-input" name="password" placeholder="confirm password:"  pattern="[A-za-z0-9]{1,40}" required>
                </div>
                <button type="button" class="button" onclick="document.location=''" id="register_btn">Create account</button>
            </div>
            </div>
        </section>
    </form>
</main>
</body>
<footer class="footer">
    DOGS
    2k9g
    @EMAIL
    02.03.2021
</footer>
</html>