let firstNamebyId = document.getElementById("first_name")
console.log(firstNamebyId)

let lastNamebyId = document.getElementById("last_name")
console.log(lastNamebyId)

let firstnamebyclass = document.getElementsByClassName("input--style-4")[0];
console.log(firstnamebyclass)

let firstnamebyselectorId = document.querySelector("#first_name");
console.log(firstnamebyselectorId)

let firstnamebyselectorname = document.querySelector("[name='first_name']")
console.log(firstnamebyselectorname)

console.log(firstNamebyId.getAttribute("id"))

// firstNamebyId.setAttribute("class", "redColorClass");
firstNamebyId.setAttribute("value",  "Ryan")
lastNamebyId.value = "Daniel"

let fullName = document.querySelector("#full_name")
fullName.value = `${firstNamebyId.value.toUpperCase()} ${lastNamebyId.value.toUpperCase()}`

let email = document.querySelector("#email")
email.value = `${firstNamebyId.value.toLowerCase()}${lastNamebyId.value.toLowerCase()}@cw.com`

let logo = document.createElement("img")
logo.setAttribute("src", "img/logo.png")
logo.setAttribute("class", "headerLogo")

let headerDiv = document.getElementById("headerId")

//eaderDiv.appendChild(logo) //alttaki ile aynı
headerDiv.innerHTML += '<img src="img/logo.png" alt="Bank logo" class="nav__logo" id="logo" />'