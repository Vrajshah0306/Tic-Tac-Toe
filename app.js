const a = "X";
const b = "O";
var last =b;
var count= 0;
var X_points = 0;
var O_points =0;
function test(id)
{
    const Current = document.getElementById(id);
    if (Current.textContent !== "") //Checking if a mark has been placed there or not.
    {
        return;
    }
    
    if(this.last == a)
    {
        Current.style.fontFamily = "'Pacifico', cursive"; //font 
        Current.style.color = "blue";  //color
        Current.style.size = "1000px";
        Current.innerHTML = b;
        this.last=b;
        document.getElementById("nextturn").textContent = "Current turn: Player " + a;
        return;
    }
    else{
       Current.style.color = "red";
        Current.innerHTML = a;
        this.last=a;
        document.getElementById("nextturn").textContent = "Current turn: Player " + b;
        return;

    }
}


function resetboard()
{
    const squares = document.querySelectorAll(".square");
    let i = 0;
    while(i<squares.length)
    {
        squares[i].textContent = "";
        i++; 
    }
    document.getElementById("nextturn").textContent = "Current turn: Player X";
}
function resetpoints()
{
    const PlayerX = document.getElementById("PlayerX");
    const PlayerO = document.getElementById("PlayerO");
    const draw =document.getElementById("Draw");
    draw.textContent = "Draw: ";
    PlayerX.textContent ="Player X: ";
    PlayerO.textContent ="Player O: ";
}
