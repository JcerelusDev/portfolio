import "./all.min.css";

let template = document.createElement("template");
template.innerHTML =`
<link rel="styleSheet" href="css/menu-component.css">

<!--<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
-->

<div class="navbar">
 <a class="open" href="#!"><i class="fab fa-bars"></i></a>
   <a class="link home" href="/">Home</a>
    <a class="link projects" href="#/projects">My_Projects</a>
     <a class="link about" href="#/about">About_Me</a>
      <a class="link contact" href="#/contact">Contact_Me</a>
      <a href="#/about" ><img class="picture" src="img/jcere.png" ></a>
</div>

<div class="sidebar">
 <a class="close" href="#">&times;</a>
   <a class="link home" href="/">Home</a>
    <a class="link projects" href="#/projects">My_Projects</a>
     <a class="link about" href="#/about">About_Me</a>
      <a class="link contact" href="#/contact">Contact_Me</a> 
</div>



<div class="footer">
<div class="logolink1"><a  href="https://www.facebook.com/jcerelus/" target="_blank"><img  src="img/facebook.png" class="linkIcon"></a></div>
<div class="logolink2"><a href="https://www.instagram.com/jcerelus/" target="_blank"><img src="img/insta.png" class="linkIcon"></a></div>
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
   sidebar.style.width = "100%";
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
   link.ontouchstart = activeLink
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
   sidebar.style.transition="2s";
   sidebar.style.opacity=0;
    openSidebar.display="block";
   } 
 
}


    
    
   shadow.querySelector(".footer").style.top= innerHeight -50+"px"; 
    
    }  
}








customElements.define("menu-component",menuComponent);
