str = "ali ata bak"

function reverseword(str){
    str = str.split(" ").reverse();
    return str.join(" ");
}
console.log(reverseword(str));