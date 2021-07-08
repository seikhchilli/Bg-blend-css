var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var h2box1 = document.getElementById("h2box1");
var h2box2 = document.getElementById("h2box2");
var h2box3 = document.getElementById("h2box3");
var h2box4 = document.getElementById("h2box4");

box1.addEventListener("mouseover", function () {
    h2box1.style = "margin: 0";
    
})
box1.addEventListener("mouseout", function () {
    h2box1.style = "margin-top: -300px";
})
box2.addEventListener("mouseover", function () {
    h2box2.style = "margin: 0";
})
box2.addEventListener("mouseout", function () {
    h2box2.style = "margin-top: -300px";
})
box3.addEventListener("mouseover", function () {
    h2box3.style = "margin: 0";
})
box3.addEventListener("mouseout", function () {
    h2box3.style = "margin-top: -300px";
})
box4.addEventListener("mouseover", function () {
    h2box4.style = "margin: 0";
})
box4.addEventListener("mouseout", function () {
    h2box4.style = "margin-top: -300px";
})
