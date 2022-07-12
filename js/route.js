import Ajaxy  from "./ajaxy.js";
import View from "./index.js";
import {home_component} from "./index.js";
import "./all.mim.js";

var path;



export default function routing(){

 let  hash = location.hash;
  
  if(hash == "/"){
    path="home.html";
document.title="Home";
 
  }
  
if(hash == "#projects"){
    path ="projects.html";
  document.title="Projects";
     
}
  
  if(hash == "#about"){
     path ="about.html";
  document.title="About Me";
  }
  
  if(hash == "#contact"){
    path="contact.html";
  document.title="Contact Me";
  }
  
  if(hash == undefined || hash == "#/"+undefined){
    hash = "#/";
  document.title="JcerelusDev";
  }
  
  
  if(path == "projects.html"){
 View.style.paddingBottom ="130vh";
}else{
 View.style.paddingBottom ="0vh";
}

  
 servePage();

}

 if(performance.navigation.type == performance.navigation.TYPE_RELOAD){
    location.hash="/";
    
  }



 export  function servePage(){
  let ajax = new Ajaxy("get",path,"text");

  ajax.output = function(resp){
  View.innerHTML = resp;
 

  };
  
 
  
}








window.onhashchange = routing;
