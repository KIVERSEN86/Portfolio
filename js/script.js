const modal = document.querySelector(".modal");
const modalContainer = document.querySelector("body");

function createModal() {
    const imgModal = document.querySelector(".modal-image");
    const imgsModal = document.querySelector(".header-image");

    imgsModal.addEventListener("click", ()=> {
        imgModal.src = imgsModal.src;

        modal.style.display = "flex";
    })
    modal.addEventListener("click", ()=> {
        modal.style.display = "none";
    })

}
createModal();
