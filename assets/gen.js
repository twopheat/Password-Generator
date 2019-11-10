// Declaring some global variables
var generateEl = document.querySelector("#generate");
var copyEl = document.querySelector("#Copy");
var specialChar = document.querySelector("#sChar")
var keylist = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var keyspecial = "'(!)*+,-./:;<=>?@[]^_`{|}~";

// Function to create random password
function makePass() {
    var UserInput = pLength.value.replace(/[^0-9.]/g,"");
    // Update input value
    pLength.value = UserInput;
    // Declare local variables for makePass
    var Results = document.getElementById('results');
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

        for (var i = 0; i <= 128; i++) {//This does NOT limit to 8-128 as I had hoped
            foo.indexOf(i);
            
        };
    }
    }

    function makePass() {
    var UserInput = pLength.value.replace(passArray(),"");
    // Update input value
    pLength.value = UserInput;
    // Declare local variables for makePass
    var Results = document.getElementById('results');
    var pass = "";
    // Is input empty?
    if(pLength!= 8-128){
        for( var i=0; i < pLength.value; i++ ){
            pass += keylist.charAt(Math.floor(Math.random() * keylist.length));
        }
        Results.innerHTML=pass;
        
    }
    

    function passArray() {
        var foo = [];

        for (var i = 8; i <= 128; i++) {//This does NOT limit to 8-128 as I had hoped
            foo.indexOf(i);
            };
    }
    }
    
//below two functions are supposed to copy to clipboard, no dice there
function Copy() {
    document.getElementById("results").focus({preventScroll:false});
    document.execCommand("copy");
    alert("Copied");
  }

focusMethod = function getFocus() {           
   document.getElementById("results").focus();
}
// EventListeners for button click events

copyEl.addEventListener("click", Copy.bind(this));  

generateEl.addEventListener("click", makePass.bind(this));
