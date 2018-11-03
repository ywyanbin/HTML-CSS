// JavaScript Document   
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
	
});



