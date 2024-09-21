window.onload = ()=>{
    ScrollReveal().reveal('.yearLogo img', {duration: 1000, easing: 'ease', distance: "200px", origin: "top"});
}

document.querySelector("#changeLogo").addEventListener("click", function(){
    let img = document.querySelector(".yearLogo img");
    let div = document.querySelector(".yearLogo")
    let newImg = document.createElement("img");


    if(img.src.endsWith("britneyLogo2001.png"))
    newImg.src = "img/britneyLogo2002.png";
    else
    newImg.src = "img/britneyLogo2001.png";

    div.removeChild(img);
    
    div.appendChild(newImg);
    ScrollReveal().reveal('.yearLogo img', {duration: 1000, easing: 'ease', distance: "200px", origin: "top"});


})