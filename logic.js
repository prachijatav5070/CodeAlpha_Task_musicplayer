const cartoonAudio = new Audio('songs/song1.mp3');
const cartoonAudio2 = new Audio('songs/song2.mp3');


//select element
const backwordbtn= document.querySelector('.back');
const playbtn= document.querySelector('.play-pause');
const forwordbtn= document.querySelector('.next');

const songs = [
    {ele : cartoonAudio,audioName : 'cartoon by ncs'},
    {ele : cartoonAudio2,audioName : 'cartoon-2 by ncs'}
];
let current =0;
let currentsong =songs[current].ele;

