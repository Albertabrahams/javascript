str = "ali ata bak"

function reverseWords(str) {
    let reverseWordArr = str.split(" ").reverse();
    return reverseWordArr.join(" ");
  }

  console.log(reverseWords(str))
