let template = document.createElement("template");

template.innerHTML = `
<style>

.aboutcontainer{
width:100vw;
display: flex;
 justify-content: center;

}

#aboutcontent{
 margin-top: 10px;
 font-family: verdana;
 font-size: 13px;
 font-weight: bold;
 font-style: italic;
border : 5px double black;
 text-align: center;
 border-radius: 20px;
}


@media screen and (max-width:768px){

.aboutcontainer{
width:95vw;
display: flex;
 justify-content: center;
margin :0px auto;
}


 #aboutcontent{
 margin-top: 10px;
 font-family: verdana;
 font-size: 13px;
 font-weight: bold;
 font-style: italic;
border : 3px double black;
 text-align: center;
 border-radius: 20px;
}  
   
}

</style>

<div class="aboutcontainer">
<div id="aboutcontent">
<p class="abouttext">
I have been a web developer since August 2018.<br>
Precisely i started with Javascript as a programming language in March 2019.<br><br>
Since that period i worked hard to become an experimented web developer <br>
by creating multiple projects. <br><br>
As a web developer  i have a good interest in games development,<br>
because by building games you learn twice. <br><br>
Because of that interest i have created my own Javascript 2d game library.
</p>

</div>
</div>


`;

export default class aboutComponent extends HTMLElement{
    constructor(){
        super();
        
     var shadow = this.attachShadow({mode:"open"});    
   shadow.appendChild(template.content.cloneNode(true));   
        
    }
}


customElements.define("about-component",aboutComponent);