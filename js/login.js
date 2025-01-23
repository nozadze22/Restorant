
const email = document.querySelector("#gmail")
const passwrod = document.querySelector("#password")
const rePasword = document.querySelector("#repasword")
const form = document.querySelectorAll(".form")
const tel = document.querySelector("#phone")
const lastname = document.querySelector("#lastname");
const namee= document.querySelector("#name")
const btn = document.querySelector(".btn")
const errMesage = document.querySelector(".errmsg")
const singOut = document.querySelector("#singout_swg");


passwrod.addEventListener("keyup", () => {
    const pass = passwrod.value.length;
if(pass <= 4 || pass >= 12)  {
  passwrod.style.borderColor = "red";
errMesage.style.display = "block"
}else if (pass > 4 && pass < 12){
    passwrod.style.borderColor = "green"
    errMesage.style.display = "none"
}
passwords()
checkTwo()
check()
});


rePasword.addEventListener("keyup", () => {
 
    if(rePasword.value != passwrod.value ) {
        rePasword.style.borderColor = "red";
        errMesage.style.display = "block"
    }else{
        rePasword.style.borderColor = "green";
        errMesage.style.display = "none"
    }
    checkTwo()
    check()
});

function passwords() {
    if( passwrod.value != rePasword.value) {
        rePasword.style.borderColor = "red";
    } else {
        rePasword.style.borderColor = "green";
    }
}


email.addEventListener("keyup", () => {
    const patten = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

if(!email.value.match(patten) ) {
    email.style.borderColor = "red"
    errMesage.style.display = "block"
}else {
    email.style.borderColor = "green"
    errMesage.style.display = "none"
}
    checkTwo()
    check()
});


tel.addEventListener("keyup", () => {
    const telPatten = /^(\+?995)?(79\d{7}|5\d{8})$/;
    if(!tel.value.match(telPatten) ) {
    tel.style.borderColor = "red";
        errMesage.style.display = "block"
    }else {
        tel.style.borderColor = "green";
        errMesage.style.display = "none"
    }
    checkTwo()
check()
});

lastname.addEventListener("keyup", () => {
    if(lastname.value.length <= 4 || lastname.value.length >= 15 ) {
    lastname.style.borderColor = "red"
    errMesage.style.display = "block"
    }else {
        lastname.style.borderColor = "green"
        errMesage.style.display = "none"
    }
    checkTwo()
check()
});


namee.addEventListener("keyup", () => {
    if(namee.value.length <= 4 || namee.value.length >= 15 ) {
        namee.style.borderColor = "red"
        errMesage.style.display = "block"
       
    }else {
        namee.style.borderColor = "green";
        errMesage.style.display = "none"
    }
    checkTwo()
    check()
});

function check () {
    if(errMesage.style.display != "block" ){
        btn.style.display = "block"
    }else  {
        btn.style.display = "none" 
    }
    checkTwo()
}

function checkTwo() {
    if(passwrod.value == "" || rePasword.value == "" || namee.value == ""
        || lastname.value == "" || tel.value == ""  || email.value == "" || passwrod.value.length != rePasword.value.length) {
        errMesage.style.display = "block"
        }
}
checkTwo()





