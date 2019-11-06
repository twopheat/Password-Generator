var keylist="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
var keylistSpecial="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{};':<>,.~`"
var Output=''
 
function generatepass(plength){
Output=''
for (i=0;i<plength;i++)
Output+=keylist.charAt(Math.floor(Math.random()*keylist.length))
return Output
}

function generatepassSpecial(plength){
Output=''
for (i=0;i<plength;i++)
Output+=keylistSpecial.charAt(Math.floor(Math.random()*keylistSpecial.length))
return Output
}

function populateform(enterlength){
document.pgenerate.output.value=generatepass(enterlength)
}

function handleChange(btnSpecial) {
  if(btnSpecial.checked == true){
      document.getElementById("submit").removeAttribute("disabled");
  }else{
      document.getElementById("submit").setAttribute("disabled", "disabled");
  }
}

function handleChange(btnUppercase) {
  if(btnUppercase.checked == true){
      document.getElementById("submit").removeAttribute("disabled");
  }else{
      document.getElementById("submit").setAttribute("disabled", "disabled");
  }
}