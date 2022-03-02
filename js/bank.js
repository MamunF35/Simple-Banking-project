document.getElementById("login-submit").addEventListener("click", function () {
    // console.log("My name is click");

    // get user email
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    console.log(userEmail);


    // get user password 
    const passwordField = document.getElementById("user-password");
    const userPassword = passwordField.value;
    console.log(userPassword);

    if (userEmail == "me@gmail.com" && userPassword== "1234"){
        console.log("Matched");
        window.location.href="bank.html"
    }
})