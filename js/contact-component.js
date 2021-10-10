let template = document.createElement("template");

template.innerHTML = `
<!--<link rel="styleSheet" href="css/contact-component.css">-->

<style>
*{
margin:0;
padding:0;
box-sizing: border-box;

}

.contactcontainer{
width:100vw;
height:100vh;
display: flex;
justify-content: center;
 align-items:center;
background: url(img/im.jpg) no-repeat;
background-position: center center;
background-size: cover;
margin-top: -100px;
}

#contactcontent{
text-align: center;
background:royalblue;
border-radius: 30px;
color:white;
margin:3%;
}

textarea{
  font-family: courier;
  font-size: 14px;
  
}

form {
 font-family: helvetica;
 font-size: 16px;
 font-weight: bold;

}

legend{
 font-family: arial;
 font-size: 16px;
  font-weight: bold;

}

.title{
   line-height: 42px;
   font-family: cursive;
   font-size: 20px;
}

fieldset{
border:none;

}

.btn{
 width:180px;
 background: green;
 font-family: courier new;
 font-size: 16px;
 font-weight: bold;
 color:white;
 border-radius: 20px;
}

input[type="text"]{
border-radius: 30px;
}

@media screen and (max-width:768px){
 #contactcontent{
text-align: center;
margin-top: 40px;
background:royalblue;
border-radius: 30px;
color:white;
margin-bottom: 120px;
}  
   
}

</style>

<div class="contactcontainer">
<div id="contactcontent">

<form  action="mailto:johnjustme8@gmail.com" method="POST"
enctype="multipart/form-data" name="form">
<fieldset>
<legend class="title">&Rarr; Contact Me &Larr;</legend>
<br
<label>Fullname &nbsp; : <input class="text" type="text" laceholder="your fullname" name="subject" required autocomplete="true"></label><br><br>
</fieldset><br><br>

<fieldset>
<legend>&Rarr; Contact Message &Larr;</legend>
<br>
<textarea rows="8" cols="35" name="body" autocomplete="true"></textarea><br><br>
<input class="btn" type="submit" value="Submit"><br><br>
</fieldset>
</form>
</div>
</div>


`;

export default class contactComponent extends HTMLElement{
    constructor(){
        super();
        
     var shadow = this.attachShadow({mode:"open"});    
   shadow.appendChild(template.content.cloneNode(true));   
        
    }
}


customElements.define("contact-component",contactComponent);
