let showcaseData = [
    {
       "year": "1993",
       "pic": "mickeyMouseClub.jpg",
       "title": "The Mickey Mouse Club",
       "description": "lorem",
       "logo": "britneyLogo1999.png", 
       "index" : 1
    },

    {
        "year": "1998",
        "pic": "babyOneMoreTime.jpg",
        "title": "...Baby One More Time debut",
        "description": "lorem",
        "logo": "britneyLogo1999.png", 
        "index" : 2
     },

     {
        "year": "2000",
        "pic": "oops.jpg",
        "title": "Oops!...I Did It Again",
        "description": "lorem",
        "logo": "britneyLogo2000.png",
        "index" : 3
     },

    {
        "year": "2001",
        "pic": "vma2001bg.jpg",
        "title": "2001 VMA's",
        "description": "lorem ipsum",
        "logo": "britneyLogo2001.png", 
        "index" : 4
     },

     {
        "year": "2002",
        "pic": "crossroads.jpeg",
        "title": "Crossroads",
        "description": "lorem",
        "logo": "britneyLogo2001.png", 
        "index" : 5
     },

     {
        "year": "2002",
        "pic": "pepsi.jpeg",
        "title": "Taste The Victory",
        "description": "lorem",
        "logo": "britneyLogo2001.png", 
        "index" : 6
     },

     {
        "year": "2003",
        "pic": "toxic.jpg",
        "title": "Toxic",
        "description": "lorem",
        "logo": "britneyLogo2002.png", 
        "index" : 7
     },

     {
        "year": "2004",
        "pic": "onyx.jpg",
        "title": "The Onyx Hotel Tour",
        "description": "lorem",
        "logo": "britneyLogo2002.png", 
        "index" : 8
     },

     {
        "year": "2009",
        "pic": "circus.jpg",
        "title": "Circus Era",
        "description": "lorem",
        "logo": "britneyLogo2008.png", 
        "index" : 9
     },
 

]




// document.querySelector("#changeLogo").addEventListener("click", function(){
//     let img = document.querySelector(".yearLogo img");
//     let div = document.querySelector(".yearLogo")
//     let newImg = document.createElement("img");
//     div.removeChild(img);


//     if(img.src.endsWith("britneyLogo2001.png"))
//     newImg.src = "img/britneyLogo2002.png";
//     else
//     newImg.src = "img/britneyLogo2001.png";

    
//     div.appendChild(newImg);
//     ScrollReveal().reveal('.yearLogo img', {duration: 1000, easing: 'ease', distance: "200px", origin: "top"});


// })



const slider = document.querySelector('.showcaseSlider');

showcaseData.forEach(data => {
    let showcase = document.createElement("div")
    showcase.classList.add("showcaseImage");
    let h3 = document.createElement("h3");
    h3.innerHTML = data.year;
    let img = document.createElement("img")
    img.style.width = "100px";
    img.src = "img/" + data.pic;
    showcase.appendChild(h3)
    showcase.appendChild(img)
    showcase.setAttribute('idImage', data.index);
    slider.appendChild(showcase)
});

ScrollReveal().reveal('.background', {duration: 400, easing: 'ease'});
    
ScrollReveal().reveal('.yearLogo img', {duration: 1000, easing: 'ease', distance: "200px", origin: "top"});

ScrollReveal().reveal('.description h4', {duration: 1000, easing: 'ease', distance: "200px", origin: "left"});

ScrollReveal().reveal('.description p', {duration: 1000, easing: 'ease', distance: "200px", origin: "left", delay: 400});


ScrollReveal().reveal('.slider-container', {duration: 1200, easing: 'ease', distance: "200px", origin: "bottom"});



const showcaseImages = document.querySelectorAll('.showcaseImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');



showcaseImages.forEach(image => {
    image.addEventListener("click", function(){
        showcaseImages.forEach(element=>  element.classList.remove("activeImage"))
        image.classList.add("activeImage")
        let infoValue = image.getAttribute('idImage');
        let info = showcaseData[infoValue-1];
        let img = document.querySelector(".yearLogo img");
        let div = document.querySelector(".yearLogo")
        let newImg = document.createElement("img");
        div.removeChild(img);
        newImg.src = "img/" + info.logo;


        div.appendChild(newImg);
        ScrollReveal().reveal('.yearLogo img', {duration: 1000, easing: 'ease', distance: "200px", origin: "top"});

        let background = document.querySelector(".background")
        background.removeChild(background.querySelector("img"))
        let newBackground = document.createElement("img");
        newBackground.src = "img/" + info.pic;
        background.appendChild(newBackground);
        ScrollReveal().reveal('.background img', {duration: 400, easing: 'ease'});

        let description = document.querySelector(".description")
        description.removeChild(description.querySelector("h4"))
        description.removeChild(description.querySelector("p"))
        description.removeChild(description.querySelector("hr"))

        let newH4 = document.createElement("h4");
        let newP = document.createElement("p");
        let newHR = document.createElement("hr")
        newP.innerHTML = info.description
        newH4.innerHTML = info.title

        description.appendChild(newH4)
        description.appendChild(newHR)
        description.appendChild(newP)
        ScrollReveal().reveal('.description h4', {duration: 1000, easing: 'ease', distance: "200px", origin: "left"});
        ScrollReveal().reveal('.description p', {duration: 1000, easing: 'ease', distance: "200px", origin: "left", delay: 400});
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


document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowLeft") {
        prevBtn.click();
    }
    if (event.key === "ArrowRight") {
        nextBtn.click();
    }
});

