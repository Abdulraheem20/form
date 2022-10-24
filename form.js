const required = document.querySelectorAll(".inputRequired");
const formControl = document.querySelectorAll(".form-control");
const alertMessage = document.querySelectorAll(".alert");
const submitBtn = document.getElementById("submitBtn");
const inputEmail = document.getElementById("inputEmail");
const confirmInputEmail = document.getElementById("confirmInputEmail");
const inputPassword = document.getElementById("inputPassword");
const confirmInputPassword = document.getElementById("confirmInputPassword");
const inputRequired1 = document.querySelector(".inputRequired1");
const inputRequired2 = document.querySelector(".inputRequired2");
const inputRequired3 = document.querySelector(".inputRequired3");
const inputRequired4 = document.querySelector(".inputRequired4");
// console.log(inputRequired2);

//
const isEmailMatch = () =>
  inputEmail.value === confirmInputEmail.value ? true : false;

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

// const isPasswordSecure = (inputPassword) => {
//     const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
//     return re.test(inputPassword.value);
// };
submitBtn.addEventListener('click', (e)=>{
  e.preventDefault()
  console.log(`clicked`);
  for (let i = 0; i < formControl.length; i++) {
    if (formControl[i].value === ""){
      formControl[i].classList.add('error');
      alertMessage[i].innerHTML = "Input field is required";
    }else if (formControl[i].value !== ""){
      formControl[i].classList.remove('error');
      formControl[i].classList.add('success');
      alertMessage[i].innerHTML = "";
    } else if (isEmailMatch() === false ){
      inputRequired2.textContent = 'Email does not match!'
      formControl[1].classList.add('error')
      confirmInputEmail.classList.add('error')
    } else if(isEmailMatch() === true){
      confirmInputEmail.classList.remove('error')
      confirmInputEmail.classList.add('success')
      inputRequired2.textContent = ''
    }else if(isPasswordMatch() === false){
      inputRequired4.textContent = 'Password does not match!'
      confirmInputPassword.classList.add('error')
      
    }
    console.log(isEmailMatch());
    
  }
  // let isEmail = isEmailMatch() ,
    // isPassword = isPasswordMatch()
    // // isItSecured = isPasswordSecure();  

    // let passFormOver = isEmail && isPassword;
    // if (passFormOver){
    //     console.log(`You just typed in ${inputEmail.value.trim()} as your email; and ${inputPassword.value.trim()} as yor password. `)
    // }else{
    //   console.log(`err`);
    // }
})

// taiwo.COM






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
