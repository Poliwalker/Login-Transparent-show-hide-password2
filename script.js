
const link_field = document.querySelector(".pass-key");
const showBtn = document.querySelector(".show");
showBtn.addEventListener("click", function(){
    if (link_field.type === "password") {
        link_field.type = "text";
        showBtn.textContent = "HIDE";
        showBtn.style.color = "#3498db";
    } else {
        link_field.type = "password";
        showBtn.textContent = "SHOW";
        showBtn.style.color = "#222";
    }
});