//BURGER ANIMATION

const burgerBtn = document.querySelector("#burger-btn");
const divMenu = document.querySelector(".hidden-div");


burgerBtn.addEventListener("click", function () {
    divMenu.classList.toggle("open");
});



// const burger = document.querySelector("#burger-icon");
// const burgerDiv = document.createElement("div");
// const nav = document.querySelector("header nav");
// const ulDiv = document.createElement("ul");
// const liDiv = document.createElement("li");
// const quitButton = document.createElement((""))
 

// burger.addEventListener("click", function() {
//     console.log("burger qui bouge");
//     burger.classList.toggle("active");

//     // if(burger.classList.contains("active")){
//     //     nav.appendChild(burgerDiv);
//     //     burgerDiv.classList.add("visible-burger");
//     //     burgerDiv.appendChild(ulDiv);
//     //     ulDiv.classList.add("ul-class");
//     //     ulDiv.appendChild(liDiv);
//     //     ulDiv.classList.add("li");

//     // }else{
//     //     burgerDiv.remove();
//     // }


// });

// // bouton.addEventListener("click", function() {
// //     element.classList.toggle("nav__hidden");

// // });

