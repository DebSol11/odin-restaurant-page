import wingWoman from "./wingWoman.jpg";

export function initialPageLoad() {
  // Selectors
const content = document.getElementById("content");
content.innerHTML = ""
// Create elements
const heading = document.createElement("h1");
const figure = document.createElement("figure");
const wingsImg = document.createElement("img");
const figcaption = document.createElement("figcaption");
const paragraph = document.createElement("p");

// Fill elements with content
heading.textContent = "Hot Wings";
wingsImg.src = wingWoman;
wingsImg.setAttribute("alt", "wing woman lisa");
figcaption.innerHTML = `Photo by
        <a href="https://www.pexels.com/@fotios-photos/">
        Lisa from Pexels
        </a>
        on
        <a href="https://www.pexels.com/photo/woman-standing-in-front-of-a-street-art-wall-3616628/">
        Pexels
        </a>`; // do not use .innerHTML in security sensitive contexts
paragraph.textContent =
  "Why do we need wings? Well, why do we need most of the pleasant artifacts in our life? They are supposed to free our precious time! Lift us up from the ground into the sky where there are no borders. no rules but the natural ones, which dictate life in the air with our set of natural laws. Safe weight increase power density.";

// Append elements
content.appendChild(heading);
content.appendChild(figure);
figure.appendChild(wingsImg);
figure.appendChild(figcaption);
content.appendChild(paragraph);
}


let homeBtn = document.querySelector(".home");
export let displayHomeOnClick = homeBtn.addEventListener("click", initialPageLoad);


