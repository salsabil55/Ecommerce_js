let username = document.querySelector("#username");
let password = document.querySelector("#password");
let email = document.querySelector("#email");
let sign_up = document.querySelector("#sign_up");

let user_info = document.querySelector("#user_info");
let links = document.querySelector("#links");
let logout = document.querySelector("#logout");
let user_value = localStorage.getItem("username");

// check if loclstorge
// if (user_value) {
//   links.remove();
//   user_info.style.display = "flex";
//   user.innerHTML = user_value;
// } else {
//   user_info.remove();
//   logout.remove();
// }
logout.addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.clear();
  setTimeout(() => {
    window.location = "register.html";
  }, 1500);
});
sign_up.addEventListener("click", function (e) {
  e.preventDefault();
  if (username.value === "" || password.value === "" || email.value == "") {
    alert("please fill in");
  } else {
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);

    //redirect to home
    setTimeout(() => {
      window.location = "login.html";
    }, 1500);
  }
});
