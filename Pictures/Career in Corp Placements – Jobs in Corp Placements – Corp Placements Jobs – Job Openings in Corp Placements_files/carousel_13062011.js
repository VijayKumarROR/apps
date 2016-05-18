
function dispW(layerid)
{
  gbi(layerid).style.display="block";
}
function dispHW(layerid)
{
  gbi(layerid).style.display="none";
}

function gbi(layerid)
{
  return document.getElementById(layerid);
}


var count=0;
var get1Div=0;
var posMove=0;
var countI=0;
var getDiv='';
var contWid=0;
function moveLR()
{	contWid=(gbi('slideThumbs0').offsetWidth);
  getDiv=gbi('botNav').getElementsByTagName('div');
  if(count<getDiv.length && count<getDiv.length-1)
  {gbi('ltMoveID').className='ltMove';
    get1Div=get1Div + contWid;//Math.round(getW/getDiv.length);
    move1();
    var countInc=count+1;
    //moveLRpag1(gbi("l"+countInc), countInc);

    count=count+1;
    if(count>=getDiv.length-1)
    {gbi('rtMoveID').className='rtMove1';}
  }



}
function move1()
{
  //alert(getDiv.length);
  try{
    if((countI-(contWid/32))<get1Div)
    {	
      //console.warn("posMove" +  posMove );
      posMove=-countI;
      gbi('botNav').style.left=posMove+2+ "px";
      setTimeout(move1, 10);
      countI=Math.round(countI+(contWid/32));
    }
  }
  catch(e)
  {
    alert(e);
  }

}

function moveLR1()
{
  contWid=(gbi('slideThumbs0').offsetWidth);
  getDiv=gbi('botNav').getElementsByTagName('div');
  if(count<getDiv.length && count>0){
    gbi('rtMoveID').className='rtMove'
      get1Div=get1Div - contWid;//Math.round(getW/getDiv.length);
    move2();
    var countInc=count-1;
    //moveLRpag1(gbi("l"+countInc), countInc);
    count=count-1;
    if(count<=0){
      gbi('ltMoveID').className='ltMove1';
    }
  }

}
function move2()
{
  //alert(getDiv.length);
  try{
    if((countI+(contWid/32))>get1Div)
    {	posMove=-countI; 
      gbi('botNav').style.left=posMove + "px";
      setTimeout(move2, 10);
      countI=Math.round(countI-(contWid/32));
    }
  }
  catch(e)
  {
    alert(e);
  }
}

function moveLRpag(obj, countVal)
{alert(countVal);
  var countDiff=Math.abs(countVal-count);


}
function moveLRpag1(obj, countVal)
{
  var i=0;
  while(gbi("l"+i))
  {
    gbi("l"+i).className='';
    i=i+1;
  }
  obj.className='bgCol';	
  i=0;
  while(gbi("contDivM"+i))
  {
    gbi("contDivM"+i).style.display="none";
    i=i+1;
  }
  gbi('contDivM'+countVal).style.display = "block";
}



/*change bg of selected box*/
function changeBG(objN, obj, classO, classN)
{	var j=1;
  var chkType=gbi(objN).getElementsByTagName('INPUT');
  if(chkType[0].type=='radio')
  {
    while(gbi(obj+j))
    {gbi(obj+j).className=classO;
      j=j+1;
    }
  }
  if(chkType[0].checked)
    gbi(objN).className=classN;
  else
    gbi(objN).className=classO;
}
function shHide(layerInit, objno, oClass, nClass)
{
  var i=1;	
  while(gbi(layerInit+i))
  {
    gbi(layerInit+i).className=oClass;
    i=i+1
  }
  gbi(layerInit+objno).className=nClass;
}

function shpmode(layerInitO, layerInitN)
{
  var i=1;
  while(gbi(layerInitO+i))
  {
    gbi(layerInitO+i).className='dspN';
    gbi(layerInitN+i).className='dspB';
    i=i+1;
  }
}
function fetchMedia(url,id)
{
  var randomnumber=Math.floor(Math.random()*1000);
  url=url+"&rnum="+randomnumber;
  var http_request = false;
  if (window.XMLHttpRequest) { // For Mozilla and other browsers
    http_request = new XMLHttpRequest();
    if (http_request.overrideMimeType) {
      http_request.overrideMimeType('text/xml');
    }
  }
  else if (window.ActiveXObject) { // For Internet Explorer
    try {
      http_request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        http_request = new ActiveXObject("Microsoft.XMLHTTP");
      }
      catch (e) {}
    }
  }

  if (!http_request) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
        }

        http_request.onreadystatechange = function () { readystatechangemedia(http_request,id); };
        http_request.open("GET",url,true);
        http_request.send(null);
        return true;
        }
        function readystatechangemedia(http_request,id)
        {
        if (http_request.readyState == 4)
        {
        try
        {
        if (http_request.status == 200)
        {
        var response='';
        response=http_request.responseText;
        if(id=='NODIV' && response)
        {
          return true;
        }
        else if(response)
        {
          var arrayContent=response.split("|XXXXZZZZ|");
          gbi('loader_pp').style.display='none';
          gbi(id).style.display='block';
          gbi('botNav').innerHTML = arrayContent[0];
          gbi('moveDiv').innerHTML = arrayContent[1];
          gbi('contDivM0').style.display="block";
          gbi('l0').className="bgCol";
        }
        else
        {
          gbi('loader_pp').className='';
          gbi('loader_pp').style.innerHTML='&nbsp;NO IMAGES FOR THIS COMPANY';
        }
        }
        else if (http_request.status != 0)
        {
          alert("There was an error while retrieving the URL: " + http_request.statusText);
        }
        }
    catch (error){ alert(error);}
        }
    return true;
        }

/*Validations for CheckBoxes on ReportAbuse Light Box On JD*/
function makeChoice()
{

if(document.getElementById("rabuse6").checked)
    {
      document.form3.other.style.visibility="visible";
    }
  else
  {
    document.form3.other.style.visibility="hidden";
    document.form3.other.value="";

  }
/*
  var val = 0;
  for( i = 0; i < document.form3.rabuse.length; i++ )
  {
    if(document.getElementById("rabuse"+i).checked)
    {
      val = document.getElementById("rabuse"+i).value;

      if(val=='rabuse6')
      {
        document.form3.other.style.visibility="visible";
        document.form3.other.disabled=false;
        document.form3.other.focus();
      }
      else
      {
        document.form3.other.style.visibility="hidden";
        document.form3.other.value="";
      }
    }
    else
    {
      document.form3.other.style.visibility="hidden";
    }
  }
*/
}


/*Function Executes Ajax Request on Submiting from ReportAbuse Light Box On JD*/
function reportAbuseRequest(form,url) {

  var paramsAbuse=new Array("0","0","0","0","0","0","0"," "); 
  var myOption = -1;
  for (i=0; i < form.rabuse.length ; i++) {

    if (document.getElementById("rabuse"+i).checked) {

      paramsAbuse[i]="1";
      myOption = i; 
    }
  }

  if(myOption==-1)
  {
    document.getElementById('errorText').innerHTML = "Please check one of the checkbox.";
    document.getElementById('errorText').style.display = 'block';
    return false;
  }

  if(paramsAbuse[6]=="1")
  {
    paramsAbuse[7]= form.other.value;

    if(paramsAbuse[7].replace(/\s/g,"") == "")
    {
      document.getElementById('errorText').innerHTML = "Please enter text in the textbox.";
      document.getElementById('errorText').style.display = 'block';
      return false;
    }
  }
  var locdomain=window.location.hostname+"";
  if(locdomain.indexOf("corp.naukri.com")!=-1)
  {
    url=url.replace("jobsearch","corp");
  }

  var http_request = false;
  if (window.XMLHttpRequest) { // For Mozilla and other browsers
    http_request = new XMLHttpRequest();
    if (http_request.overrideMimeType) {
      http_request.overrideMimeType('text/xml');
    }
  }
  else if (window.ActiveXObject) { // For Internet Explorer
    try {
      http_request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        http_request = new ActiveXObject("Microsoft.XMLHTTP");
      }
      catch (e) {}
    }
  }

  if (!http_request) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
        }
        var randomnumber=Math.floor(Math.random()*1000);

        url=url+"&con="+paramsAbuse[0]+"&iinf="+paramsAbuse[1]+"&fj="+paramsAbuse[2]+"&dj="+paramsAbuse[3]+"&em="+paramsAbuse[4]+"&pno=" +paramsAbuse[5]+"&ot=" +paramsAbuse[6]+"&otxt=" +paramsAbuse[7]+"&rnum="+randomnumber;
 
       document.getElementById('loader').style.display = 'block';
        document.getElementById('report').style.display = 'none';

        http_request.onreadystatechange = function() { displayConfirmation(http_request); };
        http_request.open('GET', url, true);
        http_request.send(null);
        return true;
        }


function displayConfirmation(http_request) {
        if (http_request.readyState == 4) {
        if (http_request.status == 200) {
        var doc = http_request.responseText;
        if(doc)
        {
          document.getElementById('loader').style.display = 'none';
          document.getElementById('report').style.display = 'none';
          document.getElementById('rap_acknowledge').style.display = 'block';
          document.getElementById('rap_finalconfirm').focus();
        }else
        {
          document.getElementById('errorText').innerHTML = "Error while processing your Request, Please try again!";
          document.getElementById('errorText').style.display = 'block';
          document.getElementById('loader').style.display = 'none';
          document.getElementById('report').style.display = 'block';
        }
        }
        else {
          //                alert('There was a problem with the request.');
        } 
        }
}

function rap_reportabuse()
{
  
  document.getElementById('errorText').style.display = 'none';
  document.form3.other.style.visibility='hidden';
  modalwin(400, 'reportAbuse', this);

}

