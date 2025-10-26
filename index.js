// console.log(`Hello world`);
// console.log(`I like pizza`);

// window.alert(`This is an alert!`);

// let fullName = "Lokesh";
// let age = 21;
// let isStudent = false;

// document.getElementById("myH1").textContent = `Hello`;
// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `Your age is ${age}`;
// document.getElementById("p3").textContent = `You are student: ${isStudent}`;

// let result = 1 +2*3+4 **3;
// console.log(result);
// let username;
// username = window.prompt("What's your username?");
// console.log(username);



// let username;
// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`;
// }

let PI = 3.1415;
let radius;
let circumference;

radius = Number(radius);


document.getElementById("mySubmit").onclick = function(){
    radius= document.getElementById("myText").value ;
    radius = Number(radius);
    circumference = 2*PI*radius;
    document.getElementById("myH3").textContent= circumference+"cm";
    
}

