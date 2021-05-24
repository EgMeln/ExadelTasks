<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>THEDOG</title>
    <!-- //подключение css -->
    <link rel="stylesheet" href="./style.css">
    <link rel="shortcut icon" href="./assets/images/dog.jpg" type="dog.png">
    <script src="./modelPost.js" defer></script>
    <script src="./viewPost.js" defer></script>
    <script src="./controllerButton.js" defer></script>
    <script src="./modelRegistration.js" defer></script>
    <script src="./viewButton.js" defer></script>

</head>
<body> 
  <header class= "footer">
    <h1 class="title">Лента
    <img class="dog_logo" src="./assets/images/dog-removebg-preview (1).png" alt="whip">
    </h1>
    <div class="user">
      <button type="button" class='button' id = "logn_in_btn" onclick="document.location='login.jsp'">Log in</button>
    </div>
    <div class="user">
      <button type="button" class='button' id = "sign_in_btn" onclick="document.location='register.jsp'">Sign in</button>
    </div>
    <div class="user">
      <span id="header_username">Username></span>
    </div>
    <div class="user">
      <button type="button" class='button' id = "sign_out_btn"> Sign out</button>
    </div>
  </header>
  <hr>
     <main class = "fon">
       <section class="main">
         <div class = "filter">
          <form class="filter-fieldset" name="filter">
              <button type="button" class="button" onclick="document.location='add_post.jsp'" id = "add_btn">add post</button>
              <div class = "sorts">
              <label>Date</label>
              <input name="filter_date_checkbox" type="checkbox" value="Date" id = "check1">
              <input name="filter_date_text" value='' type="date" class="filter-input">
              <label>Tags</label>
              <input type="checkbox" name="filter_hashtags_checkbox" value="Tags" id = "check1">
              <input type="text" id = "check1" name="filter_hashtags_text" placeholder="tags:">  
              <button type="button" class="button" id = "filter_button">sort</button>
              </form>
            </div>
          </div>

          <div class= "abs_array">
           <!-- Добавление объявлений сюда -->
          </div>
        </section>
        <button type="button" class="button" id="more_button">add posts</button>
     </main>
</body>
<footer class="footer">  
  DOGS
  2k9g
  @EMAIL
  02.03.2021
</footer>
</html>