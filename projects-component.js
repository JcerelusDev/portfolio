let template = document.createElement("template");

template.innerHTML = `
<style>
*{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 
 
}

h3{
   text-align:center;
   font: 24px  italic bold tahoma ;
}

.container{
position:relative;
width:100vw;
height:100vh;
display: flex;
flex-flow:row wrap;
 justify-content: space-between;
top:50px;
margin-bottom: 100px;
}

.items{
--bgSize:52%;
width : 118px;
height : 310px;
text-align:center;
flex: 1 0 20%;
margin:3%;
//margin-bottom: 50px;
box-shadow: 0 0 10px black;
}

.items a{
 text-decoration:none;  
}
.content0{
  background: url(img/todo1.png) no-repeat;
background-size:var(--bgSize);
 background-position:right;
   
}


.content1{
  background: url(img/quiz.png) no-repeat;
background-size:var(--bgSize);
 background-position:right;
   
}

.content2{
  background: url(img/memory.png) no-repeat;
background-size:var(--bgSize);
 background-position:right;
   
}

.content3{
background: url(img/color.png) no-repeat;
background-size:var(--bgSize);
 background-position:right;
   
}

.content4{
background: url(img/tictactoe.png) no-repeat;
background-size:var(--bgSize);
 background-position:right;
}


.content5{
background: url(img/racing1.png) no-repeat;
background-size:var(--bgSize);
 background-position:right;
}


.content6{
background: url(img/snake.png) no-repeat;
background-size:var(--bgSize);
 background-position:right;
}

.content7{
background: url(img/space2.png) no-repeat;
background-size: 95%; //var(--bgSize);
 background-position:right top;
}


.content8{
background: url(img/rps1.png) no-repeat;
background-size:var(--bgSize);
 background-position:right;
}


.content9{
background: url(img/tictactoe.png) no-repeat;
background-size:var(--bgSize);
 background-position:right;
}

.content10{
background: url(img/tictactoe.png) no-repeat;
background-size:var(--bgSize);
 background-position:right;
}




.items h3{
 text-align:left;
 font-size:19px;
 font-weight:bold;
}

.items p{
 text-align:left;
 font-size:13px;
 font-family:cursive;

}

.content7 h3{
padding-top :168px;
text-align:center;
margin-bottom:0px;
}

.content7 p{
   padding-top:9px;
text-align:center;
}




@media screen and (max-width:768px){
 .items{
width : 120px;
height : 250px;
box-shadow: 0 0 10px black;
text-align:center;
flex: 1 0 50%;
 margin:3%;
 
 }
 .content0 , .content1,  .content2,.content3, .content4, .content5, .content6
 ,.content8, .content9, .content10, .content11,.content12, .content13,.content14{
   background-size:40%;
 }
 
 .items h3{
 text-align:left;
 font-size:16px;
font-weight:bold;
}

.items p{
 text-align:left;
 font-size:14px;
 font-family:monospace;
margin-left:2%;
}

 .content7 h3{
 font-size:18px;
padding-top :100px;
text-align:center;
 color:white;
 font-family:monospace;
 font-weight:bold;
}

.content7 p{
   padding-top:6px;
text-align:center;
 color:white;
 font-size:16px;
}

strong{
color:black;

}
 
   
}


/*Scrolling area controller */
.space{
width:100vw;
height: 50vh;
/*background:green;*/
}





</style>

<h3> My Current PROJECTS !</h3>
<div class="container">
<div class="items content0">
<h3>My_Todo &Darr;</h3>
<br><br>
<p>Is an android app build  <br>with web technologies <br>
<strong>Javascript,Html,<br>Css and Cordova CLI. <br><br>
Link :</strong> <a href="https://www.getjar.mobi/mobile/981824/MyTodo" target="_blank">MyTodo</a>
</p>
</div>

<div class="items content1">
<h3>Quizzy-Game &Darr;</h3>
<br><br>
<p>Is an android game build  <br>with web technologies <br>
<strong>Javascript,Html,<br>Css and Cordova CLI. <br><br>
 Link :</strong> <a href="https://www.getjar.mobi/mobile/981062/MyTodo" target="_blank">Quizzy-Game</a>
</p>
</div>

<div class="items  content2">
<h3>TestMy_Memory &Darr;</h3>
<br><br>
<p>Is an android game build  <br>with web technologies <br>
<strong>Javascript,Html,<br>Css and Cordova CLI. <br><br>
Link :</strong> <a href="https://www.getjar.mobi/mobile/983802/TestMyMemory" target="_blank">TestMyMemory</a>
</p>
</div>

<div class="items content3">
<h3>Color Finder &Darr;</h3>
<br><br>
<p>Is an android app build  <br>with web technologies <br>
<strong>Javascript,Html,<br>Css and Cordova CLI. <br><br>
Link :</strong> <a href="https://www.getjar.mobi/mobile/984343/Find-hexadecimal-Color" target="_blank">Color Finder</a>
</p>
</div>

<div class="items content4">
<h3> Tictactoe &Darr;</h3>
<br><br>
<p>Is an android game build  <br>with web technologies <br>
<strong>Javascript,Html,<br>Css and Cordova CLI. <br><br>
Link :</strong> <a href="https://www.getjar.mobi/mobile/984578/Tic-Tac-Toe" target="_blank">Tictactoe</a>
</p>

</div>

<div class="items content5" >
<h3> CarRacing &Darr;</h3>
<br><br>
<p>Is an android game build  <br>with web technologies <br>
<strong>Javascript,Html,<br>Css and Cordova CLI. <br><br>
Link :</strong> <a href="https://www.getjar.mobi/mobile/984332/CarRacing" target="_blank">CarRacing</a>
</p>
</div>

<div class="items content6">
<h3> Snake Game &Darr;</h3>
<br><br>
<p>Is an android game build  <br>with web technologies <br>
<strong>Javascript,Html,<br>Css and Cordova CLI. <br><br>
Link : </strong><a href="https://www.getjar.mobi/mobile/975019/Snake-Game" target="_blank">Snake Game</a>
</p>
</div>

<div class="items content7">
<h3> Space Invaders &Darr;</h3>
<p>Is an android game build  <br>with web technologies <br>
<strong>Javascript,Html,<br>Css and Cordova CLI. <br>
Link :</strong> <a href="https://www.getjar.mobi/mobile/984581/Space-invaders" target="_blank">Space Invaders</a>

</p>
</div>

<div class="items content8">
<h3> Rock Paper Scissor &Darr;</h3>
<br><br>
<p>Is an android game build  <br>with web technologies <br>
<strong>Javascript,Html,<br>Css and Cordova CLI. <br><br>
Link :</strong> <a href="https://www.getjar.mobi/mobile/983251/RockPScissor" target="_blank">Rock Paper Scissor</a>
</p>
</div>

<div class="items content9"></div>

<div class="items content10"></div>

<div class="items content11"></div>

<div class="items content12"></div>

<div class="items content13"></div>

<div class="items content14"></div>

<div class="items content15"></div>

<div class="space"></div>
</div>

`;

export default class projectsComponent extends HTMLElement{
    constructor(){
        super();
        
     var shadow = this.attachShadow({mode:"open"});    
   shadow.appendChild(template.content.cloneNode(true));   
        
    }
}


customElements.define("projects-component",projectsComponent);
