var mediaWikiLoadStart=(new Date()).getTime(),mwPerformance=(window.performance&&performance.mark)?performance:{mark:function(){}};mwPerformance.mark('mwLoadStart');function isCompatible(ua){if(ua===undefined){ua=navigator.userAgent;}return!((ua.indexOf('MSIE')!==-1&&parseFloat(ua.split('MSIE')[1])<8)||(ua.indexOf('Firefox/')!==-1&&parseFloat(ua.split('Firefox/')[1])<3)||(ua.indexOf('Opera/')!==-1&&(ua.indexOf('Version/')===-1?parseFloat(ua.split('Opera/')[1])<10:parseFloat(ua.split('Version/')[1])<12))||(ua.indexOf('Opera ')!==-1&&parseFloat(ua.split(' Opera ')[1])<10)||ua.match(/BlackBerry[^\/]*\/[1-5]\./)||ua.match(/webOS\/1\.[0-4]/)||ua.match(/PlayStation/i)||ua.match(/SymbianOS|Series60/)||ua.match(/NetFront/)||ua.match(/Opera Mini/)||ua.match(/S40OviBrowser/)||ua.match(/MeeGo/)||(ua.match(/Glass/)&&ua.match(/Android/)));}(function(){if(!isCompatible()){document.documentElement.className=document.documentElement.className.replace(/(^|\s)client-js(\s|$)/,'$1client-nojs$2');return;}
function startUp(){mw.config=new mw.Map(true);mw.loader.addSource({"local":"/load.php"});mw.loader.register([["site","tILDu5kM"],["noscript","pGtcsAeq",[],"noscript"],["filepage","oows+d8N"],["user.groups","ZCefQuSL",[],"user"],["user","SKsSG5jW",[],"user"],["user.cssprefs","64Nx0RWw",[],"private"],["user.defaults","FBktnOtF"],["user.options","+JoudQIu",[6],"private"],["user.tokens","DJcvLaR0",[],"private"],["mediawiki.language.data","pJtq8AIz",[168]],["mediawiki.skinning.elements","FklRv/wW"],["mediawiki.skinning.content","HZRf3zT4"],["mediawiki.skinning.interface","ZB5cGbVR"],["mediawiki.skinning.content.parsoid","VqSBi5J+"],["mediawiki.skinning.content.externallinks","KrCADVzP"],["jquery.accessKeyLabel","N/fl5kGn",[25,129]],["jquery.appear","O6Squtqo"],["jquery.arrowSteps","rO99ntmc"],["jquery.async","cKjdywzQ"],["jquery.autoEllipsis","piC6jKs0",[37]],["jquery.badge","MzZtswCE",[165]],["jquery.byteLength","ZBz7qcdi"],["jquery.byteLimit","vx9eicNY",[21]],["jquery.checkboxShiftClick","irQyMBer"],["jquery.chosen","gst7Pbo+"],["jquery.client","bDfgjg5D"],["jquery.color","7EKmTKzP",[27]],["jquery.colorUtil","OIyUtzgH"],["jquery.confirmable","cINDgSLI",[169]],["jquery.cookie","F0sGgXb1"],["jquery.expandableField","JH6wD0Ju"],["jquery.farbtastic","cqvO3fCP",[27]],["jquery.footHovzer","IZaZmOI4"],["jquery.form","TeX/WRtV"],["jquery.fullscreen","PbImqala"],["jquery.getAttrs","2Hek4K3o"],["jquery.hidpi","ck9ynfTp"],["jquery.highlightText","j8919qIc",[227,129]],["jquery.hoverIntent","OM3Xm5bg"],["jquery.i18n","/pCFbpi9",[167]],["jquery.localize","hSi06sCg"],["jquery.makeCollapsible","Qk3RUJeA"],["jquery.mockjax","gzeD6lh+"],["jquery.mw-jump","u6Q4U0H9"],["jquery.mwExtension","HqRQNZEA"],["jquery.placeholder","IbveZf5M"],["jquery.qunit","CIcs6DEA"],["jquery.qunit.completenessTest","jR+PfIH3",[46]],["jquery.spinner","Xd0/vZ0w"],["jquery.jStorage","kvZC6xId",[93]],["jquery.suggestions","wUX8IZ0x",[37]],["jquery.tabIndex","Z7Pd1zTq"],["jquery.tablesorter","VdB6TR3R",[227,129,170]],["jquery.textSelection","JB3DSg88",[25]],["jquery.throttle-debounce","KeS2MTJc"],["jquery.validate","aqlclzLF"],["jquery.xmldom","QUpTCRrt"],["jquery.tipsy","CiXQ735g"],["jquery.ui.core","csFPjIEE",[59],"jquery.ui"],["jquery.ui.core.styles","a788zyNh",[],"jquery.ui"],["jquery.ui.accordion","YnYYAjEg",[58,78],"jquery.ui"],["jquery.ui.autocomplete","u6MPUtod",[67],"jquery.ui"],["jquery.ui.button","9u3uj3z6",[58,78],"jquery.ui"],["jquery.ui.datepicker","sm0e4V6n",[58],"jquery.ui"],["jquery.ui.dialog","UxA5N1KX",[62,65,69,71],"jquery.ui"],["jquery.ui.draggable","x120U/dQ",[58,68],"jquery.ui"],["jquery.ui.droppable","+fJ5sdFZ",[65],"jquery.ui"],["jquery.ui.menu","t+YOl9E+",[58,69,78],"jquery.ui"],["jquery.ui.mouse","O5xE3n4m",[78],"jquery.ui"],["jquery.ui.position","nFNUAzQQ",[],"jquery.ui"],["jquery.ui.progressbar","wzRvqKvK",[58,78],"jquery.ui"],["jquery.ui.resizable","AvA2YSOP",[58,68],"jquery.ui"],["jquery.ui.selectable","BtVc62hW",[58,68],"jquery.ui"],["jquery.ui.slider","1w6eT6NE",[58,68],"jquery.ui"],["jquery.ui.sortable","HyLmjJiJ",[58,68],"jquery.ui"],["jquery.ui.spinner","/yW6kVm5",[62],"jquery.ui"],["jquery.ui.tabs","241WwQxo",[58,78],"jquery.ui"],["jquery.ui.tooltip","S/xBbxap",[58,69,78],"jquery.ui"],["jquery.ui.widget","Rx8MH2Us",[],"jquery.ui"],["jquery.effects.core","by+CAqS5",[],"jquery.ui"],["jquery.effects.blind","T5XeIBDu",[79],"jquery.ui"],["jquery.effects.bounce","jUTghUqy",[79],"jquery.ui"],["jquery.effects.clip","v2SgcSla",[79],"jquery.ui"],["jquery.effects.drop","2AzvO2x6",[79],"jquery.ui"],["jquery.effects.explode","Wtp3o9U9",[79],"jquery.ui"],["jquery.effects.fade","iowbWfdN",[79],"jquery.ui"],["jquery.effects.fold","2JO6s4/c",[79],"jquery.ui"],["jquery.effects.highlight","OxnfXZHH",[79],"jquery.ui"],["jquery.effects.pulsate","1hgbawpo",[79],"jquery.ui"],["jquery.effects.scale","zUWqK5bF",[79],"jquery.ui"],["jquery.effects.shake","W/7lkAB/",[79],"jquery.ui"],["jquery.effects.slide","k9fwSWQY",[79],"jquery.ui"],["jquery.effects.transfer","vFdS/v10",[79],"jquery.ui"],["json","Y2f8qP16",[],null,null,"return!!(window.JSON\u0026\u0026JSON.stringify\u0026\u0026JSON.parse);"],["moment","/BNXa1qQ"],["mediawiki.apihelp","bij86bcl",[119]],["mediawiki.template","wVqjEmxN"],["mediawiki.template.mustache","i126+6dy",[96]],["mediawiki.template.regexp","IgWTU0Mn",[96]],["mediawiki.apipretty","IK8y7mxA"],["mediawiki.api","ygLDEP3b",[145,8]],["mediawiki.api.category","PHhebKzH",[134,100]],["mediawiki.api.edit","hmGupW+D",[134,100]],["mediawiki.api.login","S1NXTE5b",[100]],["mediawiki.api.options","CLRR5GoA",[100]],["mediawiki.api.parse","2MSqrrzS",[100]],["mediawiki.api.upload","e3gdRmxN",[227,93,102]],["mediawiki.api.watch","O2grLONr",[100]],["mediawiki.content.json","Q/lnnZO7"],["mediawiki.confirmCloseWindow","u7LzyelZ"],["mediawiki.debug","mT5Mp08X",[32,57]],["mediawiki.debug.init","dO4T31rX",[110]],["mediawiki.feedback","nnksejJm",[134,125,229]],["mediawiki.feedlink","LdUH3fY2"],["mediawiki.filewarning","oDkkKqNj",[229]],["mediawiki.ForeignApi","iYxxh6rk",[116]],["mediawiki.ForeignApi.core","9xTzHttL",[100,228]],["mediawiki.helplink","EhnbWIx3"],["mediawiki.hidpi","pCzDfbLs",[36],null,null,"return'srcset'in new Image();"],["mediawiki.hlist","lk1xFfFV",[25]],["mediawiki.htmlform","+p9yo0J3",[22,129]],["mediawiki.htmlform.styles","0NioDbLB"],["mediawiki.htmlform.ooui.styles","5evOGu8j"],["mediawiki.icon","QHp0Nw5m"],["mediawiki.inspect","y7M8ta/l",[21,93,129]],["mediawiki.messagePoster","88ZEjJlJ",[100,228]],["mediawiki.messagePoster.wikitext","1nwKadcC",[102,125]],["mediawiki.notification","3y0mSnVy",[177]],["mediawiki.notify","vSSNQ2XE"],["mediawiki.RegExp","imyFw0Vm"],["mediawiki.pager.tablePager","vknbNf2o"],["mediawiki.searchSuggest","aZFC46CU",[35,45,50,100]],["mediawiki.sectionAnchor","tiaEF8C7"],["mediawiki.storage","WWywGr97"],["mediawiki.Title","bB/g+brg",[21,145]],["mediawiki.Upload","xgwdIoPF",[106]],["mediawiki.ForeignUpload","K+o8jA7e",[115,135]],["mediawiki.ForeignStructuredUpload","RCbCmTlv",[136]],["mediawiki.Upload.Dialog","QBllQAyf",[139]],["mediawiki.Upload.BookletLayout","at9SuuSa",[135,169,229]],["mediawiki.ForeignStructuredUpload.BookletLayout","9mguBwTL",[137,139,224,223]],["mediawiki.toc","Ljv4Rz7q",[146]],["mediawiki.Uri","hTtDP//+",[145,98]],["mediawiki.user","zOle266E",[100,146,7]],["mediawiki.userSuggest","9+mIzx9r",[50,100]],["mediawiki.util","UdcRHXuD",[15,128]],["mediawiki.cookie","Z/30sOI1",[29]],["mediawiki.toolbar","5RsVMdEi"],["mediawiki.experiments","7fz41jwu"],["mediawiki.action.edit","V0riyqf5",[22,53,150]],["mediawiki.action.edit.styles","7xSeFZAk"],["mediawiki.action.edit.collapsibleFooter","ZgbZgk4l",[41,146,123]],["mediawiki.action.edit.preview","3FURKiUu",[33,48,53,155,100,169]],["mediawiki.action.edit.stash","KyMlugWX",[35,100]],["mediawiki.action.history","aUXSAWij"],["mediawiki.action.history.diff","u0RZCids"],["mediawiki.action.view.dblClickEdit","mkVWzOpQ",[177,7]],["mediawiki.action.view.metadata","g5GM8wtI"],["mediawiki.action.view.categoryPage.styles","0ntBbbzQ"],["mediawiki.action.view.postEdit","JXoiqBKG",[146,169,96]],["mediawiki.action.view.redirect","gyZm/GML",[25]],["mediawiki.action.view.redirectPage","cH/pzG+A"],["mediawiki.action.view.rightClickEdit","dncsPoku"],["mediawiki.action.edit.editWarning","NZHUYuSz",[53,109,169]],["mediawiki.action.view.filepage","N2kv8t8e"],["mediawiki.language","NjOTorzr",[166,9]],["mediawiki.cldr","ZsFpG5fM",[167]],["mediawiki.libs.pluralruleparser","F5fWaqWi"],["mediawiki.language.init","ZjJkTwen"],["mediawiki.jqueryMsg","EjtXgyaf",[227,165,145,7]],["mediawiki.language.months","h1w+cvm+",[165]],["mediawiki.language.names","PEZBZtR9",[168]],["mediawiki.language.specialCharacters","lfy9K43n",[165]],["mediawiki.libs.jpegmeta","0uUd5abw"],["mediawiki.page.gallery","2yNVBQr0",[54,175]],["mediawiki.page.gallery.styles","V/WYTTSy"],["mediawiki.page.ready","iBvud5mk",[15,23,41,43,45]],["mediawiki.page.startup","LkrbXOjy",[145]],["mediawiki.page.patrol.ajax","2Y1E0vu1",[48,134,100,177]],["mediawiki.page.watch.ajax","PwCoYUpa",[107,177]],["mediawiki.page.image.pagination","A7FFOdJe",[48,142]],["mediawiki.special","zpXxaNX9"],["mediawiki.special.block","xx7yiqca",[145]],["mediawiki.special.changeemail","yJB8nxpB",[145]],["mediawiki.special.changeslist","xbj1nAO/"],["mediawiki.special.changeslist.legend","kzyaYwoC"],["mediawiki.special.changeslist.legend.js","JgsuK+G7",[41,146]],["mediawiki.special.changeslist.enhanced","uZtilBKj"],["mediawiki.special.edittags","Nnz/LfQk",[24]],["mediawiki.special.edittags.styles","R1A+Gb2C"],["mediawiki.special.import","6RwFdSd8"],["mediawiki.special.movePage","1J+R6kmG",[221]],["mediawiki.special.movePage.styles","DmAeji8O"],["mediawiki.special.pageLanguage","u/93QgiW"],["mediawiki.special.pagesWithProp","nAJbFBgY"],["mediawiki.special.preferences","nqwbxy0O",[109,165,127]],["mediawiki.special.recentchanges","3deyNTYd",[181]],["mediawiki.special.search","LdrltsSH"],["mediawiki.special.undelete","ku2eWflE"],["mediawiki.special.upload","3nygrbyG",[48,134,100,109,169,173,96]],["mediawiki.special.userlogin.common.styles","56HjTVGL"],["mediawiki.special.userlogin.signup.styles","/qeKStYZ"],["mediawiki.special.userlogin.login.styles","1ooif+wG"],["mediawiki.special.userlogin.signup.js","txl1K53c",[54,100,169]],["mediawiki.special.unwatchedPages","189WHLZF",[134,107]],["mediawiki.special.javaScriptTest","yRheHOm4",[142]],["mediawiki.special.version","UMww1kVo"],["mediawiki.legacy.config","xkdvJqVL"],["mediawiki.legacy.commonPrint","HJqN9vzN"],["mediawiki.legacy.protect","IS1JA+oN",[22]],["mediawiki.legacy.shared","kQztPoTg"],["mediawiki.legacy.oldshared","MOcta2BZ"],["mediawiki.legacy.wikibits","OK0sHoTI",[145]],["mediawiki.ui","1mVbrVgj"],["mediawiki.ui.checkbox","+lcliG0f"],["mediawiki.ui.radio","RuK6AtO5"],["mediawiki.ui.anchor","40NK50Z3"],["mediawiki.ui.button","sdzrQW52"],["mediawiki.ui.input","ckEn1Wi7"],["mediawiki.ui.icon","alrdK29K"],["mediawiki.ui.text","/l0mazSh"],["mediawiki.widgets","rEqpkDp3",[19,22,115,134,224,222]],["mediawiki.widgets.styles","LFEYdX5V"],["mediawiki.widgets.DateInputWidget","DQR73L54",[94,229]],["mediawiki.widgets.CategorySelector","1l0rJ6ly",[100,229]],["mediawiki.widgets.UserInputWidget","554KUckL",[229]],["es5-shim","ENcDL0lI",[],null,null,"return(function(){'use strict';return!this\u0026\u0026!!Function.prototype.bind;}());"],["dom-level2-shim","YSOnGATb",[],null,null,"return!!window.Node;"],["oojs","3TLL/x+R",[226,93]],["oojs-ui","4QPZJPgS",[228,230,231,232,233]],["oojs-ui.styles","64CLaOu1"],["oojs-ui.styles.icons","BqvEHj9Q"],["oojs-ui.styles.indicators","bV/S5w1Y"],["oojs-ui.styles.textures","cnI0CSks"],["oojs-ui.styles.icons-accessibility","JrOZTbyS"],["oojs-ui.styles.icons-alerts","IqyHpOsy"],["oojs-ui.styles.icons-content","xT10acaq"],["oojs-ui.styles.icons-editing-advanced","Zex1yxdV"],["oojs-ui.styles.icons-editing-core","6docVH5x"],["oojs-ui.styles.icons-editing-list","ySfLxo1K"],["oojs-ui.styles.icons-editing-styling","7/5lxWrT"],["oojs-ui.styles.icons-interactions","cmcWnk7U"],["oojs-ui.styles.icons-layout","dJ9NCAN9"],["oojs-ui.styles.icons-location","L5T/YVrA"],["oojs-ui.styles.icons-media","fckb3i31"],["oojs-ui.styles.icons-moderation","FVGrnWW8"],["oojs-ui.styles.icons-movement","/ixAURaK"],["oojs-ui.styles.icons-user","VXcvHZme"],["oojs-ui.styles.icons-wikimedia","1fhJ6kDt"],["skins.vector.styles","GZFOh2xx"],["skins.vector.styles.responsive","fDvjMbn1"],["skins.vector.js","lNl7dQiG",[51,54]],["jquery.wikiEditor","0ZZD37cV",[53,165],"ext.wikiEditor"],["jquery.wikiEditor.dialogs","3Z8iBCfc",[51,64,257],"ext.wikiEditor"],["jquery.wikiEditor.dialogs.config","47Kwljf3",[50,253,134,100,169,96],"ext.wikiEditor"],["jquery.wikiEditor.preview","5YXDzDY+",[252,100],"ext.wikiEditor"],["jquery.wikiEditor.publish","w/qzdsle",[253],"ext.wikiEditor"],["jquery.wikiEditor.toolbar","ROY3I5XE",[18,29,252,259],"ext.wikiEditor"],["jquery.wikiEditor.toolbar.config","0IfymsNV",[257,172],"ext.wikiEditor"],["jquery.wikiEditor.toolbar.i18n","xnQPE1rD",[],"ext.wikiEditor"],["ext.wikiEditor","JJ9ympFy",[252,143],"ext.wikiEditor"],["ext.wikiEditor.dialogs","kbmtzfRi",[264,254],"ext.wikiEditor"],["ext.wikiEditor.preview","eL1oh6+c",[260,255],"ext.wikiEditor"],["ext.wikiEditor.publish","ZNDaHp06",[260,256],"ext.wikiEditor"],["ext.wikiEditor.toolbar","UxGhPPTf",[260,258],"ext.wikiEditor"],["ext.wikiEditor.toolbar.styles","yABzxccM",[],"ext.wikiEditor"],["mobile.modules","tiF350yR"],["mobile.oo","N5yGcN++",[266,228]],["mobile.view","atQjCMmP",[267]],["mobile.context","SHuJFeVh",[266]],["mobile.browser","az6vW/en",[268]],["mobile.mainMenu","b3Bit9e5",[270,275]],["mobile.messageBox","pED+9+Tq",[268,275]],["mobile.modifiedBar","uOPcrwPV",[169,266]],["mobile.microAutoSize","31Ida4NI"],["mediawiki.template.hogan","2EVilg+6",[96]],["mobile.pagelist","GVLs+b/Q",[270,331,332,275]],["mobile.templates","4HeDyGmK",[275]],["mobile.pagelist.scripts","nrthXDCI",[276,310]],["mobile.watchlist","c52W1YXe",[321,273,278]],["mobile.toc","6Cb3IYIZ",[288]],["mobile.ajax","388ahDC4",[335]],["mobile.settings","VMil6sYD",[29,133,266]],["mobile.startup","pdq09UQt",[54,270,269,282,285,335,275]],["mobile.foreignApi","kp2fubVX",[116,283]],["mobile.user","PVrhTiVR",[133,143,266]],["mobile.editor","4HeDyGmK",[346]],["mobile.browse","4HeDyGmK",[344]],["mobile.toggling","4HeDyGmK",[349]],["mobile.abusefilter","Ul/yWXSh",[304]],["mobile.editor.api","E9USWLvu",[289]],["mobile.editor.common","HI4PB2bY",[109,290,272,306,229]],["mobile.editor.overlay","fzo/jZ7x",[291,274,238]],["mobile.editor.overlay.withtoolbar","bmLokH0A",[53,292,294,356,240]],["mobile.editor.overlay.withtoolbar.images","QXMlyHUP"],["mobile.search","RS5Fafhh",[304,278]],["mobile.search.api","YesLAdN6",[134,283]],["mobile.search.beta","sVN8ysdr",[295]],["mobile.search.beta.api","5NOMvsrD",[296]],["mobile.talk.overlays","W2uNPB66",[216,291]],["mobile.mediaViewer","LBTy9ikx",[304,302]],["mobile.mediaViewer.beta","KNjOZlM6",[300,322]],["mobile.swipe.images","cQ1EAI96"],["mobile.categories.overlays","vWSbJpbu",[291,295,296]],["mobile.overlays","AdmaAvu7",[281,283,336]],["mobile.drawers","FKJjIilj",[283]],["mobile.toast","GOY1EEaX",[305]],["mobile.references","uZNDhQdL",[305,356]],["mobile.toggle","spDGSrbs",[283]],["mobile.contentOverlays","qZ7d2NiV",[304]],["mobile.watchstar","N9xuds0b",[281,356,306]],["mobile.watchstar.init","4HeDyGmK",[350]],["mobile.buttonWithSpinner","E5oSsfCB",[229]],["mobile.languages","bT9O+Ixj",[304]],["mobile.issues","iKM1JoyV",[304]],["mobile.nearby","WYcAgys5",[165,284,272,278,323]],["mobile.gallery","zBAQlrOr",[321,306]],["mobile.commonsCategory","nJwHwDPC",[316]],["mobile.betaoptin","kxKn0ATg",[283]],["mobile.bannerImage","m6w+I+iI",[134,281,283]],["mobile.fontchanger","6p1Jm/i8",[305,356]],["mobile.infiniteScroll","kIj8UDoF",[267]],["mobile.swipe","fOjXIpAt",[267]],["mobile.special.nearby.styles","vgeK9nFM"],["mobile.special.userlogin.scripts","t9H+A0gd"],["mobile.special.nearby.scripts","+ofmx9Lt",[315]],["mobile.special.uploads.scripts","l1OQBgJE",[316]],["mobile.special.mobilediff.scripts","pApsL1Sm",[356]],["skins.minerva.base.reset","SbeZt39u"],["skins.minerva.base.styles","LQMzqTXD"],["skins.minerva.content.styles","igJNHatF"],["mobile.pagelist.styles","vnif8yqx"],["mobile.pagesummary.styles","+AJxKN+m"],["skins.minerva.tablet.styles","UdXSNaOA"],["skins.minerva.icons.images","vAF3zglq"],["skins.minerva.icons.images.legacy","X8uvmcjm"],["skins.minerva.icons.variants.js","htlFPQpD"],["skins.minerva.icons.images.js","XNwZozGH"],["skins.minerva.mainPage.beta.styles","NgBhX2ri"],["skins.minerva.mainPage.styles","RhtDGh0D"],["skins.minerva.beta.images","TLRrRw2Q"],["mobile.head","4HeDyGmK",[342]],["skins.minerva.scripts.top","U3CNyQyG",[269,271,273]],["skins.minerva.scripts","LUX5rFJm",[318,314,307,295,337,342]],["skins.minerva.browse","TfCSqt29",[356]],["skins.minerva.newusers","7Nz92z22",[309,286]],["skins.minerva.editor","UzDNp8/c",[218,349]],["skins.minerva.categories","sj7ErXba",[356,304]],["skins.minerva.talk","CiAaTxYF",[343]],["skins.minerva.toggling","CTvEzLZn",[308,343]],["skins.minerva.watchstar","9osKKKWS",[343]],["skins.minerva.beta.scripts","O0WGzC7n",[297,343]],["skins.minerva.beta.banner.scripts","0zOBQnjx",[319,343]],["skins.minerva.tablet.scripts","pVYUPejc",[280]],["tablet.scripts","4HeDyGmK",[353]],["ext.MobileDetect","2UHRpSYt"],["mobile.loggingSchemas","/S+lJE9z",[283]]]);;mw.config.set({"wgLoadScript":"/load.php","debug":!1,"skin":"vector","stylepath":"/skins","wgUrlProtocols":"bitcoin\\:|ftp\\:\\/\\/|ftps\\:\\/\\/|geo\\:|git\\:\\/\\/|gopher\\:\\/\\/|http\\:\\/\\/|https\\:\\/\\/|irc\\:\\/\\/|ircs\\:\\/\\/|magnet\\:|mailto\\:|mms\\:\\/\\/|news\\:|nntp\\:\\/\\/|redis\\:\\/\\/|sftp\\:\\/\\/|sip\\:|sips\\:|sms\\:|ssh\\:\\/\\/|svn\\:\\/\\/|tel\\:|telnet\\:\\/\\/|urn\\:|worldwind\\:\\/\\/|xmpp\\:|\\/\\/","wgArticlePath":"/index.php/$1","wgScriptPath":"","wgScriptExtension":".php","wgScript":"/index.php","wgSearchType":null,"wgVariantArticlePath":!1,"wgActionPaths":{},"wgServer":"http://www.techotopia.com","wgServerName":"www.techotopia.com","wgUserLanguage":"en","wgContentLanguage":"en","wgTranslateNumerals":!0,"wgVersion":"1.26.2","wgEnableAPI":!0,"wgEnableWriteAPI":!0,"wgMainPageTitle":"Main Page","wgFormattedNamespaces":{"-2":"Media","-1":"Special","0":"","1":"Talk","2":"User","3":"User talk","4":"Techotopia","5":"Techotopia talk","6":"File","7":"File talk","8":"MediaWiki","9":"MediaWiki talk","10":"Template","11":"Template talk","12":"Help","13":"Help talk","14":"Category","15":"Category talk"},"wgNamespaceIds":{"media":-2,"special":-1,"":0,"talk":1,"user":2,"user_talk":3,"techotopia":4,"techotopia_talk":5,"file":6,"file_talk":7,"mediawiki":8,"mediawiki_talk":9,"template":10,"template_talk":11,"help":12,"help_talk":13,"category":14,"category_talk":15,"image":6,"image_talk":7,"project":4,"project_talk":5},"wgContentNamespaces":[0],"wgSiteName":"Techotopia","wgDBname":"wikidb","wgExtraSignatureNamespaces":[],"wgAvailableSkins":{"vector":"Vector","minerva":"Minerva","fallback":"Fallback","apioutput":"ApiOutput"},"wgExtensionAssetsPath":"/extensions","wgCookiePrefix":"wikidb","wgCookieDomain":"","wgCookiePath":"/","wgCookieExpiration":15552000,"wgResourceLoaderMaxQueryLength":2000,"wgCaseSensitiveNamespaces":[],"wgLegalTitleChars":" %!\"$&'()*,\\-./0-9:;=?@A-Z\\\\\\^_`a-z~+\\u0080-\\uFFFF","wgResourceLoaderStorageVersion":1,"wgResourceLoaderStorageEnabled":!1,"wgResourceLoaderLegacyModules":["mediawiki.legacy.wikibits"],"wgForeignUploadTargets":[],"wgEnableUploads":!0,"wgMFNearbyEndpoint":"","wgMFThumbnailSizes":{"tiny":80,"small":150},"wgMFContentNamespace":0,"wgMFEditorOptions":{"anonymousEditing":!0,"skipPreview":!1},"wgMFLicense":{"link":"","plural":1},"wgMFUploadLicenseLink":"","wgWikiEditorMagicWords":{"redirect":"#REDIRECT","img_right":"right","img_left":"left","img_none":"none","img_center":"center","img_thumbnail":"thumbnail","img_framed":"framed","img_frameless":"frameless"}});window.RLQ=window.RLQ||[];while(RLQ.length){RLQ.shift()();}window.RLQ={push:function(fn){fn();}};}var script=document.createElement('script');script.src="/load.php?debug=false&lang=en&modules=jquery%2Cmediawiki&only=scripts&skin=vector&version=gqm0JESF";script.onload=script.onreadystatechange=function(){if(!script.readyState||/loaded|complete/.test(script.readyState)){script.onload=script.onreadystatechange=null;script=null;startUp();}};document.getElementsByTagName('head')[0].appendChild(script);}());