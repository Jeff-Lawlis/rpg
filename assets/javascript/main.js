var characters = [
    {
        name : "Rick",
        hp : 150,
        attPwr : 6,
        ctrPwr : 15,
        imgUrl : "./assets/images/Rick.jpg"
    },
    {
        name : "Morty",
        hp : 100,
        attPwr : 9,
        ctrPwr : 12,
        imgUrl : "./assets/images/morty.png"
    },
    {
        name : "Beth",
        hp : 130,
        attPwr : 7,
        ctrPwr : 10,
        imgUrl : "./assets/images/beth-smith.jpg"
    },
    {
        name : "Summer",
        hp : 120,
        attPwr : 8,
        ctrPwr : 13,
        imgUrl : "./assets/images/summer-smith.png"
    }
]
var playerChar

function populate(){
    document.getElementById("char-container").innerHTML = `
        <h2>CHOOSE YOUR FIGHTER</h2>
    `
    for(var i=0; i<characters.length; i++){
        var charDiv = `
            <div id=char-div${i} class=single-char>
                <span>${characters[i].name}</span>
                <img src="${characters[i].imgUrl}"/>
                <span>${characters[i].hp}</span>
        `
        document.getElementById("char-container").innerHTML += charDiv
    }
    
}
function chooseCharacter(){
    for (var i=0; i<document.getElementsByClassName("single-char").length; i++){
        document.getElementById("char-div"+i).addEventListener("click", function(e){
            console.log("clicked")
            playerChar = characters[i]
        })
    }
    console.log(playerChar);
}
populate()
chooseCharacter()






