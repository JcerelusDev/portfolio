let template = document.createElement("template");

template.innerHTML = `

<style>
.container{
 width:100vw;
 height:100vh;
    background: url(webhome.jpg) no-repeat;
   background-position: center center;
   background-size: cover;
  margin-top: -170px;
}

.para1{
    position: absolute;
  top:40%;
  left:50%;
  transform:translate(-50%,-50%);
  z-index: 1;
  text-align: center;
  font-size: 24px;
  font-family: monospace;
  color:white;
  background: rgba(0,0,1,0.5);
  box-shadow: 0.5px -1px 2px white ;
   font-weight: bold;
   border-radius:7px;
}

.learnMore{
    width: 210px;
    height:60px;
    background: black;
    border-radius: 14px;
    position: absolute;
    top:70%;
  left:50%;
   transform:translate(-50%,-50%);
  cursor:pointer;
  border:none;
}

.learnMore a{
  color:white;
  text-align: center;
  text-decoration: none;
   font-size: 20px;
  font-family: monospace;
}

.awesome{
  font-size: 22px;
  font-family: cursive;
  animation : anim 5s ease-in-out alternate-reverse infinite;
  transition :9s;
}

@keyframes anim{
    0% {
     color: white;
    }
    
    30% {
  color: royalblue;
    }
    
    60% {
  color: gold;
    }
    
    100% {
  color: #ff5400;
    }
    
}

@media screen and (max-width:768px) {
.container{
 width:100vw;
 height:100vh;
    background: url(../img/webhome.jpg) no-repeat;
   background-size: 100vw 100vh ;
  margin-top: -170px;

}

.para1{
font-size:18px;


}
  
   
}

</style>


<div class="container">
<p  class="para1">Being a Web Developer is <span class="awesome">Awesome !</span></p>

<button class="learnMore" ><a href="#/about" >Learn More</a></button>

</div>

`;

export default class homeComponent extends HTMLElement{
    constructor(){
        super();
        
     var shadow = this.attachShadow({mode:"open"});    
   shadow.appendChild(template.content.cloneNode(true));   
        alert(shadow)
    }
}



customElements.define("home-component",homeComponent);
