let body = document.querySelector("body")
let input = document.querySelectorAll("input")

let rating_container = document.getElementById("rating_container")

let thank_you_page = document.getElementById("thank_you_container")

let rate = document.getElementById("rate")

body = thank_you_page.style.display = "none"


function rating(number){
    let btn_value = number.innerText;
    rate.innerHTML = btn_value
    
}

function submit(){
    if(input.clicked==true){
        thank_you_page.style.display = "block"
        rating_container.style.display = "none"
        rating()
    }
    else{
        window.alert("Kindly choose a rating")
    }
    
}
