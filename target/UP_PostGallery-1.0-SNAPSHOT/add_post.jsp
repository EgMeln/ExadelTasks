<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>THEDOG</title>
    <!-- //подключение css -->
    <link rel="stylesheet" href="./add_post.css">
    <link rel="shortcut icon" href="./assets/images/dog.jpg" type="dog.png">
    <script src="./modelPost.js" defer></script>
    <script src="./modelRegistration.js" defer></script>
    <script src="./viewButtonAdd.js" defer></script>
    <script src="./controllerAdd.js" defer></script>
</head>
<body> 
    <header class= "footer">
      <h1 class="title">Лента
      <img class="dog_logo" src="./assets/images/dog-removebg-preview.png" alt="whip">
      </h1>
    <div class="user">
      <button type="button" class='button' id = "logn_in_btn" onclick="document.location='login.jsp'">Log in</button>
    </div>
    <div class="user">
      <button type="button" class='button' id = "sign_in_btn" onclick="document.location='register.jsp'">Sign in</button>
    </div>
    <div class="user">
      <span id="header_username">Username</span>
    </div>
    <div class="user">
      <button type="button" class='button' id = "sign_out_btn"> Sign out</button>
    </div>
    </header>
    <hr>
       <main>
        <form name="add" method="post" class="add-main-box">
         <section class="main">
           <div class = "photo">
             <div class = "add_photo">
              <img src="" alt="" class="add-img"  id="add_img">
             </div>
             <input type="file" name="file" id="dropbox" class="input-file" accept="image/jpeg,image/png,image/jpg" required>
            </div>

            <div class= "add_abs">
             <b>Description:</b>
             <input id="add-description" type="text" name="description" class="input-text" placeholder="description:">
             <b>Origin:</b>
             <input id="add-origin" type="text" name="origin" class="input-text" placeholder="origin:">
             <b>Hashtags:</b>
             <input id="add-hashtags" type="text" name="hashtags" class="input-text" placeholder="tags:">
             <button type="button" class="button" id="add-btn" onclick="document.location='index.jsp'">Add</button>
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