const form = document.getElementById("loginForm");

const message = document.getElementById("message");

const attemptsText = document.getElementById("attempts");

const loginButton = document.getElementById("loginButton");


// Demo credentials

const correctUsername = "admin";

const correctPassword = "Admin@123";


// Login settings

let attempts = 0;

const maxAttempts = 3;

let locked = false;


form.addEventListener("submit", function(event) {

    event.preventDefault();

    if (locked) {
        return;
    }

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;


    // Check credentials

    if (
        username === correctUsername &&
        password === correctPassword
    ) {

        attempts = 0;

        message.innerHTML =
            "✅ Login Successful! Welcome " + username;

        message.style.color = "#20c997";

        attemptsText.innerHTML = "Remaining Attempts: 3";

        return;

    }


    // Incorrect login

    attempts++;

    const remaining = maxAttempts - attempts;

    if (remaining > 0) {

        message.innerHTML =
            "❌ Incorrect username or password.";

        message.style.color = "#ff5252";

        attemptsText.innerHTML =
            "Remaining Attempts: " + remaining;

    }

    else {

        locked = true;

        message.innerHTML =
            "🔒 Account temporarily locked. Please try again later.";

        message.style.color = "#ff5252";

        attemptsText.innerHTML =
            "Maximum login attempts reached.";

        loginButton.disabled = true;

    }

});