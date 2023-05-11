const burgerBtn = document.getElementById("burgerBtn");
const burgerContainer = document.getElementById("burgerContainer");

burgerBtn.addEventListener("click", () => {
  burgerContainer.classList.toggle("show");
  if (burgerBtn.classList.toggle("show")) {
    burgerBtn.innerText = "❌";
  } else {
    burgerBtn.innerText = "🍔";
  }
});


const title = document.querySelector(".devfinder");
const textText = document.querySelector(".text1");
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");
const icons = document.querySelectorAll(".icon");
const user1 = document.querySelector("#user1");
const button = document.querySelector(".btn");
const photo2 = document.querySelector(".photo2");
const photo1 = document.querySelector(".photo1");
const name1 = document.querySelector(".name");
const login = document.querySelector(".login");
const tarighi = document.querySelector(".tarighi");
const inf = document.querySelector(".inf");
const repos = document.querySelector("#repos");
const followers = document.querySelector("#followers");
const following = document.querySelector("#following");
const pin = document.querySelector("#pin");
const blog = document.querySelector("#blog");
const company = document.querySelector("#company");
const resultElement = document.querySelector(".result");
const rates = document.querySelector(".rates");
const octocat = {
  avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
  inf: null,
  blog: "https://github.blog",
  company: "@github",
  created_at: "2011-01-25T18:44:36Z",
  email: null,
  events_url: "https://api.github.com/users/octocat/events{/privacy}",
  followers: 3938,
  followers_url: "https://api.github.com/users/octocat/followers",
  following: 9,
  following_url: "https://api.github.com/users/octocat/following{/other_user}",
  gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
  gravatar_id: "",
  hireable: null,
  html_url: "https://github.com/octocat",
  id: 583231,
  location: "San Francisco",
  login: "octocat",
  name: "The Octocat",
  node_id: "MDQ6VXNlcjU4MzIzMQ==",
  organizations_url: "https://api.github.com/users/octocat/orgs",
  public_gists: 8,
  public_repos: 8,
  received_events_url: "https://api.github.com/users/octocat/received_events",
  repos_url: "https://api.github.com/users/octocat/repos",
  site_admin: false,
  starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
  type: "User",
  updated_at: "2023-01-22T12:13:51Z",
  url: "https://api.github.com/users/octocat",
};
user1.addEventListener("user1", () => {
  resultElement.textContent = "";
});
const dateTransformer = (date) => {
  const dateObj = new Date(date);
  const dateString = dateObj.toDateString();
  const [weekday, month, day, year] = dateString.split(" ");
  return `${day} ${month} ${year}`;
};
const displayInfo = (user) => {
  photo2.src = user.avatar_url;
  photo1.src = user.avatar_url;
  name1.textContent = user.name;
  login.textContent = "@" + user.login;
  const date = dateTransformer(user.created_at);
  tarighi.textContent = "Joined " + date;
  inf.textContent =
    user.inf ||
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.";
  repos.textContent = user.public_repos;
  followers.textContent = user.followers;
  following.textContent = user.following;
  if (user.location) {
    pin.textContent = user.location;
  } else {
    pin.textContent = "Not Available";
    pin.parentElement.style.opacity = 0.5;
  }

  if (user.blog) {
    blog.textContent = user.blog;
    blog.href = user.blog;
  } else {
    blog.textContent = "Not Available";
    blog.href = "#";
    blog.parentElement.style.opacity = 0.5;
  }
  if (user.company) {
    company.textContent = user.company;
  } else {
    company.textContent = "Not Available";
    company.parentElement.style.opacity = 0.5;
  }
  saveData();
};
displayInfo(octocat);
const flipTheme = (text) => {
  if (text === "dark") {
    moon.style.display = "none";
    sun.style.display = "block";
    document.body.style.backgroundColor = "#141D2F";
  } else {
    moon.style.display = "block";
    sun.style.display = "none";
    document.body.style.backgroundColor = "#f6f8ff";
  }
  title.classList.toggle("dark");
  textText.classList.toggle("dark");
  user1.classList.toggle("dark");
  Array.from(icons).forEach((icon) => icon.classList.toggle("dark"));
  blog.classList.toggle("dark");
  login.style.color = "var(--lightblue)";
  rates.classList.toggle("dark");
};


moon.addEventListener("click", () => flipTheme("dark"));
sun.addEventListener("click", () => flipTheme("light"));
button.addEventListener("click", async (event) => {
  event.preventDefault();
  try {
    const response = await fetch(
      "https://api.github.com/users/" + input.value
    );
    const viewer = await response.json();
    displayInfo(viewer.data);
    input.value = "";
    saveData();
  } catch (error) {
    resultElement.textContent = "No result";
    saveData();
  }
});
function saveData() {
    localStorage.setItem("data", displayInfo.innerHtml);
}
function showTask(){
  displayInfo.innerHtml = localStorage.getItem("data");
}
showTask();