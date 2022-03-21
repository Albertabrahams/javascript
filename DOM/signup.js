// DOM recap, DOM traversing

// let navbarPathItemText = document.getElementsByClassName("nav__item")[0].innerText;
// console.log(navbarPathItemText);

// let navbarPathItemText2 = document.getElementsByClassName("nav__link")[0].innerText;
// console.log(navbarPathItemText2);

// let navbarPathItemText3 = document.getElementsByClassName("nav__links")[0].children[0].innerText;
// console.log(navbarPathItemText3);

// let navbarPathItemText4 = document.getElementsByClassName("nav__links")[0].lastElementChild.innerText;
// console.log(navbarPathItemText4);

// let navbarPathsLi = document.querySelectorAll(".nav__item")[0].innerText;
// console.log(navbarPathsLi);

// window.addEventListener("event", func());
// window.addEventListener("load", ()=>{
//     console.log("window loaded");
// })

// // window.onload = func()
// window.onload = ()=>{
//     console.log("window onloadeddd")
// }

// let navbarPathsLi = document.querySelectorAll(".nav__link")[2];

// navbarPathsLi.addEventListener("click", ()=>{
//     alert(navbarPathsLi.innerHTML + " clicked");
// })
// let navbarCommunity = document.getElementsByClassName("nav__link")[2];

// navbarCommunity.addEventListener("mouseover", ()=>{
//     navbarCommunity.innerText = "Over me!"
//     navbarCommunity.style.color = "green"
//     navbarCommunity.style.border = "5px solid black"
//     navbarCommunity.style.borderRadius = "5px"
// })
// navbarCommunity.addEventListener("mouseout", ()=>{
//     navbarCommunity.innerText = "Community"
//     navbarCommunity.style.color = "#444444"
//     navbarCommunity.style.border = "none"
// })



// 3. ve 4. eventlistener ekleme şekli ödev

// let navbarPathsLi2 = document.querySelector(".nav__links").firstElementChild;
// console.log("ul -> first li", navbarPathsLi2.innerText);

// let navbarSignUpLi = document.querySelector(".nav__links").lastElementChild;
// console.log("ul -> last li", navbarSignUpLi.innerText);

// let navbarInstructorsLi = document.querySelectorAll(".nav__item")[1];
// console.log(navbarInstructorsLi);

// navbarInstructorsLi.addEventListener("mouseover", ()=>{
//     navbarInstructorsLi.innerText = "Over Me!";
//     navbarInstructorsLi.style.color = "green";
//     navbarInstructorsLi.style.fontSize = "1.7rem";
// });

// navbarInstructorsLi.addEventListener("mouseout", ()=>{
//     navbarInstructorsLi.innerText = "Instructors";
//     navbarInstructorsLi.style.color = "#444444";
//     navbarInstructorsLi.style.fontSize = "1.7rem";
// });


// let navbarStudentsLi = document.querySelectorAll(".nav__item")[2];
// // console.log(navbarStudentsLi);
// // 🔥🔥🔥🔥🔥  rgb random color(rgb(255,255,255) onclick of Students Navbar (CODE CHALLENGE)  🔥🔥🔥🔥🔥


// //ul
// navbarStudentsLi.parentElement.addEventListener("click", (event)=>{
//     event.stopPropagation();
//     navbarStudentsLi.parentElement.style.backgroundColor = randomColor();
// });

// //header
// navbarStudentsLi.parentElement.parentElement.addEventListener("click", (event)=>{
//     navbarStudentsLi.parentElement.parentElement.style.backgroundColor = randomColor();
// });

// let lastName = document.querySelector("input[name = last_name]");
// let charSpan = document.getElementById("charCount");

// lastName.addEventListener("keyup", ()=>{
//     charSpan.innerText = lastName.value.length + "/40";
// });

// let firstname = document.getElementsByClassName("input--style-4")[0];
// let char = document.getElementById("char");

// firstname.addEventListener("keyup",()=>{
//     char.innerText = firstname.value.length + "/30";
//     if (char.innerText.length == "0"){
//         char.style.backgroundColor = "blue"
//     }
// } )

// // last name input value 0 olduğunda span gözükmesin!! --> Homework <--

// let birthdayPicker = document.querySelector('[name=birthday]');
// birthdayPicker.addEventListener("change", () =>{
//     console.log(birthdayPicker.value);
//     console.log(new Date());
//     let year = new Date().getFullYear() - new Date(birthdayPicker.value).getFullYear();
//     alert("You are " + year + "years old.");
// });

// birthdayPicker.onchange = () =>{
//     console.log(birthdayPicker.value);
//     console.log(new Date());
//     let year = new Date().getFullYear() - new Date(birthdayPicker.value).getFullYear();
//     alert("You are " + year + "years old.");
//}


// const randomNumber = () => Math.round(Math.random() * 255);
// const randomColor = () => `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;

// //li
// navbarStudentsLi.addEventListener("click", (event)=>{
//     //stop bubbling
//     event.stopPropagation();
//     navbarStudentsLi.style.backgroundColor = randomColor();
// });


// let navbarStudents = document.querySelectorAll(".nav__link")[2];
// console.log(navbarStudents)

// let sayı = ()=> Math.round(Math.random()*256)

// navbarStudents.addEventListener("mouseover", ()=>{
    
//     navbarStudents.style.backgroundColor = `rgb(${sayı()},${sayı()},${sayı()})`
// })
// navbarStudents.addEventListener("mouseout", ()=>{
    
//     navbarStudents.style.backgroundColor = "#ffffff"
// })


// we did it addlistener
// let birthdayPicker = document.querySelector("[name=birthday");
// birthdayPicker.addEventListener("change", ()=>{
//     let year = new Date().getFullYear()- new Date(birthdayPicker.value).getFullYear();
//     alert("You are "+ year + " years old!")
// })


// we did it with old method
// let birthdayPicker = document.querySelector("[name=birthday");
// birthdayPicker.onchange = ()=>{
//     let year = new Date().getFullYear()- new Date(birthdayPicker.value).getFullYear();
//     alert("You are "+ year + " years old!")
// }