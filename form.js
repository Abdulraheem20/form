const required = document.querySelectorAll(".inputRequired");
const formControl = document.querySelectorAll(".form-control");
const submitBtn = document.getElementById("submitBtn");
const inputEmail = document.getElementById("inputEmail");
const confirmInputEmail = document.getElementById("confirmInputEmail");
const inputPassword = document.getElementById("inputPassword");
const confirmInputPassword = document.getElementById("confirmInputPassword");

//
const isEmailMatch = () =>
  inputEmail.value === confirmInputEmail ? true : false;

const isPasswordMatch = () =>
  inputPassword.value === confirmInputPassword.value ? true : false;

const isInputEmpty = ()=> {
    let result;
    for (let i = 0; i < formControl.length; i++) {
       if (formControl[i].value === "") {
        result = false
       } else{
        result = true
       }
        
    }
    return result
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const checkEmail = ()=>{

    let valid = false;
    const email = inputEmail.value.trim();
    
}










// submitBtn.addEventListener('click', (e)=>{
//     e.preventDefault()

//     for (let i = 0; i < formControl.length; i++) {

//         if (formControl[i].value === "") {
//             required[i].style.display = "block";
//             formControl[i].focus()
//             return false
//         }
//         if (formControl[i].value.length >= 1) {
//               required[i].style.display = "none";
//               formControl[i].focus()
//             //   return true

//         }
//     }

// })
