// Declaring some global variables
var generateEl = document.querySelector("#generate");
var clipboardEl = document.querySelector("#clipboard");
var keylist="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var keyspecial="'(!)*+,-./:;<=>?@[]^_`{|}~";

// Function to create random password
function makePass(){
    var UserInput=pLength.value.replace(passArray(), "");
    //Update input value
    pLength.value=UserInput;
    //Declare local variables for makePass
    var Results=document.getElementById('results');
    var pass = "";
    var keylist = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    //Is input is empty?
    if(pLength!==''){
        for( var i=0; i < pLength.value; i++ ){
            pass += keylist.charAt(Math.floor(Math.random() * keylist.length));
        }
        Results.innerHTML=pass;
    }

    function passArray() {
        var foo = [];

        for (var i = 8; i <= 128; i++) {
            foo.push(i);
        };
    }
    }



// EventListeners for button click events

//clipboardEl.addEventListener("click", function copy(){});

generateEl.addEventListener("click", function makePass(){});
