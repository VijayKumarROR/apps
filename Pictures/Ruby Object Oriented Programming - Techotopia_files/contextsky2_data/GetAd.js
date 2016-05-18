(function(){
    /* tokens */
    var ppcs="%3Cdiv%20id%3D%27dv_pp_qiJHq5e7hZYm%27%3E%3C%21--%20START%20YieldSelect.com%20Private%20Marketplace%20Tag%20For%20Techotopia.com%20--%3E%0A%3C%21--%20Size%3A%20160x600%20--%3E%0A%3Cscript%20src%3D%22http%3A%2F%2Fads-by.yieldselect.com%2Ftags%2F6330%2F112%2Fasync%2F160x600.js%22%20type%3D%22text%2Fjavascript%22%3E%3C%2Fscript%3E%0A%3C%21--%20END%20YieldSelect.com%20Private%20Marketplace%20Tag%20For%20Techotopia.com%20--%3E%3C%2Fdiv%3E",
        ppps="%3Cdiv%20style%3D%22display%3Anone%3Bwidth%3A0%3Bheight%3A0%22%3E%3CIFRAME%20SRC%3D%22http%3A%2F%2Fpixel.quantserve.com%2Fpixel%2Fp-01-0VIaSjnOLg.gif%3Ftags%3DCONTEXTWEB.TECHNOLOGYCOMPUTING%2CPUBLISHER.502380%2C%2CCAMPAIGN.0.0%2CAA_30000%2CAA_30101%2CAA_30301%2CAA_30602%2CAA_30800%2CAA_30207%2CAA_30902%2CADSIZE.160X600%2CZIPCODE.110006%2CPUBLISHERDOMAIN.techotopia.com%22%20HEIGHT%3D%220%22%20WIDTH%3D%220%22%20MARGINWIDTH%3D%220%22%20MARGINHEIGHT%3D%220%22%20ALLOWTRANSPARENCY%3D%22true%22%20FRAMEBORDER%3D%220%22%20SCROLLING%3D%22NO%22%3E%3C%2FIFRAME%3E%3C%2Fdiv%3E%3Cimg%20src%3D%22http%3A%2F%2Fidsync.rlcdn.com%2F400066.gif%3Fpartner_uid%3DUsHQ21vlESPj%22%20height%3D%221%22%20width%3D%221%22%20border%3D%220%22%2F%3E%3Cdiv%20style%3D%22display%3Anone%22%3E%3Ciframe%20src%3D%22%2F%2Fbh.contextweb.com%2Fbh%2Fvisitormatch%3Ftag%3D64831%26pid%3D502380%22%3E%3C%2Fiframe%3E%3C%2Fdiv%3E",
        pp_exp="0",
        ppContainerId = "pp_ad_container_0",
        maOpts = {"enabled":false,"maxSeqNum":0,"periodMax":0,"periodMin":0,"rotatingPassback":false,"skipRotation":false},
        /* selecting parent.parent.pp in case this is in multiple iframes */
        pp = window.pp || parent.pp || parent.parent.pp,
        runSafe = function(func){
            try{
                return func();
            }catch(ignore){}
        },
        thisAd = runSafe(function(){
            if (typeof pp === 'object' && typeof pp.updateMaOpts === 'function') {
                return pp.updateMaOpts(ppContainerId, maOpts);
            }
        }),
        docWrite = function(str){
            document.write(decodeURIComponent(str)); // jshint ignore:line
        };
    /* right before rendering the creative, the previous one will be rotated if necessary */
    runSafe(function(){
        if (typeof pp === 'object' && typeof pp.beforeRenderAd === 'function') {
            pp.beforeRenderAd(ppContainerId);
        }
    });
    /* only render ad if necessary according to MA config */
    if (typeof thisAd !== 'object' || typeof thisAd.maOpts !== 'object' || !thisAd.maOpts.skipRotation) {
        //inline rendering using document.write
        if(pp_exp=='1'){
            try{
                /* used in async javascript [1.0], where the ad itself is rendered in an iframe */
                parent.pp.AdManager.displayExpandable(window.frameElement,decodeURIComponent(ppcs));
                docWrite(ppps);
            }catch(e){
                docWrite(ppcs+ppps);
            }
        } else {
            docWrite(ppcs+ppps);
        }
    }
    /* after rendering or skipping the creative the next rotation must be scheduled (according to 'maOpts') */
    runSafe(function(){
        if (typeof pp === 'object' && typeof pp.afterRenderAd === 'function') {
            pp.afterRenderAd(ppContainerId);
        }
    });
})();