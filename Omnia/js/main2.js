
  AOS.init();


let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let phoneNumInput = document.getElementById("phoneNumInput");
let inputNameAlert = document.getElementById("inputNameAlert");
let inputEmailAlert =document.getElementById("inputEmailAlert");
let inputNumAlert =document.getElementById("inputNumAlert");
let textAreaInput = document.getElementById("textAreaInput");
//validation name///
function validateUserName() {
    let regex = /^[A-Z][a-z]{2,10}$/;
    if (regex.test(nameInput.value) == true) {
        inputNameAlert.classList.replace("d-block" , "d-none");
    } 
    else
     {
        inputNameAlert.classList.replace("d-none" , "d-block");
    }
}
nameInput.addEventListener("keyup", function(){
    validateUserName(nameInput.value);
})
//validation email//
function validateUserEmail() {
    let regex = /^[a-zA-Z0-9]{2,20}@[a-z]{2,12}.([a-z]{2,12})$/;;
    if (regex.test(emailInput.value) == true) {
        inputEmailAlert.classList.replace("d-block" , "d-none");
    } 
    else
     {
        inputEmailAlert.classList.replace("d-none" , "d-block");
    }
}
emailInput.addEventListener("keyup", function(){
    validateUserEmail(emailInput.value);
})
//validation phone num //
function validateUserNum() {
    let regex =  /^(002)?01(1|0|5|2)[0-9]{8}$/;
    if (regex.test( phoneNumInput.value) == true) {
        inputNumAlert.classList.replace("d-block" , "d-none");
    } 
    else
     {
        inputNumAlert.classList.replace("d-none" , "d-block");
    }
}
phoneNumInput.addEventListener("keyup", function(){
    validateUserNum( phoneNumInput.value);
})

$('textarea').keypress(function () {
    
    let counter = (textAreaInput.value).length;
    if (counter < 100) {
        $(".count").text(100 - (counter += 1) + "lemted words");
    } else {
        $(".count").text("finished");
        this.value = this.value.substring(0, max);
    }
});
