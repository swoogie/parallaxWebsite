let sun = document.getElementById('sun');
let birds = document.getElementById('birds');
let mback = document.getElementById('mBack');
let mfront = document.getElementById('mFront');
let tback = document.getElementById('tBack');
let tfront = document.getElementById('tFront');
let bottomPart = document.getElementById('sec');
let ground = document.getElementById('ground');
let gradient = document.getElementById('gradient');
let aboutbutton = document.getElementById('about');
let homebutton = document.getElementById('home');
let contactsbutton = document.getElementById('contacts');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    ground.style.top = value*-0.9+'px';
    gradient.style.top =790+(value*-0.9)+'px';
    bottomPart.style.top = value*-0.9+'px';
    mfront.style.top = value*-0.2+'px';
    tback.style.top = value*-0.3+'px';
    tfront.style.top = 20+(value*-0.4)+'px';
    birds.style.top = value*-0.1 +'px';
    if(value>350){
        aboutbutton.className = "active";
        homebutton.className = "notActive";
        contactsbutton.className = "notActive";
    }
    else{
        homebutton.className = "active";
        aboutbutton.className = "notActive";
        contactsbutton.className = "notActive";
    };
})

aboutbutton.addEventListener('click', function(){
    window.scrollTo(0,480);
})