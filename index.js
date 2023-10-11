let body = document.querySelector("body")

let rating_container = document.getElementById("rating_container")

let button_clicked = false

let thank_you_page = document.getElementById("thank_you_container")

let rate = document.getElementById("rate")

body = thank_you_page.style.display = "none"


function rating(number){
    let btn_value = number.innerText;
    rate.innerHTML = btn_value
    return button_clicked = true
    
}

function submit(){
    if(button_clicked == true){
        thank_you_page.style.display = "block"
        rating_container.style.display = "none"
    }
    else{
       return  window.alert("Kindly choose a rating")
    }
}
