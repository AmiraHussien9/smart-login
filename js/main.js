// Login Form 

let userName = document.getElementById("yourname");
let userEmail = document.getElementById("youremail");
let userPass = document.getElementById("yourpassword");

/********/

let signinBtn = document.getElementById("signinBtn");
let singUpBtn = document.getElementById("singUpBtn");

/********/


let loginForm = document.querySelector(".loginForm")
let signUpForm = document.querySelector(".signUpForm");

let signUp = document.getElementById("signUp");
let homePage = document.querySelector(".homePage");


//  variables for alert validation
let alertName = document.getElementById("alertName");
let alertEmail = document.getElementById("alertEmail");
let alertPass = document.getElementById("alertPass");


// signUp Form
let email = document.getElementById("email");
let password = document.getElementById("password");
let theModal = document.querySelector(".theModal")

// homePage

let logOut = document.querySelector(".logOut");
logOut.addEventListener('click', function(){
        homePage.style.display = "none";
         signUpForm.style.display = "block";
})


let list;

if (localStorage.getItem("data") == null) {
    list = [];
}
else {
    list = JSON.parse(localStorage.getItem("data"))
}


function addTOLocalstorage() {
    if (nameValidation(userName.value) && emailValidation(userEmail.value)) {

        let person = {
            YourName: userName.value,
            YourEmail: userEmail.value,
            YourPass: userPass.value
        }

        list.push(person)

        localStorage.setItem("data", JSON.stringify(list))



    }



}





// let show = document.querySelector(".show");
// console.log(show)

signUp.addEventListener('click', function () {
    let flag = false;
    let index = 0;
    if (emailValidation(email.value)) {

        for (let i = 0; i < list.length; i++) {

            if (list[i].YourEmail.includes(email.value) == true && list[i].YourPass.includes(password.value) == true) {

                // document.getElementById("userName").innerHTML = list[i].YourName;
                // homePage.style.display = "block",
                // signUpForm.style.display = "none"
                flag = true;
                index = i;

            }

        }
        if (flag == true) {
            document.getElementById("userName").innerHTML = list[index].YourName;
          
            homePage.style.display = "block",
            signUpForm.style.display = "none"
         
        } else {
            // alert("email or pass incorrect")
           theModal.style.display = "block";


        //    show.display.style = "block !important"
        


        }
    }

})


// console.log(list)

login.addEventListener('click', function () {
    let flag = false;
    if (nameValidation(userName.value) && emailValidation(userEmail.value) && passValidation(userPass.value)) {

        for (let i = 0; i < list.length; i++) {

            if (list[i].YourEmail.includes(userEmail.value) == true) {

                // loginForm.style.display="none";
                // signUpForm.style.display = "block";
                flag = true


            }


        }


        if (flag == true) {
            loginForm.style.display = "none";
            signUpForm.style.display = "block";
            alert("this is email already registered");

        } else {

            addTOLocalstorage()
            loginForm.style.display = "none";
            signUpForm.style.display = "block";
        }



    }


})



signinBtn.addEventListener("click", function () {

    loginForm.style.display = "none";
    signUpForm.style.display = "block";


})

singUpBtn.addEventListener('click', function () {
    loginForm.style.display = "block";
    signUpForm.style.display = "none";

})

/*

***********************
validation function

**********************

*/


function nameValidation(nameInput) {
    let regexName = /^[A-Z][a-z]{1,10}$/;

    if (regexName.test(nameInput)) {
        alertName.style.display = "none";
        return true
    } else {
        alertName.style.display = "block";
        return false;
    }
}

userName.addEventListener('blur', function() {
    nameValidation(userName.value);
});




function emailValidation(emailInput) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regexEmail.test(emailInput)) {
        alertEmail.style.display = "none";
        return true
    } else {
        alertEmail.style.display = "block";
        return false

    }
}
userEmail.addEventListener('blur', function() {
    emailValidation(userEmail.value);
});

console.log(userEmail)

function passValidation(passInput) {
    let regexPass = /[a-z]{1,}[0-9]{1,}/
    if (regexPass.test(passInput)) {
        alertPass.style.display = "none";
        return true
    } else {
        alertPass.style.display = "block";
        return false
    }
}
userPass.addEventListener('blur' ,function(){
    passValidation(userPass.value);
})



// show password 

let visionIcons  = document.querySelectorAll(".vision");
console.log(visionIcons)

for(let i = 0 ; i <visionIcons.length ; i++) {
    visionIcons[i].addEventListener('click', function(){
        if(userPass.type === "password") {
            userPass.type = "text"
        }else {
            userPass.type = "password"
        }
    })
}