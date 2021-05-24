
let registrationForm = document.forms.register_form;
let registerButton = document.getElementById("register_btn");

function onClickRegisterButton(){
    // for (let i = 0; i < registrationForm.length; i++) {
    //     if (!registrationForm[i].checkValidity()) {
    //         return false;
    //     }
    // }
    let newUser = {};
    newUser.id = registeredUsersArray.getLastId() + 1;
    newUser.username = registrationForm.username.value;
    if(!registeredUsersArray.doesUserExist(newUser.username)) {
        alert("This name is already in use!");
        return false;
    }
    newUser.password = registrationForm.password.value;
    newUser.email = registrationForm.email.value;
    if(!registeredUsersArray.doesEmailExist(newUser.email)) {
        alert("The user with the same email is already registered!");
        return false;
    }
    registeredUsersArray.add(newUser);
    registeredUsersArray.setRegisteredUser(newUser.id);

    alert("User was registered successfully");
    window.location.href="index.jsp";
    return false;
}
registerButton.addEventListener('click',onClickRegisterButton);
