$(function() {
		var temp , i, count=0;
		var disease1 = new Array(1,1,2,2,2); // Normal
		var disease2 = new Array(1,0,2,2,2); // Turner syndrome
		var disease3 = new Array(1,1,3,2,2); // Trisomy 13
		var disease4 = new Array(1,1,2,3,2); // Trisomy 18
		var	disease5 = new Array(1,1,2,2,3); // Trisomy 21
		var disease1_counter = { chromXcounter:0,chromYcounter:0,chrom13counter:0,chrom18counter:0,chrom21counter:0 } ;
		var disease2_counter = { chromXcounter:0,chromYcounter:0,chrom13counter:0,chrom18counter:0,chrom21counter:0 } ;
		var disease3_counter = { chromXcounter:0,chromYcounter:0,chrom13counter:0,chrom18counter:0,chrom21counter:0 } ;
		var disease4_counter = { chromXcounter:0,chromYcounter:0,chrom13counter:0,chrom18counter:0,chrom21counter:0 } ;
		var disease5_counter = { chromXcounter:0,chromYcounter:0,chrom13counter:0,chrom18counter:0,chrom21counter:0 } ;
		$(".item").draggable({
        helper: 'clone',
				revert:'invalid',
				zIndex: 10000
    });
		$(".dye").draggable({
        helper: 'clone',
				revert:'invalid',
				zIndex: 10000
    });
		
//Disease ONE!
$("#dis1").droppable({
		accept:".dye,.item",
        drop: function(event, ui) {
				if(ui.draggable.attr("class")=="dye ui-draggable ui-draggable-handle")
				{
					$(this).attr( "style","	background-image: url('img/dyeColor.png') , url('img/chromosome.png'); " );
					
						count=0;
						for( i=1 ; i<=disease1[0] && i<=disease1_counter['chromXcounter'] ; i++) {	count++; }
						for(i=1 ; i<=count ; i++)
						{
								$('<img class="img led1d1" width="15" src="img/darkgreen.gif"/><br><br>').appendTo('#dis1');
						    $('.led1d1').attr("style", "margin-top:" + Math.floor(Math.random()* 4) + "px; margin-left:" + Math.floor(Math.random()*85) + "px;");
						}
						
						count=0;
						for( i=1 ; i<=disease1[1] && i<=disease1_counter['chromYcounter'] ; i++) {	count++; }
						for(i=1 ; i<=count ; i++)
						{
								$('<img class="img led2d1" width="15" src="img/orange.gif"/><br><br>').appendTo('#dis1');
						    $('.led2d1').attr("style", "margin-top:" + Math.floor(Math.random()*4) + "px; margin-left:" + Math.floor(Math.random()*85) + "px;");

						}
					
						count=0;
						for( i=1 ; i<=disease1[2] && i<=disease1_counter['chrom13counter'] ; i++) {	count++; }
						for(i=1 ; i<=count ; i++)
						{
								$('<img class="img led3d1" width="15" src="img/green.gif"/><br><br>').appendTo('#dis1');
						    $('.led3d1').attr("style", "margin-top:" + Math.floor(Math.random()*4) + "px; margin-left:" + Math.floor(Math.random()*85) + "px;");

						}
					
						count=0;
						for( i=1 ; i<=disease1[3] && i<=disease1_counter['chrom18counter'] ; i++) {	count++; }
						for(i=1 ; i<=count ; i++)
						{
								$('<img class="img led4d1" width="15" src="img/cyan.gif"/><br>').appendTo('#dis1');
								$('.led4d1').attr("style", "margin-top:" + Math.floor(Math.random()*4) + "px; margin-left:" + Math.floor(Math.random()*95) + "px;");
						}
						
						count=0;
						for( i=1 ; i<=disease1[4] && i<=disease1_counter['chrom21counter'] ; i++) {	count++; }
						for(i=1 ; i<=count ; i++)
						{
								$('<img class="img led5d1" width="15" src="img/darkorange.gif"/><br><br>').appendTo('#dis1');
								$('.led5d1').attr("style", "margin-top:" + Math.floor(Math.random()*4) + "px; margin-left:" + Math.floor(Math.random()*90) + "px;");
						}
				}
					
				temp=ui.draggable.attr("id");
				if(temp == 'probeX')
					disease1_counter['chromXcounter']++;
				if(temp == 'probeY')
					disease1_counter['chromYcounter']++;
				if(temp == 'probe13')
					disease1_counter['chrom13counter']++;
				if(temp == 'probe18')
					disease1_counter['chrom18counter']++;
				if(temp == 'probe21')
					disease1_counter['chrom21counter']++;
				}
			});	

		
//Disease TWO!
$("#dis2").droppable({
		accept:".dye,.item",
        drop: function(event, ui) {
				if(ui.draggable.attr("class")=="dye ui-draggable ui-draggable-handle")
				{
					$(this).attr("style","	background-image: url('img/dyeColor.png') , url('img/chromosome.png'); ");
					
						count=0;
						for( i=1 ; i<=disease2[0] && i<=disease2_counter['chromXcounter'] ; i++) {	count++; }
						for(i=1 ; i<=count ; i++)
						{
								$('<img class="img led1d2" width="15" src="img/darkgreen.gif"/><br><br>').appendTo('#dis2');
						    $('.led1d2').attr("style", "margin-top:" + Math.floor(Math.random()*4) + "px; margin-left:" + Math.floor(Math.random()*75) + "px;");
						}
						
						count=0;
						for( i=1 ; i<=disease2[1] && i<=disease2_counter['chromYcounter'] ; i++) {	count++; }
						for(i=1 ; i<=count ; i++)
						{
								$('<img class="img led2d2" width="15" src="img/orange.gif"/><br><br>').appendTo('#dis2');
						    $('.led2d2').attr("style", "margin-top:" + Math.floor(Math.random()*4) + "px; margin-left:" + Math.floor(Math.random()*100) + "px;");
						}
					
						count=0;
						for( i=1 ; i<=disease2[2] && i<=disease2_counter['chrom13counter'] ; i++) {	count++; }
						for(i=1 ; i<=count ; i++)
						{
								$('<img class="img led3d2" width="15" src="img/green.gif"/><br><br>').appendTo('#dis2');
						    $('.led3d2').attr("style", "margin-top:" + Math.floor(Math.random()*4) + "px; margin-left:" + Math.floor(Math.random()*85) + "px;");
						}
					
						count=0;
						for( i=1 ; i<=disease2[3] && i<=disease2_counter['chrom18counter'] ; i++) {	count++; }
						for(i=1 ; i<=count ; i++)
						{
								$('<img class="img led4d2" width="15" src="img/cyan.gif"/><br>').appendTo('#dis2');
								$('.led4d2').attr("style", "margin-top:" + Math.floor(Math.random()*4) + "px; margin-left:" + Math.floor(Math.random()*79) + "px;");
						}
						
						count=0;
						for( i=1 ; i<=disease2[4] && i<=disease2_counter['chrom21counter'] ; i++) {	count++; }
						for(i=1 ; i<=count ; i++)
						{
								$('<img class="img led5d2" width="15" src="img/darkorange.gif"/><br><br>').appendTo('#dis2');
								$('.led5d2').attr("style", "margin-top:" + Math.floor(Math.random()*4) + "px; margin-left:" + Math.floor(Math.random()*104) + "px;");						
						}
				}
					
				temp=ui.draggable.attr("id");
				if(temp == 'probeX')
					disease2_counter['chromXcounter']++;
				if(temp == 'probeY')
					disease2_counter['chromYcounter']++;
				if(temp == 'probe13')
					disease2_counter['chrom13counter']++;
				if(temp == 'probe18')
					disease2_counter['chrom18counter']++;
				if(temp == 'probe21')
					disease2_counter['chrom21counter']++;
				}
			});	

//Disease THREE!
$("#dis3").droppable({
		accept:".dye,.item",
        drop: function(event, ui) {
				if(ui.draggable.attr("class")=="dye ui-draggable ui-draggable-handle")
				{
					$(this).attr("style","	background-image: url('img/dyeColor.png') , url('img/chromosome.png'); ");
						
						count=0;
						for( i=1 ; i<=disease3[0] && i<=disease3_counter['chromXcounter'] ; i++) {	count++; }
						for(i=1 ; i<=count ; i++)
						{
								$('<img class="img led1d3" width="15" src="img/darkgreen.gif"/><br><br>').appendTo('#dis3');
						    $('.led1d3').attr("style", "margin-top:" + Math.floor(Math.random()*4) + "px; margin-left:" + Math.floor(Math.random()*75) + "px;");						}
					
						count=0;
						for( i=1 ; i<=disease3[1] && i<=disease3_counter['chromYcounter'] ; i++) {	count++; }
						for(i=1 ; i<=count ; i++)
						{
								$('<img class="img led2d3" width="15" src="img/orange.gif"/><br><br>').appendTo('#dis3');
						    $('.led2d3').attr("style", "margin-top:" + Math.floor(Math.random()*4) + "px; margin-left:" + Math.floor(Math.random()*85) + "px;");
						}
					
						count=0;
						for( i=1 ; i<=disease3[2] && i<=disease3_counter['chrom13counter'] ; i++) {	count++; }
						for(i=1 ; i<=count ; i++)
						{
								$('<img class="img led3d3" width="15" src="img/green.gif"/><br><br>').appendTo('#dis3');
						    $('.led3d3').attr("style", "margin-top:" + Math.floor(Math.random()*4) + "px; margin-left:" + Math.floor(Math.random()*95) + "px;");
						}
						
						count=0;
						for( i=1 ; i<=disease3[3] && i<=disease3_counter['chrom18counter'] ; i++) {	count++; }
						for(i=1 ; i<=count ; i++)
						{
								$('<img class="img led4d3" width="15" src="img/cyan.gif"/><br>').appendTo('#dis3');
								$('.led4d3').attr("style", "margin-top:" + Math.floor(Math.random()*4) + "px; margin-left:" + Math.floor(Math.random()*75) + "px;");
						}
					
						count=0;
						for( i=1 ; i<=disease3[4] && i<=disease3_counter['chrom21counter'] ; i++) {	count++; }
						for(i=1 ; i<=count ; i++)
						{
								$('<img class="img led5d3" width="15" src="img/darkorange.gif"/><br><br>').appendTo('#dis3');
								$('.led5d3').attr("style", "margin-top:" + Math.floor(Math.random()*4) + "px; margin-left:" + Math.floor(Math.random()*85) + "px;");
						}
				}
					
				temp=ui.draggable.attr("id");
				if(temp == 'probeX')
					disease3_counter['chromXcounter']++;
				if(temp == 'probeY')
					disease3_counter['chromYcounter']++;
				if(temp == 'probe13')
					disease3_counter['chrom13counter']++;
				if(temp == 'probe18')
					disease3_counter['chrom18counter']++;
				if(temp == 'probe21')
					disease3_counter['chrom21counter']++;
				}
			});	

	
//Disease Four!
$("#dis4").droppable({
		accept:".dye,.item",
        drop: function(event, ui) {
				if(ui.draggable.attr("class")=="dye ui-draggable ui-draggable-handle")
				{
					$(this).attr("style","	background-image: url('img/dyeColor.png') , url('img/chromosome.png'); ");
					
						count=0;
						for( i=1 ; i<=disease4[0] && i<=disease4_counter['chromXcounter'] ; i++) {	count++; }
						for(i=1 ; i<=count ; i++)
						{
								$('<img class="img led1d4" width="15" src="img/darkgreen.gif"/><br><br>').appendTo('#dis4');
						    $('.led1d4').attr("style", "margin-top:" + Math.floor(Math.random()*4) + "px; margin-left:" + Math.floor(Math.random()*75) + "px;");
						}
					
						count=0;
						for( i=1 ; i<=disease4[1] && i<=disease4_counter['chromYcounter'] ; i++) {	count++; }
						for(i=1 ; i<=count ; i++)
						{
								$('<img class="img led2d4" width="15" src="img/orange.gif"/><br><br>').appendTo('#dis4');
						    $('.led2d4').attr("style", "margin-top:" + Math.floor(Math.random()*4) + "px; margin-left:" + Math.floor(Math.random()*95) + "px;");
						}
					
						count=0;
						for( i=1 ; i<=disease4[2] && i<=disease4_counter['chrom13counter'] ; i++) {	count++; }
						for(i=1 ; i<=count ; i++)
						{
								$('<img class="img led3d4" width="15" src="img/green.gif"/><br><br>').appendTo('#dis4');
						    $('.led3d4').attr("style", "margin-top:" + Math.floor(Math.random()*4) + "px; margin-left:" + Math.floor(Math.random()*70) + "px;");
						}
				
						count=0;
						for( i=1 ; i<=disease4[3] && i<=disease4_counter['chrom18counter'] ; i++) {	count++; }
						for(i=1 ; i<=count ; i++)
						{
								$('<img class="img led4d4" width="15" src="img/cyan.gif"/><br>').appendTo('#dis4');
								$('.led4d4').attr("style", "margin-top:" + Math.floor(Math.random()*4) + "px; margin-left:" + Math.floor(Math.random()*77) + "px;");						}
					
						count=0;
						for( i=1 ; i<=disease4[4] && i<=disease4_counter['chrom21counter'] ; i++) {	count++; }
						for(i=1 ; i<=count ; i++)
						{
								$('<img class="img led5d4" width="15" src="img/darkorange.gif"/><br><br>').appendTo('#dis4');
								$('.led5d4').attr("style", "margin-top:" + Math.floor(Math.random()*4) + "px; margin-left:" + Math.floor(Math.random()*90) + "px;");
						}
					}
					
						
			
					
				temp=ui.draggable.attr("id");
				if(temp == 'probeX')
					disease4_counter['chromXcounter']++;
				if(temp == 'probeY')
					disease4_counter['chromYcounter']++;
				if(temp == 'probe13')
					disease4_counter['chrom13counter']++;
				if(temp == 'probe18')
					disease4_counter['chrom18counter']++;
				if(temp == 'probe21')
					disease4_counter['chrom21counter']++;
					}
					});	
	
	//Disease FIVE!
$("#dis5").droppable({
		accept:".dye,.item",
        drop: function(event, ui) {
				if(ui.draggable.attr("class")=="dye ui-draggable ui-draggable-handle")
				{
					$(this).attr("style","	background-image: url('img/dyeColor.png') , url('img/chromosome.png'); ");
						
						count=0;
						for( i=1 ; i<=disease5[0] && i<=disease5_counter['chromXcounter'] ; i++) {	count++; }
						for(i=1 ; i<=count ; i++)
						{
								$('<img class="img led1d5" width="15" src="img/darkgreen.gif"/><br><br>').appendTo('#dis5');
						    $('.led1d5').attr("style", "margin-top:" + Math.floor(Math.random()*4) + "px; margin-left:" + Math.floor(Math.random()*78) + "px;");
						}
					
						count=0;
						for( i=1 ; i<=disease5[1] && i<=disease5_counter['chromYcounter'] ; i++) {	count++; }
						for(i=1 ; i<=count ; i++)
						{
								$('<img class="img led2d5" width="15" src="img/orange.gif"/><br><br>').appendTo('#dis5');
						    $('.led2d5').attr("style", "margin-top:" + Math.floor(Math.random()*4) + "px; margin-left:" + Math.floor(Math.random()*85) + "px;");
						}
					
						count=0;
						for( i=1 ; i<=disease5[2] && i<=disease5_counter['chrom13counter'] ; i++) {	count++; }
						for(i=1 ; i<=count ; i++)
						{
								$('<img class="img led3d5" width="15" src="img/green.gif"/><br><br>').appendTo('#dis5');
						    $('.led3d5').attr("style", "margin-top:" + Math.floor(Math.random()*4) + "px; margin-left:" + Math.floor(Math.random()*85) + "px;");
						}
					
						count=0
						for( i=1 ; i<=disease5[3] && i<=disease5_counter['chrom18counter'] ; i++) {	count++; }
						for(i=1 ; i<=count ; i++)
						{
								$('<img class="img led4d5" width="15" src="img/cyan.gif"/><br>').appendTo('#dis5');
								$('.led4d5').attr("style", "margin-top:" + Math.floor(Math.random()*4) + "px; margin-left:" + Math.floor(Math.random()*75) + "px;");
						}
					
						count=0;
						for( i=1 ; i<=disease5[4] && i<=disease5_counter['chrom21counter'] ; i++) {	count++; }
						for(i=1 ; i<=count ; i++)
						{
								$('<img class="img led5d5" width="15" src="img/darkorange.gif"/><br><br>').appendTo('#dis5');
								$('.led5d5').attr("style", "margin-top:" + Math.floor(Math.random()*4) + "px; margin-left:" + Math.floor(Math.random()*90) + "px;");
						}
				}
					
				temp=ui.draggable.attr("id");
				if(temp == 'probeX')
					disease5_counter['chromXcounter']++;
				if(temp == 'probeY')
					disease5_counter['chromYcounter']++;
				if(temp == 'probe13')
					disease5_counter['chrom13counter']++;
				if(temp == 'probe18')
					disease5_counter['chrom18counter']++;
				if(temp == 'probe21')
					disease5_counter['chrom21counter']++;
				}
			});	


//	Randomise
	(function($) {

$.fn.randomize = function(childElem) {
  return this.each(function() {
      var $this = $(this);
      var elems = $this.children(childElem);

      elems.sort(function() { return (Math.round(Math.random())-0.5); });  

      $this.detach(childElem);  

      for(var i=0; i < elems.length; i++)
        $this.append(elems[i]);      

  });    
}
})(jQuery);

	$(document).ready(function(){
		$('.diseases').randomize('.disease');
	}); 
		
	
	


});