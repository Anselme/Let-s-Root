$(document).ready(function(){ 

// FADE THIS
	$(".fadeThis").hover(function() {
		$(this).stop().fadeTo('slow', 1.0, function() {});
		}, function(){
		$(this).stop().fadeTo('slow', 0.5, function() {});
		});
	
	// NAVIGATION SLIDES OUT
	$('#logo').hide().delay(1000).fadeIn(1000);
	$('#intro').hide().delay(1600).fadeIn(1000);
	$('#navi1,#navi2, #navi3,#navi4,#navi5').hide().delay(3500).fadeIn('fast');
	$('#navi1').delay(1500).animate({"padding-left": "90px"}, {duration: 'slow',easing: 'easeOutBack'});
	$('#navi2').delay(1600).animate({"padding-left": "90px"}, {duration: 'slow',easing: 'easeOutBack'});
	$('#navi3').delay(1700).animate({"padding-left": "90px"}, {duration: 'slow',easing: 'easeOutBack'});
	$('#navi4').delay(1800).animate({"padding-left": "90px"}, {duration: 'slow',easing: 'easeOutBack'});
	$('#navi5').delay(1900).animate({"padding-left": "90px"}, {duration: 'slow',easing: 'easeOutBack'});
	
    $('#navi1,#navi2, #navi3,#navi4,#navi5').mouseover(function(){
      $(this).stop().animate({"padding-left": "0px"}, {duration: 500,easing: 'easeOutQuart'});
    }).mouseout(function(){ 
      $(this).stop().animate({"padding-left": "90px"}, {duration: 500,easing: 'easeOutQuart'});
    });;

	// SCROLL NAVIGATION
	$('#nav').onePageNav();
	$("a.anchorLink").anchorAnimate()


}); // CLOSE ALL SCRIPTS
