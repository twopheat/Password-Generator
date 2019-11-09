// Declaring my variables
var specialEL = document.querySelector("#special")
var generateEl = document.querySelector("#generate");
var clipboardEl = document.querySelector("#clipboard");
var returnEl = document.querySelector("#returnP");

var keylist="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
var keylistSpecial="!@#$%^&*()_+-=[]{};':<>,.~`"

// EventListeners built for button click events
// Function to create simple random password, yes, I found this out in the internet, but I studied it heavily and modified it for my needs, didn't blindly paste it in

function returnPtext() {
    returnEl.textContent = returnP;
}

generateEl.addEventListener("click", function generateP() {
    return Math.random().toString(36).slice(2).keylistSpecial;
});

console.log(generateEl);

//clipboardEl.addEventListener("click", function() {
    
//})

