// array of hexadecomal numbers
let hexaDecimalCodes = [0,1,2,3,4,5,6,7,8,9,"A","B","C", "D", "E","F"]

// bringing important html elements into js via ID
let defaultBgColor = "#F8FAFC";
let genButton = document.getElementById("genBtn");
let resetButton = document.getElementById("resetBtn");
let firstColorBox = document.getElementById("firstColorBox");
let firstHexCode = document.getElementById("firstHexCode");
let secondColorBox = document.getElementById("secondColorBox");
let secondHexCode = document.getElementById("secondtHexCode");
let thirdColorBox = document.getElementById("thirdColorBox");
let thirdHexCode = document.getElementById("thirdHexCode");
let fourthColorBox = document.getElementById("fourthColorBox");
let fourthHexCode = document.getElementById("fourthHexCode");
let fifthColorBox = document.getElementById("fifthColorBox");
let fifthHexCode = document.getElementById("fifthHexCode");


// creating random function to get numbers in random from the hexadecimal array
let randomFunction = function(){
    let RandomNums= Math.floor(Math.random()*hexaDecimalCodes.length);
    return RandomNums;

}

// copy to clipboard function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        let message = document.createElement("div");
        message.className = "copy-message show-message";
        message.textContent = "Color Code Copied!";
       
        document.body.appendChild(message);


        setTimeout(() => {
            message.remove();
        }, 2000);

    }).catch(err => {
        console.error('Error copying text: ', err);
    });
}


// adding event listener to generate button
genButton.addEventListener("click", function(){

    // for first color box and color text
    let firstColorCode  = "#"
    for(let i = 0; i<6; i++){
        let firstColor = hexaDecimalCodes[randomFunction()];
        firstColorCode += firstColor
    
    }

    firstColorBox.style.backgroundColor = firstColorCode;
    firstHexCode.textContent = firstColorCode


    // for second color box and color text
    let secondColorCode  = "#"
    for(let i = 0; i<6; i++){
        let secondColor = hexaDecimalCodes[randomFunction()];
        secondColorCode += secondColor
        
    }

    secondColorBox.style.backgroundColor = secondColorCode;
    secondHexCode.textContent = secondColorCode


    // for third color box and color text
    let thirdColorCode  = "#"
    for(let i = 0; i<6; i++){
        let thirdColor = hexaDecimalCodes[randomFunction()];
        thirdColorCode += thirdColor
        
    }

    thirdColorBox.style.backgroundColor = thirdColorCode;
    thirdHexCode.textContent = thirdColorCode


    // for fourth color box and color text
    let fourthColorCode  = "#"
    for(let i = 0; i<6; i++){
        let fourthColor = hexaDecimalCodes[randomFunction()];
        fourthColorCode += fourthColor
        
    }

    fourthColorBox.style.backgroundColor = fourthColorCode;
    fourthHexCode.textContent = fourthColorCode


    // for third color box and color text
    let fifthColorCode  = "#"
    for(let i = 0; i<6; i++){
        let fifthColor = hexaDecimalCodes[randomFunction()];
        fifthColorCode += fifthColor
        
    }

    fifthColorBox.style.backgroundColor = fifthColorCode;
    fifthHexCode.textContent = fifthColorCode


})

// Reset Button
resetButton.addEventListener("click", function(){
    // for first box and text
    firstColorBox.style.backgroundColor = defaultBgColor;
    firstHexCode.textContent = defaultBgColor

    // for first box and text
    secondColorBox.style.backgroundColor = defaultBgColor;
    secondHexCode.textContent = defaultBgColor

    // for first box and text
    thirdColorBox.style.backgroundColor = defaultBgColor;
    thirdHexCode.textContent = defaultBgColor

    // for first box and text
    fourthColorBox.style.backgroundColor = defaultBgColor;
    fourthHexCode.textContent = defaultBgColor

    // for first box and text
    fifthColorBox.style.backgroundColor = defaultBgColor;
    fifthHexCode.textContent = defaultBgColor


})


// event listener to copy by clicking color  box

// first box
firstColorBox.addEventListener("click", function(){
    let copy = copyToClipboard(firstHexCode.textContent);
    return copy;
})

// second box
secondColorBox.addEventListener("click", function(){
    let copy = copyToClipboard(secondHexCode.textContent);
    return copy;
})

// third box
thirdColorBox.addEventListener("click", function(){
    let copy = copyToClipboard(thirdHexCode.textContent);
    return copy;
})

// fourth box
fourthColorBox.addEventListener("click", function(){
    let copy = copyToClipboard(fourthHexCode.textContent);
    return copy;
})

// fifth box
fifthColorBox.addEventListener("click", function(){
    let copy = copyToClipboard(fifthHexCode.textContent);
    return copy;
})
