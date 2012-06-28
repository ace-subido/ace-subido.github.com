(function(a){
	a(function(){
		a("#toggle-contactdrop").click(function(){
			a("#toggle-contactdrop").hasClass("open-as")?(a("#contactdrop").slideUp(), a("#toggle-contactdrop").removeClass("open-as")):(a("#contactdrop").slideDown(),a("#toggle-contactdrop").addClass("open-as"))
		})
		a("#toggle-aboutdrop").click(function(){
			a("#toggle-aboutdrop").hasClass("open-as")?(a("#aboutdrop").slideUp(), a("#toggle-aboutdrop").removeClass("open-as")):(a("#aboutdrop").slideDown(),a("#toggle-aboutdrop").addClass("open-as"))
		})	
		a("#close-contactdrop").click(function(){
			a("#toggle-contactdrop").hasClass("open-as")?(a("#contactdrop").slideUp(), a("#toggle-contactdrop").removeClass("open-as")):(a("#contactdrop").slideDown(),a("#toggle-contactdrop").addClass("open-as"))
		})			
		a("#close-aboutdrop").click(function(){
			a("#toggle-aboutdrop").hasClass("open-as")?(a("#aboutdrop").slideUp(), a("#toggle-aboutdrop").removeClass("open-as")):(a("#aboutdrop").slideDown(),a("#toggle-aboutdrop").addClass("open-as"))
		})	
	})
})
(jQuery);