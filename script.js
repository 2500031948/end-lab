
let registeredUser = null;

// Registration
document.getElementById("registerForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    registeredUser = {
        name: name,
        email: email,
        password: password
    };

    document.getElementById("details").innerHTML =
        "<h3>Registration Successful!</h3>" +
        "<p>Name: " + name + "</p>" +
        "<p>Email: " + email + "</p>";

    alert("Registration Successful!");

    document.getElementById("registerForm").reset();
});

// Login
document.getElementById("loginForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let message = document.getElementById("message");

    if (
        registeredUser &&
        email === registeredUser.email &&
        password === registeredUser.password
    ) {
        message.innerHTML = "Login Successful!";
        message.className = "success";
    } else {
        message.innerHTML = "Invalid Email or Password!";
        message.className = "error";
    }

});
