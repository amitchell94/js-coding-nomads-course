/*!
* Start Bootstrap - Bare v5.0.2 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function DarkMode() {
    console.log("got here")
    let body = document.getElementsByTagName("body")
    body[0].style.backgroundColor = "black";

    let hEls = document.getElementsByTagName("h1")
    let pEls = document.getElementsByTagName("p")

    for (let i = 0; i < hEls.length; i++) {
        hEls[i].style.color = "white";
    }

    for (let i = 0; i < pEls.length; i++) {
        pEls[i].style.color = "white";
    }
}

function ResizeText (direction){
    let body = document.getElementsByTagName("body")

    if (body[0].style.fontSize.length > 0) {
        let fontSize = parseFloat(body[0].style.fontSize)
        if (direction == "+") {
            body[0].style.fontSize = (fontSize + 0.25) + "rem";
        } else {
            body[0].style.fontSize = (fontSize - 0.25) + "rem";
        }
    } else{
        if (direction == "+") {
            body[0].style.fontSize = "1.5rem"
        } else {
            body[0].style.fontSize = "0.75rem"
        }
    }


    let hEls = document.getElementsByTagName("h1")

    for (let i = 0; i < hEls.length; i++) {
        if (hEls[i].style.fontSize.length > 0) {
            let fontSize = parseFloat(hEls[i].style.fontSize)
            if (direction == "+") {
                hEls[i].style.fontSize = (fontSize + 0.25) + "rem";
            } else {
                hEls[i].style.fontSize = (fontSize - 0.25) + "rem";
            }
        } else{
            if (direction == "+") {
                hEls[i].style.fontSize = "2.25rem"
            } else {
                hEls[i].style.fontSize = "1.75rem"
            }
        }
    }
}
let darkModeButton = document.getElementById("darkModeBtn")
darkModeButton.addEventListener("click", DarkMode)

let textSmallButton = document.getElementById("textSmallBtn")
textSmallButton.addEventListener("click", () => ResizeText("-"))

let textLargeButton = document.getElementById("textLargeBtn")
textLargeButton.addEventListener("click", () => ResizeText("+"))
