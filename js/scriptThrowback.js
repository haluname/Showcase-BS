let showcaseData = [
    {
       "year": "1993",
       "pic": "",
       "title": "The Mickey Mouse Club",
       "description": "lorem",
       "logo": "", 
    },

    {
        "year": "1998",
        "pic": "",
        "title": "...Baby One More Time release",
        "description": "lorem",
        "logo": "", 
     },

     {
        "year": "2000",
        "pic": "",
        "title": "Oops!...I Did It Again",
        "description": "lorem",
        "logo": "", 
     },

    {
        "year": "2001",
        "pic": "vma2001bg.jpg",
        "title": "2001 VMA's",
        "description": "lorem ipsum",
        "logo": "britneyLogo2001.png", 
     },

     {
        "year": "2002",
        "pic": "",
        "title": "Crossroads",
        "description": "lorem",
        "logo": "britneyLogo2002.png", 
     },

     {
        "year": "2002",
        "pic": "",
        "title": "Taste The Victory",
        "description": "lorem",
        "logo": "britneyLogo2002.png", 
     },

     {
        "year": "2003",
        "pic": "",
        "title": "The Onyx Hotel Tour",
        "description": "lorem",
        "logo": "britneyLogo2002.png", 
     },
 

]


window.onload = ()=>{
    ScrollReveal().reveal('.yearLogo img', {duration: 1000, easing: 'ease', distance: "200px", origin: "top"});
}

document.querySelector("#changeLogo").addEventListener("click", function(){
    let img = document.querySelector(".yearLogo img");
    let div = document.querySelector(".yearLogo")
    let newImg = document.createElement("img");
    div.removeChild(img);


    if(img.src.endsWith("britneyLogo2001.png"))
    newImg.src = "img/britneyLogo2002.png";
    else
    newImg.src = "img/britneyLogo2001.png";

    
    div.appendChild(newImg);
    ScrollReveal().reveal('.yearLogo img', {duration: 1000, easing: 'ease', distance: "200px", origin: "top"});


})



const slider = document.querySelector('.showcaseSlider');
const showcaseImages = document.querySelectorAll('.showcaseImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

showcaseImages.forEach(image => {
    image.addEventListener("click", function(){
        showcaseImages.forEach(element=>  element.classList.remove("activeImage"))
        image.classList.add("activeImage")
    })
    
});

let currentIndex = 0;
const imagesPerView = 3;
const totalImages = showcaseImages.length;

function updateSliderPosition() {
    const offset = currentIndex * (100 / imagesPerView);
    slider.style.transform = `translateX(-${offset}%)`;
}

// Event listeners per i bottoni
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= imagesPerView;
        if (currentIndex < 0) currentIndex = 0;
    }
    updateSliderPosition();
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < totalImages - imagesPerView) {
        currentIndex += imagesPerView;
        if (currentIndex > totalImages - imagesPerView) currentIndex = totalImages - imagesPerView; 
    }
    updateSliderPosition();
});

window.onload = () => {
    updateSliderPosition();
};
