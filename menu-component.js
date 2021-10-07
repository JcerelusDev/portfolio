let template = document.createElement("template");
template.innerHTML =`
<style>
*{
 margin:0;
 padding:0;
 box-sizing: border-box;
}

.navbar{
  background:#000;
  width:100vw;
  height:60px;
  position: fixed;
  
}
  
  .navbar a{
margin-left: 55px;
 color :white;
 line-height: 55px;
 text-decoration: none;
  font-family: monospace;
  font-size: 19px;
  text-align: center;
  }
  
  .navbar .open{
  font-size:28px;
}
  
  .picture{
    position: absolute;
   background:white;
   border-radius: 50%;
    left:65%;
    width:50px;
    height:50px;
    top:2%;
  }
  
  
  
  
  .sidebar{
  background:#900;
  width:0px;
  height:95vh;
  position: fixed;
  z-index: 9999;
}

.sidebar a{
 font-size:14px;
 color:white;
 display: block;
 text-align: center;
  font-family: monospace;
 text-decoration: none;
 overflow: hidden;
 line-height:80px;
}

.sidebar .close{
  font-size:23px;
  
}




.link:hover{
 background: orange;   
    
}


.link.visited {
 background:white;
 color:black;
}



.footer{
 background:#000;
  width:100vw;
  height:190px;
  position: fixed;

}

.copy{
 text-align: center;
 color:white;
 font-family: monospace;
 line-height: 73px;
 font-size: 16px;
}


@media screen and (min-width:769px){
.open{
  display:none;
 }
 
.navbar a{
margin-left: 95px;
}
 
}


@media screen and (max-width:768px){
.open{
  display:block;
 }
 

  .navbar .open{
  font-size:28px;
 margin-left: -70%;
} 
 
 
.link{
display:none;
color:red;
}

.navbar .picture{
 //display:none;
 margin-left: -20%;
}

footer{
 background:#120000;
  width:100vw;
  height:210px;
  position: fixed;
overflow:hidden;
}

.copy{
 text-align: center;
 color:white;
 font-family: monospace;
 line-height: 73px;
 font-size: 12px;
}


 
}


</style>

<div class="navbar">
 <a class="open" href="#!">&equiv;</a>
   <a class="link home" href="#/">Home</a>
    <a class="link projects" href="#/projects">My_Projects</a>
     <a class="link about" href="#/about">About_Me</a>
      <a class="link contact" href="#/contact">Contact_Me</a>
      <a href="#/about" ><img class="picture" src="img/jcere.png" ></a>
</div>

<div class="sidebar">
 <a class="close" href="#!">&times;</a>
   <a class="link home" href="#/">Home</a>
    <a class="link projects" href="#/projects">My_Projects</a>
     <a class="link about" href="#/about">About_Me</a>
      <a class="link contact" href="#/contact">Contact_Me</a> 
</div>


<div class="footer">
<p class="copy">&copy;jcerelusdev 2021 All Rights Reserved.</p>
</div>



`;

export default class menuComponent extends HTMLElement{
    constructor(){
      super();  
    var shadow = this.attachShadow({mode:"open"});    
   shadow.appendChild(template.content.cloneNode(true));     
   
 var openSidebar =   shadow.querySelector(".open");
    openSidebar.onclick = function( ){
   var sidebar =  shadow.querySelector(".sidebar");
   sidebar.style.width = "140px";
   sidebar.style.transition="2s";
   sidebar.style.opacity=1;    
     openSidebar.display="none";    
    };
    
    var closeSidebar =   shadow.querySelector(".close");
   closeSidebar.onclick = function( ){
   var sidebar =  shadow.querySelector(".sidebar");
   sidebar.style.width = "0px";
   sidebar.style.transition="2s";
   sidebar.style.opacity=0;
    openSidebar.display="block";
   } ;
    
  let links =   shadow.querySelectorAll(".link");
  var linkarr = Array.from(links);
 
  for(let link of linkarr){
   link.onclick = activeLink
  }
    
    
    function activeLink(e){

if(e.target.className.includes("home")){
  shadow.querySelector(".home").classList.add("visited");
  shadow.querySelector(".projects").classList.remove("visited");
  shadow.querySelector(".about").classList.remove("visited");
  shadow.querySelector(".contact").classList.remove("visited");
}
 
if(e.target.className.includes("projects")){
  shadow.querySelector(".home").classList.remove("visited");
  shadow.querySelector(".projects").classList.add("visited");
  shadow.querySelector(".about").classList.remove("visited");
  shadow.querySelector(".contact").classList.remove("visited");
}

if(e.target.className.includes("about")){
  shadow.querySelector(".home").classList.remove("visited");
  shadow.querySelector(".projects").classList.remove("visited");
  shadow.querySelector(".about").classList.add("visited");
  shadow.querySelector(".contact").classList.remove("visited");
}


if(e.target.className.includes("contact")){
  shadow.querySelector(".home").classList.remove("visited");
  shadow.querySelector(".projects").classList.remove("visited");
  shadow.querySelector(".about").classList.remove("visited");
  shadow.querySelector(".contact").classList.add("visited");
}


let  SidebarLink =   shadow.querySelectorAll(".sidebar a");
 for(let Sidelink of SidebarLink){
 Sidelink.ontouchstart = autoClose;

 }
 
  function autoClose( ){
   var sidebar =  shadow.querySelector(".sidebar");
   sidebar.style.width = "0px";
   sidebar.style.transition="1s";
   sidebar.style.opacity=0;
    openSidebar.display="block";
   } 
 
}


    
    
   shadow.querySelector(".footer").style.top= innerHeight -70+"px"; 
    
    }  
}








customElements.define("menu-component",menuComponent);
