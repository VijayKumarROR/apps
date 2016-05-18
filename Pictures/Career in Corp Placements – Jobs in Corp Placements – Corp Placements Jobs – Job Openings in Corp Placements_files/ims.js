var ims = {
	
	init : function(params){

	if(!(this instanceof ims.init)){			// careating new instance
			return new ims.init(params)
		}
		
	
	var loc = {
		jsFiles : {count:0,loaded:0},
		
		bindEvent:function(slc,iOL,tUrl){
			if(slc){
					$n(slc).addEvent('click',function(){
						tobj = $n(this);
						tobj.currObj().disabled = true;
						tobj.trigrContent = tobj.html();
						var trigrLoadingHtml = '<em class="trigLoad">loading...</em>';
						tobj.html(trigrLoadingHtml);
						setTimeout(function(){ims.sendRequest({url : tUrl,callback : instanceObj+'.processResponse',crossDomain:crossDomain,postData:postData,requestTimeout:requestTimeout,requestSuccess:requestSuccess,requestFail:requestFail});},1000);
						
					});
				}
			if(!slc || iOL){ims.sendRequest({url : tUrl,callback : instanceObj+'.processResponse',crossDomain:crossDomain,postData:postData,requestTimeout:requestTimeout,requestSuccess:requestSuccess,requestFail:requestFail})}
			
		},
		
		processResponse : function(resp){
			
			triggerHandle();

			if(ims.timeOut && resp){
				ims.timeOut = 'DONE';
				if(resp.exception){
					requestFail ? requestFail() : alert('Reqest could not be completed. Please try again...');
					return;
				}
				var t = this,x,y;
				if(resp.data.html){
					if(resp.data.files && resp.data.files.length>0){
						for(x=0,y=resp.data.files;x<y.length;x++){
							if(!loc.checkFile(y[x]))loc.injectFile(y[x]);
						}
					}
					if(wrapCont){
						var wrapObj = $n(wrapCont);
						loc.appendHtml(wrapObj,resp.data.html);
					}else{
						loc.showLightbox('_',resp.data.html);
					}
				}
				else if(resp.data.submitURL){
					window.location.href = resp.data.submitURL;
				}
			}
		},
		
		checkFile : function (filePath){
			
			var file = filePath.substring(filePath.lastIndexOf('/')+1), 
				fileType = file.substring(file.lastIndexOf('.')+1), ret=false;
				
				if(fileType.lastIndexOf('?')>0)
					fileType = fileType.substring(0,fileType.lastIndexOf('?'));
				
			switch(fileType){
				case 'js' : {
					var scripts=$n('script');
					for(var x=0;x<scripts.length;x++){
						var src=scripts.eq(x).attr('src');
						(src && src.indexOf(file)>=0)?ret=true:'';
					}
					break;
					}
				case 'css' : {
					var scripts=$n('link');
					for(var x=0;x<scripts.length;x++){
						var href=scripts.eq(x).attr('href');
						(href && href.indexOf(file)>=0)?ret=true:'';
						}
					break;
					}
				}
		return ret;
		},
	
		injectFile : function (filePath){
			var fileType = filePath.substring(filePath.lastIndexOf('.')+1);

			if(fileType.lastIndexOf('?')>0)
				fileType = fileType.substring(0,fileType.lastIndexOf('?'));
			
			switch (fileType){
				case 'js' : {
					++loc.jsFiles.count;
					var fileref=$n("<script>");
					fileref.attr({"type":"text/javascript", "src":filePath});
					if(fileref.currObj().readyState){
						fileref.addEvent('readystatechange',function(){
						var state = fileref.currObj().readyState;
						if (state === 'loaded' || state === 'complete') {
						   fileref.currObj().onreadystatechange = null;
								++loc.jsFiles.loaded;
						  }})
						}
					else{
						fileref.addEvent('load',function(){++loc.jsFiles.loaded})
					}
					
					break;
				}
				case 'css' : {
					var fileref=$n("<link>");
					fileref.attr({'rel':"stylesheet", "type":"text/css", 'href':filePath});
					break;
				}
			}
			(typeof fileref!="undefined")?$n('head').eq(0).append(fileref):'';
		},
		
		appendHtml : function(wrapObj,html){
			var int2 = 0,
				htmlObj = html.toDOM(),
				scriptCont=null,
				scriptTag=null;
		
					for(var x=0;x<htmlObj.childNodes.length;x++){
						if(htmlObj.childNodes[x].nodeName=='SCRIPT'){
							scriptCont=htmlObj.childNodes[x].innerHTML;
							scriptTag = $n('<script>');
							scriptTag.attr({'type':'text/javascript'}).currObj().text = scriptCont;
							break;
						}
					}
					setTimeout(function(){wrapObj.html('').append(htmlObj)},40);
					if(scriptCont!==null){
						var loadInt = setInterval(function(){
								++int2;
                if(loc.jsFiles.count<=loc.jsFiles.loaded){clearInterval(loadInt);wrapObj.append(scriptTag)}
								else if(int2>300){clearInterval(loadInt)}
							},100);
					}
		},
	
		showLightbox : function(trg,html){
			var h1=0,
				h2=0,
				htmlObj = html.toDOM(),
				int1=0,
				int2=0,
				lbFlg = ($n('#container').length==0)?true:false;
				if(lbFlg){
					var lbHTML = ((handleClose) ? '<div id="container" class="lbWrap" style="display:none"><div id="lbCntnt" class="lbCntWrap_ims"></div></div>' : '<div id="container" class="lbWrap" style="display:none"><a id="container_close" class="closeBtn" href="javascript:void(0)" onclick="hideLayer()"></a><div id="lbCntnt" class="lbCntWrap_ims"></div></div>').toDOM();
					$n('body').append(lbHTML);
				}
				var lbContMain = $n('#container'),
					lbContInner = $n('#lbCntnt');			
				var int = setInterval(function(){
				++int1;
				try{
					if(lbContMain.getCss('display').toLowerCase()=='block'){
						clearInterval(int);
						lbContMain.removeClass('contBx').addClass('contBx');
						lbContMain.css({'top':ims.getScrollXY().top+50+"px"});
						loc.appendHtml(lbContInner,html)
					}
					else {
						lightBox({
							trigger:trg,
							contId:"container",
							contWidth:700,
							ecp:false,
							returnFocus:true,
							close:'container_close',
							firstFocus:'container_close',
							reset:true,
							hideCallBack:function(){
								lbContInner.html('')
							}
						});
						if(int1>300){clearInterval(int)}
					}
				}
				catch(e){}
			},10);
		}
	};
	

	var t=this,
		slc = params.triggerOptions.selector || null,		// Get Selector Param
		tUrl = params.triggerOptions.url || null,			// Get Url Selector
		wrapCont = params.triggerOptions.wrapper || null,		// wrapper id for response
		instanceObj = params.triggerOptions.iName || null,	// Instance Name
		crossDomain = params.triggerOptions.crossDomain || null,// cross domain param Ajax/Jsonp
		postData = params.triggerOptions.postData || '',
		requestTimeout = params.triggerOptions.requestTimeout || 3E4,
		requestSuccess = params.triggerOptions.requestSuccess || null,
		requestFail = params.triggerOptions.requestFail || null,
		invokeOnLoad = params.triggerOptions.invokeOnLoad || null,
		handleClose = params.triggerOptions.handleClose || null;
	
	tobj = null;
	loc.bindEvent(slc,invokeOnLoad,tUrl);							//Attach Event on Button
	
	triggerHandle = function(){
		if(tobj){
				tobj.html(tobj.trigrContent);
				tobj.currObj().disabled = false
			}
	}
	
	tobj
	
	return{processResponse : loc.processResponse}			// Return processResponse
		
	},
	
	serialize : function(form){
		if(!form.length){throw 'Form not Found!'};
		var i, j, q = [],form_ele=form.childrens('input, select, textarea, button');
		
		for (i = form_ele.length - 1; i >= 0; i = i - 1) {
				if(form_ele.eq(i).attr('name') === "")continue;
				switch (form_ele.eq(i).currObj().nodeName) {
				case 'INPUT':
						switch (form_ele.eq(i).attr('type')) {
						case 'file':
							break;
						case 'checkbox':
						case 'radio':
								if (form_ele.eq(i).currObj().checked) {
										q.push(form_ele.eq(i).attr('name') + "=" + encodeURIComponent(form_ele.eq(i).val()));
								}                                               
								break;								
						default:
								q.push(form_ele.eq(i).attr('name') + "=" + encodeURIComponent(form_ele.eq(i).val()));
								break;
						}
						break;
				case 'TEXTAREA':
						q.push(form_ele.eq(i).attr('name') + "=" + encodeURIComponent(form_ele.eq(i).val()));
						break;
				case 'SELECT':
						for (j = form_ele.eq(i).currObj().options.length - 1; j >= 0; j = j - 1) {
								if (form_ele.eq(i).currObj().options[j].selected) {
										q.push(form_ele.eq(i).attr('name') + "=" + encodeURIComponent(form_ele.eq(i).currObj().options[j].value || form_ele.eq(i).currObj().options[j].innerHTML));
								}
						}
						break;
				case 'BUTTON':
						switch (form_ele.eq(i).attr('type')) {
						case 'reset':
						case 'submit':
						case 'button':
								q.push(form_ele.eq(i).attr('name') + "=" + encodeURIComponent(form_ele.eq(i).val()));
								break;
						}
						break;
				}
		}
		return q.join("&")
	},
	
	sendData : function(params){
		var url = params.url || null,
			status = params.status || null,
			crossDomain = params.crossDomain || null,
			postData = params.postData || '',
			callback = params.callback || 'ims.sendData',
			requestTimeout=params.requestTimeout||3E4,
			requestSuccess=params.requestSuccess,
			requestFail=params.requestFail;
		
		if(url){ims.sendRequest({url : url,crossDomain:crossDomain,postData:postData,callback : callback,requestTimeout:requestTimeout,requestSuccess:requestSuccess,requestFail:requestFail});}
		else if(status)return status;
		else{throw 'Wrong parameters!'}
	},
	
	sendRequest : function(param){
			var url = param.url,
				callback = param.callback,
				crossDomain = param.crossDomain,
				postData = param.postData,
				requestTimeout = param.requestTimeout||3E4,
				requestSuccess = param.requestSuccess||null,
				requestFail = param.requestFail||null;
				ims.timeOut = true;
				
			(crossDomain)?jsonP():imsAjax();
			
	
			function jsonP(){
				(function (){
					var  fileref=$n("<script>"),h=$n('head').eq(0);
					fileref.attr('type','text/javascript');
					if(callback)(url.indexOf('?')>=0)?url += "&callback="+callback:url += "?callback="+callback;
					fileref.attr('src',url);
					setTimeout(function(){
						if(ims.timeOut!='DONE'){
							ims.timeOut=false;
							requestFail ? requestFail() : alert('Reqest could not be completed. Please try again...');
							eval(callback)(null);
						}
					},parseInt(requestTimeout));
					if(typeof fileref!="undefined"){
							h.append(fileref);
					}
				})();
			}
			function imsAjax(){
			$n(document).ajaxReq({                
				   url : url,            
				   datatype :'json', 
				   data :  postData,
				   type: 'post',
				   cache : false,
				   timeout : {
					   time:requestTimeout,
					   onTimeout:function(){
						   triggerHandle();
					   }
				   },
				   success : function(resp){
					   if(resp && resp.exception){
						   resp=null;
						   requestFail ? requestFail() : alert('Reqest could not be completed. Please try again...');
						}else{
					   		if(requestSuccess)requestSuccess();
            			}
						   
					   eval(callback)(resp)
					},         
				   error : function(){requestFail ? requestFail() : alert('Reqest could not be completed. Please try again...')}
			  });
			};
			
	},
		
	getScrollXY : function (){
			var x = 0, y = 0;
			if( typeof( window.pageYOffset ) == 'number' ) {
				x = window.pageXOffset;
				y = window.pageYOffset;
			} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
				x = document.body.scrollLeft;
				y = document.body.scrollTop;
			} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
				x = document.documentElement.scrollLeft;
				y = document.documentElement.scrollTop;
			}
			return {left:x, top:y};
		}
	
}

String.prototype.toDOM=function(){
 	 var d=document,i,a=d.createElement("div"),b=d.createDocumentFragment();
 	 a.innerHTML=this;
 	 while(i=a.firstChild)b.appendChild(i);
 	 return b;
	};
