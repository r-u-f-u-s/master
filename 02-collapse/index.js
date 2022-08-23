/* Я комментарий, который ждал тебя здесь. Удали меня и напиши хороший код! */
let button = document.querySelector('.collapsible__button');
let text = document.querySelector('.collapsible__content');
let buttonNameVisible = document.querySelector('.collapsible__action--visible');
let buttonNameHidden = document.querySelector('.collapsible__action--hidden');

buttonNameVisible.style.display = "none";
text.style.visibility = "hidden";

button.addEventListener("click", function() {
    if (buttonNameVisible.style.display == "none") {
        buttonNameVisible.style.display = "block";
        buttonNameHidden.style.display = "none";
        text.style.visibility = "visible";
    } else {
        buttonNameVisible.style.display = "none";
        buttonNameHidden.style.display = "block";
        text.style.visibility = "hidden";
    }
});