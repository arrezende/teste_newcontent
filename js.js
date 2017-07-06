$(document).ready(function() {
  
$('#lightSlider').lightSlider({
    gallery: true,
    item: 1,
    loop:true,
    slideMove:2,
    slideMargin: 15,
    thumbItem: 4,
    thumbMargin: 30,
    auto:true,
    prevHtml: '<img src="img/seta.png">',
    nextHtml: ' ',
    
});

//$('.thumbnails-carousel').thumbnailsCarousel();


        
$('.launch-modal').on('click', function(e){
    e.preventDefault();
    $( '#' + $(this).data('modal-id') ).modal();
});
});

$(document).ready(function() {
   //$("#lightSlider li").hide(); 
   $("#slide img:eq(0)").addClass("ativo").show();
   
   function slide(){
	if($("#slide img.ativo").next().length ){
	    console.log('foi');
	    $(".ativo").fadeOut().removeClass('ativo').next().fadeIn().addClass('ativo');
	}else {
		$(".ativo").fadeOut().removeClass("ativo");
		$("#slide img:eq(0)").fadeIn().addClass("ativo");
    }
}
   
   setInterval(slide,3000);
   $('#pager li a').click(function() {
       event.preventDefault();
       var $this = $(this);
       var atributo = $this.attr('data-thumb');
        $('img.test').attr('src', '00.jpg');
        
       
       
    });

});