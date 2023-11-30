// const slideContainer = document.getElementById("slide-container");
// const cardContainer = document.getElementsByClassName("card-container");
// const cardWidth = document.querySelector(".card-container").offsetWidth;
// let currentIndex = 0;

// const next = ()=> {
//     // slideContainer.append(cardContainer[0])
//     if (currentIndex < cardContainer.children.length - 1) {
//         currentIndex++;
//         slideContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
//     }
// }

// const prev = ()=> {
//     // slideContainer.prepend()
//     if (currentIndex > 0) {
//         currentIndex--;
//         slideContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
//     }
// } 


const slideContainer = document.getElementById("slide-container");
const cardContainer = document.querySelector(".slides-container");
const cardWidth = document.querySelector(".card-container").offsetWidth;
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
let currentIndex = 0;

const updateButtons = () => {
    nextBtn.disabled = currentIndex === cardContainer.children.length - 1;
    if (nextBtn.disabled) {
        nextBtn.classList.add("disable");
    } else {
        nextBtn.classList.remove("disable");
    }
    
    prevBtn.disabled = currentIndex === 0;
    if (prevBtn.disabled) {
        prevBtn.classList.add("disable");
    } else {
        prevBtn.classList.remove("disable");
    }
}

const next = () => {
    if (currentIndex < cardContainer.children.length - 1) {
        currentIndex++;
        slideContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        updateButtons();
    }
}

const prev = () => {
    if (currentIndex > 0) {
        currentIndex--;
        slideContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        updateButtons();
    }
}

// Initial button state
updateButtons();


