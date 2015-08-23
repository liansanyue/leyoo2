

var w= document.documentElement.clientWidth
      || document.body.clientWidth;
var h= document.documentElement.clientHeight
      || document.body.clientHeight;

 /* var w= document.documentElement.clientWidth;
 var h= document.documentElement.offsetHeight; */
 
/* document.getElementById("page2").style.width=w+"px"; */
if(h<1008){h=1008;}
var maindivs=getElementsByClassName("pages")/*  */
for(var i in maindivs){
	maindivs[i].style.height=h+"px";
}
      /* alert(w);
      alert(h); */
function getElementsByClassName(classname, node) { //该函数第一个参数为类名，必填；第二个参数为元素节点，选填，不填为从整个文档中找改类；填了，则从该节点的子节点中找。

	var flag = arguments[1] ? true : false;
	if (flag) {
		var elems = node.getElementsByTagName("*");
	} else {
		var elems = document.getElementsByTagName("*");
	}

	var results = new Array();
	for (var i = 0; i < elems.length; i++) {
		if (elems[i].className.indexOf(classname) != -1) {
			results[results.length] = elems[i];
		}
	}
	return results;
}