var  self;
var Ajaxy = function(method,url,t){
this.method = method;
var xhr = new XMLHttpRequest();
xhr.open(this.method,url);
xhr.responseType= t;
xhr.send();
xhr.onreadystatechange =function(){
if(xhr.readyState == 4 && xhr.status == 200){
 
 self.output(xhr.response);

}
};

self = this;

};

export default Ajaxy;



