/* Я комментарий, который ждал тебя здесь. Удали меня и напиши хороший код! */
let button = document.querySelector('.collapsible__button');
let text = document.querySelector('.collapsible__content');
let buttonNameVisible = document.querySelector('.collapsible__action--visible');
let buttonNameHidden = document.querySelector('.collapsible__action--hidden');


let shift = [
    {transform: 'translate(-100%)'},
    {transform: 'translate(0)'},
]

let timing = {
    duration: 1500,
    fill: "both"
}
text.style.cssText = 'visibility:hidden; width:530px'
button.style.cssText = 'position:relative; width:155px; height:20px; display:flex; justify-content:center; align-items:center;'
buttonNameVisible.style.cssText = 'position:absolute; width:140px; opacity:0'
buttonNameHidden.style.cssText = 'position:absolute; width:140px;'

button.addEventListener("click", function() {
    if (buttonNameVisible.style.opacity == "0") {
        buttonNameVisible.style.opacity = "1";
        buttonNameHidden.style.opacity = "0";
        text.style.visibility = "visible";
        text.animate(shift, timing);
    } else {
        buttonNameVisible.style.opacity = "0";
        buttonNameHidden.style.opacity = "1";
        text.animate(shift, timing).reverse();
    }
});


/*
buttonNameVisible.style.display = "none";
text.style.opacity = "0"

button.addEventListener("click", function() {
    if (buttonNameVisible.style.display == "none") {
        buttonNameVisible.style.display = "block";
        buttonNameHidden.style.display = "none";
        text.style.opacity = "1";
        text.style.transition = "0.5s all ease";
    } else {
        buttonNameVisible.style.display = "none";
        buttonNameHidden.style.display = "block";
        text.style.opacity = "0";
    }
});
*/