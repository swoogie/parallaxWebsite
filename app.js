let sun = document.getElementById('sun');
let birds = document.getElementById('birds');
let mback = document.getElementById('mBack');
let mfront = document.getElementById('mFront');
let tback = document.getElementById('tBack');
let tfront = document.getElementById('tFront');
let bottomPart = document.getElementById('sec');
let ground = document.getElementById('ground');
let gradient = document.getElementById('gradient');
let blackbox = document.getElementById('blackBox');
let element = document.getElementsByClassName('sec');
let picture = document.getElementById('picture1');

let debounce = false;

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    ground.style.top = value*-0.5+'px';
    // gradient.style.top =790+(value)+'px';
    // bottomPart.style.top = value+'px';
    mfront.style.top = value*-0.2+'px';
    tback.style.top = value*-0.3+'px';
    tfront.style.top = value*-0.4+'px';
    blackbox.style.top = value*-0.5+'px';
    birds.style.top = value*-0.1 +'px';
    if(value>700 && !debounce)
    {
        debounce = true;
        picture.style.opacity = 1;
    }
})