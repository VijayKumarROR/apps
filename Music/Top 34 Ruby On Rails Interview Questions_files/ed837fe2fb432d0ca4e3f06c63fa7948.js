"use strict"
var avia_is_mobile=false;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&'ontouchstart'in document.documentElement)
{avia_is_mobile=true;document.documentElement.className+=' avia_mobile ';}
else
{document.documentElement.className+=' avia_desktop ';}
document.documentElement.className+=' js_active ';(function(){var prefix=['-webkit-','-moz-','-ms-',""],transform="";for(var i in prefix)
{if(prefix[i]+'transform'in document.documentElement.style)
{document.documentElement.className+=" avia_transform ";transform=prefix[i]+'transform'}
if(prefix[i]+'perspective'in document.documentElement.style)document.documentElement.className+=" avia_transform3d ";}
if(typeof document.getElementsByClassName=='function'&&typeof document.documentElement.getBoundingClientRect=="function"&&avia_is_mobile==false)
{if(transform&&window.innerHeight>0)
{setTimeout(function(){var y=0,offsets={},transY=0,parallax=document.getElementsByClassName("av-parallax"),winTop=window.pageYOffset||document.documentElement.scrollTop;for(y=0;y<parallax.length;y++){parallax[y].style.top="0px";offsets=parallax[y].getBoundingClientRect();transY=Math.ceil((window.innerHeight+winTop-offsets.top)*0.3);parallax[y].style[transform]="translate(0px, "+transY+"px)";parallax[y].style.top="auto";parallax[y].className+=' enabled-parallax ';}},50);}}})();;(function($)
{"use strict";$(document).ready(function()
{var aviabodyclasses=AviaBrowserDetection('html');$.avia_utilities=$.avia_utilities||{};if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&'ontouchstart'in document.documentElement)
{$.avia_utilities.isMobile=true;}
else
{$.avia_utilities.isMobile=false;}
if(aviabodyclasses.indexOf("avia-msie-7")==-1)avia_responsive_menu();avia_header_size();avia_sidebar_menu();avia_sticky_submenu();avia_scroll_top_fade();avia_site_preloader();new $.AviaTooltip({"class":'avia-search-tooltip',data:'avia-search-tooltip',event:'click',position:'bottom',scope:"body",attach:'element'});new $.AviaTooltip({"class":'avia-related-tooltip',data:'avia-related-tooltip',scope:".related_posts, .av-share-box",attach:'element',delay:0});new $.AviaAjaxSearch({scope:'#header'});if($.fn.avia_iso_sort)
$('.grid-sort-container').avia_iso_sort();if($.fn.aviaMegamenu)
$(".main_menu .menu").aviaMegamenu({modify_position:true});$.avia_utilities.avia_ajax_call();});$.avia_utilities=$.avia_utilities||{};$.avia_utilities.avia_ajax_call=function(container)
{if(typeof container=='undefined'){container='body';};$('a.avianolink').on('click',function(e){e.preventDefault();});$('a.aviablank').attr('target','_blank');$(container).avia_activate_lightbox();if($.fn.avia_scrollspy)
{if(container=='body')
{$('body').avia_scrollspy({target:'.main_menu .menu li > a'});}
else
{$('body').avia_scrollspy('refresh');}}
if($.fn.avia_smoothscroll)
$('a[href*=#]',container).avia_smoothscroll(container);avia_small_fixes(container);avia_hover_effect(container);avia_iframe_fix(container);if($.fn.avia_html5_activation&&$.fn.mediaelementplayer)
$(".avia_video, .avia_audio",container).avia_html5_activation({ratio:'16:9'});}
$.avia_utilities.log=function(text,type,extra)
{if(typeof console=='undefined'){return;}if(typeof type=='undefined'){type="log"}type="AVIA-"+type.toUpperCase();console.log("["+type+"] "+text);if(typeof extra!='undefined')console.log(extra);}
function AviaScrollSpy(element,options)
{var self=this;var process=$.proxy(self.process,self),refresh=$.proxy(self.refresh,self),$element=$(element).is('body')?$(window):$(element),href
self.$body=$('body')
self.$win=$(window)
self.options=$.extend({},$.fn.avia_scrollspy.defaults,options)
self.selector=(self.options.target||((href=$(element).attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''))||'')
self.activation_true=false;if(self.$body.find(self.selector+"[href*=#]").length)
{self.$scrollElement=$element.on('scroll.scroll-spy.data-api',process);self.$win.on('av-height-change',refresh);self.$body.on('av_resize_finished',refresh);self.activation_true=true;self.checkFirst();setTimeout(function()
{self.refresh()
self.process()},100);}}
AviaScrollSpy.prototype={constructor:AviaScrollSpy,checkFirst:function(){var current=window.location.href.split('#')[0],matching_link=this.$body.find(this.selector+"[href='"+current+"']").attr('href',current+'#top');},refresh:function(){if(!this.activation_true)return;var self=this,$targets
this.offsets=$([])
this.targets=$([])
$targets=this.$body.find(this.selector).map(function(){var $el=$(this),href=$el.data('target')||$el.attr('href'),hash=this.hash,hash=hash.replace(/\//g,""),$href=/^#\w/.test(hash)&&$(hash)
return($href&&$href.length&&[[$href.position().top+(!$.isWindow(self.$scrollElement.get(0))&&self.$scrollElement.scrollTop()),href]])||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){self.offsets.push(this[0])
self.targets.push(this[1])})},process:function(){if(!this.offsets)return;if(isNaN(this.options.offset))this.options.offset=0;var scrollTop=this.$scrollElement.scrollTop()+this.options.offset,scrollHeight=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,maxScroll=scrollHeight-this.$scrollElement.height(),offsets=this.offsets,targets=this.targets,activeTarget=this.activeTarget,i
if(scrollTop>=maxScroll){return activeTarget!=(i=targets.last()[0])&&this.activate(i)}
for(i=offsets.length;i--;){activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(!offsets[i+1]||scrollTop<=offsets[i+1])&&this.activate(targets[i])}},activate:function(target){var active,selector
this.activeTarget=target
$(this.selector).parent('.'+this.options.applyClass).removeClass(this.options.applyClass)
selector=this.selector
+'[data-target="'+target+'"],'
+this.selector+'[href="'+target+'"]'
active=$(selector).parent('li').addClass(this.options.applyClass)
if(active.parent('.sub-menu').length){active=active.closest('li.dropdown_ul_available').addClass(this.options.applyClass)}
active.trigger('activate')}}
$.fn.avia_scrollspy=function(option){return this.each(function(){var $this=$(this),data=$this.data('scrollspy'),options=typeof option=='object'&&option
if(!data)$this.data('scrollspy',(data=new AviaScrollSpy(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.avia_scrollspy.Constructor=AviaScrollSpy
$.fn.avia_scrollspy.defaults={offset:(parseInt($('.html_header_sticky #main').data('scroll-offset'),10))+($(".html_header_sticky #header_main_alternate").outerHeight())+($(".html_header_sticky.html_header_unstick_top_disabled #header_meta").outerHeight())+1+parseInt($('html').css('margin-top'),10),applyClass:'current-menu-item'}
function avia_site_preloader()
{var win=$(window),preloader_active=$('html.av-preloader-active'),pre_wrap;if(preloader_active.length)
{var hide=function()
{pre_wrap.avia_animate({opacity:0},function()
{preloader_active.removeClass('av-preloader-active');});};pre_wrap=$('.av-siteloader-wrap');setTimeout(function()
{$.avia_utilities.preload({container:preloader_active,global_callback:hide});setTimeout(function()
{if(preloader_active.is('.av-preloader-active'))
{ 
hide();$.avia_utilities.log('Hide Preloader (Fallback)');}},4000);if(pre_wrap.is('.av-transition-enabled'))
{var comp=new RegExp(location.host),exclude=" .no-transition, .mfp-iframe, .lightbox-added, .grid-links-ajax a, #menu-item-search a";preloader_active.on('click','a:not('+exclude+')',function(e)
{if(!e.metaKey&&!e.ctrlKey&&!e.altKey&&!e.shiftKey)
{var link=this;if(comp.test(link.href)&&link.href.split('#')[0]!=location.href.split('#')[0]&&link.target=="")
{if(link.href.indexOf('mailto:')==-1&&link.href.indexOf('add-to-cart=')==-1)
{e.preventDefault();preloader_active.addClass('av-preloader-active av-preloader-reactive');pre_wrap.avia_animate({opacity:1},function()
{window.location=link.href;});}}}});}},500);}}
function AviaBrowserDetection(outputClassElement)
{if(typeof($.browser)!=='undefined')
{var bodyclass='',version=$.browser.version?parseInt($.browser.version):"";if($.browser.msie){bodyclass+='avia-msie';}else if($.browser.webkit){bodyclass+='avia-webkit';}else if($.browser.mozilla)
{bodyclass+='avia-mozilla';}
if($.browser.version)bodyclass+=' '+bodyclass+'-'+version+' ';if($.browser.name)bodyclass+=' avia-'+$.browser.name+' avia-'+$.browser.name+'-'+version+' ';if($.browser.ipad){bodyclass+=' avia-ipad ';}else if($.browser.iphone){bodyclass+=' avia-iphone ';}else if($.browser.android){bodyclass+=' avia-android ';}else if($.browser.win){bodyclass+=' avia-windows ';}else if($.browser.mac){bodyclass+=' avia-mac ';}else if($.browser.linux){bodyclass+=' avia-linux ';}}
if(outputClassElement)$(outputClassElement).addClass(bodyclass)
return bodyclass;}
function avia_responsive_menu()
{var $html=$('html'),win=$(window),header=$('.responsive #header');if(!header.length)return;var menu=header.find('.main_menu ul:eq(0)'),first_level_items=menu.find('>li').length,bottom_menu=$('html').is('.html_bottom_nav_header'),container=$('#wrap_all'),show_menu_btn=$('#advanced_menu_toggle'),hide_menu_btn=$('#advanced_menu_hide'),mobile_advanced=menu.clone().attr({id:"mobile-advanced","class":""}),sub_hidden=$html.is('.html_header_mobile_behavior'),insert_menu=function()
{if(first_level_items==0)
{show_menu_btn.remove();}
else
{var after_menu=$('#header .logo');show_menu_btn.insertAfter(after_menu);mobile_advanced.find('.noMobile').remove();mobile_advanced.prependTo(container);hide_menu_btn.prependTo(container);}},set_height=function()
{var height=mobile_advanced.outerHeight(true),win_h=win.height();if(height<win_h)height=win_h;container.css({'height':height});mobile_advanced.css({position:'absolute','min-height':win_h});},hide_menu=function()
{container.removeClass('show_mobile_menu');setTimeout(function(){container.css({'height':"auto",'overflow':'hidden','minHeight':0});mobile_advanced.css({display:'none'});},600);return false;},autohide=function()
{if(container.is('.show_mobile_menu')&&hide_menu_btn.css('display')=='none'){hide_menu();}},show_menu=function()
{if(container.is('.show_mobile_menu'))
{hide_menu();}
else
{win.scrollTop(0);mobile_advanced.css({display:'block'});setTimeout(function(){container.addClass('show_mobile_menu');},10);set_height();}
return false;};$html.on('click','#mobile-advanced li a, #mobile-advanced .mega_menu_title',function()
{var current=$(this);if(sub_hidden)
{var list_item=current.siblings('ul, .avia_mega_div');if(current.siblings('ul').children('.avia_mega_text_block').length&&current.siblings('ul').children('li').length==1){list_item='';}
if(list_item.length)
{if(list_item.hasClass('visible_sublist'))
{list_item.removeClass('visible_sublist');}
else
{list_item.addClass('visible_sublist');}
set_height();return false;}}
if(current.filter('[href*=#]').length)
{container.removeClass('show_mobile_menu');container.css({'height':"auto"});}});show_menu_btn.click(show_menu);hide_menu_btn.click(hide_menu);win.on('debouncedresize',autohide);insert_menu();}
$.fn.avia_html5_activation=function(options)
{var defaults={ratio:'16:9'};var options=$.extend(defaults,options),isMobile=$.avia_utilities.isMobile;this.each(function()
{var fv=$(this),id_to_apply='#'+fv.attr('id'),posterImg=fv.attr('poster');fv.mediaelementplayer({defaultVideoWidth:480,defaultVideoHeight:270,videoWidth:-1,videoHeight:-1,audioWidth:400,audioHeight:30,startVolume:0.8,loop:false,enableAutosize:false,features:['playpause','progress','current','duration','tracks','volume'],alwaysShowControls:false,iPadUseNativeControls:false,iPhoneUseNativeControls:false,AndroidUseNativeControls:false,alwaysShowHours:false,showTimecodeFrameCount:false,framesPerSecond:25,enableKeyboard:true,pauseOtherPlayers:false,poster:posterImg,success:function(mediaElement,domObject){setTimeout(function()
{if(mediaElement.pluginType=='flash')
{mediaElement.addEventListener('canplay',function(){fv.trigger('av-mediajs-loaded');},false);}
else
{fv.trigger('av-mediajs-loaded').addClass('av-mediajs-loaded');}
mediaElement.addEventListener('ended',function(){fv.trigger('av-mediajs-ended');},false);},10);},error:function(){},keyActions:[]});});}
function avia_hover_effect(container)
{if($.avia_utilities.isMobile)return;var overlay="",cssTrans=$.avia_utilities.supports('transition');if(container=='body')
{var elements=$('#main a img').parents('a').not('.noLightbox, .noLightbox a, .avia-gallery-thumb a, .avia-layerslider a, .noHover, .noHover a').add('#main .avia-hover-fx');}
else
{var elements=$('a img',container).parents('a').not('.noLightbox, .noLightbox a, .avia-gallery-thumb a, .avia-layerslider a, .noHover, .noHover a').add('.avia-hover-fx',container);}
elements.each(function(e)
{var link=$(this),current=link.find('img:first');if(current.hasClass('alignleft'))link.addClass('alignleft').css({float:'left',margin:0,padding:0});if(current.hasClass('alignright'))link.addClass('alignright').css({float:'right',margin:0,padding:0});if(current.hasClass('aligncenter'))link.addClass('aligncenter').css({float:'none','text-align':'center',margin:0,padding:0});if(current.hasClass('alignnone'))
{link.addClass('alignnone').css({margin:0,padding:0});;if(!link.css('display')||link.css('display')=='inline'){link.css({display:'inline-block'});}}
if(!link.css('position')||link.css('position')=='static'){link.css({position:'relative',overflow:'hidden'});}
var url=link.attr('href'),span_class="overlay-type-video",opa=link.data('opacity')||0.7,overlay_offset=5,overlay=link.find('.image-overlay');if(url)
{if(url.match(/(jpg|gif|jpeg|png|tif)/))span_class="overlay-type-image";if(!url.match(/(jpg|gif|jpeg|png|\.tif|\.mov|\.swf|vimeo\.com|youtube\.com)/))span_class="overlay-type-extern";}
if(!overlay.length)
{overlay=$("<span class='image-overlay "+span_class+"'><span class='image-overlay-inside'></span></span>").appendTo(link);}
link.on('mouseenter',function(e)
{var current=link.find('img:first'),_self=current.get(0),outerH=current.outerHeight(),outerW=current.outerWidth(),pos=current.position(),linkCss=link.css('display'),overlay=link.find('.image-overlay');if(outerH>100)
{if(!overlay.length)
{overlay=$("<span class='image-overlay "+span_class+"'><span class='image-overlay-inside'></span></span>").appendTo(link);}
if(link.height()==0){link.addClass(_self.className);_self.className="";}
if(!linkCss||linkCss=='inline'){link.css({display:'block'});}
overlay.css({left:(pos.left-overlay_offset)+parseInt(current.css("margin-left"),10),top:pos.top+parseInt(current.css("margin-top"),10)}).css({overflow:'hidden',display:'block','height':outerH,'width':(outerW+(2*overlay_offset))});if(cssTrans===false)overlay.stop().animate({opacity:opa},400);}
else
{overlay.css({display:"none"});}}).on('mouseleave',elements,function(){if(overlay.length)
{if(cssTrans===false)overlay.stop().animate({opacity:0},400);}});});}
(function($)
{$.fn.avia_smoothscroll=function(apply_to_container)
{if(!this.length)return;var the_win=$(window),$header=$('#header'),$main=$('.html_header_top.html_header_sticky #main').not('.page-template-template-blank-php #main'),$meta=$('.html_header_top.html_header_unstick_top_disabled #header_meta'),$alt=$('.html_header_top #header_main_alternate'),shrink=$('.html_header_top.html_header_shrinking').length,fixedMainPadding=0,isMobile=$.avia_utilities.isMobile,sticky_sub=$('.sticky_placeholder:first'),calc_main_padding=function()
{if($header.css('position')=="fixed")
{var tempPadding=parseInt($main.data('scroll-offset'),10)||0,non_shrinking=parseInt($meta.outerHeight(),10)||0,non_shrinking2=parseInt($alt.outerHeight(),10)||0;if(tempPadding>0&&shrink)
{tempPadding=(tempPadding/2)+non_shrinking+non_shrinking2;}
else
{tempPadding=tempPadding+non_shrinking+non_shrinking2;}
tempPadding+=parseInt($('html').css('margin-top'),10);fixedMainPadding=tempPadding;}
else
{fixedMainPadding=parseInt($('html').css('margin-top'),10);}};if(isMobile)shrink=false;calc_main_padding();the_win.on("debouncedresize av-height-change",calc_main_padding);var hash=window.location.hash.replace(/\//g,"");if(fixedMainPadding>0&&hash&&apply_to_container=='body'&&hash.charAt(1)!="!"&&hash.indexOf("=")===-1)
{var scroll_to_el=$(hash),modifier=0;if(scroll_to_el.length)
{the_win.on('scroll.avia_first_scroll',function()
{setTimeout(function(){if(sticky_sub.length&&scroll_to_el.offset().top>sticky_sub.offset().top){modifier=sticky_sub.outerHeight()-3;}
the_win.off('scroll.avia_first_scroll').scrollTop(scroll_to_el.offset().top-fixedMainPadding-modifier);},10);});}}
return this.each(function()
{$(this).click(function(e){var newHash=this.hash.replace(/\//g,""),clicked=$(this),data=clicked.data();if(newHash!=''&&newHash!='#'&&newHash!='#prev'&&newHash!='#next'&&!clicked.is('.comment-reply-link, #cancel-comment-reply-link, .no-scroll'))
{var container="",originHash="";if("#next-section"==newHash)
{originHash=newHash;container=clicked.parents('.container_wrap:eq(0)').nextAll('.container_wrap:eq(0)');newHash='#'+container.attr('id');}
else
{container=$(this.hash.replace(/\//g,""));}
if(container.length)
{var cur_offset=the_win.scrollTop(),container_offset=container.offset().top,target=container_offset-fixedMainPadding,hash=window.location.hash,hash=hash.replace(/\//g,""),oldLocation=window.location.href.replace(hash,''),newLocation=this,duration=data.duration||1200,easing=data.easing||'easeInOutQuint';if(sticky_sub.length&&container_offset>sticky_sub.offset().top){target-=sticky_sub.outerHeight()-3;}
if(oldLocation+newHash==newLocation||originHash)
{if(cur_offset!=target)
{if(!(cur_offset==0&&target<=0))
{$('html:not(:animated),body:not(:animated)').animate({scrollTop:target},duration,easing,function(){if(window.history.replaceState)
window.history.replaceState("","",newHash);});}}
e.preventDefault();}}}});});};})(jQuery);function avia_iframe_fix(container)
{var iframe=jQuery('iframe[src*="youtube.com"]:not(.av_youtube_frame)',container),youtubeEmbed=jQuery('iframe[src*="youtube.com"]:not(.av_youtube_frame) object, iframe[src*="youtube.com"]:not(.av_youtube_frame) embed',container).attr('wmode','opaque');iframe.each(function()
{var current=jQuery(this),src=current.attr('src');if(src)
{if(src.indexOf('?')!==-1)
{src+="&wmode=opaque";}
else
{src+="?wmode=opaque";}
current.attr('src',src);}});}
function avia_small_fixes(container)
{if(!container)container=document;var win=jQuery(window),iframes=jQuery('.avia-iframe-wrap iframe:not(.avia-slideshow iframe):not( iframe.no_resize):not(.avia-video iframe)',container),adjust_iframes=function()
{iframes.each(function(){var iframe=jQuery(this),parent=iframe.parent(),proportions=56.25;if(this.width&&this.height)
{proportions=(100/this.width)*this.height;parent.css({"padding-bottom":proportions+"%"});}});};adjust_iframes();}
(function($)
{$.fn.avia_activate_lightbox=function(variables)
{var defaults={groups:['.avia-slideshow','.avia-gallery','.isotope','.post-entry','.sidebar','#main','.main_menu'],autolinkElements:'a.lightbox, a[rel^="prettyPhoto"], a[rel^="lightbox"], a[href$=jpg], a[href$=png], a[href$=gif], a[href$=jpeg], a[href*=".jpg?"], a[href*=".png?"], a[href*=".gif?"], a[href*=".jpeg?"], a[href$=".mov"] , a[href$=".swf"] , a:regex(href, .vimeo\.com/[0-9]) , a[href*="youtube.com/watch"] , a[href*="screenr.com"], a[href*="iframe=true"]',videoElements:'a[href$=".mov"] , a[href$=".swf"] , a:regex(href, .vimeo\.com/[0-9]) , a[href*="youtube.com/watch"] , a[href*="screenr.com"], a[href*="iframe=true"]',exclude:'.noLightbox, .noLightbox a, .fakeLightbox, .lightbox-added, a[href*="dropbox.com"]',},options=$.extend({},defaults,variables),av_popup={type:'image',mainClass:'avia-popup mfp-zoom-in',tLoading:'',tClose:'',removalDelay:300,closeBtnInside:true,closeOnContentClick:false,midClick:true,fixedContentPos:false,image:{titleSrc:function(item){var title=item.el.attr('title');if(!title)title=item.el.find('img').attr('title');if(!title)title=item.el.parent().next('.wp-caption-text').html();if(typeof title=="undefined")return"";return title;}},gallery:{tPrev:'',tNext:'',tCounter:'%curr% / %total%',enabled:true,preload:[1,1]},callbacks:{beforeOpen:function()
{if(this.st.el&&this.st.el.data('fixed-content'))
{this.fixedContentPos=true;}},open:function()
{$.magnificPopup.instance.next=function(){var self=this;self.wrap.removeClass('mfp-image-loaded');setTimeout(function(){$.magnificPopup.proto.next.call(self);},120);}
$.magnificPopup.instance.prev=function(){var self=this;self.wrap.removeClass('mfp-image-loaded');setTimeout(function(){$.magnificPopup.proto.prev.call(self);},120);}
if(this.st.el&&this.st.el.data('av-extra-class'))
{this.wrap.addClass(this.currItem.el.data('av-extra-class'));}},imageLoadComplete:function()
{var self=this;setTimeout(function(){self.wrap.addClass('mfp-image-loaded');},16);},change:function(){if(this.currItem.el)
{var current=this.currItem.el;this.content.find('.av-extra-modal-content, .av-extra-modal-markup').remove();if(current.data('av-extra-content'))
{var extra=current.data('av-extra-content');this.content.append("<div class='av-extra-modal-content'>"+extra+"</div>");}
if(current.data('av-extra-markup'))
{var markup=current.data('av-extra-markup');this.wrap.append("<div class='av-extra-modal-markup'>"+markup+"</div>");}}},}},active=!$('html').is('.av-custom-lightbox');if(!active)return this;return this.each(function()
{var container=$(this),videos=$(options.videoElements,this).not(options.exclude).addClass('mfp-iframe'),ajaxed=!container.is('body')&&!container.is('.ajax_slide');for(var i=0;i<options.groups.length;i++)
{$(options.groups[i]).each(function()
{var links=$(options.autolinkElements,this);if(ajaxed)links.removeClass('lightbox-added');links.not(options.exclude).addClass('lightbox-added').magnificPopup(av_popup);});}});}})(jQuery);(function($)
{$.fn.aviaMegamenu=function(variables)
{var defaults={modify_position:true,delay:300};var options=$.extend(defaults,variables),win=$(window),width_select=$('html').is('.html_header_sidebar')?"#main":"#header",the_main=$(width_select+' .container:first'),css_block=$("<style type='text/css' id='av-browser-width-mm'></style>").appendTo('head:first'),calc_dimensions=function()
{var css="",w_12=Math.round(the_main.width());css+=" #header .three.units{width:"+(w_12*0.25)+"px;}";css+=" #header .six.units{width:"+(w_12*0.50)+"px;}";css+=" #header .nine.units{width:"+(w_12*0.75)+"px;}";css+=" #header .twelve.units{width:"+(w_12)+"px;}";try{css_block.text(css);}
catch(err){css_block.remove();css_block=$("<style type='text/css' id='av-browser-width-mm'>"+css+"</style>").appendTo('head:first');}};if($('.avia_mega_div').length>0)
{win.on('debouncedresize',calc_dimensions);calc_dimensions();}
return this.each(function()
{var the_html=$('html:first'),main=$('#main .container:first'),left_menu=the_html.filter('.html_menu_left, .html_logo_center').length,isMobile=$.avia_utilities.isMobile,menu=$(this),menuItems=menu.find(">li:not(.ignore_menu)"),megaItems=menuItems.find(">div").parent().css({overflow:'hidden'}),menuActive=menu.find('>.current-menu-item>a, >.current_page_item>a'),dropdownItems=menuItems.find(">ul").parent(),parentContainer=menu.parent(),mainMenuParent=menu.parents('.main_menu').eq(0),parentContainerWidth=parentContainer.width(),delayCheck={},mega_open=[];if(!menuActive.length){menu.find('.current-menu-ancestor:eq(0) a:eq(0), .current_page_ancestor:eq(0) a:eq(0)').parent().addClass('active-parent-item')}
if(!the_html.is('.html_header_top')){options.modify_position=false;}
menuItems.on('click','a',function()
{if(this.href==window.location.href+"#"||this.href==window.location.href+"/#")
return false;});menuItems.each(function()
{var item=$(this),pos=item.position(),megaDiv=item.find("div:first").css({opacity:0,display:"none"}),normalDropdown="";if(!megaDiv.length)
{normalDropdown=item.find(">ul").css({display:"none"});}
if(megaDiv.length||normalDropdown.length)
{var link=item.addClass('dropdown_ul_available').find('>a');link.append('<span class="dropdown_available"></span>');if(typeof link.attr('href')!='string'||link.attr('href')=="#"){link.css('cursor','default').click(function(){return false;});}}
if(options.modify_position&&megaDiv.length)
{item.one('mouseenter',function(){calc_offset(item,pos,megaDiv,parentContainerWidth)});}});function calc_offset(item,pos,megaDiv,parentContainerWidth)
{if(!left_menu)
{if(pos.left+megaDiv.width()<parentContainerWidth)
{megaDiv.css({right:-megaDiv.outerWidth()+item.outerWidth()});}
else if(pos.left+megaDiv.width()>parentContainerWidth)
{megaDiv.css({right:-mainMenuParent.outerWidth()+(pos.left+item.outerWidth())});}}
else
{if(megaDiv.width()>pos.left+item.outerWidth())
{megaDiv.css({left:(pos.left*-1)});}
else if(pos.left+megaDiv.width()>parentContainerWidth)
{megaDiv.css({left:(megaDiv.width()-pos.left)*-1});}}}
function megaDivShow(i)
{if(delayCheck[i]==true)
{var item=megaItems.filter(':eq('+i+')').css({overflow:'visible'}).find("div:first"),link=megaItems.filter(':eq('+i+')').find("a:first");mega_open["check"+i]=true;item.stop().css('display','block').animate({opacity:1},300);if(item.length)
{link.addClass('open-mega-a');}}}
function megaDivHide(i)
{if(delayCheck[i]==false)
{megaItems.filter(':eq('+i+')').find(">a").removeClass('open-mega-a');var listItem=megaItems.filter(':eq('+i+')'),item=listItem.find("div:first");item.stop().css('display','block').animate({opacity:0},300,function()
{$(this).css('display','none');listItem.css({overflow:'hidden'});mega_open["check"+i]=false;});}}
if(isMobile)
{megaItems.each(function(i){$(this).bind('click',function()
{if(mega_open["check"+i]!=true)return false;});});}
megaItems.each(function(i){$(this).hover(function()
{delayCheck[i]=true;setTimeout(function(){megaDivShow(i);},options.delay);},function()
{delayCheck[i]=false;setTimeout(function(){megaDivHide(i);},options.delay);});});dropdownItems.find('li').andSelf().each(function()
{var currentItem=$(this),sublist=currentItem.find('ul:first'),showList=false;if(sublist.length)
{sublist.css({display:'block',opacity:0,visibility:'hidden'});var currentLink=currentItem.find('>a');currentLink.bind('mouseenter',function()
{sublist.stop().css({visibility:'visible'}).animate({opacity:1});});currentItem.bind('mouseleave',function()
{sublist.stop().animate({opacity:0},function()
{sublist.css({visibility:'hidden'});});});}});});};})(jQuery);$.fn.avia_iso_sort=function(options)
{return this.each(function()
{var the_body=$('body'),container=$(this),portfolio_id=container.data('portfolio-id'),parentContainer=container.parents('.entry-content-wrapper, .avia-fullwidth-portfolio'),filter=parentContainer.find('.sort_width_container[data-portfolio-id="'+portfolio_id+'"]').find('#js_sort_items').css({visibility:"visible",opacity:0}),links=filter.find('a'),imgParent=container.find('.grid-image'),isoActive=false,items=$('.post-entry',container);function applyIso()
{container.addClass('isotope_activated').isotope({layoutMode:'fitRows',itemSelector:'.flex_column'});container.isotope('on','layoutComplete',function()
{container.css({overflow:'visible'});the_body.trigger('av_resize_finished');});isoActive=true;setTimeout(function(){parentContainer.addClass('avia_sortable_active');},0);};links.bind('click',function()
{var current=$(this),selector=current.data('filter'),linktext=current.html(),activeCat=parentContainer.find('.av-current-sort-title');if(activeCat.length)activeCat.html(linktext);links.removeClass('active_sort');current.addClass('active_sort');container.attr('id','grid_id_'+selector);parentContainer.find('.open_container .ajax_controlls .avia_close').trigger('click');container.isotope({layoutMode:'fitRows',itemSelector:'.flex_column',filter:'.'+selector});return false;});$(window).on('debouncedresize',function()
{applyIso();});$.avia_utilities.preload({container:container,single_callback:function()
{filter.animate({opacity:1},400);applyIso();setTimeout(function(){applyIso();});imgParent.css({height:'auto'}).each(function(i)
{var currentLink=$(this);setTimeout(function()
{currentLink.animate({opacity:1},1500);},(100*i));});}});});};function avia_sticky_submenu()
{var win=$(window),html=$('html:first'),header=$('.html_header_top.html_header_sticky #header'),html_margin=parseInt($('html:first').css('margin-top'),10),setWitdth=$('.html_header_sidebar #main, .boxed #main'),menus=$('.av-submenu-container'),bordermod=html.is('.html_minimal_header')?0:1,calc_margin=function()
{html_margin=parseInt(html.css('margin-top'),10);if(!$('.mobile_menu_toggle:visible').length)
{$('.av-open-submenu').removeClass('av-open-submenu');}},calc_values=function()
{var content_width=setWitdth.width();html_margin=parseInt(html.css('margin-top'),10);menus.width(content_width);},check=function(placeholder,no_timeout)
{var menu_pos=this.offset().top,top_pos=placeholder.offset().top,scrolled=win.scrollTop(),modifier=html_margin,fixed=false;if(header.length)modifier+=header.outerHeight()+parseInt(header.css('margin-top'),10);if(scrolled+modifier>top_pos)
{if(!fixed)
{this.css({top:modifier-bordermod,position:'fixed'});fixed=true}}
else
{this.css({top:'auto',position:'absolute'});fixed=false}},toggle=function(e)
{e.preventDefault();var clicked=$(this),menu=clicked.siblings('.av-subnav-menu');if(menu.hasClass('av-open-submenu'))
{menu.removeClass('av-open-submenu');}
else
{menu.addClass('av-open-submenu');}};win.on("debouncedresize av-height-change",calc_margin);calc_margin();if(setWitdth.length)
{win.on("debouncedresize av-height-change",calc_values);calc_values();}
$(".av-sticky-submenu").each(function()
{var menu=$(this),placeholder=menu.next('.sticky_placeholder'),mobile_button=menu.find('.mobile_menu_toggle');win.on('scroll',function(){window.requestAnimationFrame($.proxy(check,menu,placeholder))});if(mobile_button.length)
{mobile_button.on('click',toggle);}});html.on('click','.av-submenu-hidden .av-open-submenu li a',function()
{var current=$(this);var list_item=current.siblings('ul, .avia_mega_div');if(list_item.length)
{if(list_item.hasClass('av-visible-sublist'))
{list_item.removeClass('av-visible-sublist');}
else
{list_item.addClass('av-visible-sublist');}
return false;}});$('.avia_mobile').on('click','.av-menu-mobile-disabled li a',function()
{var current=$(this);var list_item=current.siblings('ul');if(list_item.length)
{if(list_item.hasClass('av-visible-mobile-sublist'))
{}
else
{$('.av-visible-mobile-sublist').removeClass('av-visible-mobile-sublist');list_item.addClass('av-visible-mobile-sublist');return false;}}});}
function avia_sidebar_menu()
{var win=$(window),main=$('#main'),sb_header=$('.html_header_sidebar #header_main'),sidebar=$('.html_header_sidebar #header.av_conditional_sticky');if(!sb_header.length)return;if(!sidebar.length)return;var innerSidebar=$('#header_main'),wrap=$('#wrap_all'),subtract=parseInt($('html').css('margin-top'),10),calc_values=function()
{if(innerSidebar.outerHeight()<win.height())
{sidebar.addClass('av_always_sticky');}
else
{sidebar.removeClass('av_always_sticky');}
wrap.css({'min-height':win.height()-subtract});};calc_values();win.on("debouncedresize av-height-change",calc_values);}
function av_change_class($element,change_method,class_name)
{if($element[0].classList)
{if(change_method=="add")
{$element[0].classList.add(class_name);}
else
{$element[0].classList.remove(class_name);}}
else
{if(change_method=="add")
{$element.addClass(class_name);}
else
{$element.removeClass(class_name);}}}
function avia_header_size()
{var win=$(window),header=$('.html_header_top.html_header_sticky #header'),unsticktop=$('.av_header_unstick_top');if(!header.length&&!unsticktop.length)return;var logo=$('#header_main .container .logo img, #header_main .container .logo a'),elements=$('#header_main .container:first, #header_main .main_menu ul:first-child > li > a:not(.avia_mega_div a, #header_main_alternate a), #header_main #menu-item-shop .cart_dropdown_link'),el_height=$(elements).filter(':first').height(),isMobile=$.avia_utilities.isMobile,scroll_top=$('#scroll-top-link'),transparent=header.is('.av_header_transparency'),shrinking=header.is('.av_header_shrinking'),topbar_height=header.find('#header_meta').outerHeight(),set_height=function()
{var st=win.scrollTop(),newH=0,st_real=st;if(unsticktop)st-=topbar_height;if(st<0)st=0;if(shrinking&&!isMobile)
{if(st<el_height/2)
{newH=el_height-st;if(st<=0){newH=el_height;}
av_change_class(header,'remove','header-scrolled');}
else
{newH=el_height/2;av_change_class(header,'add','header-scrolled');}
if(st-30<el_height)
{av_change_class(header,'remove','header-scrolled-full');}
else
{av_change_class(header,'add','header-scrolled-full');}
elements.css({'height':newH+'px','lineHeight':newH+'px'});logo.css({'maxHeight':newH+'px'});}
if(unsticktop.length)
{if(st<=0)
{if(st_real<=0)st_real=0;unsticktop.css({"margin-top":"-"+st_real+"px"});}
else
{unsticktop.css({"margin-top":"-"+topbar_height+"px"});}}
if(transparent)
{if(st>50)
{av_change_class(header,'remove','av_header_transparency');}
else
{av_change_class(header,'add','av_header_transparency');}}}
if($('body').is('.avia_deactivate_menu_resize'))shrinking=false;if(!transparent&&!shrinking&&!unsticktop.length)return;win.on('debouncedresize',function(){el_height=$(elements).attr('style',"").filter(':first').height();set_height();});win.on('scroll',function(){window.requestAnimationFrame(set_height)});set_height();}
function avia_scroll_top_fade()
{var win=$(window),timeo=false,scroll_top=$('#scroll-top-link'),set_status=function()
{var st=win.scrollTop();if(st<500)
{scroll_top.removeClass('avia_pop_class');}
else if(!scroll_top.is('.avia_pop_class'))
{scroll_top.addClass('avia_pop_class');}};win.on('scroll',function(){window.requestAnimationFrame(set_status)});set_status();}
$.AviaAjaxSearch=function(options)
{var defaults={delay:300,minChars:3,scope:'body'}
this.options=$.extend({},defaults,options);this.scope=$(this.options.scope);this.timer=false;this.lastVal="";this.bind_events();}
$.AviaAjaxSearch.prototype={bind_events:function()
{this.scope.on('keyup','#s:not(".av_disable_ajax_search #s")',$.proxy(this.try_search,this));},try_search:function(e)
{clearTimeout(this.timer);if(e.currentTarget.value.length>=this.options.minChars&&this.lastVal!=$.trim(e.currentTarget.value))
{this.timer=setTimeout($.proxy(this.do_search,this,e),this.options.delay);}},do_search:function(e)
{var obj=this,currentField=$(e.currentTarget).attr("autocomplete","off"),form=currentField.parents('form:eq(0)'),results=form.find('.ajax_search_response'),loading=$('<div class="ajax_load"><span class="ajax_load_inner"></span></div>'),action=form.attr('action'),values=form.serialize();values+='&action=avia_ajax_search';if(action.indexOf('?')!=-1)
{action=action.split('?');values+="&"+action[1];}
if(!results.length)results=$('<div class="ajax_search_response"></div>').appendTo(form);if(results.find('.ajax_not_found').length&&e.currentTarget.value.indexOf(this.lastVal)!=-1)return;this.lastVal=e.currentTarget.value;$.ajax({url:avia_framework_globals.ajaxurl,type:"POST",data:values,beforeSend:function()
{loading.insertAfter(currentField);},success:function(response)
{if(response==0)response="";results.html(response);},complete:function()
{loading.remove();}});}}
$.AviaTooltip=function(options)
{var defaults={delay:1500,delayOut:300,delayHide:0,"class":"avia-tooltip",scope:"body",data:"avia-tooltip",attach:"body",event:'mouseenter',position:'top',extraClass:'avia-tooltip-class',permanent:false}
this.options=$.extend({},defaults,options);this.body=$('body');this.scope=$(this.options.scope);this.tooltip=$('<div class="'+this.options['class']+' avia-tt"><span class="avia-arrow-wrap"><span class="avia-arrow"></span></span></div>');this.inner=$('<div class="inner_tooltip"></div>').prependTo(this.tooltip);this.open=false;this.timer=false;this.active=false;this.bind_events();}
$.AviaTooltip.openTTs=[];$.AviaTooltip.prototype={bind_events:function()
{var perma_tooltips='.av-permanent-tooltip [data-'+this.options.data+']',default_tooltips='[data-'+this.options.data+']:not( .av-permanent-tooltip [data-'+this.options.data+'])';this.scope.on('av_permanent_show',perma_tooltips,$.proxy(this.display_tooltip,this));$(perma_tooltips).addClass('av-perma-tooltip').trigger('av_permanent_show');this.scope.on(this.options.event+' mouseleave',default_tooltips,$.proxy(this.start_countdown,this));if(this.options.event!='click')
{this.scope.on('mouseleave',default_tooltips,$.proxy(this.hide_tooltip,this));}
else
{this.body.on('mousedown',$.proxy(this.hide_tooltip,this));}},start_countdown:function(e)
{clearTimeout(this.timer);if(e.type==this.options.event)
{var delay=this.options.event=='click'?0:this.open?0:this.options.delay;this.timer=setTimeout($.proxy(this.display_tooltip,this,e),delay);}
else if(e.type=='mouseleave')
{this.timer=setTimeout($.proxy(this.stop_instant_open,this,e),this.options.delayOut);}
e.preventDefault();},reset_countdown:function(e)
{clearTimeout(this.timer);this.timer=false;},display_tooltip:function(e)
{var target=this.options.event=="click"?e.target:e.currentTarget,element=$(target),text=element.data(this.options.data),newTip=element.data('avia-created-tooltip'),extraClass=element.data('avia-tooltip-class'),attach=this.options.attach=='element'?element:this.body,offset=this.options.attach=='element'?element.position():element.offset(),position=element.data('avia-tooltip-position'),align=element.data('avia-tooltip-alignment'),force_append=false;text=$.trim(text);if(element.is('.av-perma-tooltip'))
{offset={top:0,left:0};attach=element;force_append=true;}
if(text=="")return;if(position==""||typeof position=='undefined')position=this.options.position;if(align==""||typeof align=='undefined')align='center';if(typeof newTip!='undefined')
{newTip=$.AviaTooltip.openTTs[newTip];}
else
{this.inner.html(text);newTip=this.tooltip.clone();if(this.options.attach=='element'&&force_append!==true)
{newTip.insertAfter(attach);}
else
{newTip.appendTo(attach);}
if(extraClass!="")newTip.addClass(extraClass);}
this.open=true;this.active=newTip;if((newTip.is(':animated:visible')&&e.type=='click')||element.is('.'+this.options['class'])||element.parents('.'+this.options['class']).length!=0)return;var animate1={},animate2={},pos1="",pos2="";if(position=="top"|| position=="bottom")
{switch(align)
{case"left":pos2=offset.left;break;case"right":pos2=offset.left+element.outerWidth()-newTip.outerWidth();break;default:pos2=(offset.left+(element.outerWidth()/2))-(newTip.outerWidth()/2);break;}}
else
{switch(align)
{case"top":pos1=offset.top;break;case"bottom":pos1=offset.top+element.outerHeight()-newTip.outerHeight();break;default:pos1=(offset.top+(element.outerHeight()/2))-(newTip.outerHeight()/2);break;}}
switch(position)
{case"top":pos1=offset.top-newTip.outerHeight();animate1={top:pos1-10,left:pos2};animate2={top:pos1};break;case"bottom":pos1=offset.top+element.outerHeight();animate1={top:pos1+10,left:pos2};animate2={top:pos1};break;case"left":pos2=offset.left-newTip.outerWidth();animate1={top:pos1,left:pos2-10};animate2={left:pos2};break;case"right":pos2=offset.left+element.outerWidth();animate1={top:pos1,left:pos2+10};animate2={left:pos2};break;}
animate1['display']="block";animate1['opacity']=0;animate2['opacity']=1;newTip.css(animate1).stop().animate(animate2,200);newTip.find('input, textarea').focus();$.AviaTooltip.openTTs.push(newTip);element.data('avia-created-tooltip',$.AviaTooltip.openTTs.length-1);},hide_tooltip:function(e)
{var element=$(e.currentTarget),newTip,animateTo,position=element.data('avia-tooltip-position'),align=element.data('avia-tooltip-alignment');if(position==""||typeof position=='undefined')position=this.options.position;if(align==""||typeof align=='undefined')align='center';if(this.options.event=='click')
{element=$(e.target);if(!element.is('.'+this.options['class'])&&element.parents('.'+this.options['class']).length==0)
{if(this.active.length){newTip=this.active;this.active=false;}}}
else
{newTip=element.data('avia-created-tooltip');newTip=typeof newTip!='undefined'?$.AviaTooltip.openTTs[newTip]:false;}
if(newTip)
{var animate={opacity:0};switch(position)
{case"top":animate['top']=parseInt(newTip.css('top'),10)-10;break;case"bottom":animate['top']=parseInt(newTip.css('top'),10)+10;break;case"left":animate['left']=parseInt(newTip.css('left'),10)-10;break;case"right":animate['left']=parseInt(newTip.css('left'),10)+10;break;}
newTip.animate(animate,200,function()
{newTip.css({display:'none'});});}},stop_instant_open:function(e)
{this.open=false;}}})(jQuery);
/*!
 * Isotope PACKAGED v2.0.0
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */
(function(t){function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function n(e,i){t.fn[e]=function(n){if("string"==typeof n){for(var s=o.call(arguments,1),a=0,u=this.length;u>a;a++){var p=this[a],h=t.data(p,e);if(h)if(t.isFunction(h[n])&&"_"!==n.charAt(0)){var f=h[n].apply(h,s);if(void 0!==f)return f}else r("no such method '"+n+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; "+"attempted to call '"+n+"'")}return this}return this.each(function(){var o=t.data(this,e);o?(o.option(n),o._init()):(o=new i(this,n),t.data(this,e,o))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),n(t,e)},t.bridget}}var o=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):i(t.jQuery)})(window),function(t){function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,o=function(){};i.addEventListener?o=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(o=function(t,i,o){t[i+o]=o.handleEvent?function(){var i=e(t);o.handleEvent.call(o,i)}:function(){var i=e(t);o.call(t,i)},t.attachEvent("on"+i,t[i+o])});var n=function(){};i.removeEventListener?n=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(n=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(o){t[e+i]=void 0}});var r={bind:o,unbind:n};"function"==typeof define&&define.amd?define("eventie/eventie",r):"object"==typeof exports?module.exports=r:t.eventie=r}(this),function(t){function e(t){"function"==typeof t&&(e.isReady?t():r.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==n.readyState;if(!e.isReady&&!i){e.isReady=!0;for(var o=0,s=r.length;s>o;o++){var a=r[o];a()}}}function o(o){return o.bind(n,"DOMContentLoaded",i),o.bind(n,"readystatechange",i),o.bind(t,"load",i),e}var n=t.document,r=[];e.isReady=!1,"function"==typeof define&&define.amd?(e.isReady="function"==typeof requirejs,define("doc-ready/doc-ready",["eventie/eventie"],o)):t.docReady=o(t.eventie)}(this),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var o=t.prototype,n=this,r=n.EventEmitter;o.getListeners=function(t){var e,i,o=this._getEvents();if(t instanceof RegExp){e={};for(i in o)o.hasOwnProperty(i)&&t.test(i)&&(e[i]=o[i])}else e=o[t]||(o[t]=[]);return e},o.flattenListeners=function(t){var e,i=[];for(e=0;t.length>e;e+=1)i.push(t[e].listener);return i},o.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},o.addListener=function(t,i){var o,n=this.getListenersAsObject(t),r="object"==typeof i;for(o in n)n.hasOwnProperty(o)&&-1===e(n[o],i)&&n[o].push(r?i:{listener:i,once:!1});return this},o.on=i("addListener"),o.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},o.once=i("addOnceListener"),o.defineEvent=function(t){return this.getListeners(t),this},o.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e]);return this},o.removeListener=function(t,i){var o,n,r=this.getListenersAsObject(t);for(n in r)r.hasOwnProperty(n)&&(o=e(r[n],i),-1!==o&&r[n].splice(o,1));return this},o.off=i("removeListener"),o.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},o.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},o.manipulateListeners=function(t,e,i){var o,n,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(o=i.length;o--;)r.call(this,e,i[o]);else for(o in e)e.hasOwnProperty(o)&&(n=e[o])&&("function"==typeof n?r.call(this,o,n):s.call(this,o,n));return this},o.removeEvent=function(t){var e,i=typeof t,o=this._getEvents();if("string"===i)delete o[t];else if(t instanceof RegExp)for(e in o)o.hasOwnProperty(e)&&t.test(e)&&delete o[e];else delete this._events;return this},o.removeAllListeners=i("removeEvent"),o.emitEvent=function(t,e){var i,o,n,r,s=this.getListenersAsObject(t);for(n in s)if(s.hasOwnProperty(n))for(o=s[n].length;o--;)i=s[n][o],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},o.trigger=i("emitEvent"),o.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},o.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},o._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},o._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return n.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}.call(this),function(t){function e(t){if(t){if("string"==typeof o[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,n=0,r=i.length;r>n;n++)if(e=i[n]+t,"string"==typeof o[e])return e}}var i="Webkit Moz ms Ms O".split(" "),o=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(t){function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=s.length;i>e;e++){var o=s[e];t[o]=0}return t}function o(t){function o(t){if("string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var o=r(t);if("none"===o.display)return i();var n={};n.width=t.offsetWidth,n.height=t.offsetHeight;for(var h=n.isBorderBox=!(!p||!o[p]||"border-box"!==o[p]),f=0,c=s.length;c>f;f++){var d=s[f],l=o[d];l=a(t,l);var y=parseFloat(l);n[d]=isNaN(y)?0:y}var m=n.paddingLeft+n.paddingRight,g=n.paddingTop+n.paddingBottom,v=n.marginLeft+n.marginRight,_=n.marginTop+n.marginBottom,I=n.borderLeftWidth+n.borderRightWidth,L=n.borderTopWidth+n.borderBottomWidth,z=h&&u,S=e(o.width);S!==!1&&(n.width=S+(z?0:m+I));var b=e(o.height);return b!==!1&&(n.height=b+(z?0:g+L)),n.innerWidth=n.width-(m+I),n.innerHeight=n.height-(g+L),n.outerWidth=n.width+v,n.outerHeight=n.height+_,n}}function a(t,e){if(n||-1===e.indexOf("%"))return e;var i=t.style,o=i.left,r=t.runtimeStyle,s=r&&r.left;return s&&(r.left=t.currentStyle.left),i.left=e,e=i.pixelLeft,i.left=o,s&&(r.left=s),e}var u,p=t("boxSizing");return function(){if(p){var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style[p]="border-box";var i=document.body||document.documentElement;i.appendChild(t);var o=r(t);u=200===e(o.width),i.removeChild(t)}}(),o}var n=t.getComputedStyle,r=n?function(t){return n(t,null)}:function(t){return t.currentStyle},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],o):"object"==typeof exports?module.exports=o(require("get-style-property")):t.getSize=o(t.getStyleProperty)}(window),function(t,e){function i(t,e){return t[a](e)}function o(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function n(t,e){o(t);for(var i=t.parentNode.querySelectorAll(e),n=0,r=i.length;r>n;n++)if(i[n]===t)return!0;return!1}function r(t,e){return o(t),i(t,e)}var s,a=function(){if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],i=0,o=t.length;o>i;i++){var n=t[i],r=n+"MatchesSelector";if(e[r])return r}}();if(a){var u=document.createElement("div"),p=i(u,"div");s=p?i:r}else s=n;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return s}):window.matchesSelector=s}(this,Element.prototype),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){for(var e in t)return!1;return e=null,!0}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function n(t,n,r){function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var u=r("transition"),p=r("transform"),h=u&&p,f=!!r("perspective"),c={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[u],d=["transform","transition","transitionDuration","transitionProperty"],l=function(){for(var t={},e=0,i=d.length;i>e;e++){var o=d[e],n=r(o);n&&n!==o&&(t[o]=n)}return t}();e(a.prototype,t.prototype),a.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.getSize=function(){this.size=n(this.element)},a.prototype.css=function(t){var e=this.element.style;for(var i in t){var o=l[i]||i;e[o]=t[i]}},a.prototype.getPosition=function(){var t=s(this.element),e=this.layout.options,i=e.isOriginLeft,o=e.isOriginTop,n=parseInt(t[i?"left":"right"],10),r=parseInt(t[o?"top":"bottom"],10);n=isNaN(n)?0:n,r=isNaN(r)?0:r;var a=this.layout.size;n-=i?a.paddingLeft:a.paddingRight,r-=o?a.paddingTop:a.paddingBottom,this.position.x=n,this.position.y=r},a.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={};e.isOriginLeft?(i.left=this.position.x+t.paddingLeft+"px",i.right=""):(i.right=this.position.x+t.paddingRight+"px",i.left=""),e.isOriginTop?(i.top=this.position.y+t.paddingTop+"px",i.bottom=""):(i.bottom=this.position.y+t.paddingBottom+"px",i.top=""),this.css(i),this.emitEvent("layout",[this])};var y=f?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"};a.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=parseInt(t,10),r=parseInt(e,10),s=n===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return this.layoutPosition(),void 0;var a=t-i,u=e-o,p={},h=this.layout.options;a=h.isOriginLeft?a:-a,u=h.isOriginTop?u:-u,p.transform=y(a,u),this.transition({to:p,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},a.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},a.prototype.moveTo=h?a.prototype._transitionTo:a.prototype.goTo,a.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},a.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},a.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(t),void 0;var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var m=p&&o(p)+",opacity";a.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:m,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(c,this,!1))},a.prototype.transition=a.prototype[u?"_transition":"_nonTransition"],a.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},a.prototype.onotransitionend=function(t){this.ontransitionend(t)};var g={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};a.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=g[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},a.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(c,this,!1),this.isTransitioning=!1},a.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var v={transitionProperty:"",transitionDuration:""};return a.prototype.removeTransitionStyles=function(){this.css(v)},a.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},a.prototype.remove=function(){if(!u||!parseFloat(this.layout.options.transitionDuration))return this.removeElem(),void 0;var t=this;this.on("transitionEnd",function(){return t.removeElem(),!0}),this.hide()},a.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options;this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0})},a.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options;this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},a.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}var r=t.getComputedStyle,s=r?function(t){return r(t,null)}:function(t){return t.currentStyle};"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],n):(t.Outlayer={},t.Outlayer.Item=n(t.EventEmitter,t.getSize,t.getStyleProperty))}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===f.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=d(e,t);-1!==i&&e.splice(i,1)}function r(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}function s(i,s,f,d,l,y){function m(t,i){if("string"==typeof t&&(t=a.querySelector(t)),!t||!c(t))return u&&u.error("Bad "+this.constructor.namespace+" element: "+t),void 0;this.element=t,this.options=e({},this.constructor.defaults),this.option(i);var o=++g;this.element.outlayerGUID=o,v[o]=this,this._create(),this.options.isInitLayout&&this.layout()}var g=0,v={};return m.namespace="outlayer",m.Item=y,m.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e(m.prototype,f.prototype),m.prototype.option=function(t){e(this.options,t)},m.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},m.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},m.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0,r=e.length;r>n;n++){var s=e[n],a=new i(s,this);o.push(a)}return o},m.prototype._filterFindItemElements=function(t){t=o(t);for(var e=this.options.itemSelector,i=[],n=0,r=t.length;r>n;n++){var s=t[n];if(c(s))if(e){l(s,e)&&i.push(s);for(var a=s.querySelectorAll(e),u=0,p=a.length;p>u;u++)i.push(a[u])}else i.push(s)}return i},m.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},m.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},m.prototype._init=m.prototype.layout,m.prototype._resetLayout=function(){this.getSize()},m.prototype.getSize=function(){this.size=d(this.element)},m.prototype._getMeasurement=function(t,e){var i,o=this.options[t];o?("string"==typeof o?i=this.element.querySelector(o):c(o)&&(i=o),this[t]=i?d(i)[e]:o):this[t]=0},m.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},m.prototype._getItemsForLayout=function(t){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i];n.isIgnored||e.push(n)}return e},m.prototype._layoutItems=function(t,e){function i(){o.emitEvent("layoutComplete",[o,t])}var o=this;if(!t||!t.length)return i(),void 0;this._itemsOn(t,"layout",i);for(var n=[],r=0,s=t.length;s>r;r++){var a=t[r],u=this._getItemLayoutPosition(a);u.item=a,u.isInstant=e||a.isLayoutInstant,n.push(u)}this._processLayoutQueue(n)},m.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},m.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];this._positionItem(o.item,o.x,o.y,o.isInstant)}},m.prototype._positionItem=function(t,e,i,o){o?t.goTo(e,i):t.moveTo(e,i)},m.prototype._postLayout=function(){this.resizeContainer()},m.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},m.prototype._getContainerSize=h,m.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},m.prototype._itemsOn=function(t,e,i){function o(){return n++,n===r&&i.call(s),!0}for(var n=0,r=t.length,s=this,a=0,u=t.length;u>a;a++){var p=t[a];p.on(e,o)}},m.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},m.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},m.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;i>e;e++){var o=t[e];this.ignore(o)}}},m.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var o=t[e];n(o,this.stamps),this.unignore(o)}},m.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o(t)):void 0},m.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t];this._manageStamp(i)}}},m.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},m.prototype._manageStamp=h,m.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,o=d(t),n={left:e.left-i.left-o.marginLeft,top:e.top-i.top-o.marginTop,right:i.right-e.right-o.marginRight,bottom:i.bottom-e.bottom-o.marginBottom};return n},m.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},m.prototype.bindResize=function(){this.isResizeBound||(i.bind(t,"resize",this),this.isResizeBound=!0)},m.prototype.unbindResize=function(){this.isResizeBound&&i.unbind(t,"resize",this),this.isResizeBound=!1},m.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},m.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},m.prototype.needsResizeLayout=function(){var t=d(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},m.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},m.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},m.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},m.prototype.reveal=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.reveal()}},m.prototype.hide=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.hide()}},m.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];if(o.element===t)return o}},m.prototype.getItems=function(t){if(t&&t.length){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i],r=this.getItem(n);r&&e.push(r)}return e}},m.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(e&&e.length){this._itemsOn(e,"remove",function(){this.emitEvent("removeComplete",[this,e])});for(var i=0,r=e.length;r>i;i++){var s=e[i];s.remove(),n(s,this.items)}}},m.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];o.destroy()}this.unbindResize(),delete this.element.outlayerGUID,p&&p.removeData(this.element,this.constructor.namespace)},m.data=function(t){var e=t&&t.outlayerGUID;return e&&v[e]},m.create=function(t,i){function o(){m.apply(this,arguments)}return Object.create?o.prototype=Object.create(m.prototype):e(o.prototype,m.prototype),o.prototype.constructor=o,o.defaults=e({},m.defaults),e(o.defaults,i),o.prototype.settings={},o.namespace=t,o.data=m.data,o.Item=function(){y.apply(this,arguments)},o.Item.prototype=new y,s(function(){for(var e=r(t),i=a.querySelectorAll(".js-"+e),n="data-"+e+"-options",s=0,h=i.length;h>s;s++){var f,c=i[s],d=c.getAttribute(n);try{f=d&&JSON.parse(d)}catch(l){u&&u.error("Error parsing "+n+" on "+c.nodeName.toLowerCase()+(c.id?"#"+c.id:"")+": "+l);continue}var y=new o(c,f);p&&p.data(c,t,y)}}),p&&p.bridget&&p.bridget(t,o),o},m.Item=y,m}var a=t.document,u=t.console,p=t.jQuery,h=function(){},f=Object.prototype.toString,c="object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},d=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],s):t.Outlayer=s(t.eventie,t.docReady,t.EventEmitter,t.getSize,t.matchesSelector,t.Outlayer.Item)}(window),function(t){function e(t){function e(){t.Item.apply(this,arguments)}return e.prototype=new t.Item,e.prototype._create=function(){this.id=this.layout.itemGUID++,t.Item.prototype._create.call(this),this.sortData={}},e.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}},e}"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window),function(t){function e(t,e){function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}return function(){function t(t){return function(){return e.prototype[t].apply(this.isotope,arguments)}}for(var o=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],n=0,r=o.length;r>n;n++){var s=o[n];i.prototype[s]=t(s)}}(),i.prototype.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!==this.isotope.size.innerHeight},i.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},i.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},i.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},i.prototype.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},i.prototype.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},i.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},i.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function o(){i.apply(this,arguments)}return o.prototype=new i,e&&(o.options=e),o.prototype.namespace=t,i.modes[t]=o,o},i}"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window),function(t){function e(t,e){var o=t.create("masonry");return o.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},o.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},o.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},o.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,o=e&&1>e?"round":"ceil",n=Math[o](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var r=this._getColGroup(n),s=Math.min.apply(Math,r),a=i(r,s),u={x:this.columnWidth*a,y:s},p=s+t.size.outerHeight,h=this.cols+1-r.length,f=0;h>f;f++)this.colYs[a+f]=p;return u},o.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;i>o;o++){var n=this.colYs.slice(o,o+t);e[o]=Math.max.apply(Math,n)}return e},o.prototype._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this.options.isOriginLeft?o.left:o.right,r=n+i.outerWidth,s=Math.floor(n/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a-=r%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var u=(this.options.isOriginTop?o.top:o.bottom)+i.outerHeight,p=s;a>=p;p++)this.colYs[p]=Math.max(u,this.colYs[p])},o.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},o.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!==this.containerWidth},o}var i=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++){var n=t[i];if(n===e)return i}return-1};"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],e):t.Masonry=e(t.Outlayer,t.getSize)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t,i){var o=t.create("masonry"),n=o.prototype._getElementOffset,r=o.prototype.layout,s=o.prototype._getMeasurement;e(o.prototype,i.prototype),o.prototype._getElementOffset=n,o.prototype.layout=r,o.prototype._getMeasurement=s;var a=o.prototype.measureColumns;o.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,a.call(this)};var u=o.prototype._manageStamp;return o.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,u.apply(this,arguments)},o}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],i):i(t.Isotope.LayoutMode,t.Masonry)}(window),function(t){function e(t){var e=t.create("fitRows");return e.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0},e.prototype._getItemLayoutPosition=function(t){t.getSize(),0!==this.x&&t.size.outerWidth+this.x>this.isotope.size.innerWidth&&(this.x=0,this.y=this.maxY);var e={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=t.size.outerWidth,e},e.prototype._getContainerSize=function(){return{height:this.maxY}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):e(t.Isotope.LayoutMode)}(window),function(t){function e(t){var e=t.create("vertical",{horizontalAlignment:0});return e.prototype._resetLayout=function(){this.y=0},e.prototype._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},e.prototype._getContainerSize=function(){return{height:this.y}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):e(t.Isotope.LayoutMode)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===h.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=f(e,t);-1!==i&&e.splice(i,1)}function r(t,i,r,u,h){function f(t,e){return function(i,o){for(var n=0,r=t.length;r>n;n++){var s=t[n],a=i.sortData[s],u=o.sortData[s];if(a>u||u>a){var p=void 0!==e[s]?e[s]:e,h=p?1:-1;return(a>u?1:-1)*h}}return 0}}var c=t.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});c.Item=u,c.LayoutMode=h,c.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),t.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var e in h.modes)this._initLayoutMode(e)},c.prototype.reloadItems=function(){this.itemGUID=0,t.prototype.reloadItems.call(this)},c.prototype._itemize=function(){for(var e=t.prototype._itemize.apply(this,arguments),i=0,o=e.length;o>i;i++){var n=e[i];n.id=this.itemGUID++}return this._updateItemsSortData(e),e},c.prototype._initLayoutMode=function(t){var i=h.modes[t],o=this.options[t]||{};this.options[t]=i.options?e(i.options,o):o,this.modes[t]=new i(this)},c.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?(this.arrange(),void 0):(this._layout(),void 0)},c.prototype._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},c.prototype.arrange=function(t){this.option(t),this._getIsInstant(),this.filteredItems=this._filter(this.items),this._sort(),this._layout()},c.prototype._init=c.prototype.arrange,c.prototype._getIsInstant=function(){var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=t,t},c.prototype._filter=function(t){function e(){f.reveal(n),f.hide(r)}var i=this.options.filter;i=i||"*";for(var o=[],n=[],r=[],s=this._getFilterTest(i),a=0,u=t.length;u>a;a++){var p=t[a];if(!p.isIgnored){var h=s(p);h&&o.push(p),h&&p.isHidden?n.push(p):h||p.isHidden||r.push(p)}}var f=this;return this._isInstant?this._noTransition(e):e(),o},c.prototype._getFilterTest=function(t){return s&&this.options.isJQueryFiltering?function(e){return s(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return r(e.element,t)}},c.prototype.updateSortData=function(t){this._getSorters(),t=o(t);var e=this.getItems(t);e=e.length?e:this.items,this._updateItemsSortData(e)},c.prototype._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=d(i)}},c.prototype._updateItemsSortData=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];o.updateSortData()}};var d=function(){function t(t){if("string"!=typeof t)return t;var i=a(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),r=n&&n[1],s=e(r,o),u=c.sortDataParsers[i[1]];return t=u?function(t){return t&&u(s(t))}:function(t){return t&&s(t)}}function e(t,e){var i;return i=t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&p(i)}}return t}();c.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},c.prototype._sort=function(){var t=this.options.sortBy;if(t){var e=[].concat.apply(t,this.sortHistory),i=f(e,this.options.sortAscending);this.filteredItems.sort(i),t!==this.sortHistory[0]&&this.sortHistory.unshift(t)}},c.prototype._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw Error("No layout mode: "+t);return e.options=this.options[t],e},c.prototype._resetLayout=function(){t.prototype._resetLayout.call(this),this._mode()._resetLayout()},c.prototype._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},c.prototype._manageStamp=function(t){this._mode()._manageStamp(t)},c.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},c.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},c.prototype.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},c.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps();var o=this._filterRevealAdded(e);this.layoutItems(i),this.filteredItems=o.concat(this.filteredItems)}},c.prototype._filterRevealAdded=function(t){var e=this._noTransition(function(){return this._filter(t)});return this.layoutItems(e,!0),this.reveal(e),t},c.prototype.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;n>i;i++)o=e[i],this.element.appendChild(o.element);var r=this._filter(e);for(this._noTransition(function(){this.hide(r)}),i=0;n>i;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;n>i;i++)delete e[i].isLayoutInstant;this.reveal(r)}};var l=c.prototype.remove;return c.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(l.call(this,t),e&&e.length)for(var i=0,r=e.length;r>i;i++){var s=e[i];n(s,this.filteredItems)}},c.prototype._noTransition=function(t){var e=this.options.transitionDuration;this.options.transitionDuration=0;var i=t.call(this);return this.options.transitionDuration=e,i},c}var s=t.jQuery,a=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},u=document.documentElement,p=u.textContent?function(t){return t.textContent}:function(t){return t.innerText},h=Object.prototype.toString,f=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],r):t.Isotope=r(t.Outlayer,t.getSize,t.matchesSelector,t.Isotope.Item,t.Isotope.LayoutMode)}(window);
/*!
Waypoints - 3.1.1
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var n in t){var r=t[n];for(var s in this.waypoints[n]){var a,l,h,p,u,c=this.waypoints[n][s],d=c.options.offset,f=c.triggerPoint,w=0,y=null==f;c.element!==c.element.window&&(w=c.adapter.offset()[r.offsetProp]),"function"==typeof d?d=d.apply(c):"string"==typeof d&&(d=parseFloat(d),c.options.offset.indexOf("%")>-1&&(d=Math.ceil(r.contextDimension*d/100))),a=r.contextScroll-r.contextOffset,c.triggerPoint=w+a-d,l=f<r.oldScroll,h=c.triggerPoint>=r.oldScroll,p=l&&h,u=!l&&!h,!y&&p?(c.queueTrigger(r.backward),o[c.group.id]=c.group):!y&&u?(c.queueTrigger(r.forward),o[c.group.id]=c.group):y&&r.oldScroll>=c.triggerPoint&&(c.queueTrigger(r.forward),o[c.group.id]=c.group)}}for(var g in o)o[g].flushTriggers();return this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();!function(a,b){"use strict";var c,d;if(a.uaMatch=function(a){a=a.toLowerCase();var b=/(opr)[\/]([\w.]+)/.exec(a)||/(chrome)[ \/]([\w.]+)/.exec(a)||/(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[],c=/(ipad)/.exec(a)||/(iphone)/.exec(a)||/(android)/.exec(a)||/(windows phone)/.exec(a)||/(win)/.exec(a)||/(mac)/.exec(a)||/(linux)/.exec(a)||/(cros)/i.exec(a)||[];return{browser:b[3]||b[1]||"",version:b[2]||"0",platform:c[0]||""}},c=a.uaMatch(b.navigator.userAgent),d={},c.browser&&(d[c.browser]=!0,d.version=c.version,d.versionNumber=parseInt(c.version)),c.platform&&(d[c.platform]=!0),(d.android||d.ipad||d.iphone||d["windows phone"])&&(d.mobile=!0),(d.cros||d.mac||d.linux||d.win)&&(d.desktop=!0),(d.chrome||d.opr||d.safari)&&(d.webkit=!0),d.rv){var e="msie";c.browser=e,d[e]=!0}if(d.opr){var f="opera";c.browser=f,d[f]=!0}if(d.safari&&d.android){var g="android";c.browser=g,d[g]=!0}d.name=c.browser,d.platform=c.platform,a.browser=d}(jQuery,window);var Froogaloop=function(){function e(a){return new e.fn.init(a)}function g(a,c,b){if(!b.contentWindow.postMessage)return!1;a=JSON.stringify({method:a,value:c});b.contentWindow.postMessage(a,h)}function l(a){var c,b;try{c=JSON.parse(a.data),b=c.event||c.method}catch(e){}"ready"!=b||k||(k=!0);if(!/^https?:\/\/player.vimeo.com/.test(a.origin))return!1;"*"===h&&(h=a.origin);a=c.value;var m=c.data,f=""===f?null:c.player_id;c=f?d[f][b]:d[b];b=[];if(!c)return!1;void 0!==a&&b.push(a);m&&b.push(m);f&&b.push(f);return 0<b.length?c.apply(null,b):c.call()}function n(a,c,b){b?(d[b]||(d[b]={}),d[b][a]=c):d[a]=c}var d={},k=!1,h="*";e.fn=e.prototype={element:null,init:function(a){"string"===typeof a&&(a=document.getElementById(a));this.element=a;return this},api:function(a,c){if(!this.element||!a)return!1;var b=this.element,d=""!==b.id?b.id:null,e=c&&c.constructor&&c.call&&c.apply?null:c,f=c&&c.constructor&&c.call&&c.apply?c:null;f&&n(a,f,d);g(a,e,b);return this},addEvent:function(a,c){if(!this.element)return!1;var b=this.element,d=""!==b.id?b.id:null;n(a,c,d);"ready"!=a?g("addEventListener",a,b):"ready"==a&&k&&c.call(null,d);return this},removeEvent:function(a){if(!this.element)return!1;var c=this.element,b=""!==c.id?c.id:null;a:{if(b&&d[b]){if(!d[b][a]){b=!1;break a}d[b][a]=null}else{if(!d[a]){b=!1;break a}d[a]=null}b=!0}"ready"!=a&&b&&g("removeEventListener",a,c)}};e.fn.init.prototype=e.fn;window.addEventListener?window.addEventListener("message",l,!1):window.attachEvent("onmessage",l);return window.Froogaloop=window.$f=e}();(function(){var lastTime=0;var vendors=['ms','moz','webkit','o'];for(var x=0;x<vendors.length&&!window.requestAnimationFrame;++x){window.requestAnimationFrame=window[vendors[x]+'RequestAnimationFrame'];window.cancelAnimationFrame=window[vendors[x]+'CancelAnimationFrame']||window[vendors[x]+'CancelRequestAnimationFrame']}if(!window.requestAnimationFrame)window.requestAnimationFrame=function(callback,element){var currTime=new Date().getTime();var timeToCall=Math.max(0,16-(currTime-lastTime));var id=window.setTimeout(function(){callback(currTime+timeToCall)},timeToCall);lastTime=currTime+timeToCall;return id};if(!window.cancelAnimationFrame)window.cancelAnimationFrame=function(id){clearTimeout(id)}}());jQuery.expr[':'].regex=function(elem,index,match){var matchParams=match[3].split(','),validLabels=/^(data|css):/,attr={method:matchParams[0].match(validLabels)?matchParams[0].split(':')[0]:'attr',property:matchParams.shift().replace(validLabels,'')},regexFlags='ig',regex=new RegExp(matchParams.join('').replace(/^\s+|\s+$/g,''),regexFlags);return regex.test(jQuery(elem)[attr.method](attr.property));};(function($)
{"use strict";$(document).ready(function()
{$.avia_utilities=$.avia_utilities||{};if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&'ontouchstart'in document.documentElement)
{$.avia_utilities.isMobile=true;}
else
{$.avia_utilities.isMobile=false;}
if($.fn.avia_mobile_fixed)
$('.avia-bg-style-fixed').avia_mobile_fixed();if($.fn.avia_parallax)
$('.av-parallax').avia_parallax();if($.fn.avia_browser_height)
$('.av-minimum-height, .avia-fullscreen-slider').avia_browser_height();if($.fn.avia_video_section)
$('.av-section-with-video-bg').avia_video_section();new $.AviaTooltip({'class':"avia-tooltip",data:"avia-tooltip",delay:0,scope:"body"});new $.AviaTooltip({'class':"avia-tooltip avia-icon-tooltip",data:"avia-icon-tooltip",delay:0,scope:"body"});activate_shortcode_scripts();$('.avia-layerslider').layer_slider_height_helper();$('.grid-links-ajax').avia_portfolio_preview();if($.fn.avia_masonry)
$('.av-masonry').avia_masonry();if($.fn.aviaccordion)
$('.aviaccordion').aviaccordion();if($.fn.avia_textrotator)
$('.av-rotator-container').avia_textrotator();});$(window).load(function(){});function activate_waypoints(container)
{if($.fn.avia_waypoints)
{if(typeof container=='undefined'){container='body';};$('.avia_animate_when_visible',container).avia_waypoints();$('.avia_animate_when_almost_visible',container).avia_waypoints({offset:'80%'});}}
function activate_shortcode_scripts(container)
{if(typeof container=='undefined'){container='body';}
if($.fn.avia_ajax_form)
{$('.avia_ajax_form',container).avia_ajax_form();}
activate_waypoints(container);if($.fn.aviaVideoApi)
{$('.avia-slideshow iframe[src*="youtube.com"], .av_youtube_frame, .avia-slideshow iframe[src*="vimeo.com"], .avia-slideshow video').aviaVideoApi({},'li');}
if($.fn.avia_sc_toggle)
{$('.togglecontainer',container).avia_sc_toggle();}
if($.fn.avia_sc_tabs)
{$('.top_tab',container).avia_sc_tabs();$('.sidebar_tab',container).avia_sc_tabs({sidebar:true});}
if($.fn.avia_sc_gallery)
{$('.avia-gallery',container).avia_sc_gallery();}
if($.fn.avia_sc_animated_number)
{$('.avia-animated-number',container).avia_sc_animated_number();}
if($.fn.avia_sc_animation_delayed)
{$('.av_font_icon',container).avia_sc_animation_delayed({delay:100});$('.avia-image-container',container).avia_sc_animation_delayed({delay:100});$('.av-hotspot-image-container',container).avia_sc_animation_delayed({delay:100});}
if($.fn.avia_sc_iconlist)
{$('.avia-icon-list',container).avia_sc_iconlist();}
if($.fn.avia_sc_progressbar)
{$('.avia-progress-bar-container',container).avia_sc_progressbar();}
if($.fn.avia_sc_testimonial)
{$('.avia-testimonial-wrapper',container).avia_sc_testimonial();}
$('.avia-slideshow.av_fullscreen',container).aviaFullscreenSlider();$('.avia-slideshow:not(.av_fullscreen)',container).aviaSlider();$('.avia-content-slider-active',container).aviaSlider({wrapElement:'.avia-content-slider-inner',slideElement:'.slide-entry-wrap',fullfade:true});$('.avia-slider-testimonials',container).aviaSlider({wrapElement:'.avia-testimonial-row',slideElement:'.avia-testimonial',fullfade:true});if($.fn.aviaMaps)
{$('.avia-google-map-container',container).aviaMaps();}
if($.fn.aviaMagazine)
{$('.av-magazine-tabs-active',container).aviaMagazine();}
if($.fn.aviaHotspots)
{$('.av-hotspot-image-container',container).aviaHotspots();}
if($.fn.aviaCountdown)
{$('.av-countdown-timer',container).aviaCountdown();}
if($.fn.aviaCountdown)
{$('.av-countdown-timer',container).aviaCountdown();}}
(function($)
{"use strict";var _units=['weeks','days','hours','minutes','seconds'],_second=1000,_minute=_second*60,_hour=_minute*60,_day=_hour*24,_week=_day*7,ticker=function(_self)
{var _time={},_now=new Date(),_timestamp=_self.end-_now;if(_timestamp<=0)
{clearInterval(_self.countdown);return;}
_self.time.weeks=Math.floor(_timestamp/_week);_self.time.days=Math.floor((_timestamp%_week)/_day);_self.time.hours=Math.floor((_timestamp%_day)/_hour);_self.time.minutes=Math.floor((_timestamp%_hour)/_minute);_self.time.seconds=Math.floor((_timestamp%_minute)/_second);switch(_self.data.maximum)
{case 1:_self.time.seconds=Math.floor(_timestamp/_second);break;case 2:_self.time.minutes=Math.floor(_timestamp/_minute);break;case 3:_self.time.hours=Math.floor(_timestamp/_hour);break;case 4:_self.time.days=Math.floor(_timestamp/_day);break;}
for(var i in _self.time)
{if(typeof _self.update[i]=="object")
{if(_self.firstrun||_self.oldtime[i]!=_self.time[i])
{var labelkey=(_self.time[i]===1)?"single":"multi";_self.update[i].time_container.text(_self.time[i]);_self.update[i].label_container.text(_self.update[i][labelkey]);}}}
if(_self.firstrun)_self.container.addClass('av-countdown-active')
_self.oldtime=$.extend({},_self.time);_self.firstrun=false;};$.fn.aviaCountdown=function(options)
{if(!this.length)return;return this.each(function()
{var _self={};_self.update={};_self.time={};_self.oldtime={};_self.firstrun=true;_self.container=$(this);_self.data=_self.container.data();_self.end=new Date(_self.data.year,_self.data.month,_self.data.day,_self.data.hour,_self.data.minute);for(var i in _units)
{_self.update[_units[i]]={time_container:_self.container.find('.av-countdown-'+_units[i]+' .av-countdown-time'),label_container:_self.container.find('.av-countdown-'+_units[i]+' .av-countdown-time-label'),};if(_self.update[_units[i]].label_container.length)
{_self.update[_units[i]].single=_self.update[_units[i]].label_container.data('label');_self.update[_units[i]].multi=_self.update[_units[i]].label_container.data('label-multi');}}
ticker(_self);_self.countdown=setInterval(function(){ticker(_self);},_self.data.interval);});}}(jQuery));(function($)
{"use strict";$.fn.aviaHotspots=function(options)
{if(!this.length)return;return this.each(function()
{var _self={};_self.container=$(this);_self.hotspots=_self.container.find('.av-image-hotspot');_self.container.on('avia_start_animation',function()
{setTimeout(function()
{_self.hotspots.each(function(i)
{var current=$(this);setTimeout(function(){current.addClass('av-display-hotspot');},300*i);});},400);});});}}(jQuery));(function($)
{"use strict";var animating=false,methods={switchMag:function(clicked,_self)
{var current=$(clicked)
if(current.is('.active_sort')||animating)return;var filter=current.data('filter'),oldContainer=_self.container.filter(':visible'),newContainer=_self.container.filter('.'+filter);animating=true;_self.sort_buttons.removeClass('active_sort');current.addClass('active_sort');_self.magazine.height(_self.magazine.outerHeight());oldContainer.avia_animate({opacity:0},200,function()
{oldContainer.css({display:'none'});newContainer.css({opacity:0,display:'block'}).avia_animate({opacity:1},150,function()
{_self.magazine.avia_animate({height:(newContainer.outerHeight()+_self.sort_bar.outerHeight())},150,function()
{_self.magazine.height('auto');animating=false;});});});}};$.fn.aviaMagazine=function(options)
{if(!this.length)return;return this.each(function()
{var _self={};_self.magazine=$(this),_self.sort_buttons=_self.magazine.find('.av-magazine-sort a');_self.container=_self.magazine.find('.av-magazine-group');_self.sort_bar=_self.magazine.find('.av-magazine-top-bar');_self.sort_buttons.on('click',function(e){e.preventDefault();methods.switchMag(this,_self);});});}}(jQuery));(function($)
{"use strict";$.AviaMapsAPI=function(options,container)
{if(typeof window.av_google_map=='undefined')
{$.avia_utilities.log('Map creation stopped, var av_google_map not found');return}
this.container=container;this.$container=$(container);this.$body=$('body');this.$mapid=this.$container.data('mapid')-1;this.$data=window.av_google_map[this.$mapid];this.retina=window.devicePixelRatio>1;this._init(options);}
$.AviaMapsAPI.apiFiles={loading:false,finished:false,src:'https://maps.googleapis.com/maps/api/js?v=3.6&sensor=false&callback=aviaOnGoogleMapsLoaded'}
$.AviaMapsAPI.prototype={_init:function()
{this._bind_execution();this._getAPI();},_getAPI:function()
{if((typeof window.google=='undefined'||typeof window.google.maps=='undefined')&&$.AviaMapsAPI.apiFiles.loading==false)
{$.AviaMapsAPI.apiFiles.loading=true;var script=document.createElement('script');script.type='text/javascript';script.src=$.AviaMapsAPI.apiFiles.src;document.body.appendChild(script);}
else if((typeof window.google!='undefined'&&typeof window.google.maps!='undefined')||$.AviaMapsAPI.apiFiles.loading==false)
{this._applyMap();}},_bind_execution:function()
{this.$body.on('av-google-maps-api-loaded',$.proxy(this._applyMap,this));},_applyMap:function()
{if(typeof this.map!='undefined')return;if(!this.$data.marker||!this.$data.marker[0]||!this.$data.marker[0].long||!this.$data.marker[0].long)
{$.avia_utilities.log('Latitude or Longitude missing','map-error');return;}
var _self=this,mobile_drag=$.avia_utilities.isMobile?this.$data.mobile_drag_control:true,zoomValue=this.$data.zoom=="auto"?10:this.$data.zoom;this.mapVars={mapMaker:false,mapTypeControl:false,backgroundColor:'transparent',streetViewControl:false,panControl:this.$data.pan_control,zoomControl:this.$data.zoom_control,draggable:mobile_drag,scrollwheel:false,zoom:zoomValue,mapTypeId:google.maps.MapTypeId.ROADMAP,center:new google.maps.LatLng(this.$data.marker[0].lat,this.$data.marker[0].long),styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}]};this.map=new google.maps.Map(this.container,this.mapVars);this._applyMapStyle();if(this.$data.zoom=="auto")
{this._setAutoZoom();}
google.maps.event.addListenerOnce(this.map,'tilesloaded',function(){_self._addMarkers();});},_setAutoZoom:function()
{var bounds=new google.maps.LatLngBounds();for(var key in this.$data.marker)
{bounds.extend(new google.maps.LatLng(this.$data.marker[key].lat,this.$data.marker[key].long));}
this.map.fitBounds(bounds);},_applyMapStyle:function()
{var stylers=[],style=[],mapType;if(this.$data.hue!="")stylers.push({hue:this.$data.hue});if(this.$data.saturation!="")stylers.push({saturation:this.$data.saturation});if(stylers.length)
{style=[{featureType:"all",elementType:"all",stylers:stylers},{featureType:"poi",stylers:[{visibility:"off"}]}];mapType=new google.maps.StyledMapType(style,{name:"av_map_style"});this.map.mapTypes.set('av_styled_map',mapType);this.map.setMapTypeId('av_styled_map');}},_addMarkers:function()
{for(var key in this.$data.marker)
{var _self=this;(function(key,_self)
{setTimeout(function()
{var marker="";if(!_self.$data.marker[key]||!_self.$data.marker[key].long||!_self.$data.marker[key].long)
{$.avia_utilities.log('Latitude or Longitude for single marker missing','map-error');return;}
_self.$data.LatLng=new google.maps.LatLng(_self.$data.marker[key].lat,_self.$data.marker[key].long);var markerArgs={flat:false,position:_self.$data.LatLng,animation:google.maps.Animation.BOUNCE,map:_self.map,title:_self.$data.marker[key].address,optimized:false};if(_self.$data.marker[key].icon&&_self.$data.marker[key].imagesize)
{var size=_self.$data.marker[key].imagesize,half="",full="";if(_self.retina&&size>40)size=40;half=new google.maps.Point(size/2,size);full=new google.maps.Size(size,size);markerArgs.icon=new google.maps.MarkerImage(_self.$data.marker[key].icon,null,null,half,full);}
marker=new google.maps.Marker(markerArgs);setTimeout(function(){marker.setAnimation(null);_self._infoWindow(_self.map,marker,_self.$data.marker[key]);},500);},200*(parseInt(key,10)+1));}(key,_self));}},_infoWindow:function(map,marker,data)
{var info=$.trim(data.content);if(info!="")
{var infowindow=new google.maps.InfoWindow({content:info});google.maps.event.addListener(marker,'click',function(){infowindow.open(map,marker);});if(data.tooltip_display)infowindow.open(map,marker);}}}
$.fn.aviaMaps=function(options)
{return this.each(function()
{var self=$.data(this,'aviaMapsApi');if(!self)
{self=$.data(this,'aviaMapsApi',new $.AviaMapsAPI(options,this));}});}})(jQuery);window.aviaOnGoogleMapsLoaded=function(){$('body').trigger('av-google-maps-api-loaded');$.AviaMapsAPI.apiFiles.finished=true;};(function($)
{"use strict";$.AviaVideoAPI=function(options,video,option_container)
{this.$video=$(video);this.$option_container=option_container?$(option_container):this.$video;this.isMobile=$.avia_utilities.isMobile;this.fallback=this.isMobile?this.$option_container.is('.av-mobile-fallback-image'):false;if(this.fallback)return;this._init(options);}
$.AviaVideoAPI.defaults={loop:false,mute:false,controls:false,events:'play pause mute unmute loop toggle reset unload'};$.AviaVideoAPI.apiFiles={youtube:{loaded:false,src:'https://www.youtube.com/iframe_api'}}
$.AviaVideoAPI.prototype={_init:function(options)
{this.options=this._setOptions(options);this.type=this._getPlayerType();this._setPlayer();this.eventsBound=false;this.playing=false;this.$option_container.addClass('av-video-paused');this.pp=$.avia_utilities.playpause(this.$option_container);},_setOptions:function(options)
{var newOptions=$.extend(true,{},$.AviaVideoAPI.defaults,options),htmlData=this.$option_container.data(),i="";for(i in htmlData)
{if(htmlData.hasOwnProperty(i)&&(typeof htmlData[i]==="string"||typeof htmlData[i]==="number"||typeof htmlData[i]==="boolean"))
{newOptions[i]=htmlData[i];}}
return newOptions;},_getPlayerType:function()
{var vid_src=this.$video.get(0).src||this.$video.data('src');if(this.$video.is('video'))return'html5';if(this.$video.is('.av_youtube_frame'))return'youtube';if(vid_src.indexOf('vimeo.com')!=-1)return'vimeo';if(vid_src.indexOf('youtube.com')!=-1)return'youtube';},_setPlayer:function()
{var _self=this;switch(this.type)
{case"html5":this.player=this.$video.data('mediaelementplayer');this._playerReady();break;case"vimeo":this.player=Froogaloop(this.$video.get(0));this._playerReady();break;case"youtube":this._getAPI(this.type);$('body').on('av-youtube-iframe-api-loaded',function(){_self._playerReady();});break;}},_getAPI:function(api)
{if($.AviaVideoAPI.apiFiles[api].loaded===false)
{$.AviaVideoAPI.apiFiles[api].loaded=true;var tag=document.createElement('script'),first=document.getElementsByTagName('script')[0];tag.src=$.AviaVideoAPI.apiFiles[api].src;first.parentNode.insertBefore(tag,first);}},_playerReady:function()
{var _self=this;this.$option_container.on('av-video-loaded',function(){_self._bindEvents();});switch(this.type)
{case"html5":this.$video.on('av-mediajs-loaded',function(){_self.$option_container.trigger('av-video-loaded');});this.$video.on('av-mediajs-ended',function(){_self.$option_container.trigger('av-video-ended');});break;case"vimeo":_self.player.addEvent('ready',function(){_self.$option_container.trigger('av-video-loaded');_self.player.addEvent('finish',function(){_self.$option_container.trigger('av-video-ended');});});break;case"youtube":var params=_self.$video.data();if(_self._supports_video())params.html5=1;_self.player=new YT.Player(_self.$video.attr('id'),{videoId:params.videoid,height:_self.$video.attr('height'),width:_self.$video.attr('width'),playerVars:params,events:{'onReady':function(){_self.$option_container.trigger('av-video-loaded');},'onError':function(player){$.avia_utilities.log('YOUTUBE ERROR:','error',player);},'onStateChange':function(event){if(event.data===YT.PlayerState.ENDED)
{var command=_self.options.loop!=false?'loop':'av-video-ended';_self.$option_container.trigger(command);}}}});break;}
setTimeout(function()
{if(_self.eventsBound==true||typeof _self.eventsBound=='undefined'||_self.type=='youtube'){return;}
$.avia_utilities.log('Fallback Video Trigger "'+_self.type+'":','log',_self);_self.$option_container.trigger('av-video-loaded');},2000);},_bindEvents:function()
{if(this.eventsBound==true||typeof this.eventsBound=='undefined')
{return;}
var _self=this,volume='unmute';this.eventsBound=true;this.$option_container.on(this.options.events,function(e)
{_self.api(e.type);});if(!_self.isMobile)
{if(this.options.mute!=false){volume="mute";}
if(this.options.loop!=false){_self.api('loop');}
_self.api(volume);}
setTimeout(function()
{_self.$option_container.trigger('av-video-events-bound').addClass('av-video-events-bound');},50);},_supports_video:function(){return!!document.createElement('video').canPlayType;},api:function(action)
{if(this.isMobile&&!this.was_started())return;if(this.options.events.indexOf(action)===-1)return;this.$option_container.trigger('av-video-'+action+'-executed');if(typeof this['_'+this.type+'_'+action]=='function')
{this['_'+this.type+'_'+action].call(this);}
if(typeof this['_'+action]=='function')
{this['_'+action].call(this);}},was_started:function()
{if(!this.player)return false;switch(this.type)
{case"html5":if(this.player.getCurrentTime()>0)return true;break;case"vimeo":if(this.player.api('getCurrentTime')>0)return true;break;case"youtube":if(this.player.getPlayerState()!==-1)return true;break;}
return false;},_play:function()
{this.playing=true;this.$option_container.addClass('av-video-playing').removeClass('av-video-paused');},_pause:function()
{this.playing=false;this.$option_container.removeClass('av-video-playing').addClass('av-video-paused');},_loop:function()
{this.options.loop=true;},_toggle:function()
{var command=this.playing==true?'pause':'play';this.api(command);this.pp.set(command);},_vimeo_play:function()
{this.player.api('play');},_vimeo_pause:function()
{this.player.api('pause');},_vimeo_mute:function()
{this.player.api('setVolume',0);},_vimeo_unmute:function()
{this.player.api('setVolume',0.7);},_vimeo_loop:function()
{},_vimeo_reset:function()
{this.player.api('seekTo',0);},_vimeo_unload:function()
{this.player.api('unload');},_youtube_play:function()
{this.player.playVideo();},_youtube_pause:function()
{this.player.pauseVideo()},_youtube_mute:function()
{this.player.mute();},_youtube_unmute:function()
{this.player.unMute();},_youtube_loop:function()
{if(this.playing==true)this.player.seekTo(0);},_youtube_reset:function()
{this.player.stopVideo();},_youtube_unload:function()
{this.player.clearVideo();},_html5_play:function()
{this.player.options.pauseOtherPlayers=false;this.player.play();},_html5_pause:function()
{this.player.pause();},_html5_mute:function()
{this.player.setMuted(true);},_html5_unmute:function()
{this.player.setVolume(0.7);},_html5_loop:function()
{this.player.options.loop=true;},_html5_reset:function()
{this.player.setCurrentTime(0);},_html5_unload:function()
{this._html5_pause();this._html5_reset();}}
$.fn.aviaVideoApi=function(options,apply_to_parent)
{return this.each(function()
{var applyTo=this;if(apply_to_parent)
{applyTo=$(this).parents(apply_to_parent).get(0);}
var self=$.data(applyTo,'aviaVideoApi');if(!self)
{self=$.data(applyTo,'aviaVideoApi',new $.AviaVideoAPI(options,this,applyTo));}});}})(jQuery);window.onYouTubeIframeAPIReady=function(){$('body').trigger('av-youtube-iframe-api-loaded');};$.fn.avia_masonry=function(options)
{if(!this.length)return this;var the_body=$('body'),the_win=$(window),isMobile=$.avia_utilities.isMobile,loading=false,methods={masonry_filter:function()
{var current=$(this),linktext=current.html(),selector=current.data('filter'),masonry=current.parents('.av-masonry:eq(0)'),container=masonry.find('.av-masonry-container:eq(0)'),links=masonry.find('.av-masonry-sort a'),activeCat=masonry.find('.av-current-sort-title');links.removeClass('active_sort');current.addClass('active_sort');container.attr('id','masonry_id_'+selector);if(activeCat.length)activeCat.html(linktext);methods.applyMasonry(container,selector,function()
{container.css({overflow:'visible'});});return false;},applyMasonry:function(container,selector,callback)
{var filters=selector?{filter:'.'+selector}:{};container.isotope(filters,function()
{the_win.trigger('av-height-change');});if(typeof callback=='function')
{setTimeout(callback,0);}},show_bricks:function(bricks,callback)
{bricks.each(function(i)
{var currentLink=$(this),browserPrefix=$.avia_utilities.supports('transition'),multiplier=isMobile?0:100;setTimeout(function()
{if(browserPrefix===false)
{currentLink.css({visibility:"visible",opacity:0}).animate({opacity:1},1500);}
else
{currentLink.addClass('av-masonry-item-loaded');}
if(i==bricks.length-1&&typeof callback=='function')
{callback.call();the_win.trigger('av-height-change');}},(multiplier*i));});},loadMore:function(e)
{e.preventDefault();if(loading)return false;loading=true;var current=$(this),data=current.data(),masonry=current.parents('.av-masonry:eq(0)'),container=masonry.find('.av-masonry-container'),loader=$.avia_utilities.loading(),finished=function(){loading=false;loader.hide();the_body.trigger('av_resize_finished');};if(!data.offset){data.offset=0;}
data.offset+=data.items;data.action='avia_ajax_masonry_more';$.ajax({url:avia_framework_globals.ajaxurl,type:"POST",data:data,beforeSend:function()
{loader.show();},success:function(response)
{if(response.indexOf("{av-masonry-loaded}")!==-1)
{var response=response.split('{av-masonry-loaded}'),new_items=$(response.pop()).filter('.isotope-item');if(new_items.length>data.items)
{new_items=new_items.not(':last');}
else
{current.addClass('av-masonry-no-more-items');}
var load_container=$('<div class="loadcontainer"></div>').append(new_items);$.avia_utilities.preload({container:load_container,single_callback:function()
{var links=masonry.find('.av-masonry-sort a'),filter_container=masonry.find('.av-sort-by-term');filter_container.hide();loader.hide();container.isotope('insert',new_items);$.avia_utilities.avia_ajax_call(container);setTimeout(function(){methods.show_bricks(new_items,finished);},150);setTimeout(function(){the_win.trigger('av-height-change');},550);if(links)
{$(links).each(function(filterlinkindex){var filterlink=$(this),sort=filterlink.data('filter');if(new_items)
{$(new_items).each(function(itemindex){var item=$(this);if(item.hasClass(sort))
{var term_count=filterlink.find('.avia-term-count').text();filterlink.find('.avia-term-count').text(' '+(parseInt(term_count)+1)+' ');if(filterlink.hasClass('avia_hide_sort'))
{filterlink.removeClass('avia_hide_sort').addClass('avia_show_sort');masonry.find('.av-masonry-sort .'+sort+'_sep').removeClass('avia_hide_sort').addClass('avia_show_sort');masonry.find('.av-masonry-sort .av-sort-by-term').removeClass('hidden');}}});}});}
filter_container.fadeIn();}});}
else
{finished();}},error:finished,complete:function()
{}});}};return this.each(function()
{var masonry=$(this),container=masonry.find('.av-masonry-container'),bricks=masonry.find('.isotope-item'),filter=masonry.find('.av-masonry-sort').css({visibility:"visible",opacity:0}).on('click','a',methods.masonry_filter),load_more=masonry.find('.av-masonry-load-more').css({visibility:"visible",opacity:0});$.avia_utilities.preload({container:container,single_callback:function()
{var start_animation=function()
{filter.animate({opacity:1},400);if(container.outerHeight()+container.offset().top+$('#footer').outerHeight()>$(window).height())
{$('html').css({'overflow-y':'scroll'});}
methods.applyMasonry(container,false,function()
{masonry.addClass('avia_sortable_active');container.removeClass('av-js-disabled ');});methods.show_bricks(bricks,function()
{load_more.css({opacity:1}).on('click',methods.loadMore);});};if(isMobile)
{start_animation();}
else
{masonry.waypoint(start_animation,{offset:'80%'});}
$(window).on('debouncedresize',function()
{methods.applyMasonry(container,false,function()
{masonry.addClass('avia_sortable_active');});});}});});};(function($)
{"use strict";$.avia_utilities=$.avia_utilities||{};$.fn.avia_portfolio_preview=function(passed_options)
{var win=$(window),the_body=$('body'),isMobile=$.avia_utilities.isMobile,defaults={open_in:'.portfolio-details-inner',easing:'easeOutQuint',timing:800,transition:'slide'},options=$.extend({},defaults,passed_options);return this.each(function()
{var container=$(this),portfolio_id=container.data('portfolio-id'),target_wrap=$('.portfolio_preview_container[data-portfolio-id="'+portfolio_id+'"]'),target_container=target_wrap.find(options.open_in),items=container.find('.grid-entry'),content_retrieved={},is_open=false,animating=false,index_open=false,ajax_call=false,methods,controls,loader=$.avia_utilities.loading();methods={load_item:function(e)
{e.preventDefault();var link=$(this),post_container=link.parents('.post-entry:eq(0)'),post_id="ID_"+post_container.data('ajax-id'),clickedIndex=items.index(post_container);if(post_id===is_open||animating==true)
{return false;}
animating=true;container.find('.active_portfolio_item').removeClass('active_portfolio_item');post_container.addClass('active_portfolio_item');loader.show();methods.ajax_get_contents(post_id,clickedIndex);},scroll_top:function()
{setTimeout(function()
{var target_offset=target_wrap.offset().top-175,window_offset=win.scrollTop();if(window_offset>target_offset||target_offset-window_offset>100)
{$('html:not(:animated),body:not(:animated)').animate({scrollTop:target_offset},options.timing,options.easing);}},10);},attach_item:function(post_id)
{content_retrieved[post_id]=$(content_retrieved[post_id]).appendTo(target_container);ajax_call=true;},remove_video:function()
{var del=target_wrap.find('iframe, .avia-video').parents('.ajax_slide:not(.open_slide)');if(del.length>0)
{del.remove();content_retrieved["ID_"+del.data('slideId')]=undefined;}},show_item:function(post_id,clickedIndex)
{if(post_id===is_open)
{return false;}
animating=true;loader.hide();if(false===is_open)
{target_wrap.addClass('open_container');content_retrieved[post_id].addClass('open_slide');methods.scroll_top();target_wrap.css({display:'none'}).slideDown(options.timing,options.easing,function()
{if(ajax_call)
{activate_shortcode_scripts(content_retrieved[post_id]);$.avia_utilities.avia_ajax_call(content_retrieved[post_id]);the_body.trigger('av_resize_finished');ajax_call=false;}
methods.remove_video();the_body.trigger('av_resize_finished');});index_open=clickedIndex;is_open=post_id;animating=false;}
else
{methods.scroll_top();var initCSS={zIndex:3},easing=options.easing;if(index_open>clickedIndex){initCSS.left='-110%';}
if(options.transition==='fade'){initCSS.left='0%';initCSS.opacity=0;easing='easeOutQuad';}
target_container.height(target_container.height());content_retrieved[post_id].css(initCSS).avia_animate({'left':"0%",opacity:1},options.timing,easing);content_retrieved[is_open].avia_animate({opacity:0},options.timing,easing,function()
{content_retrieved[is_open].attr({'style':""}).removeClass('open_slide');content_retrieved[post_id].addClass('open_slide');target_container.avia_animate({height:content_retrieved[post_id].outerHeight()+2},options.timing/2,options.easing,function()
{target_container.attr({'style':""});is_open=post_id;index_open=clickedIndex;animating=false;methods.remove_video();if(ajax_call)
{the_body.trigger('av_resize_finished');activate_shortcode_scripts(content_retrieved[post_id]);$.avia_utilities.avia_ajax_call(content_retrieved[post_id]);ajax_call=false;}});});}},ajax_get_contents:function(post_id,clickedIndex)
{if(content_retrieved[post_id]!==undefined)
{methods.show_item(post_id,clickedIndex);return;}
content_retrieved[post_id]=$('#avia-tmpl-portfolio-preview-'+post_id.replace(/ID_/,"")).html();content_retrieved[post_id]=content_retrieved[post_id].replace('/*<![CDATA[*/','').replace('*]]>','');methods.attach_item(post_id);$.avia_utilities.preload({container:content_retrieved[post_id],single_callback:function(){methods.show_item(post_id,clickedIndex);}});},add_controls:function()
{controls=target_wrap.find('.ajax_controlls');target_wrap.avia_keyboard_controls({27:'.avia_close',37:'.ajax_previous',39:'.ajax_next'});items.each(function(){var current=$(this),overlay;current.addClass('no_combo').bind('click',function(event)
{overlay=current.find('.slideshow_overlay');if(overlay.length)
{event.stopPropagation();methods.load_item.apply(current.find('a:eq(0)'));return false;}});});},control_click:function()
{var showItem,activeID=container.find('.active_portfolio_item').data('ajax-id'),active=container.find('.post-entry-'+activeID);switch(this.hash)
{case'#next':showItem=active.nextAll('.post-entry:visible:eq(0)').find('a:eq(0)');if(!showItem.length){showItem=$('.post-entry:visible:eq(0)',container).find('a:eq(0)');}
showItem.trigger('click');break;case'#prev':showItem=active.prevAll('.post-entry:visible:eq(0)').find('a:eq(0)');if(!showItem.length){showItem=$('.post-entry:visible:last',container).find('a:eq(0)');}
showItem.trigger('click');break;case'#close':animating=true;target_wrap.slideUp(options.timing,options.easing,function()
{container.find('.active_portfolio_item').removeClass('active_portfolio_item');content_retrieved[is_open].attr({'style':""}).removeClass('open_slide');target_wrap.removeClass('open_container');animating=is_open=index_open=false;methods.remove_video();the_body.trigger('av_resize_finished');});break;}
return false;},resize_reset:function()
{if(is_open===false)
{target_container.html('');content_retrieved=[];}}};methods.add_controls();container.on("click","a",methods.load_item);controls.on("click","a",methods.control_click);if(jQuery.support.leadingWhitespace){win.bind('debouncedresize',methods.resize_reset);}});};}(jQuery));$.AviaFullscreenSlider=function(options,slider)
{this.$slider=$(slider);this.$inner=this.$slider.find('.avia-slideshow-inner');this.$innerLi=this.$inner.find('>li');this.$caption=this.$inner.find('.avia-slide-wrap .caption_container');this.$win=$(window);this.isMobile=$.avia_utilities.isMobile;this.property={};this.scrollPos="0";this.transform3d=document.documentElement.className.indexOf('avia_transform3d')!==-1?true:false;this.ticking=false;if($.avia_utilities.supported.transition===undefined)
{$.avia_utilities.supported.transition=$.avia_utilities.supports('transition');}
this._init(options);}
$.AviaFullscreenSlider.defaults={height:100,subtract:'#wpadminbar, #header, #main>.title_container'};$.AviaFullscreenSlider.prototype={_init:function(options)
{var _self=this;this.options=$.extend(true,{},$.AviaFullscreenSlider.defaults,options);if(this.$slider.data('slide_height'))this.options.height=this.$slider.data('slide_height');this.$subtract=$(this.options.subtract);this._setSize();this.$win.on('debouncedresize',$.proxy(this._setSize,this));setTimeout(function()
{if(!_self.isMobile)
_self.$win.on('scroll',$.proxy(_self._on_scroll,_self));},100);this.$slider.aviaSlider({bg_slider:true});},_on_scroll:function(e)
{var _self=this;if(!_self.ticking){_self.ticking=true;window.requestAnimationFrame($.proxy(_self._parallax_scroll,_self));}},_fetch_properties:function(slide_height)
{this.property.offset=this.$slider.offset().top;this.property.wh=this.$win.height();this.property.height=slide_height||this.$slider.outerHeight();this._parallax_scroll();},_setSize:function()
{if(!$.fn.avia_browser_height)
{var viewport=this.$win.height(),slide_height=Math.ceil((viewport/100)*this.options.height);if(this.$subtract.length&&this.options.height==100)
{this.$subtract.each(function()
{slide_height-=this.offsetHeight-0.5;});}
else
{slide_height-=1;}
this.$slider.height(slide_height).removeClass('av-default-height-applied');this.$inner.css('padding',0);}
this._fetch_properties(slide_height);},_parallax_scroll:function(e)
{if(this.isMobile)return;var winTop=this.$win.scrollTop(),winBottom=winTop+this.property.wh,scrollPos="0",prop={},prop2={};if(this.property.offset<winTop&&winTop<=this.property.offset+this.property.height)
{scrollPos=Math.round((winTop-this.property.offset)*0.3);}
if(this.scrollPos!=scrollPos)
{this.scrollPos=scrollPos;if(this.transform3d)
{prop[$.avia_utilities.supported.transition+"transform"]="translate3d(0px,"+scrollPos+"px,0px)";}
else
{prop[$.avia_utilities.supported.transition+"transform"]="translate(0px,"+scrollPos+"px)";}
this.$inner.css(prop);}
this.ticking=false;}};$.fn.aviaFullscreenSlider=function(options)
{return this.each(function()
{var active=$.data(this,'aviaFullscreenSlider');if(!active)
{$.data(this,'aviaFullscreenSlider',1);new $.AviaFullscreenSlider(options,this);}});}
$.AviaParallaxElement=function(options,element)
{this.$el=$(element).addClass('active-parallax');this.$win=$(window);this.$body=$('body');this.$parent=this.$el.parent();this.property={};this.isMobile=$.avia_utilities.isMobile;this.ratio=this.$el.data('avia-parallax-ratio')||0.5;this.transform=document.documentElement.className.indexOf('avia_transform')!==-1?true:false;this.transform3d=document.documentElement.className.indexOf('avia_transform3d')!==-1?true:false;this.ticking=false;if($.avia_utilities.supported.transition===undefined)
{$.avia_utilities.supported.transition=$.avia_utilities.supports('transition');}
this._init(options);}
$.AviaParallaxElement.prototype={_init:function(options)
{var _self=this;if(_self.isMobile)
{return;}
setTimeout(function()
{_self._fetch_properties();},30);this.$win.on("debouncedresize av-height-change",$.proxy(_self._fetch_properties,_self));this.$body.on("av_resize_finished",$.proxy(_self._fetch_properties,_self));setTimeout(function()
{_self.$win.on('scroll',$.proxy(_self._on_scroll,_self));},100);},_fetch_properties:function()
{this.property.offset=this.$parent.offset().top;this.property.wh=this.$win.height();this.property.height=this.$parent.outerHeight();this.$el.height(Math.ceil((this.property.wh*this.ratio)+this.property.height));this._parallax_scroll();},_on_scroll:function(e)
{var _self=this;if(!_self.ticking){_self.ticking=true;window.requestAnimationFrame($.proxy(_self._parallax_scroll,_self));}},_parallax_scroll:function(e)
{var winTop=this.$win.scrollTop(),winBottom=winTop+this.property.wh,scrollPos="0",prop={};if(this.property.offset<winBottom&&winTop<=this.property.offset+this.property.height)
{scrollPos=Math.ceil((winBottom-this.property.offset)*this.ratio);if(this.transform3d)
{prop[$.avia_utilities.supported.transition+"transform"]="translate3d(0px,"+scrollPos+"px, 0px)";}
else if(this.transform)
{prop[$.avia_utilities.supported.transition+"transform"]="translate(0px,"+scrollPos+"px)";}
else
{prop["background-position"]="0px "+scrollPos+"px";}
this.$el.css(prop);}
this.ticking=false;}};$.fn.avia_parallax=function(options)
{return this.each(function()
{var self=$.data(this,'aviaParallax');if(!self)
{self=$.data(this,'aviaParallax',new $.AviaParallaxElement(options,this));}});}
$.fn.avia_mobile_fixed=function(options)
{var isMobile=$.avia_utilities.isMobile;if(!isMobile)return;return this.each(function()
{var current=$(this).addClass('av-parallax-section'),$background=current.attr('style'),$attachment_class=current.data('section-bg-repeat'),template="";if($attachment_class=='stretch'||$attachment_class=='no-repeat')
{$attachment_class=" avia-full-stretch";}
else
{$attachment_class="";}
template="<div class='av-parallax "+$attachment_class+"' data-avia-parallax-ratio='0.0' style = '"+$background+"' ></div>";current.prepend(template);current.attr('style','');});}
$.fn.layer_slider_height_helper=function(options)
{return this.each(function()
{var container=$(this),first_div=container.find('>div:first'),timeout=false,counter=0,reset_size=function()
{if(first_div.height()>0||counter>5)
{container.height('auto');}
else
{timeout=setTimeout(reset_size,500);counter++;}};if(!first_div.length)return;timeout=setTimeout(reset_size,0);});}
$.fn.avia_sc_testimonial=function(options)
{return this.each(function()
{var container=$(this),elements=container.find('.avia-testimonial');container.on('avia_start_animation',function()
{elements.each(function(i)
{var element=$(this);setTimeout(function(){element.addClass('avia_start_animation')},(i*150));});});});}
$.fn.avia_sc_progressbar=function(options)
{return this.each(function()
{var container=$(this),elements=container.find('.progress');container.on('avia_start_animation',function()
{elements.each(function(i)
{var element=$(this);setTimeout(function(){element.addClass('avia_start_animation')},(i*250));});});});}
$.fn.avia_sc_iconlist=function(options)
{return this.each(function()
{var iconlist=$(this),elements=iconlist.find('>li');iconlist.on('avia_start_animation',function()
{elements.each(function(i)
{var element=$(this);setTimeout(function(){element.addClass('avia_start_animation')},(i*350));});});});}
$.fn.avia_sc_animation_delayed=function(options)
{var global_timer=0,delay=options.delay||50;return this.each(function()
{var elements=$(this);elements.on('avia_start_animation',function()
{var element=$(this);global_timer++;setTimeout(function(){element.addClass('avia_start_delayed_animation');global_timer--;},(global_timer*delay));});});}
$.fn.avia_browser_height=function()
{if(!this.length)return;var win=$(window),html_el=$('html'),subtract=$('#wpadminbar, #header.av_header_top:not(.html_header_transparency #header), #main>.title_container'),css_block=$("<style type='text/css' id='av-browser-height'></style>").appendTo('head:first'),sidebar_menu=$('.html_header_sidebar #top #header_main'),full_slider=$('.html_header_sidebar .avia-fullscreen-slider.avia-builder-el-0.avia-builder-el-no-sibling').addClass('av-solo-full'),calc_height=function()
{var css="",wh100=win.height(),ww100=win.width(),wh100_mod=wh100,whCover=(wh100/9)*16,wwCover=(ww100/16)*9,wh75=Math.round(wh100*0.75),wh50=Math.round(wh100*0.5),wh25=Math.round(wh100*0.25),solo=0;if(sidebar_menu.length)solo=sidebar_menu.height();subtract.each(function(){wh100_mod-=this.offsetHeight-1;});var whCoverMod=(wh100_mod/9)*16;css+=".avia-section.av-minimum-height .container{opacity: 1; }\n";css+=".av-minimum-height-100 .container, .avia-fullscreen-slider .avia-slideshow, #top.avia-blank .av-minimum-height-100 .container{height:"+wh100+"px;}\n";css+=".av-minimum-height-75 .container {height:"+wh75+"px;}\n";css+=".av-minimum-height-50 .container {height:"+wh50+"px;}\n";css+=".av-minimum-height-25 .container {height:"+wh25+"px;}\n";css+=".avia-builder-el-0.av-minimum-height-100 .container, .avia-builder-el-0.avia-fullscreen-slider .avia-slideshow{height:"+wh100_mod+"px;}\n";css+="#top .av-solo-full .avia-slideshow {min-height:"+solo+"px;}\n";if(ww100/wh100<16/9)
{css+="#top .av-element-cover iframe, #top .av-element-cover embed, #top .av-element-cover object, #top .av-element-cover video{width:"+whCover+"px; left: -"+(whCover-ww100)/2+"px;}\n";}
else
{css+="#top .av-element-cover iframe, #top .av-element-cover embed, #top .av-element-cover object, #top .av-element-cover video{height:"+wwCover+"px; top: -"+(wwCover-wh100)/2+"px;}\n";}
if(ww100/wh100_mod<16/9)
{css+="#top .avia-builder-el-0 .av-element-cover iframe, #top .avia-builder-el-0 .av-element-cover embed, #top .avia-builder-el-0 .av-element-cover object, #top .avia-builder-el-0 .av-element-cover video{width:"+whCoverMod+"px; left: -"+(whCoverMod-ww100)/2+"px;}\n";}
else
{css+="#top .avia-builder-el-0 .av-element-cover iframe, #top .avia-builder-el-0 .av-element-cover embed, #top .avia-builder-el-0 .av-element-cover object, #top .avia-builder-el-0 .av-element-cover video{height:"+wwCover+"px; top: -"+(wwCover-wh100_mod)/2+"px;}\n";}
try{css_block.text(css);}
catch(err){css_block.remove();css_block=$("<style type='text/css' id='av-browser-height'>"+css+"</style>").appendTo('head:first');}
setTimeout(function(){win.trigger('av-height-change');},100);};win.on('debouncedresize',calc_height);calc_height();}
$.fn.avia_video_section=function()
{if(!this.length)return;var elements=this.length,content="",win=$(window),css_block=$("<style type='text/css' id='av-section-height'></style>").appendTo('head:first'),calc_height=function(section,counter)
{if(counter===0){content="";}
var css="",the_id='#'+section.attr('id'),wh100=section.height(),ww100=section.width(),aspect=section.data('sectionVideoRatio').split(':'),video_w=aspect[0],video_h=aspect[1],whCover=(wh100/video_h)*video_w,wwCover=(ww100/video_w)*video_h;if(ww100/wh100<video_w/video_h)
{css+="#top "+the_id+" .av-section-video-bg iframe, #top "+the_id+" .av-section-video-bg embed, #top "+the_id+" .av-section-video-bg object, #top "+the_id+" .av-section-video-bg video{width:"+whCover+"px; left: -"+(whCover-ww100)/2+"px;}\n";}
else
{css+="#top "+the_id+" .av-section-video-bg iframe, #top "+the_id+" .av-section-video-bg embed, #top "+the_id+" .av-section-video-bg object, #top "+the_id+" .av-section-video-bg video{height:"+wwCover+"px; top: -"+(wwCover-wh100)/2+"px;}\n";}
content=content+css;if(elements==counter+1)
{try{css_block.text(content);}
catch(err){css_block.remove();css_block=$("<style type='text/css' id='av-section-height'>"+content+"</style>").appendTo('head:first');}}};return this.each(function(i)
{var self=$(this);win.on('debouncedresize',function(){calc_height(self,i);});calc_height(self,i);});}
$.fn.avia_sc_gallery=function(options)
{return this.each(function()
{var gallery=$(this),images=gallery.find('img'),big_prev=gallery.find('.avia-gallery-big');gallery.on('avia_start_animation',function()
{images.each(function(i)
{var image=$(this);setTimeout(function(){image.addClass('avia_start_animation')},(i*110));});});if(gallery.hasClass('deactivate_avia_lazyload'))gallery.trigger('avia_start_animation');if(big_prev.length)
{gallery.on('mouseenter','.avia-gallery-thumb a',function()
{var _self=this;big_prev.attr('data-onclick',_self.getAttribute("data-onclick"));big_prev.height(big_prev.height());big_prev.attr('href',_self.href)
var newImg=_self.getAttribute("data-prev-img"),oldImg=big_prev.find('img'),oldImgSrc=oldImg.attr('src');if(newImg!=oldImgSrc)
{var next_img=new Image();next_img.src=newImg;var $next=$(next_img);if(big_prev.hasClass('avia-gallery-big-no-crop-thumb'))
{$next.css({'height':big_prev.height(),'width':'auto'});}
big_prev.stop().animate({opacity:0},function()
{$next.insertAfter(oldImg);oldImg.remove();big_prev.animate({opacity:1});big_prev.attr('title',$(_self).attr('title'));});}});big_prev.on('click',function()
{var imagelink=gallery.find('.avia-gallery-thumb a').eq(this.getAttribute("data-onclick")-1);if(imagelink&&!imagelink.hasClass('aviaopeninbrowser'))
{imagelink.trigger('click');}
else if(imagelink)
{var imgurl=imagelink.attr("href");if(imagelink.hasClass('aviablank')&&imgurl!='')
{window.open(imgurl,'_blank');}
else if(imgurl!='')
{window.open(imgurl,'_self');}}
return false;});$(window).on("debouncedresize",function()
{big_prev.height('auto');});}});}
$.fn.avia_sc_toggle=function(options)
{var defaults={single:'.single_toggle',heading:'.toggler',content:'.toggle_wrap',sortContainer:'.taglist'};var win=$(window),options=$.extend(defaults,options);return this.each(function()
{var container=$(this).addClass('enable_toggles'),toggles=$(options.single,container),heading=$(options.heading,container),allContent=$(options.content,container),sortLinks=$(options.sortContainer+" a",container);heading.each(function(i)
{var thisheading=$(this),content=thisheading.next(options.content,container);function scroll_to_viewport()
{var el_offset=content.offset().top,scoll_target=el_offset-50-parseInt($('html').css('margin-top'),10);if(win.scrollTop()>el_offset)
{$('html:not(:animated),body:not(:animated)').animate({scrollTop:scoll_target},200);}}
if(content.css('visibility')!="hidden")
{thisheading.addClass('activeTitle');}
thisheading.on('click',function()
{if(content.css('visibility')!="hidden")
{content.slideUp(200,function()
{content.removeClass('active_tc').attr({style:''});win.trigger('av-height-change');});thisheading.removeClass('activeTitle');}
else
{if(container.is('.toggle_close_all'))
{allContent.not(content).slideUp(200,function()
{$(this).removeClass('active_tc').attr({style:''});scroll_to_viewport();});heading.removeClass('activeTitle');}
content.addClass('active_tc').slideDown(200,function()
{if(!container.is('.toggle_close_all'))
{scroll_to_viewport();}
win.trigger('av-height-change');});thisheading.addClass('activeTitle');location.replace(thisheading.data('fake-id'));}});});sortLinks.click(function(e){e.preventDefault();var show=toggles.filter('[data-tags~="'+$(this).data('tag')+'"]'),hide=toggles.not('[data-tags~="'+$(this).data('tag')+'"]');sortLinks.removeClass('activeFilter');$(this).addClass('activeFilter');heading.filter('.activeTitle').trigger('click');show.slideDown();hide.slideUp();});function trigger_default_open(hash)
{if(!hash&&window.location.hash)hash=window.location.hash;if(!hash)return;var open=heading.filter('[data-fake-id="'+hash+'"]');if(open.length)
{if(!open.is('.activeTitle'))open.trigger('click');window.scrollTo(0,container.offset().top-70);}}
trigger_default_open(false);$('a').on('click',function(){var hash=$(this).attr('href');if(typeof hash!="undefined"&&hash)
{hash=hash.replace(/^.*?#/,'');trigger_default_open('#'+hash);}});});};$.fn.avia_sc_tabs=function(options)
{var defaults={heading:'.tab',content:'.tab_content',active:'active_tab',sidebar:false};var win=$(window)
options=$.extend(defaults,options);return this.each(function()
{var container=$(this),tab_titles=$('<div class="tab_titles"></div>').prependTo(container),tabs=$(options.heading,container),content=$(options.content,container),newtabs=false,oldtabs=false;newtabs=tabs.clone();oldtabs=tabs.addClass('fullsize-tab');tabs=newtabs;tabs.prependTo(tab_titles).each(function(i)
{var tab=$(this),the_oldtab=false;if(newtabs)the_oldtab=oldtabs.filter(':eq('+i+')');tab.addClass('tab_counter_'+i).bind('click',function()
{open_content(tab,i,the_oldtab);return false;});if(newtabs)
{the_oldtab.bind('click',function()
{open_content(the_oldtab,i,tab);return false;});}});set_size();trigger_default_open(false);win.on("debouncedresize",set_size);$('a').on('click',function(){var hash=$(this).attr('href');if(typeof hash!="undefined"&&hash)
{hash=hash.replace(/^.*?#/,'');trigger_default_open('#'+hash);}});function set_size()
{if(!options.sidebar)return;content.css({'min-height':tab_titles.outerHeight()+1});}
function open_content(tab,i,alternate_tab)
{if(!tab.is('.'+options.active))
{$('.'+options.active,container).removeClass(options.active);$('.'+options.active+'_content',container).removeClass(options.active+'_content');tab.addClass(options.active);var new_loc=tab.data('fake-id');if(typeof new_loc=='string')location.replace(new_loc);if(alternate_tab)alternate_tab.addClass(options.active);var active_c=content.filter(':eq('+i+')').addClass(options.active+'_content');if(typeof click_container!='undefined'&&click_container.length)
{sidebar_shadow.height(active_c.outerHeight());}
var el_offset=active_c.offset().top,scoll_target=el_offset-50-parseInt($('html').css('margin-top'),10);if(win.scrollTop()>el_offset)
{$('html:not(:animated),body:not(:animated)').scrollTop(scoll_target);}}}
function trigger_default_open(hash)
{if(!hash&&window.location.hash)hash=window.location.hash;if(!hash)return;var open=tabs.filter('[data-fake-id="'+hash+'"]');if(open.length)
{if(!open.is('.active_tab'))open.trigger('click');window.scrollTo(0,container.offset().top-70);}}});};(function($)
{$.fn.avia_sc_animated_number=function(options)
{var skipStep=false,start_count=function(element,countTo,increment,current,fakeCountTo)
{var newCount=current+increment;if(newCount>=fakeCountTo)
{element.text(countTo);}
else
{var prepend="",addZeros=countTo.toString().length-newCount.toString().length
for(var i=addZeros;i>0;i--){prepend+="0";}
element.text(prepend+newCount);window.requestAnimationFrame(function(){start_count(element,countTo,increment,newCount,fakeCountTo)});}};return this.each(function()
{var number_container=$(this),elements=number_container.find('.avia-single-number'),countTimer=number_container.data('timer')||3000;elements.each(function(i)
{var element=$(this),text=element.text();if(window.addEventListener)element.text(text.replace(/./g,"0"));});number_container.addClass('number_prepared').on('avia_start_animation',function()
{elements.each(function(i)
{var element=$(this),countTo=element.data('number'),fakeCountTo=countTo,current=parseInt(element.text(),10),zeroOnly=/^0+$/.test(countTo),increment=0;if(zeroOnly&&countTo!==0)fakeCountTo=countTo.replace(/0/g,'9');increment=Math.round(fakeCountTo*32/countTimer);if(increment==0||increment%10==0)increment+=1;setTimeout(function(){start_count(element,countTo,increment,current,fakeCountTo);},300);});});});}})(jQuery);(function($)
{$.fn.avia_ajax_form=function(variables)
{var defaults={sendPath:'send.php',responseContainer:'.ajaxresponse'};var options=$.extend(defaults,variables);return this.each(function()
{var form=$(this),form_sent=false,send={formElements:form.find('textarea, select, input[type=text], input[type=checkbox], input[type=hidden]'),validationError:false,button:form.find('input:submit'),dataObj:{}},responseContainer=form.next(options.responseContainer+":eq(0)");send.button.bind('click',checkElements);if($.avia_utilities.isMobile)
{send.formElements.each(function(i)
{var currentElement=$(this),is_email=currentElement.hasClass('is_email');if(is_email)currentElement.attr('type','email');});}
function send_ajax_form()
{if(form_sent){return false;}
form_sent=true;send.button.addClass('av-sending-button');send.button.val(send.button.data('sending-label'));var redirect_to=form.data('avia-redirect')|| false,action=form.attr('action');responseContainer.load(action+' '+options.responseContainer,send.dataObj,function()
{if(redirect_to&&action!=redirect_to)
{form.attr('action',redirect_to);location.href=redirect_to;}
else
{responseContainer.removeClass('hidden').css({display:"block"});form.slideUp(400,function(){responseContainer.slideDown(400,function(){$('body').trigger('av_resize_finished');});send.formElements.val('');});}});}
function checkElements()
{send.validationError=false;send.datastring='ajax=true';send.formElements.each(function(i)
{var currentElement=$(this),surroundingElement=currentElement.parent(),value=currentElement.val(),name=currentElement.attr('name'),classes=currentElement.attr('class'),nomatch=true;if(currentElement.is(':checkbox'))
{if(currentElement.is(':checked')){value=true}else{value=''}}
send.dataObj[name]=encodeURIComponent(value);if(classes&&classes.match(/is_empty/))
{if(value=='')
{surroundingElement.removeClass("valid error ajax_alert").addClass("error");send.validationError=true;}
else
{surroundingElement.removeClass("valid error ajax_alert").addClass("valid");}
nomatch=false;}
if(classes&&classes.match(/is_email/))
{if(!value.match(/^[\w|\.|\-]+@\w[\w|\.|\-]*\.[a-zA-Z]{2,20}$/))
{surroundingElement.removeClass("valid error ajax_alert").addClass("error");send.validationError=true;}
else
{surroundingElement.removeClass("valid error ajax_alert").addClass("valid");}
nomatch=false;}
if(classes&&classes.match(/is_phone/))
{if(!value.match(/^(\d|\s|\-|\/|\(|\)|\[|\]|e|x|t|ension|\.|\+|\_|\,|\:|\;){3,}$/))
{surroundingElement.removeClass("valid error ajax_alert").addClass("error");send.validationError=true;}
else
{surroundingElement.removeClass("valid error ajax_alert").addClass("valid");}
nomatch=false;}
if(classes&&classes.match(/is_number/))
{if(!($.isNumeric(value))||value=="")
{surroundingElement.removeClass("valid error ajax_alert").addClass("error");send.validationError=true;}
else
{surroundingElement.removeClass("valid error ajax_alert").addClass("valid");}
nomatch=false;}
if(classes&&classes.match(/captcha/))
{var verifier=form.find("#"+name+"_verifier").val(),lastVer=verifier.charAt(verifier.length-1),finalVer=verifier.charAt(lastVer);if(value!=finalVer)
{surroundingElement.removeClass("valid error ajax_alert").addClass("error");send.validationError=true;}
else
{surroundingElement.removeClass("valid error ajax_alert").addClass("valid");}
nomatch=false;}
if(nomatch&&value!='')
{surroundingElement.removeClass("valid error ajax_alert").addClass("valid");}});if(send.validationError==false)
{send_ajax_form();}
return false;}});};})(jQuery);$.AviaccordionSlider=function(options,slider)
{this.$slider=$(slider);this.$inner=this.$slider.find('.aviaccordion-inner');this.$slides=this.$inner.find('.aviaccordion-slide');this.$images=this.$inner.find('.aviaccordion-image');this.$last=this.$slides.filter(':last');this.$titles=this.$slider.find('.aviaccordion-preview');this.$titlePos=this.$slider.find('.aviaccordion-preview-title-pos');this.$titleWrap=this.$slider.find('.aviaccordion-preview-title-wrap');this.$win=$(window);if($.avia_utilities.supported.transition===undefined)
{$.avia_utilities.supported.transition=$.avia_utilities.supports('transition');}
this.browserPrefix=$.avia_utilities.supported.transition;this.cssActive=this.browserPrefix!==false?true:false;this.transform3d=document.documentElement.className.indexOf('avia_transform3d')!==-1?true:false;this.isMobile=$.avia_utilities.isMobile;this.property=this.browserPrefix+'transform',this.count=this.$slides.length;this.open=false;this.autoplay=false;this.increaseTitle=this.$slider.is(".aviaccordion-title-on-hover");this._init(options);}
$.AviaccordionSlider.prototype={_init:function(options)
{var _self=this;_self.options=$.extend({},options,this.$slider.data());$.avia_utilities.preload({container:this.$slider,single_callback:function(){_self._kickOff();}});},_kickOff:function()
{var _self=this;_self._calcMovement();_self._bindEvents();_self._showImages();_self._autoplay();},_autoplay:function()
{var _self=this;if(_self.options.autoplay)
{_self.autoplay=setInterval(function()
{_self.open=_self.open===false?0:_self.open+1;if(_self.open>=_self.count)_self.open=0;_self._move({},_self.open);},_self.options.interval*1000)}},_showImages:function()
{var _self=this,counter=0,delay=300,title_delay=this.count*delay;if(this.cssActive)
{setTimeout(function(){_self.$slider.addClass('av-animation-active');},10);}
this.$images.each(function(i)
{var current=$(this),timer=delay*(i+1);setTimeout(function()
{current.avia_animate({opacity:1},400,function()
{current.css($.avia_utilities.supported.transition+"transform","none");});},timer);});if(_self.increaseTitle)title_delay=0;this.$titlePos.each(function(i)
{var current=$(this),new_timer=title_delay+100*(i+1);setTimeout(function()
{current.avia_animate({opacity:1},200,function()
{current.css($.avia_utilities.supported.transition+"transform","none");});},new_timer);});},_bindEvents:function()
{var trigger=this.isMobile?"click":"mouseenter";this.$slider.on(trigger,'.aviaccordion-slide',$.proxy(this._move,this));this.$slider.on('mouseleave','.aviaccordion-inner',$.proxy(this._move,this));this.$win.on('debouncedresize',$.proxy(this._calcMovement,this));this.$slider.on('av-prev av-next',$.proxy(this._moveTo,this));if(this.isMobile)
{this.$slider.avia_swipe_trigger({next:this.$slider,prev:this.$slider,event:{prev:'av-prev',next:'av-next'}});}},_titleHeight:function()
{var th=0;this.$titleWrap.css({'height':'auto'}).each(function()
{var new_h=$(this).outerHeight();if(new_h>th)th=new_h;}).css({'height':th+2});},_calcMovement:function(event,allow_repeat)
{var _self=this,containerWidth=this.$slider.width(),defaultPos=this.$last.data('av-left'),imgWidth=this.$images.filter(':last').width()||containerWidth,imgWidthPercent=Math.floor((100/containerWidth)*imgWidth),allImageWidth=imgWidthPercent*_self.count,modifier=3,tempMinLeft=100-imgWidthPercent,minLeft=tempMinLeft>defaultPos/modifier?tempMinLeft:0,oneLeft=minLeft/(_self.count-1),titleWidth=imgWidth;if(allImageWidth<110&&allow_repeat!==false)
{var slideHeight=this.$slider.height(),maxHeight=(slideHeight/allImageWidth)*110;this.$slider.css({'max-height':maxHeight});_self._calcMovement(event,false);return;}
if(oneLeft<2)minLeft=0;this.$slides.each(function(i)
{var current=$(this),newLeft=0,newRight=0,defaultLeft=current.data('av-left');if(minLeft!==0)
{newLeft=oneLeft*i;newRight=imgWidthPercent+newLeft-oneLeft;}
else
{newLeft=defaultLeft/Math.abs(modifier);newRight=100-((newLeft/i)*(_self.count-i));}
if(i==1&&_self.increaseTitle){titleWidth=newRight+1;}
if(_self.cssActive)
{newLeft=newLeft-defaultLeft;newRight=newRight-defaultLeft;defaultLeft=0;}
current.data('av-calc-default',defaultLeft);current.data('av-calc-left',newLeft);current.data('av-calc-right',newRight);});if(_self.increaseTitle){_self.$titles.css({width:titleWidth+"%"});}},_moveTo:function(event)
{var direction=event.type=="av-next"?1:-1,nextSlide=this.open===false?0:this.open+direction;if(nextSlide>=0&&nextSlide<this.$slides.length)this._move(event,nextSlide);},_move:function(event,direct_open)
{var _self=this,slide=event.currentTarget,itemNo=typeof direct_open!="undefined"?direct_open:this.$slides.index(slide);this.open=itemNo;if(_self.autoplay&&typeof slide!="undefined"){clearInterval(_self.autoplay);_self.autoplay==false;}
this.$slides.removeClass('aviaccordion-active-slide').each(function(i)
{var current=$(this),dataSet=current.data(),trans_val=i<=itemNo?dataSet.avCalcLeft:dataSet.avCalcRight,transition={},reset=event.type=='mouseleave'?1:0,active=itemNo===i?_self.$titleWrap.eq(i):false;if(active)current.addClass('aviaccordion-active-slide');if(reset)
{trans_val=dataSet.avCalcDefault;this.open=false;}
if(_self.cssActive)
{transition[_self.property]=_self.transform3d?"translate3d("+trans_val+"%, 0, 0)":"translate("+trans_val+"%,0)";current.css(transition);}
else
{transition.left=trans_val+"%";current.stop().animate(transition,700,'easeOutQuint');}});}};$.fn.aviaccordion=function(options)
{return this.each(function()
{var active=$.data(this,'AviaccordionSlider');if(!active)
{$.data(this,'AviaccordionSlider',1);new $.AviaccordionSlider(options,this);}});}
$.AviaTextRotator=function(options,slider)
{this.$win=$(window);this.$slider=$(slider);this.$inner=this.$slider.find('.av-rotator-text');this.$slides=this.$inner.find('.av-rotator-text-single');this.$current=this.$slides.eq(0);this.open=0;this.count=this.$slides.length;if($.avia_utilities.supported.transition===undefined)
{$.avia_utilities.supported.transition=$.avia_utilities.supports('transition');}
this.browserPrefix=$.avia_utilities.supported.transition;this.cssActive=this.browserPrefix!==false?true:false;this.property=this.browserPrefix+'transform',this._init(options);}
$.AviaTextRotator.prototype={_init:function(options)
{var _self=this;if(this.count<=1)return;_self.options=$.extend({},options,this.$slider.data());_self.$inner.addClass('av-rotation-active');if(_self.options.fixwidth==1)this.$inner.width(this.$current.width());_self._autoplay();},_autoplay:function()
{var _self=this;_self.autoplay=setInterval(function()
{_self.open=_self.open===false?0:_self.open+1;if(_self.open>=_self.count)_self.open=0;_self._move({},_self.open);},_self.options.interval*1000)},_move:function(event)
{var _self=this,modifier=30*_self.options.animation,fade_out={opacity:0},fade_start={display:'inline',opacity:0},fade_in={opacity:1};this.$next=_self.$slides.eq(this.open);if(this.cssActive)
{fade_out[_self.property]="translate(0px,"+modifier+"px)";fade_start[_self.property]="translate(0px,"+(modifier*-1)+"px)";fade_in[_self.property]="translate(0px,0px)";}
else
{fade_out['top']=modifier;fade_start['top']=(modifier*-1);fade_in['top']=0;}
_self.$current.avia_animate(fade_out,function()
{_self.$current.css({display:'none'});_self.$next.css(fade_start).avia_animate(fade_in,function()
{_self.$current=_self.$slides.eq(_self.open);});});}};$.fn.avia_textrotator=function(options)
{return this.each(function()
{var active=$.data(this,'AviaTextRotator');if(!active)
{$.data(this,'AviaTextRotator',1);new $.AviaTextRotator(options,this);}});}
$.fn.avia_waypoints=function(options_passed)
{if(!$('html').is('.avia_transform'))return;var defaults={offset:'bottom-in-view',triggerOnce:true},options=$.extend({},defaults,options_passed),isMobile=$.avia_utilities.isMobile;return this.each(function()
{var element=$(this);setTimeout(function()
{if(isMobile)
{element.addClass('avia_start_animation').trigger('avia_start_animation');}
else
{element.waypoint(function(direction)
{$(this.element).addClass('avia_start_animation').trigger('avia_start_animation');},options);}},100)});};var $event=$.event,$special,resizeTimeout;$special=$event.special.debouncedresize={setup:function(){$(this).on("resize",$special.handler);},teardown:function(){$(this).off("resize",$special.handler);},handler:function(event,execAsap){var context=this,args=arguments,dispatch=function(){event.type="debouncedresize";$event.dispatch.apply(context,args);};if(resizeTimeout){clearTimeout(resizeTimeout);}
execAsap?dispatch():resizeTimeout=setTimeout(dispatch,$special.threshold);},threshold:150};$.easing['jswing']=$.easing['swing'];$.extend($.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return $.easing[$.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b;}});})(jQuery);(function($)
{"use strict";$.avia_utilities=$.avia_utilities||{};$.avia_utilities.loading=function(attach_to,delay){var loader={active:false,show:function()
{if(loader.active===false)
{loader.active=true;loader.loading_item.css({display:'block',opacity:0});}
loader.loading_item.stop().animate({opacity:0.7});},hide:function()
{if(typeof delay==='undefined'){delay=600;}
loader.loading_item.stop().delay(delay).animate({opacity:0},function()
{loader.loading_item.css({display:'none'});loader.active=false;});},attach:function()
{if(typeof attach_to==='undefined'){attach_to='body';}
loader.loading_item=$('<div class="avia_loading_icon"></div>').css({display:"none"}).appendTo(attach_to);}}
loader.attach();return loader;};$.avia_utilities.playpause=function(attach_to,delay){var pp={active:false,to1:"",to2:"",set:function(status)
{pp.loading_item.removeClass('av-play av-pause');pp.to1=setTimeout(function(){pp.loading_item.addClass('av-'+status);},10);pp.to2=setTimeout(function(){pp.loading_item.removeClass('av-'+status);},1500);},attach:function()
{if(typeof attach_to==='undefined'){attach_to='body';}
pp.loading_item=$('<div class="avia_playpause_icon"></div>').css({display:"none"}).appendTo(attach_to);}}
pp.attach();return pp;};$.avia_utilities.preload=function(options_passed)
{new $.AviaPreloader(options_passed);}
$.AviaPreloader=function(options)
{this.win=$(window);this.defaults={container:'body',maxLoops:10,trigger_single:true,single_callback:function(){},global_callback:function(){}};this.options=$.extend({},this.defaults,options);this.preload_images=0;this.load_images();}
$.AviaPreloader.prototype={load_images:function()
{var _self=this;if(typeof _self.options.container==='string'){_self.options.container=$(_self.options.container);}
_self.options.container.each(function()
{var container=$(this);container.images=container.find('img');container.allImages=container.images;_self.preload_images+=container.images.length;setTimeout(function(){_self.checkImage(container);},10);});},checkImage:function(container)
{var _self=this;container.images.each(function()
{if(this.complete===true)
{container.images=container.images.not(this);_self.preload_images-=1;}});if(container.images.length&&_self.options.maxLoops>=0)
{_self.options.maxLoops-=1;setTimeout(function(){_self.checkImage(container);},500);}
else
{_self.preload_images=_self.preload_images-container.images.length;_self.trigger_loaded(container);}},trigger_loaded:function(container)
{var _self=this;if(_self.options.trigger_single!==false)
{_self.win.trigger('avia_images_loaded_single',[container]);_self.options.single_callback.call(container);}
if(_self.preload_images===0)
{_self.win.trigger('avia_images_loaded');_self.options.global_callback.call();}}}
$.avia_utilities.css_easings={linear:'linear',swing:'ease-in-out',bounce:'cubic-bezier(0.0, 0.35, .5, 1.3)',easeInQuad:'cubic-bezier(0.550, 0.085, 0.680, 0.530)',easeInCubic:'cubic-bezier(0.550, 0.055, 0.675, 0.190)',easeInQuart:'cubic-bezier(0.895, 0.030, 0.685, 0.220)',easeInQuint:'cubic-bezier(0.755, 0.050, 0.855, 0.060)',easeInSine:'cubic-bezier(0.470, 0.000, 0.745, 0.715)',easeInExpo:'cubic-bezier(0.950, 0.050, 0.795, 0.035)',easeInCirc:'cubic-bezier(0.600, 0.040, 0.980, 0.335)',easeInBack:'cubic-bezier(0.600, -0.280, 0.735, 0.04)',easeOutQuad:'cubic-bezier(0.250, 0.460, 0.450, 0.940)',easeOutCubic:'cubic-bezier(0.215, 0.610, 0.355, 1.000)',easeOutQuart:'cubic-bezier(0.165, 0.840, 0.440, 1.000)',easeOutQuint:'cubic-bezier(0.230, 1.000, 0.320, 1.000)',easeOutSine:'cubic-bezier(0.390, 0.575, 0.565, 1.000)',easeOutExpo:'cubic-bezier(0.190, 1.000, 0.220, 1.000)',easeOutCirc:'cubic-bezier(0.075, 0.820, 0.165, 1.000)',easeOutBack:'cubic-bezier(0.175, 0.885, 0.320, 1.275)',easeInOutQuad:'cubic-bezier(0.455, 0.030, 0.515, 0.955)',easeInOutCubic:'cubic-bezier(0.645, 0.045, 0.355, 1.000)',easeInOutQuart:'cubic-bezier(0.770, 0.000, 0.175, 1.000)',easeInOutQuint:'cubic-bezier(0.860, 0.000, 0.070, 1.000)',easeInOutSine:'cubic-bezier(0.445, 0.050, 0.550, 0.950)',easeInOutExpo:'cubic-bezier(1.000, 0.000, 0.000, 1.000)',easeInOutCirc:'cubic-bezier(0.785, 0.135, 0.150, 0.860)',easeInOutBack:'cubic-bezier(0.680, -0.550, 0.265, 1.55)',easeInOutBounce:'cubic-bezier(0.580, -0.365, 0.490, 1.365)',easeOutBounce:'cubic-bezier(0.760, 0.085, 0.490, 1.365)'};$.avia_utilities.supported={};$.avia_utilities.supports=(function()
{var div=document.createElement('div'),vendors=['Khtml','Ms','Moz','Webkit'];return function(prop,vendor_overwrite)
{if(div.style[prop]!==undefined){return"";}
if(vendor_overwrite!==undefined){vendors=vendor_overwrite;}
prop=prop.replace(/^[a-z]/,function(val)
{return val.toUpperCase();});var len=vendors.length;while(len--)
{if(div.style[vendors[len]+prop]!==undefined)
{return"-"+vendors[len].toLowerCase()+"-";}}
return false;};}());$.fn.avia_animate=function(prop,speed,easing,callback)
{if(typeof speed==='function'){callback=speed;speed=false;}
if(typeof easing==='function'){callback=easing;easing=false;}
if(typeof speed==='string'){easing=speed;speed=false;}
if(callback===undefined||callback===false){callback=function(){};}
if(easing===undefined||easing===false){easing='easeInQuad';}
if(speed===undefined||speed===false){speed=400;}
if($.avia_utilities.supported.transition===undefined)
{$.avia_utilities.supported.transition=$.avia_utilities.supports('transition');}
if($.avia_utilities.supported.transition!==false)
{var prefix=$.avia_utilities.supported.transition+'transition',cssRule={},cssProp={},thisStyle=document.body.style,end=(thisStyle.WebkitTransition!==undefined)?'webkitTransitionEnd':(thisStyle.OTransition!==undefined)?'oTransitionEnd':'transitionend';easing=$.avia_utilities.css_easings[easing];cssRule[prefix]='all '+(speed/1000)+'s '+easing;end=end+".avia_animate";for(var rule in prop)
{if(prop.hasOwnProperty(rule)){cssProp[rule]=prop[rule];}}
prop=cssProp;this.each(function()
{var element=$(this),css_difference=false,rule,current_css;for(rule in prop)
{if(prop.hasOwnProperty(rule))
{current_css=element.css(rule);if(prop[rule]!=current_css&&prop[rule]!=current_css.replace(/px|%/g,""))
{css_difference=true;break;}}}
if(css_difference)
{if(!($.avia_utilities.supported.transition+"transform"in prop))
{prop[$.avia_utilities.supported.transition+"transform"]="translateZ(0)";}
element.on(end,function(event)
{if(event.target!=event.currentTarget)return false;cssRule[prefix]="none";element.off(end);element.css(cssRule);setTimeout(function(){callback.call(element);});});setTimeout(function(){element.css(cssRule);},10);setTimeout(function(){element.css(prop);},20);}
else
{setTimeout(function(){callback.call(element);});}});}
else
{this.animate(prop,speed,easing,callback);}
return this;};})(jQuery);(function($)
{"use strict";$.AviaSlider=function(options,slider)
{var self=this;this.$win=$(window);this.$slider=$(slider);this.isMobile=$.avia_utilities.isMobile;this._prepareSlides(options);$.avia_utilities.preload({container:this.$slider,single_callback:function(){self._init(options);}});}
$.AviaSlider.defaults={interval:5,autoplay:false,stopinfiniteloop:false,animation:'slide',transitionSpeed:900,easing:'easeInOutQuart',wrapElement:'>ul',slideElement:'>li',hoverpause:false,bg_slider:false,show_slide_delay:0,fullfade:false};$.AviaSlider.prototype={_init:function(options)
{this.options=this._setOptions(options);this.$sliderUl=this.$slider.find(this.options.wrapElement);this.$slides=this.$sliderUl.find(this.options.slideElement);this.gotoButtons=this.$slider.find('.avia-slideshow-dots a');this.permaCaption=this.$slider.find('>.av-slideshow-caption');this.itemsCount=this.$slides.length;this.current=0;this.loopCount=0;this.isAnimating=false;this.browserPrefix=$.avia_utilities.supports('transition');this.cssActive=this.browserPrefix!==false?true:false;this.css3DActive=document.documentElement.className.indexOf('avia_transform3d')!==-1?true:false;this.video=false;if(this.options.bg_slider==true)
{this.imageUrls=[];this.loader=$.avia_utilities.loading(this.$slider);this._bgPreloadImages();}
else
{this._kickOff();}},_setOptions:function(options)
{var newOptions=$.extend(true,{},$.AviaSlider.defaults,options),htmlData=this.$slider.data(),i="";for(i in htmlData)
{if(htmlData.hasOwnProperty(i))
{if(typeof htmlData[i]==="string"||typeof htmlData[i]==="number"||typeof htmlData[i]==="boolean")
{newOptions[i]=htmlData[i];}}}
return newOptions;},_prepareSlides:function(options)
{if(this.isMobile)
{var alter=this.$slider.find('.av-mobile-fallback-image');alter.each(function()
{var current=$(this).removeClass('av-video-slide').data({'avia_video_events':true,'video-ratio':0}),fallback=current.data('mobile-img');current.find('.av-click-overlay, .mejs-mediaelement, .mejs-container').remove();if(!fallback)
{var appendTo=current.find('.avia-slide-wrap');$('<p class="av-fallback-message"><span>Please set a mobile device fallback image for this video in your wordpress backend</span></p>').appendTo(appendTo);}
if(options&&options.bg_slider)
{current.data('img-url',fallback);}
else
{var image=$('<img src="'+fallback+'" alt="" title="" />');current.find('.avia-slide-wrap').append(image);}});}},_bgPreloadImages:function(callback)
{this._getImageURLS();this._preloadSingle(0,function()
{this._kickOff();this._preloadNext(1);});},_getImageURLS:function()
{var _self=this;this.$slides.each(function(i)
{_self.imageUrls[i]=[];_self.imageUrls[i]['url']=$(this).data("img-url");if(typeof _self.imageUrls[i]['url']=='string')
{_self.imageUrls[i]['status']=false;}
else
{_self.imageUrls[i]['status']=true;}});},_preloadSingle:function(key,callback)
{var _self=this,objImage=new Image();if(typeof _self.imageUrls[key]['url']=='string')
{$(objImage).bind('load error',function()
{_self.imageUrls[key]['status']=true;_self.$slides.eq(key).css('background-image','url('+_self.imageUrls[key]['url']+')');if(typeof callback=='function')callback.apply(_self,[objImage,key]);});objImage.src=_self.imageUrls[key]['url'];}
else
{if(typeof callback=='function')callback.apply(_self,[objImage,key]);}},_preloadNext:function(key)
{if(typeof this.imageUrls[key]!="undefined")
{this._preloadSingle(key,function()
{this._preloadNext(key+1);});}},_bindEvents:function()
{var self=this,win=$(window);this.$slider.on('click','.next-slide',$.proxy(this.next,this));this.$slider.on('click','.prev-slide',$.proxy(this.previous,this));this.$slider.on('click','.goto-slide',$.proxy(this.go2,this));if(this.options.hoverpause)
{this.$slider.on('mouseenter',$.proxy(this.pause,this));this.$slider.on('mouseleave',$.proxy(this.resume,this));}
if(this.options.stopinfiniteloop&&this.options.autoplay)
{if(this.options.stopinfiniteloop=='last')
{this.$slider.on('avia_slider_last_slide',$.proxy(this._stopSlideshow,this));}
else if(this.options.stopinfiniteloop=='first')
{this.$slider.on('avia_slider_first_slide',$.proxy(this._stopSlideshow,this));}}
win.on('debouncedresize.aviaSlider',$.proxy(this._setSize,this));if(!this.isMobile)
{this.$slider.avia_keyboard_controls();}
else
{this.$slider.avia_swipe_trigger();}
self._attach_video_events();},_kickOff:function()
{var self=this,first_slide=self.$slides.eq(0),video=first_slide.data('video-ratio');self._bindEvents();this.$slider.removeClass('av-default-height-applied');if(video)
{self._setSize(true);}
else
{self.$sliderUl.css('padding',0);self.$win.trigger('av-height-change');}
first_slide.css({visibility:'visible',opacity:0}).avia_animate({opacity:1},function()
{var current=$(this).addClass('active-slide');if(self.permaCaption.length)
{self.permaCaption.addClass('active-slide');}});if(self.options.autoplay)
{self._startSlideshow();}},_navigate:function(dir,pos){if(this.isAnimating||this.itemsCount<2)
{return false;}
this.isAnimating=true;this.prev=this.current;if(pos!==undefined)
{this.current=pos;dir=this.current>this.prev?'next':'prev';}
else if(dir==='next')
{this.current=this.current<this.itemsCount-1?this.current+1:0;if(this.current===0&&this.options.autoplay_stopper==1&&this.options.autoplay)
{this.isAnimating=false;this.current=this.prev;this._stopSlideshow();return false;}}
else if(dir==='prev')
{this.current=this.current>0?this.current-1:this.itemsCount-1;}
this.gotoButtons.removeClass('active').eq(this.current).addClass('active');this._setSize();if(this.options.bg_slider==true)
{if(this.imageUrls[this.current]['status']==true)
{this['_'+this.options.animation].call(this,dir);}
else
{this.loader.show();this._preloadSingle(this.current,function()
{this['_'+this.options.animation].call(this,dir);this.loader.hide();});}}
else
{this['_'+this.options.animation].call(this,dir);}
if(this.current==0)
{this.loopCount++;this.$slider.trigger('avia_slider_first_slide');}
else if(this.current==this.itemsCount-1)
{this.$slider.trigger('avia_slider_last_slide');}
else
{this.$slider.trigger('avia_slider_navigate_slide');}},_setSize:function(instant)
{if(this.options.bg_slider==true)return;var self=this,slide=this.$slides.eq(this.current),current=Math.floor(this.$sliderUl.height()),ratio=slide.data('video-ratio'),setTo=ratio?this.$sliderUl.width()/ratio:Math.floor(slide.height()),video_height=slide.data('video-height'),video_toppos=slide.data('video-toppos');this.$sliderUl.height(current).css('padding',0);if(setTo!=current)
{if(instant==true)
{this.$sliderUl.css({height:setTo});this.$win.trigger('av-height-change');}
else
{this.$sliderUl.avia_animate({height:setTo},function()
{self.$win.trigger('av-height-change');});}}
if(video_height&&video_height!="set")
{slide.find('iframe, embed, video, object, .av_youtube_frame').css({height:video_height+'%',top:video_toppos+'%'});slide.data('video-height','set');}},_slide:function(dir)
{var sliderWidth=this.$slider.width(),direction=dir==='next'?-1:1,property=this.browserPrefix+'transform',reset={},transition={},transition2={},trans_val=(sliderWidth*direction*-1),trans_val2=(sliderWidth*direction);if(this.cssActive)
{property=this.browserPrefix+'transform';if(this.css3DActive)
{reset[property]="translate3d("+trans_val+"px, 0, 0)";transition[property]="translate3d("+trans_val2+"px, 0, 0)";transition2[property]="translate3d(0,0,0)";}
else
{reset[property]="translate("+trans_val+"px,0)";transition[property]="translate("+trans_val2+"px,0)";transition2[property]="translate(0,0)";}}
else
{reset.left=trans_val;transition.left=trans_val2;transition2.left=0;}
this._slide_animate(reset,transition,transition2);},_slide_up:function(dir)
{var sliderHeight=this.$slider.height(),direction=dir==='next'?-1:1,property=this.browserPrefix+'transform',reset={},transition={},transition2={},trans_val=(sliderHeight*direction*-1),trans_val2=(sliderHeight*direction);if(this.cssActive)
{property=this.browserPrefix+'transform';if(this.css3DActive)
{reset[property]="translate3d( 0,"+trans_val+"px, 0)";transition[property]="translate3d( 0,"+trans_val2+"px, 0)";transition2[property]="translate3d(0,0,0)";}
else
{reset[property]="translate( 0,"+trans_val+"px)";transition[property]="translate( 0,"+trans_val2+"px)";transition2[property]="translate(0,0)";}}
else
{reset.top=trans_val;transition.top=trans_val2;transition2.top=0;}
this._slide_animate(reset,transition,transition2);},_slide_animate:function(reset,transition,transition2)
{var self=this,displaySlide=this.$slides.eq(this.current),hideSlide=this.$slides.eq(this.prev);hideSlide.trigger('pause');if(!displaySlide.data('disableAutoplay'))displaySlide.trigger('play');displaySlide.css({visibility:'visible',zIndex:4,opacity:1,left:0,top:0});displaySlide.css(reset);hideSlide.avia_animate(transition,this.options.transitionSpeed,this.options.easing);var after_slide=function()
{self.isAnimating=false;displaySlide.addClass('active-slide');hideSlide.css({visibility:'hidden'}).removeClass('active-slide');self.$slider.trigger('avia-transition-done');}
if(self.options.show_slide_delay>0)
{setTimeout(function(){displaySlide.avia_animate(transition2,self.options.transitionSpeed,self.options.easing,after_slide);},self.options.show_slide_delay);}
else
{displaySlide.avia_animate(transition2,self.options.transitionSpeed,self.options.easing,after_slide);}},_fade:function()
{var self=this,displaySlide=this.$slides.eq(this.current),hideSlide=this.$slides.eq(this.prev),properties={visibility:'visible',zIndex:3,opacity:0},fadeCallback=function()
{self.isAnimating=false;displaySlide.addClass('active-slide');hideSlide.css({visibility:'hidden',zIndex:2}).removeClass('active-slide');self.$slider.trigger('avia-transition-done');};hideSlide.trigger('pause');if(!displaySlide.data('disableAutoplay'))displaySlide.trigger('play');if(self.options.fullfade==true)
{hideSlide.avia_animate({opacity:0},200,'linear',function()
{displaySlide.css(properties).avia_animate({opacity:1},self.options.transitionSpeed,'linear',fadeCallback);});}
else
{displaySlide.css(properties).avia_animate({opacity:1},self.options.transitionSpeed/2,'linear',function()
{hideSlide.avia_animate({opacity:0},200,'linear',fadeCallback);});}},_attach_video_events:function()
{var self=this,$html=$('html');self.$slides.each(function(i)
{var currentSlide=$(this),caption=currentSlide.find('.caption_fullwidth, .av-click-overlay'),mejs=currentSlide.find('.mejs-mediaelement');if(currentSlide.data('avia_video_events')!=true)
{currentSlide.data('avia_video_events',true);currentSlide.on('av-video-events-bound',{slide:currentSlide,wrap:mejs,iteration:i,self:self},onReady);currentSlide.on('av-video-ended',{slide:currentSlide,self:self},onFinish);currentSlide.on('av-video-play-executed',function(){setTimeout(function(){self.pause()},100);});caption.on('click',{slide:currentSlide},toggle);if(currentSlide.is('.av-video-events-bound'))currentSlide.trigger('av-video-events-bound');}});function onReady(event)
{if(event.data.iteration===0)
{event.data.wrap.css('opacity',0);if(!event.data.self.isMobile&&!event.data.slide.data('disableAutoplay')){event.data.slide.trigger('play');} 
setTimeout(function(){event.data.wrap.avia_animate({opacity:1},400);},50);}
else if($html.is('.avia-msie')&&!event.data.slide.is('.av-video-service-html5'))
{if(!event.data.slide.data('disableAutoplay'))event.data.slide.trigger('play');}}
function onFinish(event)
{if(!event.data.slide.is('.av-single-slide')&&!event.data.slide.is('.av-loop-video'))
{event.data.slide.trigger('reset');self._navigate('next');self.resume();}
if(event.data.slide.is('.av-loop-video')&&event.data.slide.is('.av-video-service-html5'))
{if($html.is('.avia-safari-8'))
{setTimeout(function(){event.data.slide.trigger('play');},1);}}}
function toggle(event)
{if(event.target.tagName!="A")
{event.data.slide.trigger('toggle');}}},_timer:function(callback,delay,first)
{var self=this,start,remaining=delay;self.timerId=0;this.pause=function(){window.clearTimeout(self.timerId);remaining-=new Date()-start;};this.resume=function(){start=new Date();self.timerId=window.setTimeout(callback,remaining);};this.destroy=function()
{window.clearTimeout(self.timerId);};this.resume(true);},_startSlideshow:function()
{var self=this;this.isPlaying=true;this.slideshow=new this._timer(function()
{self._navigate('next');if(self.options.autoplay)
{self._startSlideshow();}},(this.options.interval*1000));},_stopSlideshow:function()
{if(this.options.autoplay){this.slideshow.destroy();this.isPlaying=false;this.options.autoplay=false;}},next:function(e)
{e.preventDefault();this._stopSlideshow();this._navigate('next');},previous:function(e)
{e.preventDefault();this._stopSlideshow();this._navigate('prev');},go2:function(pos)
{if(isNaN(pos))
{pos.preventDefault();pos=pos.currentTarget.hash.replace('#','');}
pos-=1;if(pos===this.current||pos>=this.itemsCount||pos<0)
{return false;}
this._stopSlideshow();this._navigate(false,pos);},play:function()
{if(!this.isPlaying)
{this.isPlaying=true;this._navigate('next');this.options.autoplay=true;this._startSlideshow();}},pause:function()
{if(this.isPlaying)
{this.slideshow.pause();}},resume:function()
{if(this.isPlaying)
{this.slideshow.resume();}},destroy:function(callback)
{this.slideshow.destroy(callback);}}
$.fn.aviaSlider=function(options)
{return this.each(function()
{var self=$.data(this,'aviaSlider');if(!self)
{self=$.data(this,'aviaSlider',new $.AviaSlider(options,this));}});}})(jQuery);(function($)
{"use strict";$.fn.avia_keyboard_controls=function(options_passed)
{var defaults={37:'.prev-slide',39:'.next-slide'},methods={mousebind:function(slider)
{slider.hover(function(){slider.mouseover=true;},function(){slider.mouseover=false;});},keybind:function(slider)
{$(document).keydown(function(e)
{if(slider.mouseover&&typeof slider.options[e.keyCode]!=='undefined')
{var item;if(typeof slider.options[e.keyCode]==='string')
{item=slider.find(slider.options[e.keyCode]);}
else
{item=slider.options[e.keyCode];}
if(item.length)
{item.trigger('click',['keypress']);return false;}}});}};return this.each(function()
{var slider=$(this);slider.options=$.extend({},defaults,options_passed);slider.mouseover=false;methods.mousebind(slider);methods.keybind(slider);});};$.fn.avia_swipe_trigger=function(passed_options)
{var win=$(window),isMobile=$.avia_utilities.isMobile,defaults={prev:'.prev-slide',next:'.next-slide',event:{prev:'click',next:'click'}},methods={activate_touch_control:function(slider)
{var i,differenceX,differenceY;slider.touchPos={};slider.hasMoved=false;slider.on('touchstart',function(event)
{slider.touchPos.X=event.originalEvent.touches[0].clientX;slider.touchPos.Y=event.originalEvent.touches[0].clientY;});slider.on('touchend',function(event)
{slider.touchPos={};if(slider.hasMoved){event.preventDefault();}
slider.hasMoved=false;});slider.on('touchmove',function(event)
{if(!slider.touchPos.X)
{slider.touchPos.X=event.originalEvent.touches[0].clientX;slider.touchPos.Y=event.originalEvent.touches[0].clientY;}
else
{differenceX=event.originalEvent.touches[0].clientX-slider.touchPos.X;differenceY=event.originalEvent.touches[0].clientY-slider.touchPos.Y;if(Math.abs(differenceX)>Math.abs(differenceY))
{event.preventDefault();if(slider.touchPos!==event.originalEvent.touches[0].clientX)
{if(Math.abs(differenceX)>50)
{i=differenceX>0?'prev':'next';if(typeof slider.options[i]==='string')
{slider.find(slider.options[i]).trigger(slider.options.event[i],['swipe']);}
else
{slider.options[i].trigger(slider.options.event[i],['swipe']);}
slider.hasMoved=true;slider.touchPos={};return false;}}}}});}};return this.each(function()
{if(isMobile)
{var slider=$(this);slider.options=$.extend({},defaults,passed_options);methods.activate_touch_control(slider);}});};}(jQuery));;
/*! Magnific Popup - v0.9.9 - 2013-12-27
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2013 Dmitry Semenov; */
(function(e){var t,n,i,o,r,a,s,l="Close",c="BeforeClose",d="AfterClose",u="BeforeAppend",p="MarkupParse",f="Open",m="Change",g="mfp",h="."+g,v="mfp-ready",C="mfp-removing",y="mfp-prevent-close",w=function(){},b=!!window.jQuery,I=e(window),x=function(e,n){t.ev.on(g+e+h,n)},k=function(t,n,i,o){var r=document.createElement("div");return r.className="mfp-"+t,i&&(r.innerHTML=i),o?n&&n.appendChild(r):(r=e(r),n&&r.appendTo(n)),r},T=function(n,i){t.ev.triggerHandler(g+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},E=function(n){return n===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=n),t.currTemplate.closeBtn},_=function(){e.magnificPopup.instance||(t=new w,t.init(),e.magnificPopup.instance=t)},S=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};w.prototype={constructor:w,init:function(){var n=navigator.appVersion;t.isIE7=-1!==n.indexOf("MSIE 7."),t.isIE8=-1!==n.indexOf("MSIE 8."),t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=S(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),o=e(document),t.popupsCache={}},open:function(n){i||(i=e(document.body));var r;if(n.isObj===!1){t.items=n.items.toArray(),t.index=0;var s,l=n.items;for(r=0;l.length>r;r++)if(s=l[r],s.parsed&&(s=s.el[0]),s===n.el[0]){t.index=r;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(t.isOpen)return t.updateItemHTML(),void 0;t.types=[],a="",t.ev=n.mainEl&&n.mainEl.length?n.mainEl.eq(0):o,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=k("bg").on("click"+h,function(){t.close()}),t.wrap=k("wrap").attr("tabindex",-1).on("click"+h,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=k("container",t.wrap)),t.contentContainer=k("content"),t.st.preloader&&(t.preloader=k("preloader",t.container,t.st.tLoading));var c=e.magnificPopup.modules;for(r=0;c.length>r;r++){var d=c[r];d=d.charAt(0).toUpperCase()+d.slice(1),t["init"+d].call(t)}T("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(x(p,function(e,t,n,i){n.close_replaceWith=E(i.type)}),a+=" mfp-close-btn-in"):t.wrap.append(E())),t.st.alignTop&&(a+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:I.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:o.height(),position:"absolute"}),t.st.enableEscapeKey&&o.on("keyup"+h,function(e){27===e.keyCode&&t.close()}),I.on("resize"+h,function(){t.updateSize()}),t.st.closeOnContentClick||(a+=" mfp-auto-cursor"),a&&t.wrap.addClass(a);var u=t.wH=I.height(),m={};if(t.fixedContentPos&&t._hasScrollBar(u)){var g=t._getScrollbarSize();g&&(m.marginRight=g)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):m.overflow="hidden");var C=t.st.mainClass;return t.isIE7&&(C+=" mfp-ie7"),C&&t._addClassToMFP(C),t.updateItemHTML(),T("BuildControls"),e("html").css(m),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||i),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(v),t._setFocus()):t.bgOverlay.addClass(v),o.on("focusin"+h,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(u),T(f),n},close:function(){t.isOpen&&(T(c),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(C),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){T(l);var n=C+" "+v+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var i={marginRight:""};t.isIE7?e("body, html").css("overflow",""):i.overflow="",e("html").css(i)}o.off("keyup"+h+" focusin"+h),t.ev.off(h),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,T(d)},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||I.height();t.fixedContentPos||t.wrap.css("height",t.wH),T("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(T("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var o=t.st[i]?t.st[i].markup:!1;T("FirstMarkupParse",o),t.currTemplate[i]=o?e(o):!0}r&&r!==n.type&&t.container.removeClass("mfp-"+r+"-holder");var a=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(a,i),n.preloaded=!0,T(m,n),r=n.type,t.container.prepend(t.contentContainer),T("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[n]===!0?t.content.find(".mfp-close").length||t.content.append(E()):t.content=e:t.content="",T(u),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,o=t.items[n];if(o.tagName?o={el:e(o)}:(i=o.type,o={data:o,src:o.src}),o.el){for(var r=t.types,a=0;r.length>a;a++)if(o.el.hasClass("mfp-"+r[a])){i=r[a];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=i||t.st.type||"inline",o.index=n,o.parsed=!0,t.items[n]=o,T("ElementParse",o),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var o="click.magnificPopup";n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){var r=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(r||2!==n.which&&!n.ctrlKey&&!n.metaKey){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(a>I.width())return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading);var o={status:e,text:i};T("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(y)){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(i&&o)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?o.height():document.body.scrollHeight)>(e||I.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){return n.target===t.wrap[0]||e.contains(t.wrap[0],n.target)?void 0:(t._setFocus(),!1)},_parseMarkup:function(t,n,i){var o;i.data&&(n=e.extend(i.data,n)),T(p,[t,n,i]),e.each(n,function(e,n){if(void 0===n||n===!1)return!0;if(o=e.split("_"),o.length>1){var i=t.find(h+"-"+o[0]);if(i.length>0){var r=o[1];"replaceWith"===r?i[0]!==n[0]&&i.replaceWith(n):"img"===r?i.is("img")?i.attr("src",n):i.replaceWith('<img src="'+n+'" class="'+i.attr("class")+'" />'):i.attr(o[1],n)}}else t.find(h+"-"+e).html(n)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.id="mfp-sbm",e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:w.prototype,modules:[],open:function(t,n){return _(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(n){_();var i=e(this);if("string"==typeof n)if("open"===n){var o,r=b?i.data("magnificPopup"):i[0].magnificPopup,a=parseInt(arguments[1],10)||0;r.items?o=r.items[a]:(o=i,r.delegate&&(o=o.find(r.delegate)),o=o.eq(a)),t._openClick({mfpEl:o},i,r)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),b?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n);return i};var P,O,z,M="inline",B=function(){z&&(O.after(z.addClass(P)).detach(),z=null)};e.magnificPopup.registerModule(M,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(M),x(l+"."+M,function(){B()})},getInline:function(n,i){if(B(),n.src){var o=t.st.inline,r=e(n.src);if(r.length){var a=r[0].parentNode;a&&a.tagName&&(O||(P=o.hiddenClass,O=k(P),P="mfp-"+P),z=r.after(O).detach().removeClass(P)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),r=e("<div>");return n.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}});var F,H="ajax",L=function(){F&&i.removeClass(F)},A=function(){L(),t.req&&t.req.abort()};e.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(H),F=t.st.ajax.cursor,x(l+"."+H,A),x("BeforeChange."+H,A)},getAjax:function(n){F&&i.addClass(F),t.updateStatus("loading");var o=e.extend({url:n.src,success:function(i,o,r){var a={data:i,xhr:r};T("ParseAjax",a),t.appendContent(e(a.data),H),n.finished=!0,L(),t._setFocus(),setTimeout(function(){t.wrap.addClass(v)},16),t.updateStatus("ready"),T("AjaxContentAdded")},error:function(){L(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings);return t.req=e.ajax(o),""}}});var j,N=function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var i=t.st.image.titleSrc;if(i){if(e.isFunction(i))return i.call(t,n);if(n.el)return n.el.attr(i)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=t.st.image,n=".image";t.types.push("image"),x(f+n,function(){"image"===t.currItem.type&&e.cursor&&i.addClass(e.cursor)}),x(l+n,function(){e.cursor&&i.removeClass(e.cursor),I.off("resize"+h)}),x("Resize"+n,t.resizeImage),t.isLowIE&&x("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,j&&clearInterval(j),e.isCheckingImgSize=!1,T("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(r){j&&clearInterval(j),j=setInterval(function(){return i.naturalWidth>0?(t._onImageHasSize(e),void 0):(n>200&&clearInterval(j),n++,3===n?o(10):40===n?o(50):100===n&&o(500),void 0)},r)};o(1)},getImage:function(n,i){var o=0,r=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,T("ImageLoadComplete")):(o++,200>o?setTimeout(r,100):a()))},a=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,l=i.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",n.img=e(c).on("load.mfploader",r).on("error.mfploader",a),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),c=n.img[0],c.naturalWidth>0?n.hasSize=!0:c.width||(n.hasSize=!1)}return t._parseMarkup(i,{title:N(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(j&&clearInterval(j),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}});var W,R=function(){return void 0===W&&(W=void 0!==document.createElement("p").style.MozTransform),W};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom";if(n.enabled&&t.supportsTransition){var o,r,a=n.duration,s=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,t.css(o),t},d=function(){t.content.css("visibility","visible")};x("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),e=t._getItemToZoom(),!e)return d(),void 0;r=s(e),r.css(t._getOffset()),t.wrap.append(r),o=setTimeout(function(){r.css(t._getOffset(!0)),o=setTimeout(function(){d(),setTimeout(function(){r.remove(),e=r=null,T("ZoomAnimationEnded")},16)},a)},16)}}),x(c+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=a,!e){if(e=t._getItemToZoom(),!e)return;r=s(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),x(l+i,function(){t._allowZoom()&&(d(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return t.currItem.hasSize?t.currItem.img:!1},_getOffset:function(n){var i;i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var o=i.offset(),r=parseInt(i.css("padding-top"),10),a=parseInt(i.css("padding-bottom"),10);o.top-=e(window).scrollTop()-r;var s={width:i.width(),height:(b?i.innerHeight():i[0].offsetHeight)-a-r};return R()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var Z="iframe",q="//about:blank",D=function(e){if(t.currTemplate[Z]){var n=t.currTemplate[Z].find("iframe");n.length&&(e||(n[0].src=q),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(Z,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(Z),x("BeforeChange",function(e,t,n){t!==n&&(t===Z?D():n===Z&&D(!0))}),x(l+"."+Z,function(){D()})},getIframe:function(n,i){var o=n.src,r=t.st.iframe;e.each(r.patterns,function(){return o.indexOf(this.index)>-1?(this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1):void 0});var a={};return r.srcAction&&(a[r.srcAction]=o),t._parseMarkup(i,a,n),t.updateStatus("ready"),i}}});var K=function(e){var n=t.items.length;return e>n-1?e-n:0>e?n+e:e},Y=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,i=".mfp-gallery",r=Boolean(e.fn.mfpFastClick);return t.direction=!0,n&&n.enabled?(a+=" mfp-gallery",x(f+i,function(){n.navigateByImgClick&&t.wrap.on("click"+i,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),o.on("keydown"+i,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),x("UpdateStatus"+i,function(e,n){n.text&&(n.text=Y(n.text,t.currItem.index,t.items.length))}),x(p+i,function(e,i,o,r){var a=t.items.length;o.counter=a>1?Y(n.tCounter,r.index,a):""}),x("BuildControls"+i,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(y),a=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(y),s=r?"mfpFastClick":"click";o[s](function(){t.prev()}),a[s](function(){t.next()}),t.isIE7&&(k("b",o[0],!1,!0),k("a",o[0],!1,!0),k("b",a[0],!1,!0),k("a",a[0],!1,!0)),t.container.append(o.add(a))}}),x(m+i,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),x(l+i,function(){o.off(i),t.wrap.off("click"+i),t.arrowLeft&&r&&t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),t.arrowRight=t.arrowLeft=null}),void 0):!1},next:function(){t.direction=!0,t.index=K(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=K(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length);for(e=1;(t.direction?o:i)>=e;e++)t._preloadItem(t.index+e);for(e=1;(t.direction?i:o)>=e;e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=K(n),!t.items[n].preloaded){var i=t.items[n];i.parsed||(i=t.parseEl(n)),T("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",function(){i.hasSize=!0}).on("error.mfploader",function(){i.hasSize=!0,i.loadError=!0,T("LazyLoadError",i)}).attr("src",i.src)),i.preloaded=!0}}}});var U="retina";e.magnificPopup.registerModule(U,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;n=isNaN(n)?n():n,n>1&&(x("ImageHasSize."+U,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),x("ElementParse."+U,function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),function(){var t=1e3,n="ontouchstart"in window,i=function(){I.off("touchmove"+r+" touchend"+r)},o="mfpFastClick",r="."+o;e.fn.mfpFastClick=function(o){return e(this).each(function(){var a,s=e(this);if(n){var l,c,d,u,p,f;s.on("touchstart"+r,function(e){u=!1,f=1,p=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],c=p.clientX,d=p.clientY,I.on("touchmove"+r,function(e){p=e.originalEvent?e.originalEvent.touches:e.touches,f=p.length,p=p[0],(Math.abs(p.clientX-c)>10||Math.abs(p.clientY-d)>10)&&(u=!0,i())}).on("touchend"+r,function(e){i(),u||f>1||(a=!0,e.preventDefault(),clearTimeout(l),l=setTimeout(function(){a=!1},t),o())})})}s.on("click"+r,function(){a||o()})})},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+r+" click"+r),n&&I.off("touchmove"+r+" touchend"+r)}}(),_()})(window.jQuery||window.Zepto);