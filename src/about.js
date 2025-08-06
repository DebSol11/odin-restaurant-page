let aboutBtn = document.querySelector(".about");

function displayAboutContent() {
  let content = document.querySelector("#content");
  content.innerHTML = "";
  let heading = document.createElement("h1");
  heading.textContent = "About Sauerkraut";
  content.appendChild(heading);
}

// eventListeners
export let displayAboutOnClick = aboutBtn.addEventListener("click", displayAboutContent);
