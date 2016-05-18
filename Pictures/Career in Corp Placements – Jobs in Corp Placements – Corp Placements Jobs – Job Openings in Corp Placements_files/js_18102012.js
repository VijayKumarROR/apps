var objTool='';
function showAction(obj, pos, ddName, vaj, viewSim,from)
{
	CUR_FILE=obj.parentNode.parentNode.parentNode.parentNode.id;
	if(!CUR_FILE || from == 'jd')
		CUR_FILE=pos;
	obj1=obj;
	var curleft = curtop = 0;
	if (obj.offsetParent) {
		curleft = obj.offsetLeft
		curtop = obj.offsetTop
		while (obj = obj.offsetParent) {
			curleft += obj.offsetLeft
			curtop += obj.offsetTop
		}
	}
	curleft=curleft-1;
	curtop=curtop+20;
	if(ddName=='sort' || ddName=='pdate')
	{
		curleft-=4;
		curtop-=3;
		}
	SRP_hideAction();
	objTool=obj1;
	obj1.className='mAct';
	var lft=(curleft)+"px";
	var tp=(curtop)+"px";
	var head='';
	if(ddName=='sort'  || ddName=='pdate')
	var head='<div class="actRow1" style="position:absolute; left:-2px; _left:-3px; top:-29px;"><a href="javascript:void(0)" class="mAct2">'+obj1.innerHTML+' </a></div>';
	else
	var head='<div class="actRow1" style="position:absolute; left:-2px; _left:-3px; top:-29px;"><a href="javascript:void(0)" class="mAct1">'+obj1.innerHTML+'</a></div>';
	if(gbi('mAction')==null)
	{
	crtAnc=document.createElement('div');
	if(ddName=='sort' || ddName=='pdate')
	crtAnc.id='mActionS';
	else
	crtAnc.id='mAction';
	
	crtAnc.style.top=tp;
	crtAnc.style.left=lft;
        var EmailUrl = m_u+jd_f+jd_url+'&f='+CUR_FILE+"&js=1&xp="+pos+xid+crit_u+'&mFrm=Y&xz=1_0_43';
	var Url='';
        var tmp1 = document.getElementById('l_'+pos);
	if(tmp1 && crit_u)	
	Url=m_u+sr_f+"?xz="+var_xz1+"_0_"+var_xz3+crit_u+"&ql="+tmp1.innerHTML+"&js=1"+xid;
	if(vaj)
	{
	        var arr = vaj.split('_');
	        var cmpid = arr[0];
	        var tem = (arr[1])?arr[1]:'';
	        delete(arr);
	        var Vjaurl = m_u+sr_f+vaj_url+'&qc='+cmpid+'&tem='+tem+xid+crit_u+'&qd=';
	}
	var AppComp=l_u;

	if(ddName=='sort'){
	head+='<ul class="cls" style="width:94px">';
	if(pos!='r'){head+='<li><a href="javascript:void(0);" onclick="return SetSortType(\'r\');">Relevance</a></li>'};
	if(pos!='f'){head+='<li><a href="javascript:void(0);" onclick="return SetSortType(\'f\');">Date</a></li>'};
	if(user && pos!='p'){head+='<li><a href="javascript:void(0);" onclick="return SetSortType(\'p\');">Personalised</a></li>';}
	crtAnc.innerHTML=head+'</ul>';
	}
  else if(ddName=='pdate'){
  head+='<ul class="cls" style="width:94px">';
  if(pos!='66'){head+='<li><a href="'+freshcluster+'&qo=66" >30 Days Old</a></li>'};
  if(pos!='15'){ head+='<li><a href="'+freshcluster+'&qo=15" >15 Days Old</a></li>'};
  if(pos!='7'){head+='<li><a href="'+freshcluster+'&qo=7" >7 Days Old</a></li>'};
  if(pos!='3'){head+='<li><a href="'+freshcluster+'&qo=3" >3 Days Old</a></li>'};
  if(pos!='1'){head+='<li><a href="'+freshcluster+'&qo=1" >1 Days Old</a></li>'};
  crtAnc.innerHTML=head+'</ul>';
  }
	else
	{
        if(from == 'jd')
  {
        head=head+'<ul class="cls"><li><a href="javascript:void(0);" class="l_sa" id='+CUR_FILE+' onclick="srchRes(event,\'jd\');" onmouseover="srchRes(event,\'jd\');"><em class="stj1"></em>Save this job</a></li>';
  }
  else{
  head=head+'<ul class="cls"><li><a href="javascript:void(0);" class="l_sa" id='+CUR_FILE+' onclick="srchRes(event);" onmouseover="srchRes(event,1);"><em class="stj1"></em>Save this job</a></li>';
  }
	if(from == 'jd')
	{
		head=head+'<li><a href="'+EmailUrl+'"><em class="demail"></em>Email this job</a></li>';
	}
	else{
		EmailUrl = "'"+EmailUrl+"'";
		head=head+'<li><a href="javascript:void(0);" onclick="window.open('+EmailUrl+',\'\',\'width=785,height=570,resizable=1,scrollbars=1\');"><em class="demail"></em>Email this job</a></li>';}
//	if(viewSim)
//		head=head+'<li><a href="javascript:void(0);" class="l_vs" id='+CUR_FILE+' onclick="srchRes(event);" onmouseover="srchRes(event,1);"><em class="vsj1"></em>View similar jobs</a></li>';
        if(vaj && viewSim)
		head=head+'<li><a href="'+Vjaurl+'" target="_blank"><em class="vaj"></em>View  all jobs by this advertiser</a></li>';
        if(tmp1.innerHTML.indexOf(",")<0 && qlFlag < 1 && Url)
		head=head+'<li><a href="'+Url+'"><em class="vamj"></em>View all matching jobs for this location</a></li>';
	head=head+'<li><a href=\"'+AppComp+'\" target="_blank"><em class="vac"></em>View applicant\'s comparison for this job</a></li></ul>';
	crtAnc.innerHTML=head;
	}
	document.body.appendChild(crtAnc);
	}
}
/*document.onclick=function(e){
	if(navigator.appName=='Microsoft Internet Explorer')
	var element = window.event.srcElement;
	else
	var element = e.target;
	if(element.rel!='mAction'){
		SRP_hideAction();
	}
	if(gbi('sortHlp')){
        if(element.id!='quesSrt' && element.id!='sortHlp' && element.parentNode.id!='sortHlp')
        gbi('sortHlp').style.display='none';
	}
}
*/
function SRP_hideAction(){
	objTool.className='mAct';
	var crtAnc=gbi('mAction') || gbi('mActionS');
	if(crtAnc)
	(crtAnc.parentNode).removeChild(crtAnc);

}



function getHSrp(){
	try{
	gbi('colL').style.left=getOffLeft(gbi('colLB'))+"px";
	gbi('colL').style.top=gbi('colR').style.top=getOffTop(gbi('colLB'))+"px";
	gbi('colR').style.left=getOffLeft(gbi('colRB'))+"px";
	gbi('colL').style.display=gbi('colR').style.display='block';
	}
	catch(e)
	{}
}
function adjustFoot()
{
//	gbi('colR').innerHTML=gbi('colRB').innerHTML;
	try{
	gbi('footN').style.display='none';
	var topH=(gbi('header').offsetHeight)+(gbi('navBG').offsetHeight)+(gbi('srcBg100').offsetHeight)+60;
	var midDoc=document.body.offsetHeight-(topH+(gbi('footN').offsetHeight));
	var lH=gbi('colL').offsetHeight;
	var rH=gbi('colR').offsetHeight;
	if(lH>midDoc && lH>rH ){
		gbi('footN').style.top=(topH+lH+20)+'px';
	}
	else if(rH>midDoc && rH>lH ){
		gbi('footN').style.top=topH+rH+20+'px';
	}
	else{
		gbi('footN').style.top=document.body.offsetHeight+'px';
	}
	gbi('footN').style.display='';
	}
        catch(e)
        {}
}

function getOffLeft(obj){
	var curleft = 0;
	if (obj.offsetParent) {
		curleft = obj.offsetLeft;
		while (obj = obj.offsetParent) {
			curleft += obj.offsetLeft;
		}
	}
	return curleft;
}
function getOffTop(obj){
	var curtop = 0;
	if (obj.offsetParent) {
		curtop = obj.offsetTop;
		while (obj = obj.offsetParent) {
			curtop += obj.offsetTop;
		}
	}
	return curtop;
}
function ce(ceID){
	return document.createElement(ceID);
}

/*tooltip*/
	var myWin='';
	var content=0;
	var idfield=0;
	var iframeH=10;
	

function tooltip(content, idObj, leftStart) {
	if(!(gbi('hintbox')))
	{
		var div1=ce('div');
		div1.id='hintbox';
		div1.setAttribute('visibility', 'hidden');
		var div2=ce('div');
		div2.id='new_';
		div1.appendChild(div2);
		var div3=ce('div');
		div3.id='toolFrame';
		div3.setAttribute('visibility', 'hidden');
		var iframe1=ce('iframe');
		iframe1.id='iframeTool';
		iframe1.className='framecss';
		div3.appendChild(iframe1);
		var bodyOBJ=document.getElementsByTagName('body');
		bodyOBJ[0].appendChild(div1);
		bodyOBJ[0].appendChild(div3);
	}
	var curleft=getOffLeft(idObj) || 0;
	var curtop=getOffTop(idObj) || 0;
	var obj2=gbi('hintbox');
	var objFrame=gbi('toolFrame');
	obj2.style.top=objFrame.style.top=curtop-0+"px";
	var leftStart1=0;
	if(leftStart)
	leftStart1=leftStart;
	else
	leftStart1=idObj.offsetWidth;
	obj2.style.left=objFrame.style.left=parseInt(leftStart1)+curleft+"px";
	obj1=gbi('new_');
	obj1.innerHTML="<div id='forarrow'>&nbsp;</div>"+content;
	obj2.style.visibility=objFrame.style.visibility='visible';
	content=content;
	obj=idObj;
	gbi('iframeTool').height=obj2.offsetHeight+"px";
	gbi('iframeTool').width=obj2.offsetWidth+"px";
}
function hidetip(){
dmObj=gbi("hintbox");
dmFrm=gbi("toolFrame");
dmObj.style.visibility=dmFrm.style.visibility="hidden";
dmObj.style.left=dmFrm.style.left="-500px";
}
/*tooltip*/

/*new JS for rss*/
function showhideR(obj){
        obj.parentNode.className=='sel'?obj.parentNode.className='':obj.parentNode.className='sel';
}
/*lightbox*/
var gHei=0;var layid1='';var ceID1='';var layid='';var layid2='';var wid2='';var ceID2='';var nHei=0;var spacer='<img src=\"http://upload.wikimedia.org/wikipedia/commons/5/52/Spacer.gif\" alt=\"\" height=\"1\" width=\"1\" border=\"0\" \/>';var bool=false;
function modalwin(wid1, hei1, layid, ceID)
{
if(ceID){layid2=layid;ceID2=ceID;}else{layid2=hei1;ceID2=layid;}wid2=wid1;if(!(gbi('modal1'))){var mod1=crtDiv();mod1.id="modal1";mod1.className="mod1 modC";mod1.style.display="none";var frm1=crtDiv();frm1.id="frmLy";frm1.className="frm";frm1.style.display="none";frm1.innerHTML='<iframe id="lFr1" style="border: none;"></iframe>';ddBd().appendChild(mod1);ddBd().appendChild(frm1);}var modal1=gbi('modal1');var iebody=(document.compatMode && document.compatMode != "BackCompat")? document.documentElement : ddBd();var dsocleft=document.all? iebody.scrollLeft : pageXOffset;var dsoctop=document.all? iebody.scrollTop : pageYOffset;var getnHei=ddBd().offsetHeight;var getNWid=altS();if(navigator.appName!='Microsoft Internet Explorer'){getnHei=getnHei+16;}modal1.style.top=0;modal1.style.width=getNWid+'px';if(getnHei<nHei){getnHei=nHei;}modal1.style.height=getnHei+'px';modal1.style.background='#000';gbi(layid2).style.width=wid1+'px';gbi("frmLy").style.width=getNWid+'px';gbi("frmLy").style.height=getnHei+'px';gbi("lFr1").style.width=getNWid+'px';gbi("lFr1").style.border='0';gbi("lFr1").style.height=getnHei+'px';var clientheight=gHei;var clientwidth=getNWid;var layShOb=gbi(layid2);gbi('modal1').style.display='block';gbi(layid2).style.display='block';cliwid=(clientwidth/2)-(wid1/2);cliHei= dsoctop+(nHei/2)-((gbi(layid2).offsetHeight)/2);layShOb.style.left=cliwid-10+'px';if((gbi(layid2).offsetHeight)>getnHei){layShOb.style.top=0;}else{layShOb.style.top=cliHei+'px';}closewidthpos=parseInt(cliwid, 10)+parseInt(wid1, 10)-60;if(navigator.appName=='Microsoft Internet Explorer'){gbi("frmLy").style.display='block';}if(gbi('addFAnc'+layid2)==null){var newinDiv1=crtDiv();var newinDiv2=crtDiv();newinDiv1.id='addFAnc'+layid2;newinDiv1.style.position='absolute';newinDiv2.id='addLAnc'+layid2;var getFullCont=gbi(layid2).innerHTML;gbi(layid2).innerHTML='';gbi(layid2).appendChild(newinDiv1);gbi(layid2).innerHTML+=getFullCont;gbi(layid2).appendChild(newinDiv2);}gbi('addFAnc'+layid2).innerHTML='<a href="#" onfocus="fcN(\'last'+layid2+'\')">'+spacer+'</a>';gbi('addLAnc'+layid2).innerHTML='<a href="#" onfocus="fcN1(\''+layid2+'\')">'+spacer+'</a>';layid1=layid2;ceID1=ceID2;fcN2(layid2);try{var lastD=gbi(layid2).getElementsByTagName("bdo");var lastd1=lastD[0].childNodes;if(lastd1[0].rel=='last');lastd1[0].id="last"+layid2;}catch(e){}}
function gbi(layidNew){return document.getElementById(layidNew)}
function gbTN(layidNew){return document.getElementsByTagName(layidNew)}
function crtDiv(){return document.createElement('div')}
function ddBd(){return document.body;}
function headLB(layId, clc){if(!clc){var hd=document.write('<div class="lHead">'+layId+'</div>');}else{var hd=document.write('<div class="lHead"><span class="crossLB fr"><a href="javascript:void(0);" onclick="hidemodal();" title="Close">Close</a></span>'+layId+'</div>');}}
function hidemodal(){refLB();gbi('modal1').style.display='none';gbi(layid1).style.display='none';gbi("frmLy").style.display='none';if(ceID1){try{ceID1.focus();}	catch(e){if(gbi(ceID1)) gbi(ceID1).focus();}}layid2='';}
function focuschange(layid){var byTag=gbi(layid).getElementsByTagName('a');byTag[0].focus();}
function fcN2(layid){var byTag1=gbi(layid);for(i=0; i<byTag1.childNodes.length; i++){var byTag2=byTag1.childNodes[i];if(byTag2){rec1(byTag2);}if(bool){break;}else{fcN1(layid)};}}
var ndOG='';
var ndoJ='';
function rec1(ndO){bool=false;for(var j=0; j<ndO.childNodes.length; j++){if(((ndO.childNodes[j].parentNode.style.display)=='none')||((ndO.childNodes[j].parentNode.parentNode.style.display)=='none')||((ndO.childNodes[j].parentNode.parentNode.parentNode.style.display)=='none')||((ndO.childNodes[j].parentNode.parentNode.parentNode.parentNode.style.display)=='none')){}else{if(((ndO.childNodes[j].nodeName)=='INPUT') && ((ndO.childNodes[j].type)!='hidden') && ((ndO.childNodes[j].style.display)!='none') && ((ndO.childNodes[j].disabled)!=true)){ndOG=ndO; ndoJ=j;setTimeout('blankF()', 100);bool=true;}else if(((ndO.childNodes[j].nodeName)=='TEXTAREA') && ((ndO.childNodes[j].type)!='hidden') && ((ndO.childNodes[j].style.display)!='none') && ((ndO.childNodes[j].disabled)!=true)){ndOG=ndO; ndoJ=j;setTimeout('blankF()', 100); bool=true;}else if(((ndO.childNodes[j].nodeName)=='SELECT') && ((ndO.childNodes[j].type)!='hidden') && ((ndO.childNodes[j].style.display)!='none') && ((ndO.childNodes[j].disabled)!=true)){ndOG=ndO; ndoJ=j;setTimeout('blankF()', 100); bool=true;}else{if(ndO.childNodes[j]){rec1(ndO.childNodes[j]);}}if(bool){break;}}}}
function blankF(){
	ndOG.childNodes[ndoJ].focus();
	}
function fcN1(layid){var byTag=gbi(layid).getElementsByTagName('a');byTag[1].focus();}
function fcN(layid){var obNe=gbi(layid);if(((obNe.parentNode.style.display)=='none') || ((obNe.parentNode.parentNode.style.display)=='none') || ((obNe.parentNode.parentNode.parentNode.style.display)=='none')){var inpNe=gbi(layid1).getElementsByTagName('input');inpNe[inpNe.length-1].focus();}else{obNe.focus();}} 
function altS() {var myWidth = 0, myHeight = 0;if( typeof( window.innerWidth ) == 'number' ) {myWidth = window.innerWidth-17;myHeight = window.innerHeight-18;}else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {myWidth = document.documentElement.clientWidth;myHeight=document.documentElement.clientHeight;}else if( ddBd() && ( ddBd().clientWidth || ddBd().clientHeight ) ) {myWidth = ddBd().clientWidth;myHeight = ddBd().clientHeight;}nHei=myHeight;return myWidth;}
function refLB(){var obNe=gbi(layid1);var inpT=	obNe.getElementsByTagName('INPUT');for(i=0; i<inpT.length; i++){var clN=inpT[i].className;clN = String(clN);var clN1=clN.match('checked1');if(clN1!='checked1'){if((inpT[i].type)=='checkbox'){inpT[i].checked=false;}else if(((inpT[i].type)=='text') || ((inpT[i].type)=='password') || ((inpT[i].type)=='file')){inpT[i].value='';}}}var tArea=	obNe.getElementsByTagName('TEXTAREA');for(i=0; i<tArea.length; i++){tArea[i].innerHTML='';}var selectType=	obNe.getElementsByTagName('SELECT');for(i=0; i<selectType.length; i++){selectType[i].selectedIndex=0;}chkErr('div', 'err');chkErr('span', 'err');chkErr('INPUT', 'errorfill');chkErr('TEXTAREA', 'errorfill');chkErr('SELECT', 'errorfill');}
function chkErr(divName){var obNe=gbi(layid1);var divType=obNe.getElementsByTagName(divName);for(var i=0; i<divType.length; i++){var clN= divType[i].className;clN = String(clN);var clN1=clN.match('errorfill');if(clN1==null){if(((clN)=='err') || ((clN)=='error1') || ((clN)=='error2') || ((clN)=='error3')){if((divType[i].style.display)!='none'){if((divType[i].style.display)=='block'){divType[i].style.display='none';}else if((divType[i].style.display)==''){divType[i].style.display='none';}else{divType[i].className='noerror';}}}}else{var clN2=clN.split(' ');var newClass='';for (var j=0; j<clN2.length; j++){if(clN2[j]!='errorfill'){newClass+=clN2[j]+" ";}}divType[i].className=newClass;}}}

/*lightbox*/

/*question mark tip*/

function showTip(){
        var oTipLayer=gbi('sortHlp');
        if(oTipLayer.style.display=='block')
        oTipLayer.style.display='none'
        else{
        var oTip=gbi('quesSrt');
        var getLeft=getOffLeft(oTip);
        var getTop=getOffTop(oTip);
        oTipLayer.style.display='block'
        oTipLayer.style.top=getTop+'px';
        oTipLayer.style.left=getLeft-(oTipLayer.offsetWidth)+15+'px';
        }
}

/*question mark tip*/

function repNameF(obj, tableName){
        var trArr=gbi(tableName).getElementsByTagName('tr')
        for(i=0; i<trArr.length;i++){
        trArr[i].className='';
}
        obj.parentNode.parentNode.className='row_pnk';
}
/*govt jobs*/
function tabNavi(uid,lid,dvparnt,dvid)
{
var ul = document.getElementById(uid);
var lis = ul.getElementsByTagName('li');
var li;
for (var i=0, iLen=lis.length; i<iLen; i++){
li = lis[i];
if (li.className=='active') {
li.className='';
}
}
var dv = document.getElementById(dvparnt);
var cdv = dv.getElementsByTagName('div');
var li2;
for (var j=0, iLen=cdv.length; j<iLen; j++){
li2 = cdv[j];
if (li2.className=='parants') {
li2.style.display="none";
}
}
document.getElementById(lid).className="active"
document.getElementById(dvid).style.display="block";
}
function showCrit(obj){
   var getCurObj=obj.parentNode.getElementsByTagName('b');
   if(getCurObj[0].style.display==''){
       getCurObj[0].style.display='none';
       obj.innerHTML='Show Criteria';
       obj.parentNode.className='pt8';
   return;
}
var getObj=obj.parentNode.parentNode.getElementsByTagName('b');
var getObja=obj.parentNode.parentNode.getElementsByTagName('a');
for(i=0; i<getObj.length; i++){
    getObj[i].style.display='none';
}
for(i=0; i<getObja.length; i++){
    if(getObja[i].innerHTML=='Hide Criteria'){
        getObja[i].innerHTML='Show Criteria';
        getObja[i].parentNode.className='pt8';
    }
}
    if(getCurObj[0].style.display=='none')
        getCurObj[0].style.display='';
obj.innerHTML='Hide Criteria';

obj.parentNode.className='pt8 arr12';
}


var $globalVar={
  show:function(id){
    $globalVar.gObj(id).style.display='';
  },
  showInl:function(id){
    $globalVar.gObj(id).style.display='inline';
  },
  showb:function(id){
    $globalVar.gObj(id).style.display='block';
  },
  hide:function(id){
    $globalVar.gObj(id).style.display='none';
  },
  setFocus:function(id){
    $globalVar.gObj(id).focus();
  },
  classChange:function(id, oC, nC){
      aObj=$globalVar.gObj(id);
    if(aObj.className==oC)
      aObj.className=nC;
  },
  changeTxt:function(id, nT){
      $globalVar.gObj(id).innerHTML=nT;
  },
  changeClass:function(id, nC){
      $globalVar.gObj(id).className=nC;
  },
  toggleSH:function(id){
    aObj=$globalVar.gObj(id);
    aObj.style.display=='' ? aObj.style.display='none' : aObj.style.display='';
  },
  toggletxt:function(id, oT, nT){
    aObj=$globalVar.gObj(id);
    aObj.innerHTML==oT ? aObj.innerHTML=nT : aObj.innerHTML=oT;
  },
  toggleclass:function(id, oC, nC){
    aObj=$globalVar.gObj(id);
    aObj.className==oC ? aObj.className=nC : aObj.className=oC;
  },
  classChangeLoop:function(id, oC, nC, curObj){
    aObj=$globalVar.gObj(id);
    var getA=$globalVar.gtn(aObj, 'a');
    for(i=0; i<getA.length; i++){
      $globalVar.classChange(getA[i], oC, nC);
    }
    curObj.className=oC;
  },
  gObj:function(id){
    return (typeof id == 'object' ? id : $globalVar.gbi(id)); 
  },
  gbi:function(id){
    return document.getElementById(id);
  },
  gtn:function(curObj, tagName){
    curObj=$globalVar.gObj(curObj);
    return curObj.getElementsByTagName(tagName);
  },
  getPositionX:function(obj){
    var curleft = 0;
    if(obj.offsetParent)
      while(1) 
      {
        curleft += obj.offsetLeft;
        if(!obj.offsetParent)
        break;
        obj = obj.offsetParent;
      }
    else if(obj.x)
      curleft += obj.x;
    return curleft;
  },
  getPositionY:function(obj){
    var curtop = 0;
    if(obj.offsetParent)
      while(1)
      {
        curtop += obj.offsetTop;
        if(!obj.offsetParent)
        break;
        obj = obj.offsetParent;
      }
    else if(obj.y)
      curtop += obj.y;
    return curtop;
  }

}

/*Form element*/

function txtBlur(ele, action, defVal) {
     if(action == "blur") {
         ele.value = ele.value.replace(/^\s+/,'');
         ele.value = ele.value.replace(/\s+$/,'');
         if(ele.value=="") {
             ele.value=defVal;
             ele.style.color="#8d8d8d";
         } else {
             ele.style.color="#333";
         }
     }
     else if(action == "focus" && ele.value == defVal) {
         ele.value="";
         ele.style.color="#333";
     }
}

function calstrg(ele, val)
{
  if(ele.value != undefined)
     var arraystr = ele.value.split(/[\s,]+/);
  else
  {
     if(document.getElementById(ele).value == val)
        var arraystr  = [];
     else
        var arraystr = document.getElementById(ele).value.split(/[\s,]+/);
  }
  var length = arraystr.length -1;
  var count=0;
  while(length>=0)
  {
   if(arraystr[length] != "")
     count++;
   length--;
  }   
  if(count == 0)
  {
     document.getElementById('kwdStrName').className = "kwdStrName";
     document.getElementById('kwdStrName').innerHTML = "";
     document.getElementById('keywordstrg').className = '';
  }
  else if(count <= 2) //weak
  {
     document.getElementById('kwdStrName').className = "kwdStrName weak";
     document.getElementById('kwdStrName').innerHTML = "Weak";
     document.getElementById('keywordstrg').className = 'kwdWeak w20';
  }
  else if(count >=3 && count<=5)
  {
     document.getElementById('kwdStrName').className =  "kwdStrName modr";
     document.getElementById('kwdStrName').innerHTML = "Moderate";
     document.getElementById('keywordstrg').className = 'kwdMod w50';     
  }
  else if(count > 5)
  {
    document.getElementById('kwdStrName').className =  "kwdStrName strong";    
    document.getElementById('kwdStrName').innerHTML = "Strong";
    document.getElementById('keywordstrg').className = 'kwdStr w100';
  }
}
