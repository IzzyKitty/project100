setTimeout (function()){
img_id = "selfie1";
take_snapshot();
speak_data = "Taking your next selfie in 10 seconds"
var utterthis = new SpeechSynthesisUtterance(speak_data)
synth.speak(utterThis);
5000;
}

function take_snapshot(){
console.log(img_id);
Webcam.snap(function(data_uri){
if (img_id==selfie1){
document.getElementById("result1").innerhtml = '<img id="sellfie1 src="'+data_uri+'"/>';
}
if (img_id==selfie1){
 document.getElementById("result2").innerhtml = '<img id="sellfie2 src="'+data_uri+'"/>';
}
if (img_id==selfie1){
document.getElementById("result3").innerhtml = '<img id="sellfie3 src="'+data_uri+'"/>';
}
})
}