import Ajaxy  from "./ajaxy.js";
import routing  from "./route.js";
import {servePage} from "./route.js";

import menuComponent from "./menu-component.js";
import homeComponent from "./home-component.js";
import aboutHeaderComponent from "./about-header-component.js";
import aboutComponent from "./about-component.js";
import projectsComponent from "./projects-component.js";
import contactComponent from "./contact-component.js";

const renderMenu = function(){
 let menu_component =  document.createElement("menu-component");
  document.body.appendChild(menu_component);

};

let View = document.querySelector("#root");

export default View;

 
 var home_component =  document.createElement("home-component");

 export{home_component};


window.addEventListener( "load", function(){
    renderMenu();
 View.appendChild(home_component);
 
  if(location.hash.includes("#/")){
    View.appendChild(home_component);
    
  }
    
    
});





