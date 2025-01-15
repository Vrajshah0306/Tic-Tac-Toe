const a = "X";
const b = "O";
var last =b;
var count= 0;
var X_points = 0;
var O_points =0;
var Draw_points = 0;
var Color_Count=0;
function test(id)
{
    const Current = document.getElementById(id); //Current Square
    if (Current.textContent !== "") //Checking if a mark has been placed there or not.
    {
        return;
    }
    this.count++;
    if(this.last == a)
    {
        Current.style.fontFamily = "'Press Start 2P'"; //Player O font 
        colorcheck(Current);
        // Current.style.color = "blue";  //Player O font Color
        Current.style.fontSize = "80px"; //Player O font size
        Current.innerHTML = b;
        this.last=b;
        document.getElementById("nextturn").textContent = "Current turn: Player " + a;
    }
    else
    {
        Current.style.fontFamily = "'Press Start 2P'"; //Player X font 
        // Current.style.color = "red"; //Player X font Color
        colorcheck(Current);
        Current.style.fontSize = "80px"; //Player X font size
        Current.innerHTML = a;
        this.last=a;
        document.getElementById("nextturn").textContent = "Current turn: Player " + b;
    }
    check_winner();
    if(this.count===9)
    {
        this.Draw_points++;
        document.getElementById("Draw").textContent = "Draw: " + this.Draw_points;
        alert("DRAW!!!!!");
        resetboard();
        return;
    }
}
function colorchange()
{
    this.Color_Count++;
    if(this.Color_Count % 2 === 0)
    {
        document.querySelector(".grid").style.backgroundColor = 'purple'; //Temp, Not done with this part yet 

    }
    else
    {
        document.body.style.backgroundColor = 'rgb(88, 90, 86)'; //Changing the Background Color.
        document.getElementById("OuterRec").style.backgroundColor = 'black'; //changing the color of the background in the box
        document.getElementById("OuterRec").style.borderColor = 'purple'; //changing the color od the boarder of the box
        document.getElementById("title").style.color = 'purple'; //title
        const line = document.querySelectorAll(".line");  //Used to call all the <hr> that have the class set to line.
        for(var i = 0; i < line.length; i++ ) //for loop to change background color.
        {
            line[i].style.backgroundColor = 'purple';  //background color being changed.
        }
        document.getElementById("scoreboard").style.color = 'white';  //changing the color of the scoreboard.
        
        document.getElementById("nextturn").style.color = "white";  //changing the color of teh text for who's turn it is.
        document.querySelector(".grid").style.backgroundColor = 'purple'; //changing the gaps in the grid to be purple.
        const squares = document.querySelectorAll(".square"); //caling each square in the grid
        for(var i = 0; i<squares.length; i++)
        {
            squares[i].style.borderColor = 'white'; //changing every border color for every square in the grid
            squares[i].style.backgroundColor = 'black';  //changing the background color for every square in the grid
            if(squares[i].textContent != "") //checking if the specific square isn't empty
            {
                if(squares[i].textContent === "X")
                {
                    squares[i].style.color = 'rgb(3, 161, 161)';
                } 
                else if(squares[i].textContent === "O")
                {
                    squares[i].style.color = 'yellow';
                }
            }
        }
        const Button = document.querySelectorAll(".button");
        for(var i = 0; i < Button.length; i++ )
        {
            Button[i].style.backgroundColor = "purple";
            Button[i].style.borderColor = "white";        
        }
        document.getElementById("PageEnding").style.borderColor = "white";
        document.getElementById("Email").style.color = 'yellow';
    }
    
}

function colorcheck(curr)
{
    if(this.Color_Count % 2 === 0)
    {
        if(this.last == a)
        {
            curr.style.color = 'blue';
        }
        else 
        {
            curr.style.color = 'red';
        }
    }   
    else
    {
        if(this.last == a)
        {
            curr.style.color = 'yellow';
        }
        else 
        {
           curr.style.color = 'rgb(3, 161, 161)';
        }
    }
}

function check_winner() 
{
    const grid = [
        [document.getElementById("square_1"), document.getElementById("square_2"),document.getElementById("square_3")],
        [document.getElementById("square_4"), document.getElementById("square_5"), document.getElementById("square_6")],
        [document.getElementById("square_7"), document.getElementById("square_8"), document.getElementById("square_9")],
    ];
    for(var i = 0; i < grid.length; i++) //Checking horizontally
    {
        if((grid[i][0].textContent == grid[i][1].textContent) && (grid[i][1].textContent== grid[i][2].textContent))
        { 
            if(grid[i][0].textContent == "X")
            {
                this.X_points++;
                document.getElementById("PlayerX").textContent = "Player X: " + this.X_points;
                resetboard();
                alert("Player X has Won!!!");
            }
            else if(grid[i][0].textContent == "O")
            {
                this.O_points++;
                document.getElementById("PlayerO").textContent = "Player O: " + this.O_points;
                resetboard();
                alert("Player O has Won!!!");
            }
        }
    }
    for(var i = 0; i < grid.length; i++)
    {
        if((grid[0][i].textContent == grid[1][i].textContent) && (grid[1][i].textContent == grid[2][i].textContent))
        {
            if(grid[0][i].textContent === "X")
            {
                this.X_points++;
                document.getElementById("PlayerX").textContent = "Player X: " + this.X_points;
                // grid[0][i].classList.add("win");
                // setTimeout(() => 
                // {
                    resetboard();
                    alert("Player X has Won!!!");
                // }, 1000);
                    
            }
            else if(grid[0][i].textContent === "O")
            {
                this.O_points++;
                document.getElementById("PlayerO").textContent = "Player O: " + this.O_points;
                grid[0][i].classList.add("win");
                resetboard();
                alert("Player O has Won!!!");
            }
        }
    }
    if((grid[0][0].textContent == grid[1][1].textContent) && (grid[1][1].textContent == grid[2][2].textContent))
    {
        if(grid[0][0].textContent === "X")
        {
            this.X_points++;
            document.getElementById("PlayerX").textContent = "Player X: " + this.X_points;
            resetboard();
            alert("Player X has Won!!!");
        }
        else if(grid[0][0].textContent === "O")
        {
            this.O_points++;
            document.getElementById("PlayerO").textContent = "Player O: " + this.O_points;
            resetboard();
            alert("Player O has Won!!!");
        }
    }
    if((grid[0][2].textContent == grid[1][1].textContent) && (grid[1][1].textContent == grid[2][0].textContent))
        {
            if(grid[0][2].textContent === "X")
            {
                this.X_points++;
                document.getElementById("PlayerX").textContent = "Player X: " + this.X_points;
                alert("Player X has Won!!!");
                resetboard();
            }
            else if(grid[0][2].textContent === "O")
            {
                this.O_points++;
                document.getElementById("PlayerO").textContent = "Player O: " + this.O_points;
                alert("Player O has Won!!!");
                resetboard();
            }
        }
}

function resetboard() //Sets all squares on the board to be emtpy and resets the current turn
{
    const squares = document.querySelectorAll(".square");
    let i = 0;
    while(i<squares.length)
    {
        squares[i].textContent = "";
        i++; 
    }
    document.getElementById("nextturn").textContent = "Current turn: Player X";
    this.count=0;
    this.last = this.b;
}

function resetpoints() //Simply resets all the ponts in the scoreboard and system
{
    const PlayerX = document.getElementById("PlayerX");
    const PlayerO = document.getElementById("PlayerO");
    const draw =document.getElementById("Draw");
    this.Draw_points = 0;
    this.X_points = 0; 
    this.O_points = 0;
    PlayerX.textContent ="Player X: " + X_points;
    PlayerO.textContent ="Player O: " + O_points;
    draw.textContent = "Draw: " + Draw_points;
    
}
