document.info.addEventListener("submit", (event) =>{
    event.preventDefault()
    var firstName = document.info.firstName.value
    var lastName = document.info.lastName.value
    var age =  document.info.age.value
    var gender =  document.info.gender.value
    var location =  document.info.location.value
    const diet = []
        for (let i=0; i< info.diet.length; i++){
            if(info.diet[i].checked){
                diet.push(info.diet[i].value)
            }
        }

    alert("First Name: " + firstName +'\nLast Name: ' + lastName + '\nAge: ' + age + '\nGender: ' + gender + '\nLocation: ' + location + '\nDietary Restrictions: ' + diet);
})