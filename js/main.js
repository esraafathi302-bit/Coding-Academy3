function openCourse(course) {
  localStorage.setItem("course", course);
  window.location.href = "courses.html";
}

let course = localStorage.getItem("course");

if (course) {
  let title = document.getElementById("course-title");
  let video = document.getElementById("video");

  if (title && video) {
    if (course === "html") {
      title.innerText = "HTML Course";
      video.src = "https://www.youtube.com/embed/qz0aGYrrlhU";
    }

    if (course === "python") {
      title.innerText = "Python Course";
      video.src = "https://www.youtube.com/embed/_uQrJ0TkZlc";
    }
  }
}

function login() {
  let username = document.getElementById("username").value;

  if (username === "") {
    alert("Enter your name");
    return;
  }

  localStorage.setItem("user", username);
  window.location.href = "dashboard.html";
}

let user = localStorage.getItem("user");

if (user) {
  let welcome = document.getElementById("welcome");
  if (welcome) {
    welcome.innerText = "Welcome " + user;
  }

  let name = document.getElementById("name");
  if (name) {
    name.innerText = "Name: " + user;
  }
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}