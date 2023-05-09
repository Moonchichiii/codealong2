function Login() {
    const gameNameInput = document.getElementById("username")
    const username = gameNameInput.value;

    if (!username) {
        alert("Please choose a username!");
        return;
    }
    window.localStorage.setItem("username", username);
    window.location.href = "quiz.html";
}

const username = windows.localStorage.getItem("username");
document.getElementById("username-displayed").textContent = username;

