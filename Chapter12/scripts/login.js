/**
 * Created by Aaron on 2016/8/15.
 */
function validate(form) {
    var returnValue = true;
    var username = login.un.value;
    var password = login.pwd.value;
    var confirnPWD = login.cpw.value;

    if (username.length < 6) {
        returnValue = false;
        alert("Your username must be at least 6 characters long.")
        login.un.focus();
    }

    if (password.length < 6) {
        returnValue = false;
        alert("Your password must be at least 6 characters long.")
        login.pwd.value = "";
        login.cpw.value = "";
        login.pwd.focus();
    }

    if (password.value != confirnPWD.value) {
        returnValue = true;
        alert("Your password entries did not match.")
         login.pwd.value = "";
        login.cpw.value = "";
        login.pwd.focus();
    }

}