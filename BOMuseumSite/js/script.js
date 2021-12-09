let lang = "NL"

function onClickNL(){
    lang = "NL"
    setLang()
}

function onClickUK(){
    lang = "EN"
    setLang()
}

function setLang(){
    console.log("setLang function in development")
    //set lang tag/change page
    console.log(lang)
}

let pages = [
    "tour.html",
    "info.html",
    "tickets.html"
];

function navBar(index){
    location.href = pages[index];
}