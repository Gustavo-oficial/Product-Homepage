document.addEventListener("DOMContentLoaded", function() {
    const productImage = document.querySelector(".product-image");

    productImage.addEventListener("mousemove", (e) => {
        let x = (e.offsetX / productImage.offsetWidth - 0.5) * 10;
        let y = (e.offsetY / productImage.offsetHeight - 0.5) * 10;
        
        productImage.style.transform = `rotateY(${x}deg) rotateX(${y}deg) scale(1.05)`;
    });

    productImage.addEventListener("mouseleave", () => {
        productImage.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
    });
});