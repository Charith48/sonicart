let keys=document.querySelectorAll(".keys");
function playsound(e){
    console.log(e.keyCode);
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime=0;
    audio.play();
    key.classList.add("playing");
}
function playclick(e){
    let val=e.target.parentElement.getAttribute('data-key');
    let audioNew=document.querySelector(`audio[data-key="${val}"]`);
    if(!audioNew) return;
    audioNew.currentTime=0;
    audioNew.play();
    e.target.parentElement.classList.add("playing");
}
function removeTransition(e){
    if(e.propertyName!='transform') return;
    e.target.classList.remove('playing');
}
keys.forEach((e)=>{
    e.addEventListener('transitionend',removeTransition);
    e.addEventListener('click',playclick);
})
window.addEventListener('keydown',playsound);