/*
Vertical Responsive Navigation
By: marcoarib
Date: 2013/07/07
Contact: marco.arib@gmail.com
*/

jQuery.fn.verticalnav = function(options){
	var settings = {
		speed	 			: 300,     		// dropdown speed
		align	 			: "left"     	// menu alignment
	}
	$.extend( settings, options );
	$(".vertical-nav").prepend("<li class='showhide'><span class='title'>MENU</span><span class='icon'><em></em><em></em><em></em><em></em></span></li>");
	
	if(settings.align == "right"){
		$(".vertical-nav").addClass("right");
	}
	
	screenSize();
	
	$(window).resize(function() {
		screenSize();
	});
	
	function screenSize(){
		//$(".vertical-nav").find("li").unbind();
		//$(".vertical-nav").find("ul").hide(0);
		if(window.innerWidth <= 768){
			showCollapse();
			bindClick();
		}
		else{
			hideCollapse();
			bindHover();
		}
	}
	
	function bindHover(){
		$(".vertical-nav li").bind("mouseover", function(){
			$(this).children("ul").stop(true,true).css('display', 'inline-block').fadeIn(settings.interval);;
		}).bind("mouseleave", function(){
			$(this).children("ul").stop(true,true).fadeOut(settings.interval);
		});
	}
	
	function bindClick(){
		$(".vertical-nav > li").bind("click", function(){
			if($(this).children("ul").css("display") == "none"){
				$(this).find("ul").stop(true,true).slideDown(settings.interval);
			}
			else{
				$(this).children("ul").stop(true,true).slideUp(settings.interval);
			}
		});
	}
	
	function showCollapse(){
		$(".vertical-nav > li:not(.showhide)").hide(0);
		$(".vertical-nav > li.showhide").show(0);
		$(".vertical-nav > li.showhide").bind("click", function(){
			if($(".vertical-nav > li").is(":hidden")){
				$(".vertical-nav > li").slideDown(300);
			}
			else{
				$(".vertical-nav > li:not(.showhide)").slideUp(300);
				$(".vertical-nav > li.showhide").show(0);
			}
		});
	}
	
	function hideCollapse(){
		$(".vertical-nav > li").show(0);
		$(".vertical-nav > li.showhide").hide(0);
	}	
}

