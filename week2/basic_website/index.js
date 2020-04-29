let navbar = document.createElement("nav");
let navlinks = document.createElement("div")
navlinks.innerHTML = '<a href="index.html">Home</a> <a href="#">About</a> <a href="#">Contact</a>';
navbar.append(navlinks);
document.body.append(navbar);

let header = document.createElement("h1");
header.textContent = "This site has been made with javascript";
document.body.append(header);

let paragraph = document.createElement("p");
paragraph.textContent = "I am creating this entire site using javascript. So far I am liking this a lot more than I thought I would.";
document.body.append(paragraph);

let newOl = document.createElement("ol");
let liOne = document.createElement("li");
let liTwo = document.createElement("li");
let liThree = document.createElement("li");
liOne.textContent = "This list";
liTwo.textContent = "has been";
liThree.textContent = "made with Javacript!";
newOl.append(liOne);
newOl.append(liTwo);
newOl.append(liThree);
document.body.append(newOl);

let newFooter = document.createElement("footer");
newFooter.textContent = "This is the footer";
document.body.append(newFooter);