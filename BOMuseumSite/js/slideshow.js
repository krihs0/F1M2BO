var position = 0;
var img1 = "https://placekitten.com/800/600";
var img2 = "https://placekitten.com/801/600";
var img3 = "https://placekitten.com/802/600";
var img4 = "https://placekitten.com/803/600";
var img5 = "https://placekitten.com/804/600";
var img6 = "https://placekitten.com/805/600";
var img7 = "https://placekitten.com/807/600";
var imgElement = document.getElementById("slideshow");

function onClickNext(){
    position = position + 1;
    if(position == 7){
        position = 0;
    }
    console.log("position is " + position);
    setImage();
}

function onClickPrevious(){
    position = position - 1;
    if(position == -1){
        position = 6;
    }
    console.log("position is " + position);
    setImage();
}

function setImage(){
    if(position == 0){
        imgElement.src = img1;
    }
    else if(position == 1){
        imgElement.src = img2;
    }
    else if(position == 2){
        imgElement.src = img3;
    }
    else if(position == 3){
    imgElement.src = img4;
    }
    else if(position == 4){
        imgElement.src = img5;
    }
    else if(position == 5){
        imgElement.src = img6;
    }
    else if(position == 6){
        imgElement.src = img7;
    }
}