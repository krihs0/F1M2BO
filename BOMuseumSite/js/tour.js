const myImage = document.getElementById("myImage");
const myInteraction = document.getElementById("myInteraction");
const myTitle = document.getElementById("myTitle");
const myInput = document.getElementById("myInput");
const myMap = document.getElementById("myMap")

let directionButtons = {
    "noord":document.getElementById("knopNoord"),
    "west":document.getElementById("knopWest"),
    "oost":document.getElementById("knopOost"),
    "zuid":document.getElementById("knopZuid")
}


let current_index = 0;

let locaties =[
    {
        "titel":"plaats 0",
        "image":"img/tour/foto0.jpg",
        "map":"img/tour/map0.jpg",
        "directions":{
            "noord":1,
            "zuid":11
        }
    },
    {
        "titel":"plaats 1",
        "image":"img/tour/foto1.jpg",
        "map":"img/tour/map1.jpg",
        "directions":{
            "zuid":0,
            "west":2
        }
    },
    {
        "titel":"plaats 2",
        "image":"img/tour/foto2.jpg",
        "map":"img/tour/map2.jpg",
        "directions":{
            "oost":1,
            "west":4
        }
    },
    {
        "titel":"plaats 3",
        "image":"img/tour/foto3.jpg",
        "map":"img/tour/map3.jpg",
        "directions":{
            "zuid":4
            
        }
    },
    {
        "titel":"plaats 4",
        "image":"img/tour/foto4.jpg",
        "map":"img/tour/map4.jpg",
        "directions":{
            "noord":3,
            "oost":2,
            "zuid":5
        }
    },
    {
        "titel":"plaats 5",
        "image":"img/tour/foto5.jpg",
        "map":"img/tour/map5.jpg",
        "directions":{
            "noord":4,
            "zuid":6
        }
    },
    {
        "titel":"plaats 6",
        "image":"img/tour/foto6.jpg",
        "map":"img/tour/map6.jpg",
        "directions":{
            "noord":5,
            "zuid":7
        }
    },
    {
        "titel":"plaats 7",
        "image":"img/tour/foto7.jpg",
        "map":"img/tour/map7.jpg",
        "directions":{
            "noord":6,
            "zuid":8
        }
    },
    {
        "titel":"plaats 8",
        "image":"img/tour/foto8.jpg",
        "map":"img/tour/map8.jpg",
        "directions":{
            "noord":7,
            "oost":9,
            "zuid":10
        }
    },
    {
        "titel":"plaats 9",
        "image":"img/tour/foto9.jpg",
        "map":"img/tour/map9.jpg",
        "directions":{
            "west":10
        }
    },
    {
        "titel":"plaats 10",
        "image":"img/tour/foto10.jpg",
        "map":"img/tour/map10.jpg",
        "directions":{
            "noord":8,
            "oost":11
        }
    },
    {
        "titel":"plaats 11",
        "image":"img/tour/foto11.jpg",
        "map":"img/tour/map11.jpg",
        "directions":{
            "noord":0,
            "west":10
        }
    },
    
]
function show(index){
    myTitle.innerHTML = locaties[index].titel;
    myImage.src = locaties[index].image;
    myMap.src = locaties[index].map
    current_index = index;

    updateDirections()
}

function updateDirections(){
    let possible = locaties[current_index].directions;
    let possible_keys = Object.keys(possible);

    let button_keys = Object.keys(directionButtons)

    for(const key of button_keys){
        directionButtons[key].style.visibility = "hidden";
    }

    for(const key of possible_keys){
        directionButtons[key].style.visibility = "visible";
    }
}

function getInput(){
    show(myInput.value)
    myInput.value = "";
    myInput.focus();
}

function goDirection(richting){
    let punt_index = locaties[current_index].directions[richting]
    show(punt_index)
}

show(0);