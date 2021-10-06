import Ajaxy  from "./ajaxy.js";
import View from "./index.js";
import {home_component} from "./index.js";


var path;



export default function routing(){

 let  hash = location.hash;
  
  if(hash == "#/"){
    path="home.html";
 
  }
  
if(hash == "#/projects"){
    path ="projects.html";
     
}
  
  if(hash == "#/about"){
     path ="about.html";
  }
  
  if(hash == "#/contact"){
    path="contact.html";
  }
  
  if(hash == undefined || hash == "#/"+undefined){
    hash = "#/";
  }
  
  
  if(path == "projects.html"){
 View.style.paddingBottom ="130vh";
}else{
 View.style.paddingBottom ="0vh";
}

  
 servePage();

}

 if(performance.navigation.type == performance.navigation.TYPE_RELOAD){
    location.hash="#/";
    
  }



 export  function servePage(){
  let ajax = new Ajaxy("get",path,"text");

  ajax.output = function(resp){
  View.innerHTML = resp;
 

  };
  
 
  
}








window.onhashchange = routing;