let inputslider = document.getElementById("inputslider");
let slidervalue =document.getElementById("slidervalue");
let passbox =document.getElementById("passbox");

let lowercase =document.getElementById("lowercase");
let uppercase =document.getElementById("uppercase");
let numbers =document.getElementById("numbers");
let symbols =document.getElementById("symbols");

let genbtn =document.getElementById("genbtn");
let copyicon =document.getElementById("copyicon");




// show input slider value 

slidervalue.textContent=inputslider.value;
inputslider.addEventListener('input', ()=>{

    slidervalue.textContent=inputslider.value;

})

// for generate button 

genbtn.addEventListener('click' , ()=>{
    passbox.value = generatePassword();

})

let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let Lowerchars = "abcdefghijklmnopqrstuvwxyz";
let allnumbers = "0123456789";
let allsymbols = "!@#$%^&*()_-?/<>:;";


// function to generate password 

function  generatePassword(){
    let generatePassword = "";
    let allchars ="";

    allchars += lowercase.checked ? Lowerchars : "";
    allchars += uppercase.checked ? upperchars : "";
    allchars += numbers.checked ? allnumbers : "";
    allchars += symbols.checked ? allsymbols : "";

    if(allchars == "" || allchars.length ==0){
        return generatePassword;
    }


    let i= 1;
    while(i<=inputslider.value){
          generatePassword += allchars.charAt(Math.floor (Math.random () * allchars.length));
        i++;
    }
     return generatePassword;

}

copyicon.addEventListener('click' , ()=>{
navigator.clipboard.writeText(passbox.value);

})

