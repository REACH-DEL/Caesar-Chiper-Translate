var letters = "abcdefghijklmnopqrstuvwxyz";
var title1 = $(".title1 h3");
var title1text = "Caesar Cipher to Normal text";
var title2text = "Normal text to Caesar Cipher";
var title2 = $(".title2 h3");
var switchButton = $(".switch button");
var startButton = $(".start button");
var text = $(".input textarea");
var output = $(".output p");
var n;
var select = $(".option select")
var option = $(".option .select option");
select.on("change", function(){
    n = parseInt($(this).val());
})
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
                if (letters.includes(currentChar.toLowerCase())) { 
                    var newIndex = (letters.indexOf(currentChar.toLowerCase()) - n + 26) % 26;
                    if (currentChar.toUpperCase() === currentChar) { 
                        outputText += letters[newIndex].toUpperCase(); 
                    } else {
                        outputText += letters[newIndex]; 
                    }
                } else {
                    outputText += currentChar; 
                }
            }
        }
        else if (title2text === "Caesar Cipher to Normal text" && title1text === "Normal text to Caesar Cipher"){
            for (var i = 0; i < inputValue.length; i++){
                var currentChar = inputValue[i];
                if (letters.includes(currentChar.toLowerCase())) {
                    var newIndex = (letters.indexOf(currentChar.toLowerCase()) + n) % 26;
                    if (currentChar.toUpperCase() === currentChar) {
                        outputText += letters[newIndex].toUpperCase();
                    } else {
                        outputText += letters[newIndex]; 
                    }
                } else {
                    outputText += currentChar; 
                }
            }
        }
        
        output.text(outputText); 
    });

});




