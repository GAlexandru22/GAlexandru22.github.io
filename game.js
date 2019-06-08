function update() {
    document.getElementById('text').value = buttoncount;
    
   
    document.getElementById('ammountMultiplier').innerHTML = "Multiplier Upgrade x" + (multiplier+1);
    document.getElementById('ammountMultiplier2').innerHTML = "x" + (multiplier+1);
    document.getElementById('costMultiplier').innerHTML = ((multiplier+1) * 100) + " Buttons";
    document.getElementById('currentMultiplier').innerHTML = "Your current Multiplier is x" + (multiplier);
   
    document.getElementById('ammountAutoClick').innerHTML = "You Own " + autoClick + " Auto Clickers";
    document.getElementById('costAutoClick').innerHTML = ((autoClick+1) * 12) + " Buttons";
   
    document.getElementById('ammountFactories').innerHTML = "You Own " + Factories + " Factories";
    document.getElementById('costFactory').innerHTML = ((Factories+1) * 15) + " Buttons";
   
    document.getElementById('buttonspersecond').innerHTML = "You are gaining " + (((autoClick)+(Factories*2))*multiplier) + " Buttons per/s";
}

var multiplier = 1;
var buttoncount = 0;
var autoClick = 0;
var Factories = 0;

function timer() {
    buttoncount = buttoncount + autoClick*multiplier;
    buttoncount = buttoncount + Factories*2*multiplier;
    update()
}
setInterval(timer, 1000)

function add() {
    buttoncount = buttoncount + 1
    update()
}

   
function buyAutoClick() {
    if (buttoncount >= ((autoClick+1) * 12)) {
        buttoncount = buttoncount - ((autoClick+1) * 12);
        autoClick = autoClick + 1;
        update()
    }
}
   
function buyFactory() {
    if (buttoncount >= ((Factories+1) * 15)) {
        buttoncount = buttoncount - ((Factories+1) * 15);
        Factories = Factories + 1;
        update()
    }
}

function buyMultiplier() {
    if (buttoncount >= ((multiplier+1) * 100)) {
        buttoncount = buttoncount - ((multiplier+1) * 100);
        multiplier = multiplier + 1;
        update()
    }
}