var theDojo = [
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

var dojoDiv = document.querySelector("#the-dojo");

// Creates the rows of buttons for this game
function render(theDojo) {
    var result = "";
    for (var i = 0; i < theDojo.length; i++) {
        for (var j = 0; j < theDojo[i].length; j++) {
            result += `<button class="tatami" id = "tatamo"  onclick="howMany(${i}, ${j}, this)"></button>`;
        }
    }
    return result;

}
function ninjaPlacer() {
    for (var i=0; i <= 10; i++) {
        theDojo[Math.floor(Math.random()*10)][Math.floor(Math.random()*10)]=1;
    }
}
ninjaPlacer();
// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {

    var ninjas = 0;
    if (theDojo[i][j]==1) {
        location.reload();
       // dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    }
    else if (j==9 && i==9) {
    ninjas = ninjas + theDojo[i][j-1]; //left
    ninjas = ninjas + theDojo[i-1][j]; //top
    ninjas = ninjas + theDojo[i-1][j-1]; // top left
    element.innerText = ninjas;
    }
    else if (j==0 && i==9) {
    ninjas = ninjas + theDojo[i][j+1]; //right
    ninjas = ninjas + theDojo[i-1][j]; //top
    ninjas = ninjas + theDojo[i-1][j+1]; //top right
    element.innerText = ninjas;
    }
    else if (j==9 && i ==0) { //top right corner
    ninjas = ninjas + theDojo[i][j-1]; //left
    ninjas = ninjas + theDojo[i+1][j]; //bottom
    ninjas = ninjas + theDojo[i+1][j-1]; //bottom left 
    element.innerText = ninjas;
    }
    else if (j==0 && i==0) { //top left corner
    ninjas = ninjas + theDojo[i][j+1]; //right
    ninjas = ninjas + theDojo[i+1][j]; //bottom
    ninjas = ninjas + theDojo[i+1][j+1]; //bottom right
    element.innerText = ninjas;
    }
    else if ( j==9) {  //right side
        ninjas = ninjas + theDojo[i-1][j]; //top
        ninjas = ninjas + theDojo[i-1][j-1]; //top left
        ninjas = ninjas + theDojo[i+1][j]; //bottom
        ninjas = ninjas + theDojo[i][j-1]; //left
        ninjas = ninjas + theDojo[i+1][j-1]; //bottom left 
        element.innerText = ninjas;
    }
    else if (j==0) { //leftside
        ninjas = ninjas + theDojo[i][j+1]; //right
        ninjas = ninjas + theDojo[i-1][j]; //top
        ninjas = ninjas + theDojo[i+1][j]; //bottom
        ninjas = ninjas + theDojo[i+1][j+1]; //bottom right
        ninjas = ninjas + theDojo[i-1][j+1]; //top right
        element.innerText = ninjas;
    }
    else if (i==0) { //top
    ninjas = ninjas + theDojo[i][j-1]; //left
    ninjas = ninjas + theDojo[i][j+1]; //right
    ninjas = ninjas + theDojo[i+1][j]; //bottom
    ninjas = ninjas + theDojo[i+1][j-1]; //bottom left 
    ninjas = ninjas + theDojo[i+1][j+1]; //bottom right
    element.innerText = ninjas;
    }
    else if (i==9) { //bottom
        ninjas = ninjas + theDojo[i][j-1]; //left
        ninjas = ninjas + theDojo[i][j+1]; //right
        ninjas = ninjas + theDojo[i-1][j]; //top
        ninjas = ninjas + theDojo[i-1][j+1]; //top right
        ninjas = ninjas + theDojo[i-1][j-1]; // top left
        element.innerText = ninjas;
    }
    else { //non sided boxes
    ninjas = ninjas + theDojo[i][j-1]; //left
    ninjas = ninjas + theDojo[i][j+1]; //right
    ninjas = ninjas + theDojo[i-1][j]; //top
    ninjas = ninjas + theDojo[i+1][j]; //bottom
    ninjas = ninjas + theDojo[i+1][j-1]; //bottom left 
    ninjas = ninjas + theDojo[i+1][j+1]; //bottom right
    ninjas = ninjas + theDojo[i-1][j+1]; //top right
    ninjas = ninjas + theDojo[i-1][j-1]; // top left
    element.innerText = ninjas;
    }

   /* ninjas = ninjas + theDojo[i][j-1]; //left
    ninjas = ninjas + theDojo[i][j+1]; //right
    ninjas = ninjas + theDojo[i-1][j]; //top
    ninjas = ninjas + theDojo[i+1][j]; //bottom
    ninjas = ninjas + theDojo[i+1][j-1]; //bottom left 
    ninjas = ninjas + theDojo[i+1][j+1]; //bottom right
    ninjas = ninjas + theDojo[i-1][j+1]; //top right
    ninjas = ninjas + theDojo[i-1][j-1]; // top left
    */
    console.log(`numofNinjas${ninjas}`);
  //  alert("TODO - determine how many ninjas are hiding in adjacent squares");
}
// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;

// start the game
// message to greet a user of the game
var style = "color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);    