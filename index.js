// we can't add parenthesis after onClick it'll str8 away call that function without pressing that button 

var i=0;
for(i=0;i<7;i++){


document.getElementsByTagName("button")[i].addEventListener("click", function (){
   makeSound(this.innerHTML);
   animation(this.innerHTML);
    // alert(myAudio.duration); :: since no media detected, NaN will be returned.  :: for live streams it gives infinty.
    // console.log(this); ::: THIS refers to the BUTTON.
});

};


document.addEventListener("keydown",function(event){
// console.log(event);

makeSound(event.key);
animation(event.key);

});

function makeSound(char){
    if(char==="w") {
        var myAudio = new Audio('./sounds/tom-1.mp3');
        myAudio.play();
        
       }
       if(char==="a") {
        var myAudio = new Audio('./sounds/tom-2.mp3');
        myAudio.play();
       }
       if(char==="s") {
        var myAudio = new Audio('./sounds/tom-3.mp3');
        myAudio.play();
       }
       if(char==="d") {
        var myAudio = new Audio('./sounds/tom-4.mp3');
        myAudio.play();
       }
       if(char==="j") {
        var myAudio = new Audio('./sounds/snare.mp3');
        myAudio.play();
       }
       if(char==="k") {
        var myAudio = new Audio('./sounds/crash.mp3');
        myAudio.play();
       }
       if(char==="l") {
        var myAudio = new Audio('./sounds/kick-bass.mp3');
        myAudio.play();
       }
       
};
function animation(currentKey){

document.querySelector("."+ currentKey).classList.add("pressed");

setTimeout(function(){
    document.querySelector("."+ currentKey).classList.remove("pressed");},500);
}