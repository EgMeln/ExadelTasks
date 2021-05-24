if(registeredUsersArray.getRegisteredUser() == null){
    console.log("Log in to enter this page!");
    window.location.href="index.jsp";
}

let addForm = document.forms.add;
let submitBtn = document.getElementById("add-btn");
let dropbox = document.getElementById("dropbox");
let image = document.getElementById("add_img");
let box = document.querySelector(".add_photo");
let fileName;

submitBtn.addEventListener('click', handleAddSubmit);

function handleAddSubmit(event) {
    for (let i = 0; i < addForm.length; i++) {
        if (!addForm[i].checkValidity()) {
            return;
        }
    }
    let post = {};
    post.id = postArray.getLastId()+1;
    post.description = addForm.description.value;
    post.origin = addForm.origin.value;
    post.createdAt = new Date();
    post.author = registeredUsersArray.getRegisteredUser().username;
    post.photoLink = "./assets/images/"+fileName;
    post.hashtags = addForm.hashtags.value === "" ? [] : addForm.hashtags.value.split(' ');
    post.likes = [];

    postArray.add(post);

    alert("Post was created successfully");
}


function onFileLoad(event) {
    fileName = dropbox.files.item(0).name;
    console.log(fileName);
    image.setAttribute("src","assets/images/"+fileName);
    box.style.borderStyle = "none";
}
dropbox.addEventListener('change',onFileLoad);
