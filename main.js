var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();

var textbox = document.getElementById("voice_output");

var camera = document.getElementById("camera");

Webcam.set({
    width: 600,
    height: 400,
    image_format: 'png',
    png_quality: 90
});

function start2(){
    textbox.innerHTML = "";
    console.log("started")
    recognition.start();   
}

recognition.onresult = function(event){
    console.log(event);
    content = event.results[0][0].transcript; 
    textbox.innerHTML = content;
    speak()
    Webcam.attach(camera);
}

function speak(){
    synth = window.speechSynthesis;
    speech = textbox.value;
    console.log(speech);
    utterthis = new SpeechSynthesisUtterance(speech);
    synth.speak(utterthis);
}