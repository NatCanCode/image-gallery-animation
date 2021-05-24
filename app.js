const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

// To loop over the images:
previews.forEach((preview) => {
    preview.addEventListener("click", () => {
        modal.classList.add("open");
        original.classList.add("open");
        // Dynamic change text and image
        const originalSrc = preview.getAttribute("data-original");
        // original.src = "./full/${originalSrc}"; 
        original.src = originalSrc;
        const altText = preview.alt;
        caption.textContent = altText;
    });
});

// To close the images:
modal.addEventListener("click", (e) => {
    if(e.target.classList.contains("modal")) {
        modal.classList.remove("open");
        original.classList.remove("open");
    }
});
