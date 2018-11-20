// JavaScript Document
/*图片放大
function imgShow(outerdiv, innerdiv, bigimg, _this){ 
	var src = _this.attr("src");//获取当前点击的pimg元素中的src属性  
	$(bigimg).attr("src", src);//设置#bigimg元素的src属性  
*/ 
	/*获取当前点击图片的真实大小，并显示弹出层及大图  
	$("<img/>").attr("src", src).load(function(){  
		var windowW = $(window).width();//获取当前窗口宽度  
		var windowH = $(window).height();//获取当前窗口高度  
		var realWidth = this.width;//获取图片真实宽度  
		var realHeight = this.height;//获取图片真实高度  
		var imgWidth, imgHeight;  
		var scale = 0.8;//缩放尺寸，当图片真实宽度和高度大于窗口宽度和高度时进行缩放  

		if(realHeight > windowH * scale) {//判断图片高度  
			imgHeight = windowH * scale;//如大于窗口高度，图片高度进行缩放  
			imgWidth = imgHeight / realHeight * realWidth;//等比例缩放宽度  
			if(imgWidth > windowW * scale) {//如宽度扔大于窗口宽度  
				imgWidth = windowW * scale;//再对宽度进行缩放  
			}  
		} else if(realWidth > windowW * scale) {//如图片高度合适，判断图片宽度  
			imgWidth = windowW * scale;//如大于窗口宽度，图片宽度进行缩放  
			imgHeight = imgWidth / realWidth * realHeight;//等比例缩放高度  
		} else {//如果图片真实高度和宽度都符合要求，高宽不变  
			imgWidth = realWidth;  
			imgHeight = realHeight;  
		} 

		$(bigimg).css("width",imgWidth);//以最终的宽度对图片缩放  
		var w = (windowW-imgWidth)/2;//计算图片与窗口左边距  
		var h = (windowH-imgHeight)/2;//计算图片与窗口上边距  
		$(innerdiv).css({"top":h, "left":w});//设置#innerdiv的top和left属性  
		$(outerdiv).fadeIn("fast");//淡入显示#outerdiv及.pimg  
	});  

	$(outerdiv).click(function(){//再次点击淡出消失弹出层  
		$(this).fadeOut("fast");  
	});  
}

$(function(){  
	$(".bye").on("click",function () {  
		var _this = $(this);//将当前的pimg元素作为_this传入函数  
		imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);  
	});  
});	
	*/	
/*
const articles = document.querySelectorAll('.article')
for (let article of articles) {
	article.addEventListener('click', (e) => {
		e.target.classList.toggle('truncation')
	})
}   */
/*时间更改*/
var today = new Date();
var times = today.toDateString();
var el1 = document.getElementById('one');
el1.innerHTML = '<p>' + times + '&nbsp | reviewer 朱彦斌</p>';
var el2 = document.getElementById('two');
el2.innerHTML = '<p>' + times + '&nbsp | reviewer 薛星雨</p>';
var el3 = document.getElementById('three');
el3.innerHTML = '<p>' + times + '&nbsp | reviewer 何仰峰</p>';

/*右侧弹出提示*/
$(function(){
	var $window = $(window);
	var $slideAd = $('#slideAd');
	var endZone = $('#last').offset().top - $window.height() - 300;
	
	$window.on('scroll',function() {
		if( (endZone) < $window.scrollTop() ) {
			$slideAd.animate({'right':'0px'},250);
		} else {
			$slideAd.stop(true).animate({'right':'-360px'},250);
		}
	});
});	

/*点击打开视频*/
$(function(){
	var $videos = $('#videos');
	var $openvideo = $('#openvideo');
	$videos.hide();
	$openvideo.on('click',function(){
		$videos.show();
		$openvideo.hide();
	});
});

/*按钮展开收回*/
$(function(){
	$('.buttontwo').on('click',function(e){
		if (e.target.innerHTML === '展开') {
			e.target.innerHTML = '关闭';
			$(e.target).parent().siblings('.text').find('.article').removeClass('truncation');
		} else {
			e.target.innerHTML = '展开';
			$(e.target).parent().siblings('.text').find('.article').addClass('truncation');
		}
	});
});

/*锚点链接的平滑滑动*/
$(document).ready(function() {  
      $('a[href*=#],area[href*=#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var $target = $(this.hash);
          $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
          if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body').animate({
              scrollTop: targetOffset
            },
            1000);
            return false;
          }
        }
    });
});

/*var links = document.querySelector("a[href='#review']"),
target = document.getElementById("review");
links.addEventListener("click", function(e) {
    if (window.scrollTo) {
        e.preventDefault();
        window.scrollTo({"behavior": "smooth", "top": target.offsetTop});
    }
});

$(function(){
	$('.hello-one').click(function(){
		$.scrollTo('#home',500);
	});
	$('.hello-two').click(function(){
		$.scrollTo('#review',800);
	});
	$('.hello-three').click(function(){
		$.scrollTo('#subject',1000);
	});
});

$(function(){
	var $buttonone = $('.buttonone');
	var $buttontwo = $('.buttontwo');
	$buttonone.hide();
	$('li').each(function(){
		$buttontwo.on('click',function(){
		$buttonone.show();
		$buttontwo.hide();
		$('p.article').removeClass('truncation');
		});
		
		$buttonone.on('click',function(){
		$buttonone.hide();
		$buttontwo.show();
		$('p.article').addClass('truncation');
		});  
		
	});
	
});*/		 
	
		
/*		//var articles = document.querySelectorAll('.article');
		var flag = true;
		var el = document.querySelectorAll('.jr');
		el.onclick = function () {
			if(flag){
				flag = false;
				var truncations = document.querySelectorAll('.truncation');
				truncations[1].className = 'article';
			}else{
				articles[1].className = 'truncation';
			}
		}	*/
				
		
		/*便签
		var msg = '<div class=\"header1\"><a id=\"close\" href="#">close</a></div>';
		msg += '<div><h2>WELCOME TO VISIT THE MUSEUM</h2></div>';
		var elNote = document.createElement('div');
		elNote.setAttribute('id','note');
		elNote.innerHTML = msg;
		document.body.appendChild(elNote);
		function dismissNote () {
			document.body.removeChild(elNote);
		}
		var elClose = document.getElementById('close');
		elClose.addEventListener('click',dismissNote,false);*/
