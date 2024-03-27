var letters = "abcdefghijklmnopqrstuvwxyz";
var title1 = $(".title1 h3");
var title1text = "Caesar Cipher to Normal text";
var title2text = "Normal text to Caesar Cipher";
var title2 = $(".title2 h3");
var switchButton = $(".switch button");
var startButton = $(".start button");
var text = $(".input textarea");
var output = $(".output p");
switchButton.on("click", function Switch(){
    title1.text(title2text);
    title2.text(title1text);
    var change = title1text;
    title1text = title2text;
    title2text = change;
});
text.on("input", function(){
    var inputValue = $(this).val();
    startButton.on("click", function Start(){
        var outputText = ""; // Initialize output text
        
        if (title1text === "Caesar Cipher to Normal text" && title2text === "Normal text to Caesar Cipher"){
            for (var i = 0; i < inputValue.length; i++){
                var currentChar = inputValue[i];
                if (currentChar === " ") {
                    outputText += " "; // Add space to output if input has a space
                } else {
                    var newIndex = (letters.indexOf(currentChar.toLowerCase()) + 3) % 26;
                    if (currentChar.toUpperCase() === currentChar) { // Check if character is uppercase
                        outputText += letters[newIndex].toUpperCase(); // Append uppercase version of the character
                    } else {
                        outputText += letters[newIndex]; // Append lowercase version of the character
                    }
                }
            }
        }
        else if (title2text === "Caesar Cipher to Normal text" && title1text === "Normal text to Caesar Cipher"){
            for (var i = 0; i < inputValue.length; i++){
                var currentChar = inputValue[i];
                if (currentChar === " ") {
                    outputText += " "; // Add space to output if input has a space
                } else {
                    var newIndex = (letters.indexOf(currentChar.toLowerCase()) - 3 + 26) % 26;
                    if (currentChar.toUpperCase() === currentChar) { // Check if character is uppercase
                        outputText += letters[newIndex].toUpperCase(); // Append uppercase version of the character
                    } else {
                        outputText += letters[newIndex]; // Append lowercase version of the character
                    }
                }
            }
        }
        
        output.text(outputText); // Update output after the loop
    });
});




