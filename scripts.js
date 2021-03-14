
let arrow_share = document.getElementById("arrow_share");
let card_popup = document.getElementById("card_popup");
let card_social = document.getElementById("card_social");
arrow_share.addEventListener("click",function(){
    card_popup.classList.toggle("active");
    card_social.classList.toggle("desactive");
});