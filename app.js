

function player1Fun(){
    swal({
        title: "Player One !",
        text: "Plz select either 'X' or 'Y' to continue.",
        content: "input",
        closeModel: true,
    })
    .then((value)=>{
        player1Select = value;
        player1Select = player1Select.toUpperCase();
        if(player1Select!=="" && (player1Select==="X" || player1Select==="Y"))
        {
            createArray();
            swal({
                text: "You have Choose '" + player1Select + "' press Ok to continue.",
                closeModel: true,
            })
            .then(result=>{
                player2Fun();
            })
        }
        else
        {
            swal({
                text: "Invalid Input",
                closeModel: true,
            })
            .then(result=>{
                player1Fun();
            })
        } 
    })
    .catch(error=>{
        if(error)
        {
            player1Fun();
        }        
    })  
}
function player2Fun(){
    swal({
        title: "Player Two!",
        text: "Please select either 'X' or 'Y' to continue.",
        content: "input",
        closeModel: true,
    })
    .then((value)=>{
        player2Select = value;
        player2Select = player2Select.toUpperCase();
        if(player2Select!=="" && player2Select!==player1Select && (player2Select==='X' || player2Select==='Y'))
        {
            swal({
                text: "You have select '" + player2Select + "' press Ok to Start the Game.",
                closeModel: true,
            })
        }
        else{
            swal({
                text: "Invalid Input",
                closeModel: true,
            })
            .then(result=>{
                player2Fun();
            })
        }      
    })
    .catch(error=>{
        if(error)
        {
            player2Fun();
        }
    })
}


function tickFun(id){
    var div = document.getElementById(id).innerText;
    if(div===""){
        var len = inputArray.length;
        document.getElementById(id).innerHTML=inputArray[len-1];
        if(inputArray[len-1]==="X"){
            document.getElementById(id).style.color="white";
        }
        else{
            document.getElementById(id).style.color="red";
        }
        collectArray[i] = inputArray.pop();
        if(collectArray[i]===player1Select){
            para.innerText='Player Two Turn "' +player2Select+ '"';
        }
        else{
            para.innerText='Player One Turn "' +player1Select+ '"';
        }
        checkSeq();
    }
}



function checkSeq(){        
    if(div1.innerText===player1Select && div2.innerText===player1Select && div3.innerText===player1Select)
    {
        swal({
                         title: "Congratulations!",
            text: "Player One Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div1.innerText===player1Select && div4.innerText===player1Select && div7.innerText===player1Select)
    {
        swal({
            title: "Congratulations!",
            text: "Player One Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div1.innerText===player1Select && div5.innerText===player1Select && div9.innerText===player1Select)
    {
        swal({
            title: "Congratulations!",
            text: "Player One Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div4.innerText===player1Select && div5.innerText===player1Select && div6.innerText===player1Select)
    {
        swal({
            title: "Congratulations!",
            text: "Player One Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div7.innerText===player1Select && div8.innerText===player1Select && div9.innerText===player1Select)
    {
        swal({
            title: "Congratulations!",
            text: "Player One Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div3.innerText===player1Select && div6.innerText===player1Select && div9.innerText===player1Select)
    {
        swal({
            title: "Congratulations!",
            text: "Player One Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div2.innerText===player1Select && div5.innerText===player1Select && div8.innerText===player1Select)
    {
        swal({
            title: "Congratulations!",
            text: "Player One Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div3.innerText===player1Select && div5.innerText===player1Select && div7.innerText===player1Select)
    {
        swal({
            title: "Congratulations!",
            text: "Player One Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div1.innerText===player2Select && div2.innerText===player2Select && div3.innerText===player2Select)
    {
        swal({
            title: "Congratulations!",
            text: "Player Two Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div1.innerText===player2Select && div4.innerText===player2Select && div7.innerText===player2Select)
    {
        swal({
            title: "Congratulations!",
            text: "Player Two Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div1.innerText===player2Select && div5.innerText===player2Select && div9.innerText===player2Select)
    {
        swal({
            title: "Congratulations!",
            text: "Player Two Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div4.innerText===player2Select && div5.innerText===player2Select && div6.innerText===player2Select)
    {
        swal({
            title: "Congratulations!",
            text: "Player Two Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div7.innerText===player2Select && div8.innerText===player2Select && div9.innerText===player2Select)
    {
        swal({
            title: "Congratulations!",
            text: "Player Two Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div3.innerText===player2Select && div6.innerText===player2Select && div9.innerText===player2Select)
    {
        swal({
            title: "Congratulations!",
            text: "Player Two Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div2.innerText===player2Select && div5.innerText===player2Select && div8.innerText===player2Select)
    {
        swal({
            title: "Congratulations!",
            text: "Player Two Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div3.innerText===player2Select && div5.innerText===player2Select && div7.innerText===player2Select)
    {
        swal({
            title: "Congratulations!",
            text: "Player Two Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div1.innerText!=="" && div2.innerText!=="" && div3.innerText!=="" && div4.innerText!=="" && div5.innerText!=="" && div6.innerText!=="" && div7.innerText!=="" && div8.innerText!=="" && div9.innerText!=="")
    {
        swal({
            title: "DRAW",
            text: "The match is draw press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })

    }
}
                                        
     
function createArray(){
    if(player1Select==="X")
    {
        inputArray = ["X","Y","X","Y","X","Y","X","Y","X"];
        para.innerText = 'Player One Turn "X"';
    }
    else
    {
        inputArray = ["Y","X","Y","X","Y","X","Y","X","Y"];
        para.innerText = 'Player One Turn "Y"';
    }
}                                   
                                        
                                        
var inputArray = [];
var collectArray = [];
var i=0;
var player1Select;
var player2Select;
var para = document.getElementById('playerNo');
para.innerText = "Player One Turn";                                 
                                        

var outterBox = document.createElement('div');
var row1 = document.createElement('div');
var row2 = document.createElement('div');
var row3 = document.createElement('div');
var div1 = document.createElement('div');
var div2 = document.createElement('div');
var div3 = document.createElement('div');
var div4 = document.createElement('div');
var div5 = document.createElement('div');
var div6 = document.createElement('div');
var div7 = document.createElement('div');
var div8 = document.createElement('div');
var div9 = document.createElement('div');

document.getElementById('mainContainer').appendChild(outterBox);
outterBox.appendChild(row1);
outterBox.appendChild(row2);
outterBox.appendChild(row3);

row1.appendChild(div1);
row1.appendChild(div2);
row1.appendChild(div3);

row2.appendChild(div4);
row2.appendChild(div5);
row2.appendChild(div6);

row3.appendChild(div7);
row3.appendChild(div8);
row3.appendChild(div9);

outterBox.setAttribute('class','outerBox');

row1.setAttribute('class','row');
row1.setAttribute('id','row1');

row2.setAttribute('class','row');
row2.setAttribute('id','row2');

row3.setAttribute('class','row');
row3.setAttribute('id','row3');

div1.setAttribute('class','div');
div1.setAttribute('id','div1');
div1.setAttribute('onClick','tickFun("div1")');

div2.setAttribute('class','div');
div2.setAttribute('id','div2');
div2.setAttribute('onClick','tickFun("div2")');

div3.setAttribute('class','div');
div3.setAttribute('id','div3');
div3.setAttribute('onClick','tickFun("div3")');

div4.setAttribute('class','div');
div4.setAttribute('id','div4');
div4.setAttribute('onClick','tickFun("div4")');

div5.setAttribute('class','div');
div5.setAttribute('id','div5');
div5.setAttribute('onClick','tickFun("div5")');

div6.setAttribute('class','div');
div6.setAttribute('id','div6');
div6.setAttribute('onClick','tickFun("div6")');

div7.setAttribute('class','div');
div7.setAttribute('id','div7');
div7.setAttribute('onClick','tickFun("div7")');

div8.setAttribute('class','div');
div8.setAttribute('id','div8');
div8.setAttribute('onClick','tickFun("div8")');

div9.setAttribute('class','div');
div9.setAttribute('id','div9');
div9.setAttribute('onClick','tickFun("div9")');

player1Fun();




