let user = window.prompt("Enter your username:");
let pass = window.prompt("Enter your password:");   

let username = "admin";
let password = "1234";

if (user === username && pass === password ) {
    console.log("Login successful");
}
else {
    console.log("Invalid crendentials");
};