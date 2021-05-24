let lognForm = document.forms.logn_form;
let lognButton = document.getElementById("logn_btn");

// if(registeredUsersArray.getRegisteredUser() != null){
//     console.log("You are registered user. Sign out to enter this page!");
//     window.location.href="index.jsp";
// }

function onClickSignButton(){
    // for (let i = 0; i < lognForm.length; i++) {
    //     if (!lognForm[i].checkValidity()) {
    //         return false;
    //     }
    // }
    let enteredUser = {};
    let realPassword = "";
    enteredUser.username = lognForm.username.value;
    if(registeredUsersArray.doesUserExist(enteredUser.username)) {
        alert("User with this name does not exist");
        return false;
    } else {
        enteredUser.id = registeredUsersArray.getUserIDByUsername(enteredUser.username);
        enteredUser.email = registeredUsersArray.getUserFromArray(enteredUser.id).email;
        realPassword = registeredUsersArray.getUserFromArray(enteredUser.id).password;
        if(String(lognForm.password.value) === String(realPassword)) {
            enteredUser.password = lognForm.password.value;
        } else {
            alert("Wrong password!!!");
            return false;
        }
    }
    registeredUsersArray.setRegisteredUser(enteredUser.id);

    alert("You have successfully logged in");
    window.location.href="index.jsp";
    return false;
}
lognButton.addEventListener('click',onClickSignButton);