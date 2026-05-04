document.addEventListener("DOMContentLoaded", () => {
    
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const certImages = document.querySelectorAll(".cert-img");
const closeBtn = document.querySelector(".close");

if(certImages){
    certImages.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = img.src;
        });
    });
}

if(closeBtn){
    closeBtn.onclick = () => modal.style.display = "none";
}

});