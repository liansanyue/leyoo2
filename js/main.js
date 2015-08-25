

var w= document.documentElement.clientWidth
      || document.body.clientWidth;
var h= document.documentElement.clientHeight
      || document.body.clientHeight;

 
/* if(h<1008){h=1008;} */
var maindivs=getElementsByClassName("pages")
/* for(var i in maindivs){
	maindivs[i].style.height=h+"px";
	maindivs[i].style.width=w+"px";
} */

/* var page5txt=document.getElementById("page5txt"); */


var strtxt="选择，总有理由<br/>乐予，以专业和实力<br/>开启极致家政服务体验"
var ts="";var k=0;
function typeit(){

	ts+=strtxt[k];
 document.getElementById("page5txt").innerHTML=ts;
k++;
if(strtxt.length==k)return;
	setTimeout("typeit()",100);
}






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
function page2css(){
	var imgnode=document.getElementById('pic2_2');
	imgnode.className="pic2_2 "+imgnode.className;
	var pnode=document.getElementById("page2").getElementsByTagName("p");
	pnode[0].className="page2p_1";
	/* pnode[0].getElementsByTagName("span")[0].className="leyu_2"; */
	pnode[0].getElementsByTagName("span")[1].className="creator";
	pnode[1].className="page2p_2";
	// pnode[0].setAttribute("style","opacity:1");
	pnode[1].setAttribute("style","opacity:1");
	var spannode=pnode[1].getElementsByTagName("span");
	var time=3.3;
	for(var i=0;i<spannode.length;i++){
		spannode[i].setAttribute("style","opacity: 0;animation: fade 1s ease "+time+"s;animation-iteration-count:1;-webkit-animation-fill-mode: forwards;");
	     time+=0.8;
	}
}
function page3css(){
	var imgnode = document.getElementById("page3").getElementsByTagName("img");
	var pnode = document.getElementById("page3").getElementsByTagName("p");
	imgnode[0].className = imgnode[0].className + " slide";
	pnode[0].className = "slide";
	imgnode[1].className = imgnode[1].className + " pic3_2";
	for (var i = 2; i < imgnode.length; i++) {
		imgnode[i].setAttribute("style", "	animation: fade 1s ease " + (i + 1) + "s;animation-iteration-count: 1;-webkit-animation-fill-mode: forwards;")
	}
	var topdata = 46;
	for (i = 1; i < pnode.length; i++) {
		pnode[i].setAttribute("style", " top:" + topdata + "%; font-size: 15px;animation: fade 1s ease " + (i + 2) + "s;animation-iteration-count: 1;-webkit-animation-fill-mode: forwards;")
		topdata += 20;
	}
}
function page4css(){
	var page4div = document.getElementById("page4").getElementsByTagName("div");
	var page4img = document.getElementById("page4").getElementsByTagName("img");
	var page4h3 = document.getElementById("page4").getElementsByTagName("h4");
	var page4p = document.getElementById("page4").getElementsByTagName("p");
	var pagehr = document.getElementById("page4").getElementsByTagName("hr");
	var time = 0.5;
	var movex = 100;
	var movefor = "moveleft";
	for (var j = 1; j <= page4div.length; j++) {
		if (j % 2 == 0) {
			movex = -1000;
			movefor = "moveright";
		} else {
			movex = 1000;
			movefor = "moveleft";
		}
		page4img[j - 1].setAttribute("style", "opacity: 1;-webkit-transform: translateX(" + movex + "px);animation: " + movefor + " 1.5s ease " + time + "s;animation-iteration-count: 1;  -webkit-animation-fill-mode: forwards;");
		page4div[j - 1].setAttribute("style", "opacity: 1;-webkit-transform: translateX(" + movex + "px);animation: " + movefor + " 1.5s ease " + time + "s;animation-iteration-count: 1;  -webkit-animation-fill-mode: forwards;");
		if(j<=pagehr.length)
		{pagehr[j-1].setAttribute("style","opacity:1");}
		time += 0.5;
		page4h3[j - 1].setAttribute("style", "opacity: 0; animation: fade 1s ease " + time + "s;animation-iteration-count: 1;-webkit-animation-fill-mode: forwards;");
		time += 0.5;
		page4p[j - 1].setAttribute("style", "opacity: 0; animation: fade 1s ease " + time + "s;animation-iteration-count: 1;-webkit-animation-fill-mode: forwards;");
		time += 0.5;
}
}
function page5css(){
	document.getElementById("page5").getElementsByTagName("img")[0].className="pics slide";
document.getElementById("page5p").className="slide";
setTimeout("typeit()",1500);

}
function page6css(){
	var imgnode=document.getElementById("page6").getElementsByTagName("img");
	var pnode=document.getElementById("page6").getElementsByTagName("p");
	imgnode[0].className="pics pic2_2";
	imgnode[1].className="pics page_6_1";
	imgnode[2].className="pics page_6_2";
	imgnode[3].className="pics page_6_3";
	imgnode[4].className="pics page_6_4";
	imgnode[5].className="pics page_6_5";
	var topdata=24;
for(var i=0;i<pnode.length;i++){
	pnode[i].setAttribute("style","top: "+topdata+"%;animation: fade 1s ease "+(i+2)+"s;animation-iteration-count: 1; -webkit-animation-fill-mode: forwards;");
   topdata+=16;

}

}
function page7css(){
var imgnode=document.getElementById("page7").getElementsByTagName("img");
	var pnode=document.getElementById("page7").getElementsByTagName("p");
	pnode[0].className=pnode[1].className="page7p";
	imgnode[0].className=imgnode[1].className=imgnode[2].className="pics slideup";
   imgnode[1].className=imgnode[1].className+" moveeye1";
     imgnode[2].className=imgnode[2].className+" moveeye2";
}