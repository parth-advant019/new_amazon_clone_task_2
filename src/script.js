const carousel = document.getElementById("carousel");
const slides = carousel.children;
let index = 0;

function updateSlide() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % slides.length;
    updateSlide();
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
}

//round round carousal

const phoneScroll = document.getElementById("phoneScroll");

function scrollNext() {
    phoneScroll.scrollBy({
        left: 700,
        behavior: "smooth"
    });
}

function scrollPrev() {
    phoneScroll.scrollBy({
        left: -700,
        behavior: "smooth"
    });
}
//squar carousal
const bookScroll = document.getElementById("bookScroll");

function scrollBack() {
    bookScroll.scrollBy({
        left: -700,
        behavior: "smooth"
    });
}

function scrollFront() {
    bookScroll.scrollBy({
        left: 700,
        behavior: "smooth"
    });
}

// mobile carousal
const mobileScroll = document.getElementById("mobileScroll");

function mobilescrollBack() {
    mobileScroll.scrollBy({
        left: -700,
        behavior: "smooth"
    });
}

function mobilescrollFront() {
    mobileScroll.scrollBy({
        left: 700,
        behavior: "smooth"
    });
}

//burger
function openMenu() {
    document.getElementById("sideMenu").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeMenu() {
    document.getElementById("sideMenu").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}




