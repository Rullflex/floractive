var playerVideo, playerVideo2, playerVideo3, playerVideo4, playerVideo5, playerVideo6;
var isClickedVideo1 = false;
var isClickedVideo2 = false;
var isClickedVideo3 = false;
var isClickedVideo4 = false;
var isClickedVideo5 = false;
var isClickedVideo6 = false;
function onYouTubeIframeAPIReady() {}

$(document).ready((function(){
	
	$('#linkVideo1').click(function() {
		if (isClickedVideo1 == false) {
			$('#playerVideo1').attr('src', 'https://www.youtube.com/embed/VHZ3xEOJ8fY?enablejsapi=1');
			playerVideo = new YT.Player('playerVideo1',{
				events: {
					'onReady': onPlayerReady
				  }
			});
			function onPlayerReady(event) {
				event.target.playVideo();
			  }
			isClickedVideo1 = true;
		} 
		
	})
	$('#linkVideo2').click(function() {
		if (isClickedVideo2 == false) {
			$('#playerVideo2').attr('src', 'https://www.youtube.com/embed/Dw7_3LX6Mvs?enablejsapi=1');
			playerVideo2 = new YT.Player('playerVideo2',{
				events: {
					'onReady': onPlayerReady
				  }
			});
			function onPlayerReady(event) {
				event.target.playVideo();
			  }
			isClickedVideo2 = true;
		} 
		
	})
	$('#linkVideo3').click(function() {
		if (isClickedVideo3 == false) {
			$('#playerVideo3').attr('src', 'https://www.youtube.com/embed/NZnCXGbD4I4?enablejsapi=1');
			playerVideo3 = new YT.Player('playerVideo3',{
				events: {
					'onReady': onPlayerReady
				  }
			});
			function onPlayerReady(event) {
				event.target.playVideo();
			  }
			isClickedVideo3 = true;
		} 
		
	})
	$('#linkVideo4').click(function() {
		if (isClickedVideo4 == false) {
			$('#playerVideo4').attr('src', 'https://www.youtube.com/embed/2P4qJavUP1k?enablejsapi=1');
			playerVideo4 = new YT.Player('playerVideo4',{
				events: {
					'onReady': onPlayerReady
				  }
			});
			function onPlayerReady(event) {
				event.target.playVideo();
			  }
			isClickedVideo4 = true;
		} 
		
	})
	$('#linkVideo5').click(function() {
		if (isClickedVideo5 == false) {
			$('#playerVideo5').attr('src', 'https://www.youtube.com/embed/sGaNPNa1oEE?enablejsapi=1');
			playerVideo5 = new YT.Player('playerVideo5',{
				events: {
					'onReady': onPlayerReady
				  }
			});
			function onPlayerReady(event) {
				event.target.playVideo();
			  }
			isClickedVideo5 = true;
		} 
		
	})
	$('#linkVideo6').click(function() {
		if (isClickedVideo6 == false) {
			$('#playerVideo6').attr('src', 'https://www.youtube.com/embed/Dgyn_pGXu1w?enablejsapi=1');
			playerVideo6 = new YT.Player('playerVideo6',{
				events: {
					'onReady': onPlayerReady
				  }
			});
			function onPlayerReady(event) {
				event.target.playVideo();
			  }
			isClickedVideo6 = true;
		} 
		
	})
	$('#pauseVideo1').click(function() {playerVideo.pauseVideo();})
	$('#pauseVideo1').parent().parent().click(function() {playerVideo.pauseVideo();})
	$('#pauseVideo2').click(function() {playerVideo2.pauseVideo();})
	$('#pauseVideo2').parent().parent().click(function() {playerVideo2.pauseVideo();})
	$('#pauseVideo3').click(function() {playerVideo3.pauseVideo();})
	$('#pauseVideo3').parent().parent().click(function() {playerVideo3.pauseVideo();})
	$('#pauseVideo4').click(function() {playerVideo4.pauseVideo();})
	$('#pauseVideo4').parent().parent().click(function() {playerVideo4.pauseVideo();})
	$('#pauseVideo5').click(function() {playerVideo5.pauseVideo();})
	$('#pauseVideo5').parent().parent().click(function() {playerVideo5.pauseVideo();})
	$('#pauseVideo6').click(function() {playerVideo6.pauseVideo();})
	$('#pauseVideo6').parent().parent().click(function() {playerVideo6.pauseVideo();})
    //E-mail Ajax Send
	$(".get-contacts").submit(function() { 
		let th = $(this);
		$('.btn').prop('disabled', true);
		$.ajax({
			type: "POST",
			url: "mail.php", 
			data: th.serialize()
		}).done(function() {
			var pl='success';
			var v='';
			popupOpen(pl,v);
			$('.btn').prop('disabled', false);
		});
		return false;
	});
	$(".get-town").submit(function() { 
		let th = $(this);
		$('.btn').prop('disabled', true);
		$.ajax({
			type: "POST",
			url: "mail-towns.php", 
			data: th.serialize()
		}).done(function() {
			var pl='success';
			var v='';
			popupOpen(pl,v);
			$('.btn').prop('disabled', false);
		});
		return false;
	});
	$.each($('.input-tel'), function(index, val) {
		$(this).attr('type','tel');
		$(this).focus(function(){
			$(this).inputmask('+7(999) 999 9999',{clearIncomplete: true,clearMaskOnLostFocus: true,
				"onincomplete": function(){maskclear($(this));}
			});
			$(this).addClass('focus');
			$(this).parent().addClass('focus');
			$(this).parent().removeClass('err');
			$(this).removeClass('err');
		});
	});
	$('.input-tel').focusout(function(event) {
		maskclear($(this));
	});
	$(".popup-close").on("click",function(){
		$(this).parent().children('iframe').trigger('pause'); // $("#bone").trigger('pause');

   });
   $(".video-otz").on("click",function(){

   });
   
    $(".phone-form").mask("+7 (999) 999-99-99");$(window).scroll((function(){let st=$(this).scrollTop();$("#float-leaf_01").css({top:220+st/20}),$("#float-leaf_02").css({top:500+st/20}),$("#float-leaf_03").css({top:600+st/6}),$("#float-leaf_04").css({top:900+st/7}),$("#float-leaf_06").css({top:1280+st/6}),$("#float-leaf_07").css({top:1050+st/7}),$("#float-leaf_08").css({top:1200+st/11}),$("#float-leaf_21").css({top:140+st/4}),$("#float-leaf_22").css({top:540+st/10}),$("#float-leaf_23").css({top:750+st/20}),$("#float-item_01").css({top:900+st/10}),$("#float-item_02").css({top:1e3+st/5})})),$("#gallery").lightGallery();var con_width=$(".container").width(),win_width=$(window).width();win_width>=1211?($(".responsive-img__car1").css("width","571px"),$(".responsive-img__car1").css("height","auto"),$(".responsive-img__car2").css("width","270px"),$(".responsive-img__car2").css("height","auto"),$("#phone").css({width:"311px",height:"588px"}),$("#phone-camera").css({width:"159px",height:"26px"})):win_width>=768?($(".responsive-img__car1").css("width","300px"),$(".responsive-img__car1").css("height","auto"),$(".responsive-img__car2").css("width","240px"),$(".responsive-img__car2").css("height","492.44px"),$("#phone").css({width:"277px",height:"526px"}),$("#phone-camera").css({width:"141px",height:"23px"})):win_width>=426?($(".responsive-img__car1").css("width","220px"),$(".responsive-img__car1").css("height","auto"),$(".responsive-img__car2").css("width","200px"),$(".responsive-img__car2").css("height","410.37px"),$("#phone").css({width:"228px",height:"431px"}),$("#phone-camera").css({width:"116px",height:"19px"})):win_width<=425&&($(".responsive-img__car1").css("width","187px"),$(".responsive-img__car1").css("height","auto"),$(".responsive-img__car2").css("width","140px"),$(".responsive-img__car2").css("height","287.25px"),$("#phone").css({width:"160px",height:"302.5px"}),$("#phone-camera").css({width:"80px",height:"13px"}));var carousel_video=$(".carousel-video").waterwheelCarousel({flankingItems:2,separation:con_width/5-10,opacityMultiplier:.4,linkHandling:1,animationEasing:"swing"});$("#prev-video").bind("click",(function(){return carousel_video.prev(),!1})),$("#next-video").bind("click",(function(){return carousel_video.next(),!1}));var carousel_social=$(".carousel-social").waterwheelCarousel({flankingItems:2,separation:con_width/5-10,opacityMultiplier:.4,linkHandling:1,animationEasing:"swing"});function searchselectreset(){$.each($('.select[data-type="search"]'),(function(index,val){var block=$(this).parent(),select=$(this).parent().find("select");1==$(this).find(".select-options__value:visible").length?($(this).addClass("focus"),$(this).parents(".select-block").find("select").val($(".select-options__value:visible").data("value")),$(this).find(".select-title__value").val($(".select-options__value:visible").html()),$(this).find(".select-title__value").attr("data-value",$(".select-options__value:visible").html())):""==select.val()&&($(this).removeClass("focus"),block.find("input.select-title__value").val(select.find('option[selected="selected"]').html()),block.find("input.select-title__value").attr("data-value",select.find('option[selected="selected"]').html()))}))}$("#prev-social").bind("click",(function(){return carousel_social.prev(),!1})),$("#next-social").bind("click",(function(){return carousel_social.next(),!1})),$("body").on("click",".spoller",(function(event){return!($(this).hasClass("mob")&&!isMobile.any())&&($(this).hasClass("closeall")&&!$(this).hasClass("active")&&$.each($(this).closest(".spollers").find(".spoller"),(function(index,val){$(this).removeClass("active"),$(this).next().slideUp(300)})),$(this).toggleClass("active").next().slideToggle(300,(function(index,val){$(this).parent().find(".slick-slider").length>0&&$(this).parent().find(".slick-slider").slick("setPosition")})),!1)}));var isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}},x,i,j,selElmnt,a,b,c,d;if(isMobile.any(),location.hash){var hsh=location.hash.replace("#","");$(".popup-"+hsh).length>0?popupOpen(hsh):$("div."+hsh).length>0&&$("body,html").animate({scrollTop:$("div."+hsh).offset().top},500,(function(){}))}function popupOpen(pl,v){$(".popup").removeClass("active").hide(),$(".header-menu").hasClass("active")||$("body").data("scroll",$(window).scrollTop()),isMobile.any()?setTimeout((function(){$("body").addClass("lock")}),300):($("body").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()}).addClass("lock"),$(".pdb").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()})),history.pushState("","","#"+pl),""!=v&&null!=v&&$(".popup-"+pl+" .popup-video__value").html('<iframe src="https://www.youtube.com/embed/'+v+'?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>'),$(".popup-"+pl).fadeIn(300).delay(300).addClass("active"),$(".popup-"+pl).find(".slick-slider").length>0&&$(".popup-"+pl).find(".slick-slider").slick("setPosition")}function openPopupById(popup_id){$("#"+popup_id).fadeIn(300).delay(300).addClass("active")}function popupClose(){$(".popup").removeClass("active").fadeOut(300),$(".header-menu").hasClass("active")||(isMobile.any()?($("body").removeClass("lock"),$("body,html").scrollTop(parseInt($("body").data("scroll")))):(setTimeout((function(){$("body").css({paddingRight:0}),$(".pdb").css({paddingRight:0})}),200),setTimeout((function(){$("body").removeClass("lock"),$("body,html").scrollTop(parseInt($("body").data("scroll")))}),200))),history.pushState("","",window.location.href.split("#")[0])}function ibg(){$.each($(".ibg"),(function(index,val){$(this).find("img").length>0&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')}))}for($(".gallery").length>0&&baguetteBox.run(".gallery",{}),$(".pl").click((function(event){var pl,v;return popupOpen($(this).attr("href").replace("#",""),$(this).data("vid")),!1})),$(".popup-close,.popup__close").click((function(event){return popupClose(),!1})),$(".popup").click((function(e){if(!$(e.target).is(".popup>.popup-table>.cell *")||$(e.target).is(".popup-close")||$(e.target).is(".popup__close"))return popupClose(),!1})),$(document).on("keydown",(function(e){27==e.which&&popupClose()})),$(".goto").click((function(){var el=$(this).attr("href").replace("#",""),offset=0;return $("body,html").animate({scrollTop:$("."+el).offset().top+0},500,(function(){})),$(".header-menu").hasClass("active")&&($(".header-menu,.header-menu__icon").removeClass("active"),$("body").removeClass("lock")),!1})),ibg(),$(document).on("click touchstart",(function(e){$(e.target).is(".select *")||$(".select").removeClass("active")})),x=document.getElementsByClassName("custom-select"),i=0;i<x.length;i++){for(selElmnt=x[i].getElementsByTagName("select")[0],(a=document.createElement("DIV")).setAttribute("class","select-selected"),a.innerHTML=selElmnt.options[selElmnt.selectedIndex].innerHTML,x[i].appendChild(a),(d=document.createElement("DIV")).setAttribute("class","select-items select-hide"),(b=document.createElement("DIV")).setAttribute("class","select-items__inner"),j=1;j<selElmnt.length;j++)(c=document.createElement("DIV")).innerHTML=selElmnt.options[j].innerHTML,c.addEventListener("click",(function(e){var y,i,k,s,h;for(s=this.parentNode.parentNode.parentNode.getElementsByTagName("select")[0],h=this.parentNode.parentNode.previousSibling,i=0;i<s.length;i++)if(s.options[i].innerHTML==this.innerHTML){for(s.selectedIndex=i,h.innerHTML=this.innerHTML,y=this.parentNode.parentNode.getElementsByClassName("same-as-selected"),k=0;k<y.length;k++)y[k].removeAttribute("class");this.setAttribute("class","same-as-selected");break}h.click()})),b.appendChild(c);d.appendChild(b),x[i].appendChild(d),a.addEventListener("click",(function(e){e.stopPropagation(),closeAllSelect(this),this.nextSibling.classList.toggle("select-hide"),this.classList.toggle("select-arrow-active")}))}function closeAllSelect(elmnt){var x,y,i,arrNo=[];for(x=document.getElementsByClassName("select-items"),y=document.getElementsByClassName("select-selected"),i=0;i<y.length;i++)elmnt==y[i]?arrNo.push(i):y[i].classList.remove("select-arrow-active");for(i=0;i<x.length;i++)arrNo.indexOf(i)&&x[i].classList.add("select-hide")}document.addEventListener("click",closeAllSelect)}));