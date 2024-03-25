let username = document.querySelector("#username");
let password = document.querySelector("#password");
let login = document.querySelector("#login");
let msgTxt = document.querySelector(".msg_txt");
let msg_block = document.querySelector(".msg-block");
let user_value = localStorage.getItem("username");
let password_value = localStorage.getItem("password");

let user_info = document.querySelector("#user_info");
let links = document.querySelector("#links");
let logout = document.querySelector("#logout");

logout.addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.clear();
  setTimeout(() => {
    window.location = "register.html";
  }, 1500);
});
login.addEventListener("click", function (e) {
  e.preventDefault();
  if (username.value === "" || password.value === "") {
    alert("please fill in");
  } else {
    if (
      user_value &&
      user_value.trim() === username.value.trim() &&
      password_value &&
      password_value.trim() === password.value.trim()
    ) {
      // check if loclstorge
      if (user_value) {
        links.remove();
        user_info.style.display = "flex";
        user.innerHTML = user_value;
      } else {
        user_info.remove();
        logout.remove();
      }
      // redirect to home
      setTimeout(() => {
        window.location = "index.html";
      }, 1500);
    } else {
      console.log("somethning error");
      msgTxt.innerHTML =
        "This account not fond please <a href ='register.html'> Register First </a>";
      msg_block.style.display = "block";
    }
  }
});
