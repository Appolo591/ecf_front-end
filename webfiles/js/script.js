const burger = document.querySelector("#burger-icon");
const burgerDiv = document.createElement("div");

 

burger.addEventListener("click", function() {
    console.log("burger qui bouge");
    burger.classList.toggle("active");
    if(burger.classList.contains("active")){
        document.body.nav.appendChild(burgerDiv);
    }else{
        burgerDiv.remove();
    }


});

// bouton.addEventListener("click", function() {
//     element.classList.toggle("nav__hidden");

// });

