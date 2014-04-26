(function($){
	
	$.fn.zoomTxt = function() {
  			
			var fsize = 24 +'px';
  
  
			this.children().hover(function(){
			$(this).css('font-size','34px');
			$(this).prev().css('font-size','30px');
			$(this).prev().prev().css('font-size','26px');
			$(this).next().css('font-size','30px');
			$(this).next().next().css('font-size','26px');
			$('footer').css('padding-top','22px')
			});		
			 
			this.children().mouseout(function(){
			$(this).css('font-size',fsize);
			$(this).prev().css('font-size',fsize);
			$(this).prev().prev().css('font-size',fsize);
			$(this).next().css('font-size',fsize);
			$(this).next().next().css('font-size',fsize);
			$('footer').css('padding-top','30px')

			});		

 	 };
	
})(jQuery);