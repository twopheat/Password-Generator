// Declaring some global variables
var generateEl = document.querySelector("#generate");
var clipboardEl = document.querySelector("#clipboard");
var keylist="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var keyspecial="'(!)*+,-./:;<=>?@[]^_`{|}~";

// Function to create random password
function makePass(){
    var UserInput=pLength.value.replace(/[^0-9.]/g,""); //This does NOT limit to 128
    // Update input value
    pLength.value=UserInput;
    // Declare local variables for makePass
    var Results=document.getElementById('results');
    var pass = "";
    // Is input empty?
    if(pLength!==''){
        for( var i=0; i < pLength.value; i++ ){
            pass += keylist.charAt(Math.floor(Math.random() * keylist.length));
        }
        Results.innerHTML=pass;
    }
    

    function passArray() {
        var foo = [];

        for (var i = 0; i <= 128; i++) {//This does NOT limit to 128
            foo.indexOf(i);
            
        };
    }
    }
//below two functions are supposed to copy to clipboard, no dice there
function Copy() {
    var copyText = document.getElementById("results");
    copyText.selectText();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied");
  }

  function selectText() {
  const input = document.getElementById('results');
  input.focus();
  input.select();
}
// EventListeners for button click events

//clipboardEl.addEventListener("click", Copy.bind(this));  <--DOES NOT WORK

generateEl.addEventListener("click", makePass.bind(this));
