let template = document.createElement("template");

template.innerHTML = `
<!--<link rel="styleSheet" href="css/about-header-component.css">-->


<style>
*{
margin:0;
padding:0;
box-sizing: border-box;
}

h3{
 text-align: center;
 font-family: courier;
 padding-bottom: 2px;
 font-size: 22px;
}



.container{
width:100vw;
display: flex;
justify-content: center;
height:160px;

}

#profileInfo{
  border: 2px dotted black;
 background: lightgrey;
 color:black;
 font-family: monospace;
  text-align: center;
 font-size: 17px;
 border-radius: 20px;
 box-shadow: 2px 3px 1px black;
 font-weight: bold;
}



.profile{
  width:50px;
  height:50px;
  border-radius: 50%;
  background: white;
  margin-top:5px;
  box-shadow: 1px 5px 1px black;
 
}

@media screen and (max-width:768px){
#profileInfo{
  
  border: 2px dotted black;
 background: lightgrey;
 color:black;
 font-family: monospace;
 font-size: 16px;
 border-radius: 30px;
 box-shadow: 2px 3px 1px black;
 font-weight: bold;
}
  
   
}

</style>



<h3>About Me Section</h3>
<div class="container">
<div id="profileInfo">
<img class="profile" src="img/jcere.png" widdth="100" height="100">
<p class="fname">Firstname &Rarr;&nbsp;&nbsp;Jean . F</p>
<p class="lname">Lastname &Rarr; &nbsp;&nbsp;C&Eacute;R&Eacute;LUS</p>
<p class="devname">Developer_name &Rarr;&nbsp;&nbsp;JcerelusDev.</p>
</div>
</div>

`;

export default class aboutHeaderComponent extends HTMLElement{
    constructor(){
        super();
        
     var shadow = this.attachShadow({mode:"open"});    
   shadow.appendChild(template.content.cloneNode(true));   
        
    }
}


customElements.define("about-header-component",aboutHeaderComponent);