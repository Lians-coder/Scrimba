let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀",
"🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function() {
    let i = Math.floor( Math.random()*fighters.length );
    let y = Math.floor( Math.random()*fighters.length );
    if ((i != y) === false && y === fighters.length - 1 ) {
        y = y - 1;
    } else if ((i != y) === false && y < fighters.length - 1 ) {
        y++
    } else {
        y
    }
    stageEl.textContent = fighters[i] + ' VS ' + fighters[y];
})
