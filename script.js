function animation(){
    let svgHov = document.querySelector("svg");
let menuDiv = document.querySelector(".menuDIv");

svgHov.addEventListener("mouseenter",function(){
    menuDiv.style.left = "0%";
})

svgHov.addEventListener("mouseleave",function(){
    menuDiv.style.left = "-50%";
})

}
AOS.init();
animation();
