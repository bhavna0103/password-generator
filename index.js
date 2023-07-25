let lowerData = "abcdefghijklmnopqrstuvwxyz";
let upperData = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numData = "1234567890";
let symData = "!@#$%^&*()";
  

let passwordInput = document.getElementById("passwordInput");
let passwordLength = document.getElementById("passwordLength");
let upper = document.getElementById("upper");
let lower = document.getElementById("lower");
let num = document.getElementById("num");
let sym = document.getElementById("sym");




function generateNumber(data){
return data[Math.floor(Math.random()*data.length)];


}

function generate(passWord=""){
    if(upper.checked){
      passWord +=  generateNumber(upperData)
    }
    if(lower.checked){
        passWord +=  generateNumber(lowerData)
      }
      if(num.checked){
        passWord +=  generateNumber(numData)
      }
      if(sym.checked){
        passWord +=  generateNumber(symData)
      }
      if(passWord.length<passwordLength.value){
     return   generate(passWord)
      }
      passwordInput.value=passWord;
      console.log(passWord);

}
function myFun(){
    generate()
}
function copied(){
    alert("Text Copied")
}