

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://helpssaproject-17110-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const helpssaDB = ref(database, "consumerInfo")


let fullName = document.getElementById('inputFullname');
  let email = document.getElementById("inputEmail");
  let mobileNumber = document.getElementById("inputNumber");
  let age = document.getElementById("inputAge");
  let occupation = document.getElementById("inputOccupation");
  let address = document.getElementById("inputAddress");
  let gender = document.getElementById("inputState");
  let income = document.getElementById("inputIncome");
  let hearAbout = document.getElementById("hearAbout");
  let applyBefore = document.getElementById("applyBefore");
  let grant = document.getElementById('success')
  const checkboxes = document.getElementsByName("gridCheck");
  const submitButtonEl = document.getElementById("submit-button")
  let checkedValues = [];
   
 
  submitButtonEl.addEventListener("click", function() {

    if (fullName.value == '' || email.value == '' || mobileNumber.value == ''
    || age.value == '' || occupation.value == '' || address.value == '' || 
    gender.value == '' || income.value == '' || checkboxes.value == '') {
     alert("Please, fill all the informations below")
     
   } else {

    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        checkedValues.push(checkboxes[i].value);
      }
    }
    // console.log(checkedValues);

    let userInfo = {
        userFullName: fullName.value,
        userEmail: email.value,
        UserMobileNumber: mobileNumber.value,
        userAge: age.value,
        userOccupation: occupation.value,
        userAddress: address.value,
        userincome: income.value,
        userGender: gender.value,
        userGridcheck: checkedValues,
    }
    // console.log(userInfo);

    push(helpssaDB, userInfo)
    
    setTimeout(message, 3000)

    clearFunc()
    
   }
   
    
  })
  
  function message() {

    grant.innerHTML = `
    <div class="successful text-center text-white py-3 
  px-3 my-3"style="background-color: rgb(21, 208, 83);">
      <p>THANK YOU FOR SENDING IN YOUR APPLICATION. YOUR <br>


      APPLICATION WILL BE ATTENDED TO AS SOON AS <br>
       POSSIBLE AND YOU'LL RECEIVE FEEDBACK FROM US.</p>
    </div>
`
  }

  function clearFunc() {
    fullName.value = ''
    email.value = ''
    mobileNumber.value = ''
    age.value = ''
    occupation.value = ''
    address.value = ''
    income.value = ''
    gender.value = ''

  }
