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
let picture2 = document.getElementById('picture2');
let debounce2 = false;
let debounce = false;

class Button{ 
    constructor(id, className){
        this.id = id;
        this.className = className;
    }
}

let contactB = new Button(document.getElementById('contacts'),"active");
let startB = new Button(document.getElementById('home'),"notActive");
let aboutB = new Button(document.getElementById('about'),"notActive");

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    ground.style.top = value*-0.7+'px';
    mfront.style.top = value*-0.2+'px';
    tback.style.top = value*-0.4+'px';
    tfront.style.top = value*-0.5+'px';
    blackbox.style.top = value*-0.7+'px';
    birds.style.top = value*-0.1 +'px';
    if(value>400 && value<1200){
        if(!debounce){
            debounce = true;
            picture.style.opacity = 1;
        }
        if(aboutB.id.className!="active"){
            aboutB.id.className = "active";
            contactB.id.className = "notActive";
            startB.id.className = "notActive";
        }
    }
    if(value>1200 && value<2000){    
        if(!debounce2){
            debounce2 = true;
            picture2.style.opacity = 1;
        }
        if(contactB.id.className!="active"){
            startB.id.className = "notActive";
            contactB.id.className = "active";
            aboutB.id.className = "notActive";
        }
    }
    if(value>0 && value<400 && startB.id.className!="active" ){
        startB.id.className = "active";
        contactB.id.className = "notActive";
        aboutB.id.className = "notActive";
    }
   
})

aboutB.id.addEventListener('click', function(){
  
    aboutB.id.className = "active";
    contactB.id.className = "notActive";
    startB.id.className = "notActive";
  
})
startB.id.addEventListener('click', function(){
  
    startB.id.className = "active";
    contactB.id.className = "notActive";
    aboutB.id.className = "notActive";

})
contactB.id.addEventListener('click', function(){
    startB.id.className = "notActive";
    contactB.id.className = "active";
    aboutB.id.className = "notActive";
 
})