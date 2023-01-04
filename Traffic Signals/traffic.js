var x = document.getElementById('abc');
var a = document.getElementById('hell');
var p = document.getElementById('hai');
p.style.height = "4rem";
p.style.width = "10rem";
p.style.backgroundColor="black";
a.style.height = "15rem";
a.style.width = "4rem";
a.style.borderRadius = "3rem";
a.style.border = "3px solid red";
a.style.backgroundColor = "black";
a.style.display = "flex";
a.style.flexDirection = "column";
a.style.justifyContent = "space-evenly";
a.style.padding="8px";
x.appendChild(a);
x.appendChild(p);
var b = document.getElementById('hell1');
b.style.height = "20rem";
b.style.width = "0.5rem";
b.style.borderRadius = "1px";
b.style.border = "3px solid black";
b.style.backgroundColor="grey";
x.appendChild(b);
x.style.display = "flex";
x.style.flexDirection = "column";
x.style.justifyContent = "center";
x.style.alignItems = "center";


var c = document.createElement('div');
a.appendChild(c);
c.style.height = "3rem";
c.style.width = "3rem";
c.style.borderRadius = "50%";
c.style.backgroundColor="red";
c.style.marginLeft="6px";
c.style.border="3px solid white";

var d = document.createElement('div');
a.appendChild(d);
d.style.height = "3rem";
d.style.width = "3rem";
d.style.borderRadius = "50%";
d.style.backgroundColor="orange";
d.style.marginLeft="6px";
d.style.border="3px solid white";


var e = document.createElement('div');
a.appendChild(e);
e.style.height = "3rem";
e.style.width = "3rem";
e.style.borderRadius = "50%";
e.style.backgroundColor="green";
e.style.marginLeft="6px";
e.style.border="3px solid white";



// var f = setTimeout(() => {

//     c.style.backgroundColor = "red";
// }, 5000);
// c.appendChild(f);

// var g = setTimeout(() => {

//     d.style.backgroundColor = "orange";
// }, 7000);

// d.appendChild(g);

// var h = setTimeout(() => {

//     e.style.backgroundColor = "green";
// }, 9000);

// e.appendChild(h);

setInterval(
function valther() {
    
    setTimeout(function () {
        c.style.visibility ="hidden";
        d.style.visibility = "hidden";
        e.style.visibility = "visible";
        p.innerHTML="GO";
        p.style.textAlign="center";
        p.style.fontSize="3rem";
        p.style.color="limegreen";
        p.style.backgroundColor="grey";
        p.style.border="2px solid limegreen"
        p.style.borderRadius="50%";

    }, 2000);
    setTimeout(function () {
        c.style.visibility = "hidden";
        d.style.visibility="visible";
        e.style.visibility = "hidden";
        p.innerHTML="SLOW!";
        p.style.textAlign="center";
        p.style.fontSize="2.8rem";
        p.style.color="orange";
        p.style.border="2px solid orange"
        p.style.borderRadius="50%";


    }, 5000);
    setTimeout(function () {
        c.style.visibility = "visible";
        d.style.visibility = "hidden";
        e.style.visibility = "hidden";
        p.innerHTML="STOP!";
        p.style.textAlign="center";
        p.style.fontSize="2.8rem";
        p.style.color="red";
        p.style.border="2px solid red";
        p.style.borderRadius="50%";



    }, 9000);
},9000);
 
// setInterval(function(){
//     valther();
// },15000);
// valther();

