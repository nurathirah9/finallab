
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
