let template = document.createElement("template");
template.innerHTML =`
<link rel="styleSheet" href="css/menu-component.css">

<script  src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/js/all.min.js" integrity="sha512-cyAbuGborsD25bhT/uz++wPqrh5cqPh1ULJz4NSpN9ktWcA6Hnh9g+CWKeNx2R0fgQt+ybRXdabSBgYXkQTTmA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>


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
<a href="https://www.facebook.com/jcerelus/"><i class="fab fa-facebook"></i></a>
<a href="https://www.facebook.com/jcerelus/"><i class="fab fa-instagram"></i></a>

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


    
    
   shadow.querySelector(".footer").style.top= innerHeight -70+"px"; 
    
    }  
}








customElements.define("menu-component",menuComponent);
