var typed = new Typed(".text",{
    strings:["Computer Science And Business Systems student"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

var sidemenu = document.getElementById("sidemenu")
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}
