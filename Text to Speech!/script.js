let textEle = document.getElementById("text")

let voicesEle = document.getElementById("voiceList");

let speechBtn = document.getElementById("speak")

let speechSynth = speechSynthesis //one api


speechSynth.addEventListener("voiceschanged", loadvoices);

function loadvoices(){
  let voices = speechSynth.getVoices()
  for( voice of voices){
    let option = document.createElement('option')
    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`
    voicesEle.appendChild(option)
  }
}

function textToSpeech(text){
  let utterance = new SpeechSynthesisUtterance(text);
  for(let voice of speechSynth.getVoices()){
    if(voice.name === voicesEle.value){
      utterance.voice = voice;
    }
  }
  speechSynth.speak(utterance);
}

speechBtn.addEventListener("click", function(){
  if(textEle.value !== ""){
    if(!speechSynth.speaking){
      textToSpeech(textEle.value)
    }
  }
    else{
      alert("Enter some text")
    }
});