const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"]
//random color script from stackoverflow 
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

for(i = 0; i < names.length; i++){
    let newH1 = document.createElement("h1");
    newH1.textContent = names[i];
    document.body.append(newH1);
    newH1.style.color = random_rgba();
}