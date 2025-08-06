let menuBtn = document.querySelector(".menu");

function displayMenuContent() {
  let content = document.querySelector("#content");
  content.innerHTML = "";
  let heading = document.createElement("h1");
  heading.textContent = "Yummy menu";
  content.appendChild(heading);
}

// eventListeners
export let displayMenuOnClick = menuBtn.addEventListener("click", displayMenuContent);
