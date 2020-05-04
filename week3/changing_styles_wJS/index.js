let memes = ["Pepe", "Brad's Wife", "Backpack Kid", "Loss"];

let ulist = document.createElement("ul");
document.body.append(ulist);
for(i = 0; i < memes.length; i++) {
    let li = document.createElement("li");
    li.textContent = memes[i];
    li.style.fontSize = "20px";
    li.style.fontWeight = "lighter";
    li.style.fontFamily = "sans-serif";
    li.style.color = "cornflowerblue";
    li.classList = "border";
    ulist.append(li);
}