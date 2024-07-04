function replaceName() {
  
  let name = prompt("Hello, please input your name", "");
  document.getElementById("name").innerHTML  = name
}


document.getElementById('button').addEventListener("click", function() {
  replaceName();
})

function validateForm() {
  
  const fname = document.forms["message-form"]["fname"].value;
  const birthday = document.forms["message-form"]["birthday"].value;
  const gender = document.forms["message-form"]["gender"].value;
  const message = document.forms["message-form"]["message"].value;

      if (fname == "" || birthday == "" || gender == "" || message == "") {
        alert("Field cann't be empty");
        return false;
      }

      setSenderUI(fname, birthday, gender, message);

}

function setSenderUI(fname, birthday, gender, message) {
  
  document.getElementById("sender-fname").innerHTML = fname;
  document.getElementById("sender-birthday").innerHTML = birthday;
  document.getElementById("sender-gender").innerHTML = gender;
  document.getElementById("sender-message").innerHTML = message;
}

document.getElementById('tombol').addEventListener("click", function() {
  setSenderUI();
})