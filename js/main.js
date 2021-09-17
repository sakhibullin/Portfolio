$(function(){

    
	function __All(n){
		return document.querySelectorAll(n)
	}

	function __(n){
		return document.getElementsByClassName(n)
	}



    var winWidth = $(window).width()
    
   // Шапка
    var linePos = $('.home').offset()
    var lineLength = $('.home').width()
    inePos = $('.home').offset()
    lineLength = $('.home').width()
    $('.underLine').offset({top:linePos.top + 25, left:linePos.left -35})
    $('.underLine').css('width',63+'px')
    str = window.location.href
    $(window).bind('hashchange', function() {
    	str = window.location.href
        if(str.substring(str.length-2)=='me'){
        	linePos = $('.home').offset()
        	lineLength = $('.home').width()
        	$('.underLine').offset({top:linePos.top + 25, left:linePos.left})
    		$('.underLine').css('width',lineLength+'px')	
        }
        if(str.substring(str.length-2)=='ut'){
        	linePos = $('.about').offset()
        	lineLength = $('.about').width()
        	$('.underLine').offset({top:linePos.top + 25, left:linePos.left})
    	$('.underLine').css('width',lineLength+'px')
        }
        if(str.substring(str.length-2)=='ls'){
        	linePos = $('.skills').offset()
        	lineLength = $('.skills').width()
        	$('.underLine').offset({top:linePos.top + 25, left:linePos.left})
    	$('.underLine').css('width',lineLength+'px')
        }
        if(str.substring(str.length-2)=='es'){
        	linePos = $('.services').offset()
        	lineLength = $('.services').width()
        	$('.underLine').offset({top:linePos.top + 25, left:linePos.left})
    	$('.underLine').css('width',lineLength+'px')
        }
        if(str.substring(str.length-2)=='ks'){
        	linePos = $('.works').offset()
        	lineLength = $('.works').width()
        	$('.underLine').offset({top:linePos.top + 25, left:linePos.left})
    	$('.underLine').css('width',lineLength+'px')
        }
        if(window.location.href.substring(str.length-2)=='ts'){
        	linePos = $('.contacts').offset()
        	lineLength = $('.contacts').width()
        	$('.underLine').offset({top:linePos.top + 25, left:linePos.left})
    	$('.underLine').css('width',lineLength+'px')
        }
		// if(window.location.href.substring(str.length-1)=='#'){
		// 	linePos = $('.contacts').offset()
		// 	lineLength = $('.contacts').width()
		// 	$('.underLine').offset({top:linePos.top + 25, left:linePos.left})
		// 	$('.underLine').css('width',lineLength+'px')
		// }

        $('.underLine').offset({top:linePos.top + 25, left:linePos.left})
    	$('.underLine').css('width',lineLength+'px')
    });

    // цвет
    $('.section').css('background','white');
    // Слайдер
    $('.myWorks').owlCarousel({
    loop:false,
    margin:128,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
        }
    })
    // футер
    $('.owl-item').css('width','fit-content')
	if(winWidth>1140) {
		$('.cont').css({
			'width': winWidth,
			'margin-left': -(winWidth - 1140) / 2 + 'px'
		})
	}
	else if(winWidth>700){
		$('.cont').css({
			'width': winWidth,
			'margin-left': -(winWidth - 700) / 2 + 'px'
		})
	}
	else{
		$('.cont').css({
			'width': winWidth,
		})
	}

    // вопросы
    let p1 = false
    let p2 = false
    let p3 = false

     $('.pl1').click(function(){
    	if (p1 === true){
    		p1 = false
            $('.in1').css('opacity','0');
            setTimeout(function() { $('.qe2').removeClass('none');
            $('.qe3').removeClass('none');
            $('.pl2').removeClass('none');
            $('.pl3').removeClass('none');
            $('.in1').css('display','none');
            $('.blackLine').css('display','block'); 
            $('.plus img').attr('src','images/plus.png') }, 300);
    	}
    	else{
	    	p1 = true;
	       	if (p2 === true){
	    		p2 = false;
	    		$('.in2').css('display','none');
	    	}
	    	if (p3 === true){
	    		p3 = false;
	    		$('.in3').css('display','none');
	    	}
	    	$('.qe2').addClass('none');
	    	$('.qe3').addClass('none');
	    	$('.pl2').addClass('none');
	    	$('.pl3').addClass('none');
	    	$('.in1').css('display','block');
	    	$('.blackLine').css('display','none');
            $('.plus img').attr('src','images/minus.png')
            setTimeout(function() { $('.in1').css('opacity','1'); }, 300);
    }
    });

     $('.pl2').click(function(){
    	if (p2 === true){
    		p2 = false
            $('.in2').css('opacity','0');
            setTimeout(function() { $('.qe1').removeClass('none');
            $('.qe3').removeClass('none');
            $('.pl1').removeClass('none');
            $('.pl3').removeClass('none');
            $('.in2').css('display','none');
            $('.blackLine').css('display','block'); 
            $('.plus img').attr('src','images/plus.png') }, 300);
    	}
    	else{
	    	p2 = true;
	       	if (p1 === true){
	    		p1 = false;
	    		$('.in1').css('display','none');
	    	}
	    	if (p3 === true){
	    		p3 = false;
	    		$('.in3').css('display','none');
	    	}
	    	$('.qe1').addClass('none');
	    	$('.qe3').addClass('none');
	    	$('.pl1').addClass('none');
	    	$('.pl3').addClass('none');
	    	$('.in2').css('display','block');
            $('.blackLine').css('display','none');
            $('.plus img').attr('src','images/minus.png')
            setTimeout(function() { $('.in2').css('opacity','1'); }, 300);
            
	    	
    }
    });


     $('.pl3').click(function(){
    	if (p3 === true){
    		p3 = false
            $('.in3').css('opacity','0');
            setTimeout(function() {  $('.qe2').removeClass('none');
            $('.qe1').removeClass('none');
            $('.pl2').removeClass('none');
            $('.pl1').removeClass('none');
            $('.in3').css('display','none');
            $('.blackLine').css('display','block'); 
            $('.plus img').attr('src','images/plus.png')}, 300);
    	}
    	else{
	    	p3 = true;
	       	if (p2 === true){
	    		p2 = false;
	    		$('.in2').css('display','none');
	    	}
	    	if (p1 === true){
	    		p1 = false;
	    		$('.in1').css('display','none');
	    	}
	    	$('.qe2').addClass('none');
	    	$('.qe1').addClass('none');
	    	$('.pl2').addClass('none');
	    	$('.pl1').addClass('none');
	    	$('.in3').css('display','block');
	    	$('.blackLine').css('display','none');
            $('.plus img').attr('src','images/minus.png')
            setTimeout(function() { $('.in3').css('opacity','1'); }, 300);
    }
    });

	$('.mail').click(function () {
		navigator.clipboard.writeText('sakhibullin2004@mail.ru')
		$('.coped').css({
			'display':'block',
			'opacity':'1'
		})
		setTimeout(function() { $('.coped').css('opacity','0') }, 2000);
		$('.coped').css('display','block')
	})

	$('.gmail').click(function () {
		navigator.clipboard.writeText('sakhibullin04@gmail.com')
		$('.coped').css({
			'display':'block',
			'opacity':'1'
		})
		setTimeout(function() { $('.coped').css('opacity','0') }, 2000);
		$('.coped').css('display','block')
	})

	$('.writeMe').click(function () {
		$('.black').css('display', 'block')
		setTimeout(function () {
			$('.black').css('opacity', '1')
		}, 500);
		$('.letter').css('display', 'block')
		setTimeout(function () {
			$('.letter').css('opacity', '1')
		}, 500);
		$('.block').css('display', 'block')
		setTimeout(function() { $('.block').css('opacity','1') }, 500);
	})

	$('.letter').click(function () {
		setTimeout(function() { $('.letter').css('opacity','0') }, 500);
		setTimeout(function() { $('.black').css('opacity','0') }, 500);
		setTimeout(function() { $('.block').css('opacity','0') }, 500);
		$('.letter').css('display','none')
		$('.black').css('display','none')
		$('.block').css('display', 'none')

	})
})