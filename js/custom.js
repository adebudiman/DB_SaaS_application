$(function(){
    $("#selectall").click(function () {
          $('.tbl-check').attr('checked', this.checked);
    });
    $(".tbl-check").click(function(){
        if($(".tbl-check").length == $(".tbl-check:checked").length) {
            $("#selectall").attr("checked", "checked");
        } else {
            $("#selectall").removeAttr("checked");
        }
    });
});

$(document).ready(function() {
    $('.nav-toggle').click(function(){
        var collapse_content_selector = $(this).attr('href');	
        var toggle_switch = $(this);
        $(collapse_content_selector).toggle(function(){
            if($(this).css('display')=='none'){
                ($(this).css('display')=='show')
                //toggle_switch.html('Show');
            } else {
                ($(this).css('display')=='none')
            }
        });
    });
});	

$(function(){
    jQuery(document).ready(function(){
        $(".vertical-nav").verticalnav({
            speed:  400,
            align: "left"
        });
    });
    
    $(".content form.form-inline").hide();
    $(".content .well h4").click(function() {
        var $this = $(this);
        $this.next(".content form.form-inline").slideToggle(200, function() {
            $this.children('.content .well h4').toggle();
        });
    });
    
	$('.btn-slide').click(function(){
        if($(this).hasClass('p_show')){
	    $( "#sidebar-wrapper" ).animate({
          left: "+=180"
		  }, 200, function() {
            
          });
		  $(this).removeClass('p_show').addClass('p_hide');
          $("#wrapper").animate({ 'padding-left' : '250px' }, "fast");
          $(".sidebar-nav-collapse").hide(400);
          $(".sidebar-nav").show(400);
        }
        else {   	
	    $( "#sidebar-wrapper" ).animate({
          left: "-=180"
		  }, 200, function() {
              
          });
		  $(this).removeClass('p_hide').addClass('p_show'); 
          $("#wrapper").animate({ 'padding-left' : '70px' }, "fast");
          $(".sidebar-nav-collapse").show(400);
          $(".sidebar-nav").hide(400);
        }
    });
});

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
});

$(document).ready(function()
{
    $('.panel-heading h2 a').click(function(e)
    {
      e.preventDefault();
      $('.panel-heading h2 a').removeClass('active');
      $(this).addClass('active');        
    }); 
    
    $('.sidebar-nav li a').click(function(e)
    {
      e.preventDefault();
      $('.sidebar-nav li a').removeClass('active');
      $(this).addClass('active');        
    });
    
});



