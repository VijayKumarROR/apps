// common.js -- start --
function getposOffset(overlay, offsettype)
{
	var totaloffset=(offsettype=="left")? overlay.offsetLeft : overlay.offsetTop;
	var parentEl=overlay.offsetParent;
	while (parentEl!=null)
	{
		totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
		parentEl=parentEl.offsetParent;
	}
	return totaloffset;
}

function overlay_apply(curobj, subobjstr, opt_position){
if (document.getElementById){
var subobj=document.getElementById(subobjstr)
subobj.style.display=(subobj.style.display!="block")? "block" : "none"
var xpos=(getposOffset(curobj, "left")+((typeof opt_position!="undefined" && opt_position.indexOf("right")!=-1)? -(subobj.offsetWidth-curobj.offsetWidth) : 0)) - (document.getElementById("divfordisplay")?parseInt(document.getElementById("divfordisplay").style.left.substr(0,(document.getElementById("divfordisplay").style.left.length-2))):0);
var ypos=(getposOffset(curobj, "top")+((typeof opt_position!="undefined" && opt_position.indexOf("bottom")!=-1)? curobj.offsetHeight : 0))- (document.getElementById("divfordisplay")?parseInt(document.getElementById("divfordisplay").style.top.substr(0,(document.getElementById("divfordisplay").style.top.length-2))):0);
subobj.style.left=xpos+"px"
subobj.style.top=ypos+"px"
return false
}
else
return true
}
var t;
function closeLayer(layer)
{
	t=setTimeout("overlayclose_apply('"+layer+"');",300);	
}



function overlayclose_apply(subobj){
document.getElementById(subobj).style.display="none";
if(document.getElementById("DivShim"))
	document.getElementById("DivShim").style.display= 'none';
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

function logRequest(url,queryStr)
{
	var http_moresearch = getHTTPObject();
        url = url +'&r='+ Math.round(Math.random()*100000);
	http_moresearch.open("GET",url,true);
	http_moresearch.onreadystatechange = blankHttpResponse;
	http_moresearch.send(null);
}

function blankHttpResponse() {}

// common.js -- end --
