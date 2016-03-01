$(document).ready(function(){
	
	/*initialColor = $('body').css("background-color");

	$('body').css('background-color','rgb(0,0,0)');
	$('body').transition({opacity:1, "background-color":initialColor}, 500, intro());
	$('.link').click(function() {
		event.preventDefault();
		newLocation = this.href;
		$('body').transition({opacity:0, "background-color":"black"}, 500, function(){ window.location = newLocation; });
	});*/
	intro();
});


function animate(){
	$('#logo-text').transition({color:'rgb(136,69,99)'}, 10000, function(){
		$('#logo-text').transition({color:'rgb(0,0,0)'}, 10000, function(){
				animate();
		});
	});
}

function intro(){

		$('#firstSmall').transition({
			opacity:1,
			y: '0px'
		});
		$('h1>span:nth-child(2)').transition({
			opacity: 1,
		});
		$('h1>span:nth-child(3)').transition({
			opacity: 1,
			delay: '40'
		});
		$('h1>span:nth-child(4)').transition({
			opacity: 1,
			delay: '80'
		});
		$('h1>span:nth-child(5)').transition({
			opacity: 1,
			delay: '120'
		});
		$('h1>span:nth-child(6)').transition({
			opacity: 1,
			delay: '160'
		});
		$('h1>span:nth-child(7)').transition({
			opacity: 1,
			delay: '200'
		});
		$('h1>span:nth-child(8)').transition({
			opacity: 1,
			delay: '240'
		});
		$('h1>span:nth-child(10)').transition({
			opacity: 1,
			delay: '280'
		});
		$('h1>span:nth-child(11)').transition({
			opacity: 1,
			delay: '320'
		});
		$('h1>span:nth-child(12)').transition({
			opacity: 1,
			delay: '360'
		});
		$('h1>span:nth-child(13)').transition({
			opacity: 1,
			delay: '400'
		});
		$('#secondSmall').transition({
			opacity:1,
			y: '0px',
			delay: '440'
		});
	}