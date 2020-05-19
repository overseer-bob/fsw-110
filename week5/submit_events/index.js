document.words.addEventListener("submit", (event) =>{
    event.preventDefault()
    var noun = document.words.noun.value
    var adverb = document.words.adverb.value
    var verb =  document.words.verb.value

    console.log("The "+ noun + " did " + adverb +" " + verb + " in it's home." );
    alert("The "+ noun + " did " + adverb +" " + verb + " in it's home." );
})
document.assignment.addEventListener("submit", function(e){
    e.preventDefault()
    var participant = document.assignment.name.value

    console.log(participant + " really wants Bob to pass!!");
    alert(participant + " really wants Bob to pass!!");
})