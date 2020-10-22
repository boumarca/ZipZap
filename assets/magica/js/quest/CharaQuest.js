define("underscore backbone backboneCommon ajaxControl command QuestUtil text!template/quest/CharaQuest.html text!css/quest/CharaQuest.css text!css/quest/QuestCommon.css js/view/quest/ClearAnimationsView".split(" "),function(g,u,a,z,h,n,H,I,J,K){function C(b,d){console.log(b,d);var k="CHARA"===d?p:v;if("ALL"===b&&"CHARA"===d)a.addClass(a.doc.querySelector("#charaQuestCation"),"none");else if("ALL"===b&&"COSTUME"===d){b=0;for(var c in k)b+=k[c];0<b?a.addClass(a.doc.querySelector("#charaQuestCation"),
"none"):a.removeClass(a.doc.querySelector("#charaQuestCation"),"none")}else 0<k[b]?a.addClass(a.doc.querySelector("#charaQuestCation"),"none"):a.removeClass(a.doc.querySelector("#charaQuestCation"),"none")}function L(){var a=f.userCharaList;a.sort(function(a,b){return a.charaId<b.charaId?-1:a.charaId>b.charaId?1:0});var d=f.userSectionList,k=f.userQuestBattleList,c=[];g.each(a,function(a,b){var r=a.charaId;a.section=[];g.each(d,function(b,c){var d=b.sectionId;c=b.section.questType;if(r==b.section.genericId&&
"CHARA"==c){c="";var t=!1,A=!0,f=!0;b.questBattleList=[];b.section.questBattleCount=0;g.each(k,function(a,c){d==a.questBattle.sectionId&&(a.questBattle.questBattleType&&"NORMAL"==a.questBattle.questBattleType&&b.section.questBattleCount++,b.questBattleList.push(a))});b.questBattleList.sort(function(a,b){return a.questBattle.sectionIndex-b.questBattle.sectionIndex});b.questBattleList.length&&g.each(b.questBattleList,function(a,b){a.cleared||(t=!0,A=!1);b="CLEARED"===a.missionStatus2?"cleared":null;
var c="CLEARED"===a.missionStatus3?"cleared":null;f="CLEARED"===a.missionStatus1&&b&&c?f:!1});t?(c="new",q++):A&&!f?c="clear":A&&f&&(c="comp");b.canPlay||(c="close",q--);b.questStatus=c;a.section.push(b)}});a.section.sort(function(a,b){return a.section.genericIndex-b.section.genericIndex});a.section.length&&c.push(a)});return c}function M(){var b=f.userCharaList;b.sort(function(a,b){return a.charaId<b.charaId?-1:a.charaId>b.charaId?1:0});var d=f.userSectionList,k=f.userQuestBattleList,c=[];g.each(b,
function(b,f){var h=b.charaId;b.costumeSection=[];g.each(d,function(c,d){var f=c.sectionId;d=c.section.questType;if(h==c.section.charaId&&"COSTUME"==d){d=(c.section.genericId+"").slice(-2);d=a.storage.userLive2dList.findWhere({charaId:h,live2dId:d});c.section.live2d=d.toJSON();d="";var t=!1,r=!0,e=!0;c.questBattleList=[];c.section.questBattleCount=0;g.each(k,function(a,b){f==a.questBattle.sectionId&&(a.questBattle.questBattleType&&"NORMAL"==a.questBattle.questBattleType&&c.section.questBattleCount++,
c.questBattleList.push(a))});c.questBattleList.sort(function(a,b){return a.questBattle.sectionIndex-b.questBattle.sectionIndex});c.questBattleList.length&&g.each(c.questBattleList,function(a,b){a.cleared||(t=!0,r=!1);b="CLEARED"===a.missionStatus2?"cleared":null;var c="CLEARED"===a.missionStatus3?"cleared":null;e="CLEARED"===a.missionStatus1&&b&&c?e:!1});t?(d="new",w++):r&&!e?d="clear":r&&e&&(d="comp");c.canPlay||(d="close",w--);c.questStatus=d;b.costumeSection.push(c)}});b.costumeSection.sort(function(a,
b){return a.section.genericIndex-b.section.genericIndex});b.costumeSection.length&&c.push(b)});return c}var B,f,D,E,m,l,F,p,v,q,w,e,N=u.View.extend({events:function(){var b={};b[a.cgti+" .tabBtns li"]=this.tabFunc;b[a.cgti+" #toggleBtns li"]=this.toggleFunc;return b},initialize:function(a){this.currentViewType="CHARA";this.currentAtt="ALL";this.template=g.template(H);this.createView()},render:function(){this.$el.html(this.template(z.getPageJson()));return this},createView:function(){w=q=0;D=L();E=
M();this.createDom()},createDom:function(){a.setGlobalView({});a.content.append(this.render().el);x.prototype.template=g.template($("#CharaParts").text());x.prototype.rootView=this;var b=a.doc.createDocumentFragment(),d,k,c=!1;f.campaignList&&(c=a.campaignParse(f.campaignList));g.each(D,function(c,e){c.section.length&&(d=a.storage.userCardList.findWhere({id:c.userCardId}).toJSON(),c.card=d,k=new x({model:c},"CHARA"),b.appendChild(k.render().el),g.each(p,function(a,b){b===c.chara.attributeId&&(p[b]+=
1)}))});g.each(E,function(c,e){c.costumeSection.length&&(d=a.storage.userCardList.findWhere({id:c.userCardId}).toJSON(),c.card=d,k=new x({model:c},"COSTUME"),b.appendChild(k.render().el),g.each(p,function(a,b){b===c.chara.attributeId&&(v[b]+=1)}))});a.doc.getElementById("charaQuestInner").appendChild(b);y.prototype.rootView=this;y.prototype.template=g.template($("#Section").text());G.prototype.template=g.template($("#SectionParts").text());if(c.POINT_UP&&!c.POINT_UP.globalBadge&&0<c.POINT_UP.pointUpType.length){var e=
a.doc.getElementById("questLinkBtnWrap");-1<c.POINT_UP.pointUpType.indexOf("MAIN")&&a.addClass(e.getElementsByClassName("main")[0],"pointUp");if(-1<c.POINT_UP.pointUpType.indexOf("SUB")){var l=a.storage.gameUser.toJSON();l.closeFunctions&&-1===l.closeFunctions.indexOf("ARENA")&&a.addClass(e.getElementsByClassName("side")[0],"pointUp")}(-1<c.POINT_UP.pointUpType.indexOf("CHARA")||-1<c.POINT_UP.pointUpType.indexOf("COSTUME"))&&a.addClass(e.getElementsByClassName("chara")[0],"pointUp");(-1<c.POINT_UP.pointUpType.indexOf("COMPOSE")||
-1<c.POINT_UP.pointUpType.indexOf("MATERIAL"))&&a.addClass(e.getElementsByClassName("event")[0],"pointUp")}h.getBaseData(a.getNativeObj());var m=0;g.each(f.userSectionList,function(a,b){"SUB"==a.section.questType&&m++});m||(a.removeClass(a.doc.querySelector(".side"),"linkBtn"),a.addClass(a.doc.querySelector(".side"),"off"));a.scrollSet("charaQuestWrap","charaQuestInner");n.canPlayQuestNum();n.eventTabSwitch(f.eventList);a.charaQuestBeforeType&&a.charaQuestBeforeCharaId&&("CHARA"!==a.charaQuestBeforeType&&
(c=a.doc.getElementById("toggleBtns").getElementsByClassName(a.charaQuestBeforeType)[0],e=c.dataset.type,a.doc.getElementById("CharaQuest").className=e,a.removeClass(a.doc.getElementById("toggleBtns").getElementsByClassName("current")[0],"current"),a.addClass(c,"current")),this.currentViewType=a.charaQuestBeforeType,this.trigger("quickShow",a.charaQuestBeforeCharaId));0<q&&(c=a.doc.getElementById("toggleBtns").getElementsByClassName("CHARA")[0],a.addClass(c,"batch"),c.getElementsByClassName("batch")[0].innerText=
q);a.firstNaviCheck(f);a.ready.hide();a.clearSectionModel&&(c=a.clearSectionModel.section,e=n.clearRewardChestColor(c.clearReward),K.section(c.clearRewardCode,c,e),a.clearSectionModel=null)},tabFunc:function(b){b.preventDefault();if(!a.isScrolled()){var d=b.currentTarget.getAttribute("data-att");a.doc.querySelector("#charaQuestInner").className="charaQuestInner "+d.toLowerCase();this.currentAtt=d;C(this.currentAtt,this.currentViewType);a.removeClass(a.doc.querySelector(".tabBtns .current"),"current");
a.addClass(b.currentTarget,"current");a.scrollRefresh(null,null,!0)}},toggleFunc:function(b){b.preventDefault();if(!a.isScrolled()){var d=b.currentTarget.dataset.type;this.currentViewType=a.doc.getElementById("CharaQuest").className=d;a.removeClass(a.doc.getElementById("toggleBtns").getElementsByClassName("current")[0],"current");a.addClass(b.currentTarget,"current");C(this.currentAtt,this.currentViewType);a.scrollRefresh(null,null,!0)}},removeView:function(){this.trigger("removeView");this.off();
this.remove()}}),x=u.View.extend({events:function(){var b={};b[a.cgti]=this.sectionShow;return b},initialize:function(a,d){this.listenTo(this.rootView,"removeView",this.removeView);this.listenTo(this.rootView,"quickShow",this.quickSectionShow);this.questType=d},className:function(a){return"charaWrap se_decide "+this.model.chara.attributeId.toLowerCase()},render:function(){this.$el.html(this.template({model:this.model,questType:this.questType}));this.el.className+=" "+this.questType;return this},quickSectionShow:function(b){if(this.model.charaId===
a.charaQuestBeforeCharaId&&this.questType===a.charaQuestBeforeType){console.log("quickSectionShow",this.model.charaId,this.questType);b=Math.floor(6*Math.random())+6;var d=String(b);1==d.length&&(d="0"+d);this.model.displayMessage=g.findWhere(this.model.chara.charaMessageList,{messageId:b}).message;b=a.doc.createDocumentFragment();e=new y({model:this.model},this.questType);b.appendChild(e.render().el);a.doc.getElementById("charaSection").appendChild(b);a.scrollSet("questList","sectionList");charaSection.className=
"show";charaList.className="hide";questLinkBtnWrap.className="hide";setTimeout(function(){e.tapAnimeEnd();a.doc.querySelector("#questList .sectionList").appendChild(m);h.getBaseData(a.getNativeObj())},20);$(a.ready.content).on("webkitAnimationEnd",function(){$(a.ready.content).off();$(a.ready.content).on("webkitAnimationEnd",function(b){"readyFadeIn"==b.originalEvent.animationName&&(a.tapBlock(!1),a.scrollRefresh(null,null,null,!0))});l=a.doc.getElementById("globalBackBtn");var b=function(){l.removeEventListener(a.cgti,
b);a.tapBlock(!0);h.stopVoice();charaSection.className="hide";questLinkBtnWrap.className="";charaList.className="show";a.charaQuestBeforeType=null;a.charaQuestBeforeCharaId=null;e.trigger("remove");setTimeout(function(){a.tapBlock(!1)},500)};l.setAttribute("data-noLink","true");l.addEventListener(a.cgti,b)})}},sectionShow:function(b){b.preventDefault();if(!a.isScrolled()){a.tapBlock(!0);setTimeout(function(){a.tapBlock(!1)},500);b=Math.floor(6*Math.random())+6;var d=String(b);1==d.length&&(d="0"+
d);var k="vo_char_"+this.model.charaId+"_00_"+d;this.model.displayMessage=g.findWhere(this.model.chara.charaMessageList,{messageId:b}).message;b=a.doc.createDocumentFragment();e=new y({model:this.model},this.questType);b.appendChild(e.render().el);a.doc.getElementById("charaSection").appendChild(b);a.scrollSet("questList","sectionList");charaSection.className="show";charaList.className="hide";questLinkBtnWrap.className="hide";setTimeout(function(){a.doc.querySelector("#questList .sectionList").appendChild(m);
h.getBaseData(a.getNativeObj());h.stopVoice();h.startVoice(k)},20);l=a.doc.getElementById("globalBackBtn");var c=function(){l.removeEventListener(a.cgti,c);a.tapBlock(!0);setTimeout(function(){a.tapBlock(!1)},500);h.stopVoice();charaSection.className="hide";questLinkBtnWrap.className="";charaList.className="show";a.charaQuestBeforeType=null;a.charaQuestBeforeCharaId=null;e.trigger("remove")};l.setAttribute("data-noLink","true");l.addEventListener(a.cgti,c);a.charaQuestBeforeType=this.rootView.currentViewType;
a.charaQuestBeforeCharaId=this.model.charaId}},removeView:function(){this.off();this.remove()}}),y=u.View.extend({events:function(){var b={};b[a.cgti+" #animationWrap1"]=this.tapAnimeEnd;b["webkitTransitionEnd #animationWrap2 .patternbg4"]=this.animeEndFunc;b["webkitAnimationEnd #animationWrap2 .patternbg4"]=this.animeEndFunc;b["webkitanimationend #animationWrap2 .patternbg4"]=this.animeEndFunc;b["animationend #animationWrap2 .patternbg4"]=this.animeEndFunc;return b},initialize:function(a,d){this.listenTo(this.rootView,
"remove",this.removeView);this.listenTo(this,"remove",this.removeView);this.questType=d;this.createView()},render:function(){this.$el.html(this.template({model:this.model}));return this},createView:function(){var a=this,d="CHARA"===this.questType?this.model.section:this.model.costumeSection;d.sort(function(a,b){return a.section.genericIndex>b.section.genericIndex?-1:a.section.genericIndex<b.section.genericIndex?1:0});g.each(d,function(b,c){b.name=a.model.chara.name;a.model.chara.title&&(b.name+="("+
a.model.chara.title+")");b.chestColor=n.clearRewardChestColor(b.section.clearReward);b=new G({model:b});m.appendChild(b.render().el)})},tapAnimeEnd:function(b){if(b&&(b.preventDefault(),a.isScrolled()))return;a.addClass(this.el.getElementsByClassName("charaImg")[0],"animEnd");this.animeEndFunc();h.stopVoice()},animeEndFunc:function(){a.addClass(a.doc.getElementById("animationWrap1"),"off");a.addClass(a.doc.getElementById("animationWrap2"),"off");a.removeClass(a.doc.getElementById("questListWrap"),
"off");a.scrollRefresh()},removeView:function(){this.off();this.remove()}}),G=u.View.extend({className:"section se_decide",initialize:function(){},events:function(){var b={};b[a.cgti]=this.sectionLink;return b},render:function(){console.log(this.model);this.$el.html(this.template({model:this.model}));this.model.canPlay||(this.el.className+=" off");return this},openConditionPopup:function(){var b={exClass:"openConditionPopup",popupType:"original",name:this.model.name,conditionList:n.openConditionJson(this.model.section,
this.model.name)};new a.PopupClass(b,F)},sectionLink:function(b){b.preventDefault();a.isScrolled()||(b.currentTarget.classList.contains("off")?this.openConditionPopup():location.href="#/QuestBattleSelect/"+this.model.sectionId)}});return{needModelIdObj:[{id:"user"},{id:"gameUser"},{id:"itemList"},{id:"userItemList"},{id:"giftList"},{id:"userGiftList"},{id:"userStatusList"},{id:"userCharaList"},{id:"userCardList"},{id:"userDeckList"},{id:"userDoppelList"},{id:"userLive2dList"},{id:"userSectionList"},
{id:"userQuestBattleList"},{id:"pieceList"},{id:"userFollowList"}],fetch:function(){z.pageModelGet(this.needModelIdObj)},init:function(){p={FIRE:0,WATER:0,TIMBER:0,LIGHT:0,DARK:0,VOID:0};v={FIRE:0,WATER:0,TIMBER:0,LIGHT:0,DARK:0,VOID:0};a.setStyle(I+J);f=z.getPageJson();m=a.doc.createDocumentFragment();n.supportPickUp(f);B=new N;F=$("#OpenConditionPopupTemp").text();h.getBaseData(a.getNativeObj());a.searchQuestGiftId=null},startCommand:function(){h.changeBg("web_common.ExportJson");h.startBgm("bgm04_movie12")},
remove:function(a){e&&(e.trigger("remove"),e=null);w=q=m=null;B&&B.removeView();a()}}});