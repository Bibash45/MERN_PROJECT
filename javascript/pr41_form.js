const displayMsg = (msg, id, colorname) => {
  document.getElementById(id).innerHTML = msg;
  document.getElementById(id).style.color = colorname;
};

const fnameValidate = () => {
  const first_name = document.getElementById("fname").value;
  if (first_name == "") {
    displayMsg("First name is mandatory", "fnameMsg", "red");
    return false;
  } else if (!first_name.match(/^([a-zA-Z])+$/)) {
    displayMsg("firstname must contain alphabets only", "fnameMsg", "red");
    return false;
  } else if (first_name.length < 3) {
    displayMsg("First name should be at least 3 characters", "fnameMsg", "red");
    return false;
  } else {
    displayMsg("First name is valid", "fnameMsg", "green");
    return true;
  }
};
const lnameValidate = () => {
  const last_name = document.getElementById("lname").value;
  if (last_name == "") {
    displayMsg("Last name is mandatory", "lnameMsg", "red");
    return false;
  } else if (!last_name.match(/^([a-zA-Z])+$/)) {
    displayMsg("firstname must contain alphabets only", "lnameMsg", "red");
    return false;
  } else if (last_name.length < 3) {
    displayMsg("Last name should be at least 3 characters", "lnameMsg", "red");
    return false;
  } else {
    displayMsg("Last name is valid", "lnameMsg", "green");
    return true;
  }
};
const emailValidate = () => {
  const email = document.getElementById("email").value;
  if (email == "") {
    displayMsg("email is mandatory", "emailMsg", "red");
    return false;
  } else if (
    !email.match(/^([a-z0-9])[a-z0-9A-Z\#\?\_]+\@+([a-z])+\.+([a-z])+$/)
  ) {
    displayMsg("Invalid email format", "emailMsg", "red");
    return false;
  } else {
    displayMsg("email is valid", "emailMsg", "green");
    return true;
  }
};
const passwordValidate = () => {
  const password = document.getElementById("password").value;
  if (password == "") {
    displayMsg("password is mandatory", "passwordMsg", "red");
    return false;
  } else if (
    !password.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\#\@\_\?\!])[a-z0-9A-Z\#\?\_].{8,30}$/
    )
  ) {
    displayMsg(
      "password must be at least of one uppercase , one lowecase , a special character and a numeric value and must contain atleast 8 character",
      "passwordMsg",
      "red"
    );
    return false;
  } else if (password.length < 5) {
    displayMsg(
      "password should be at least 5 characters",
      "passwordMsg",
      "red"
    );
    return false;
  } else {
    displayMsg("password is valid", "passwordMsg", "green");
    return true;
  }
}; 
const cpasswordValidate = () => {
  const pwd = document.getElementById('password').value;
  const cpwd = document.getElementById('cpassword').value;
  if(cpwd == ""){
    displayMsg("confirm password is mandatory", "cpasswordMsg", "red");
    return false
  }
  else if(pwd != cpwd){
    displayMsg("password and confirm password should be same", "cpasswordMsg", "red");
    return false
  }
  else{
    displayMsg("valid confirm password", "cpasswordMsg", "green");
    return true;
  }
};

const ageValidate = ()=>{
  const age = document.getElementById('age').value;
  if(age == ""){
    displayMsg("age is mandatory", "ageMsg", "red");
    return false;
  }else if(age < 18 || age>35){
    displayMsg("age should be between 18-35", "ageMsg", "red");
    return false;
  }else{
    displayMsg("valid age", "ageMsg", "green");
    return true
  }
}

const handleSubmit = ()=>{
  if(fnameValidate()&&lnameValidate()&&emailValidate()&&passwordValidate()&&cpasswordValidate()&&ageValidate()){
    return true
  }else{
    return false
  }
}