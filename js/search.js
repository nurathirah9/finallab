

let objectList = {
  kimchi : "../img2/kimchi.jpg",
  nasilemak  : "../img2/nasi-lemak.jpg",
  brownies : "../img2/brownies.jpg",
  chickensoup : "../img2/chicken-soup.jpg",
  salad : "../img2/salad.jpg",
  tacos : "../img2/tacos.jpg",

  };
  
  document.querySelector("#search-button").addEventListener("click", function () {
    let foodName = document.querySelector("#food-name").value;
    document.querySelector(".banner").style.backgroundImage =
      "url(" + objectList[foodName] + ")";
      document.querySelector(".banner").style.height =
      "600px";
      document.querySelector("h1").innerHTML ="Enjoy Your  " + foodName;
      document.querySelector("input").style.display = "none";
      document.querySelector("#search-button").style.display = "none";
  })

  document.querySelector("#button-bars").addEventListener("click", function(){
    console.log(document.querySelector("#header-menu-mobile").classList.add("show"))
})

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector("#header-menu-mobile").classList.remove("show")
    
})


document.querySelector("#recipesbtn").addEventListener("click", function(){
    document.querySelector("#recipes").classList.remove("none")
})

let recipes = document.querySelector("#recipes");
let cancel = document.querySelector("#cancelbtn");

cancel.addEventListener("click", function(e){
       recipes.classList.add("none") })