window.onload=function(){
	var music=document.getElementById('music');
	var audio=document.getElementsByTagName('audio')[0];
	var page1=document.getElementById('page1');
	var page2=document.getElementById('page2');
	var page3=document.getElementById('page3');

//触碰音乐图标，控制图片动画效果及音乐的暂停与播放
	music.addEventListener("touchstart",function(event){
		if (audio.paused) {
			audio.play();
			this.setAttribute("class","play");
		}else{
			audio.pause();
			this.setAttribute("class","");
		};
	},false);

//当音乐播放完毕后，图片动画停止
	audio.addEventListener("ended",function(event){
		music.setAttribute("class","");
	},false);

// 点击第一页时第一页淡出第二页出现
	page1.addEventListener("touchstart",function(event){
		page1.style.display="none";
		page2.style.display="block";
		page3.style.display="block";
		page3.style.top="100%";
		setTimeout(function(){
			page2.setAttribute("class","page fade-out");
			page3.setAttribute("class","page fade-in")
		},5300);
	},false);
};