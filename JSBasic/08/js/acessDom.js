
// getElementById()
document.getElementById("heading").onclick = function(){
    this.style.fontSize = "5em"
}
// getElementsByClassName()
var accents = document.getElementsByClassName("accent")
accents[0].style.textDecoration = "underline"
// getElementsByTagName()
document.getElementsByTagName("h2")[0].style.backgroundColor = "#eee"

// querySelectorAll()
document.querySelectorAll(".accent")[1].style.backgroundColor = "yellow"

// getAttribute()
document.querySelector("#prod-img > img").getAttribute("src")
// setAttribute()
document.querySelector("#prod-img > img").setAttribute("src", "images/coffee-blue.jpg")
