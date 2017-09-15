//得到carousel
var carousel = document.getElementById("carousel");
//得到li
var lis = document.getElementById("imageslist").getElementsByTagName("li");
//图片数量
var imgLength = lis.length;
//图片宽度
var width = 229;
//滚动速度
var animatetime = 300;
//缓冲描述
var tween = "Linear";
//间隔时间
var interval =4000;

var idx = 0;


//自动轮播
var timer = setInterval(changePic,interval);
//鼠标离开开始
carousel.onmouseout = function(){
    clearInterval(timer);
    timer = setInterval(changePic,interval);
}

 function changePic(){
     //函数截流
     if(lis[idx].isanimated) return;

     //原来的信号量的图片淡出
     animate(lis[idx],{"opacity" : 0},1000);
     //信号量改变
     idx++;
     if(idx > imgLength - 1){
         idx = 0;
     }
     //新信号量的图片淡入
     animate(lis[idx],{"opacity" : 1},1000);
}