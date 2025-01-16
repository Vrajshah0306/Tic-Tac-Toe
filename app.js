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
    this.count++;
    const Current = document.getElementById(id); //Current Square
    if (Current.textContent !== "") //Checking if a mark has been placed there or not.
    {
        return;
    }
    if(this.last == a)
    {
        FontCheck(Current);
        Current.innerHTML = b;
        this.last=b;
        document.getElementById("nextturn").textContent = "Current turn: Player " + a;
    }
    else
    {
        FontCheck(Current);
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

function ColorChange()
{
    this.Color_Count++;
    if(this.Color_Count % 2 === 0)
    {
        document.getElementById("JS_icon").href = "tic-tac-toe_icon.png";  //Changing the icon based on the color scheme. 
        document.body.style.backgroundColor = 'grey';  //Changing the Background Color.
        document.getElementById("OuterRec").style.backgroundColor = 'white';  //Changing the color of the background in the box
        document.getElementById("OuterRec").style.borderColor = 'rgb(48, 211, 81)'; //Changing the color of the boarder of the box
        document.getElementById("title").style.color = 'rgb(48, 211, 81)'; //title
        const line = document.querySelectorAll(".line");  //Used to call all the <hr> that have the class set to line.
        for(var i = 0; i < line.length; i++ ) //For loop to change background color.
        {
            line[i].style.backgroundColor = 'rgb(48, 211, 81)';  //background color being changed.
        }
        document.getElementById("scoreboard").style.color = 'black';  //Changing the color of the scoreboard.
        
        document.getElementById("nextturn").style.color = "black";  //Changing the color of teh text for who's turn it is.
        document.querySelector(".grid").style.backgroundColor = 'rgb(48, 211, 81)'; //Changing the gaps in the grid to be green.
        const squares = document.querySelectorAll(".square"); //caling each square in the grid.
        for(var i = 0; i<squares.length; i++)
        {
            squares[i].style.borderColor = 'black'; //Changing every border color for every square in the grid.
            squares[i].style.backgroundColor = 'white';  //Changing the background color for every square in the grid.
            if(squares[i].textContent != "") //Checking if the specific square isn't empty.
            {
                if(squares[i].textContent === "X")
                {
                    squares[i].style.color = 'red'; //If there is a X in the box then the color of the text a sort of red.
                } 
                else if(squares[i].textContent === "O")
                {
                    squares[i].style.color = 'blue'; //If there is a O in the box then the color of the text is blue.
                }
            }
        }
        const Button = document.querySelectorAll(".button"); //Selecting everything in the button class.
        for(var i = 0; i < Button.length; i++ )
        {
            Button[i].style.backgroundColor = "rgb(66, 197, 92)";   //Changing the color in the button.
            Button[i].style.borderColor = 'black';        //Changing boarder color for the button.
            Button[i].style.color = 'black';              //Changing the text in the button.
        }
        document.getElementById("PageEnding").style.borderColor = "black";  //Changing the color of the border of the Contact Me link.
        document.getElementById("Email").style.color = 'blue';   //Changing the color of the Contact Me text.

    }
    else
    {
        document.getElementById("JS_icon").href = "tic-tac-toe_icon(Second Color).png";  //Changing the icon based on the color scheme. 
        document.body.style.backgroundColor = 'rgb(88, 90, 86)';  //Changing the Background Color.
        document.getElementById("OuterRec").style.backgroundColor = 'black';  //Changing the color of the background in the box
        document.getElementById("OuterRec").style.borderColor = 'purple'; //Changing the color od the boarder of the box
        document.getElementById("title").style.color = 'purple'; //title
        const line = document.querySelectorAll(".line");  //Used to call all the <hr> that have the class set to line.
        for(var i = 0; i < line.length; i++ ) //For loop to change background color.
        {
            line[i].style.backgroundColor = 'purple';  //background color being changed.
        }
        document.getElementById("scoreboard").style.color = 'white';  //Changing the color of the scoreboard.
        
        document.getElementById("nextturn").style.color = "white";  //Changing the color of teh text for who's turn it is.
        document.querySelector(".grid").style.backgroundColor = 'purple'; //Changing the gaps in the grid to be purple.
        const squares = document.querySelectorAll(".square"); //caling each square in the grid.
        for(var i = 0; i<squares.length; i++)
        {
            squares[i].style.borderColor = 'white'; //Changing every border color for every square in the grid.
            squares[i].style.backgroundColor = 'black';  //Changing the background color for every square in the grid.
            if(squares[i].textContent != "") //Checking if the specific square isn't empty.
            {
                if(squares[i].textContent === "X")
                {
                    squares[i].style.color = 'rgb(3, 161, 161)'; //If there is a X in the box then the color of the text a sort of teal.
                } 
                else if(squares[i].textContent === "O")
                {
                    squares[i].style.color = 'yellow'; //If there is a O in the box then the color of the text is yellow.
                }
            }
        }
        const Button = document.querySelectorAll(".button"); //Selecting everything in the button class.
        for(var i = 0; i < Button.length; i++ )
        {
            Button[i].style.backgroundColor = "purple";   //Changing the color in the button.
            Button[i].style.borderColor = "white";        //Changing boarder color for the button.
            Button[i].style.color = 'white';              //Changing the text in the button.
        }
        document.getElementById("PageEnding").style.borderColor = "white";  //Changing the color of the border of the Contact Me link.
        document.getElementById("Email").style.color = 'yellow';   //Changing the color of the Contact Me text.
    }
    
}

function FontCheck(curr)
{
    curr.style.fontFamily = "'Press Start 2P'";
    curr.style.fontSize = '80px';
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

function check_winner()  //Runs every turn and checking 
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
                AddWinner(grid[i][0], grid[i][1], grid[i][2]);   //Changing the color of the wining squares. 
                setTimeout(() => 
                {
                    resetboard();
                    alert("Player X has Won!!!");
                }, 500);
            }
            else if(grid[i][0].textContent == "O")
            {
                this.O_points++;
                document.getElementById("PlayerO").textContent = "Player O: " + this.O_points;
                AddWinner(grid[i][0], grid[i][1], grid[i][2]);   //Changing the color of the wining squares. 
                setTimeout(() => 
                {
                    resetboard();
                    alert("Player O has Won!!!");
                }, 500);
            }
        }
    }
    for(let i = 0; i < grid.length; i++)
    {
        if((grid[0][i].textContent == grid[1][i].textContent) && (grid[1][i].textContent == grid[2][i].textContent))
        {
            if(grid[0][i].textContent === "X")
            {
                this.X_points++;
                document.getElementById("PlayerX").textContent = "Player X: " + this.X_points;
                AddWinner(grid[0][i], grid[1][i], grid[2][i]);   //Changing the color of the wining squares. 
                setTimeout(() => 
                {
                    resetboard();
                    alert("Player X has Won!!!");
                }, 500);
                    
            }
            else if(grid[0][i].textContent === "O")
            {
                this.O_points++;
                document.getElementById("PlayerO").textContent = "Player O: " + this.O_points;
                AddWinner(grid[0][i], grid[1][i], grid[2][i]);   //Changing the color of the wining squares. 
                setTimeout(() => 
                {
                    alert("Player O has Won!!!");
                    resetboard();
                }, 500);
            }
        }
    }
    
    
    if((grid[0][0].textContent == grid[1][1].textContent) && (grid[1][1].textContent == grid[2][2].textContent))  //NOT DONE WITH THIS YET
    {
        if(grid[0][0].textContent === "X")
        {
            this.X_points++;
            document.getElementById("PlayerX").textContent = "Player X: " + this.X_points;
            AddWinner(grid[0][0], grid[1][1], grid[2][2]);   //Changing the color of the wining squares. 
                setTimeout(() => 
                {
                    alert("Player X has Won!!!");
                    resetboard();
                }, 500);
        }
        else if(grid[0][0].textContent === "O")
        {
            this.O_points++;
            document.getElementById("PlayerO").textContent = "Player O: " + this.O_points;
            AddWinner(grid[0][0], grid[1][1], grid[2][2]);   //Changing the color of the wining squares. 
                setTimeout(() => 
                {
                    alert("Player O has Won!!!");
                    resetboard();
                }, 500);
        }
    }
    if((grid[0][2].textContent == grid[1][1].textContent) && (grid[1][1].textContent == grid[2][0].textContent)) //Not done with this yet
        {
            if(grid[0][2].textContent === "X")
            {
                this.X_points++;
                document.getElementById("PlayerX").textContent = "Player X: " + this.X_points;
                AddWinner(grid[0][2], grid[1][1], grid[2][0]);   //Changing the color of the wining squares. 
                setTimeout(() => 
                {
                    alert("Player X has Won!!!");
                    resetboard();
                }, 500);
            }
            else if(grid[0][2].textContent === "O")
            {
                this.O_points++;
                document.getElementById("PlayerO").textContent = "Player O: " + this.O_points;
                AddWinner(grid[0][2], grid[1][1], grid[2][0]);   //Changing the color of the wining squares. 
                setTimeout(() => 
                {
                    alert("Player O has Won!!!");
                    resetboard();
                }, 500);
            }
        }
}

function AddWinner(one, two, three)   //Highlighting the boxes where there was a win.
{
    if(this.Color_Count % 2 == 0) //Setting the color of the boxes based on the current color theme.
    {
        one.style.backgroundColor = 'rgb(119, 165, 19)';
        two.style.backgroundColor = ' rgb(119, 165, 19)';
        three.style.backgroundColor = ' rgb(119, 165, 19)';
    }
    else
    {
        one.style.backgroundColor = 'rgb(142, 84, 171)';
        two.style.backgroundColor = 'rgb(142, 84, 171)';
        three.style.backgroundColor = 'rgb(142, 84, 171)';
    }
    
}

function resetboard() //Sets all squares on the board to be emtpy and resets the current turn
{
    const squares = document.querySelectorAll(".square");  //Selecting all of the squares in the grid. 
    let i = 0;
    while(i<squares.length)
    {
        squares[i].textContent = "";  //Reseting the boxes.
        if(this.Color_Count % 2 == 0) //Reseting the color of the boxes based on the current color theme.
        {
            squares[i].style.backgroundColor = 'white';
        }
        else
        {
            squares[i].style.backgroundColor = 'black';
        }
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
