//how many m?

/*let sentence = ("If you fall asleep now, you will dream. If you study now, you will live your dream.")
let counter = 0
for (let i = 0; i< sentence.length; i++) {
    if (sentence.charAt(i) === "m") counter++;    
 }
 console.log(counter);*/

//find m index

let myStr = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
for (let i = 0; i < myStr.length; i++) {
    if (myStr[i]=="m"){
        console.log("indexOf",myStr[i],i);
      }
 }

//another way to find m index

let str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
function find(text){
    let newText = "";
    for (let i = 0; i < text.length; i++) {
        text.charAt(i)==="m" ? newText += i +"," : ""
    }
    return newText
}
str=str.trim()
console.log("m'nin index numaraları: "+find(str));