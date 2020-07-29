function mudaLargura() {
    document.getElementById("background-Dark").style.backgroundPosition = "50% 5%";
    document.getElementById("background-Dark").style.backgroundSize = "120%";
    document.getElementById("background-Dark").style.opacity = "100%";
    document.getElementById("custom-button2").style.left = "25%";
    document.getElementById("custom-button").style.opacity = "20%";
    document.getElementById("custom-button2").style.opacity = "80%";
    document.getElementById("custom-button3").style.opacity = "0%";
    document.getElementById("text-body").style.opacity = "0%";
}

function originalLargura() {
    document.getElementById("background-Dark").style.opacity = "0%";
    document.getElementById("custom-button").style.opacity = "80%";
    document.getElementById("custom-button2").style.opacity = "80%";
    document.getElementById("custom-button3").style.opacity = "80%";
    document.getElementById("background-Dark").style.backgroundSize = "100%";
    document.getElementById("text-body").style.opacity = "100%";
}

function mudaLargura2() {

    document.getElementById("background-Light").style.backgroundPosition = "50% 5%";
    document.getElementById("background-Light").style.backgroundSize = "120%";
    document.getElementById("background-Light").style.opacity = "100%";
    document.getElementById("custom-button").style.opacity = "80%";
    document.getElementById("custom-button2").style.opacity = "20%";
    document.getElementById("custom-button3").style.opacity = "0%";
    document.getElementById("text-body").style.opacity = "0%";
}

function originalLargura2() {
    document.getElementById("background-Light").style.backgroundPosition = "50% 50%";
    document.getElementById("background-Light").style.opacity = "0%";
    document.getElementById("custom-button").style.opacity = "80%";
    document.getElementById("custom-button2").style.opacity = "80%";
    document.getElementById("custom-button3").style.opacity = "80%";
    document.getElementById("background-Light").style.backgroundSize = "120%";
    document.getElementById("text-body").style.opacity = "100%";
}

function toggleImage() {
    document.getElementById("background-Dark").style.opacity = "100%";
    document.getElementById("background-Light").style.opacity = "100%";
    document.getElementById("custom-button").style.opacity = "0%";
    document.getElementById("custom-button2").style.opacity = "0%";
    document.getElementById("text-body").style.opacity = "0%";
}

function disableToggleImage() {
    document.getElementById("background-Dark").style.opacity = "0%";
    document.getElementById("background-Light").style.opacity = "0%";
    document.getElementById("custom-button").style.opacity = "100%";
    document.getElementById("custom-button2").style.opacity = "100%";
    document.getElementById("text-body").style.opacity = "100%";
}