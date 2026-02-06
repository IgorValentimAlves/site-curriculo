var MyButton = document.getElementById('top');

window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        MyButton.style.display = "block";
    } else {
        MyButton.style.display = "none"
    }
}

MyButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});