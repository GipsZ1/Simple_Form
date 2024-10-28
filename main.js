const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
let errorMgs = document.getElementById("error");
form.addEventListener("submit", (e) => {
  let Message = [];
  if (name.value == "" || name.value == null) {
    Message.push("Name is required");
  }
  if (password.value.length < 6 || password.value == null) {
    Message.push("Password must be longer than 6 and not also empty");
  }
  if (password.value.length > 16) {
    Message.push("Password must be less than 16 and not also empty");
  }
  if (password.value == "password") {
    Message.push("Password can't be called password");
  }
  if (Message.length > 0) {
    e.preventDefault();
    errorMgs.textContent = Message.join(",");
  }
});
