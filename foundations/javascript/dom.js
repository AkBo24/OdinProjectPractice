/*
1. a <p> with red text that says “Hey I’m red!”
2. an <h3> with blue text that says “I’m a blue h3!”
3. a <div> with a black border and pink background color with the following elements inside of it:
    3a. another <h1> that says “I’m in a div”
    3b. a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/

/*1*/
const q1 = document.createElement("p");
q1.innerHTML = "Hey i'm red";
q1.style.color = "red";
document.body.appendChild(q1);

/*2*/
const q2 = document.createElement("h3");
q2.innerHTML = "I’m a blue h3!";
q2.style.color = "blue";
document.body.appendChild(q2);

/*3*/
const q3 = document.createElement("div");
q3.style.border = "thin solid black";
// q3.style.borderColor = "black";
q3.style.backgroundColor = "pink";
document.body.appendChild(q3);

const q3a = document.createElement("h1");
q3a.innerHTML = "In a div";
q3.appendChild(q3a);

const q3b = document.createElement("p");
q3b.innerHTML = "same!";
q3.appendChild(q3b);
