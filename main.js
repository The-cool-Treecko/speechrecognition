var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();

var textbox = document.getElementById("voice_output");

function start2(){
    textbox.innerHTML = "";
    console.log("started")
    recognition.start();   
}

recognition.onresult = function(event){
    console.log(event);
    textbox.innerHTML = event.results[0][0].transcript;
} 