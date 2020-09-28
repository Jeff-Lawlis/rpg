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
            </div>
        `
        document.getElementById("char-container").innerHTML += charDiv
    }
    
}
function chooseCharacter(){
    // var playerChar
    for (var i=0; i<document.getElementsByClassName("single-char").length; i++){
        document.getElementById("char-div"+i).addEventListener("click", function(e){
            playerChar = characters[this.id[this.id.length-1]]
            console.log(playerChar)
            renderPlayerChosen()
        })
    }
}
function renderPlayerChosen(){
    var oppRemaining = []
    document.getElementById("char-container").innerHTML = `
        <h2>CHOOSE YOUR OPPONENT</h2>
        <div id="player-char" class="single-char">
            <span>${playerChar.name}</span>
            <img src="${playerChar.imgUrl}"/>
            <span>${playerChar.hp}</span>
        </div>
        <div id="opp-chars">
        </div>
    `
    for(var i=0; i<characters.length; i++){
        if(characters[i].name !== playerChar.name){
            oppRemaining.push(characters[i])
            var charDiv = `
            <div id=char-div${i} class=single-char>
                <span>${characters[i].name}</span>
                <img src="${characters[i].imgUrl}"/>
                <span>${characters[i].hp}</span>
            </div>
        `
        }
        console.log(oppRemaining);
        
        document.getElementById("opp-chars").innerHTML += charDiv
    }

    

}
populate()
chooseCharacter()





