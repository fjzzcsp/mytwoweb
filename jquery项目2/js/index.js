// JavaScript Document

$(document).ready(function(){
	//判断cookie中skin_id的值是否存在。
	if($.cookie('skin_id')){
		changeSkin($.cookie('skin_id'));//用cookie中的id设置皮肤
	}
    $("#skin li").click(function(){
    	changeSkin(this.id);
    	//存储点击的id到cookie中
    	$.cookie('skin_id', this.id, {expires: 7});
    });
});
/*根据指定id切换皮肤*/
function changeSkin(id){
	$("#"+id).addClass("selected").siblings().removeClass("selected");
    $("#weizhi").attr("href","skin/"+id+".css");
}
/*网站换肤结束*/

/*首页广告效果开始*/
$(function(){
     var len  = $(".num > li").length;
	 var index = 0;
	 var adTimer;
	 $(".num li").mouseover(function(){
		index  =   $(".num li").index(this);
		showImg(index);
	 }).eq(0).mouseover();	
	 //滑入 停止动画，滑出开始动画.
	 $('.lunbotu').hover(function(){
			 clearInterval(adTimer);
		 },function(){
			 adTimer = setInterval(function(){
			    showImg(index)
				index++;
				if(index==len){index=0;}
			  } , 3000);
	 }).trigger("mouseleave");
})
// 通过控制top ，来显示不同的幻灯片
function showImg(index){
        var adHeight = $(".center_right .lunbotu").height();
		$(".slider").stop(true,false).animate({top : -adHeight*index},1000);
		$(".num li").removeClass("on")
			.eq(index).addClass("on");
}/*首页广告效果结束*/

/*超链接文字提示开始*/
$(document).ready(function(){
   $(".tooltip").hover(function(e){
        $("body").append("<div class='ttp'>"+this.title+"</div>");
        $(".ttp").css({
				"top": e.pageY+10 + "px",
				"left":e.pageX+5  + "px",
			});
        this.title="";
        $(".ttp").show(300);
   },function(e){
       this.title=$(".ttp").text();
       $("body").find(".ttp").remove();

   }).mousemove(function(e){
		$(".ttp")
			.css({
				"top": e.pageY+10 + "px",
				"left":e.pageX+5  + "px",
			})
   });

});
/*超链接文字提示结束*/


/*品牌活动图片滚动*/
$(document).ready(function(){
    $(".pphd ul li").click(function(){
        var idx = $(this).index();
        var width = $(".tabimg").width();
        var leftpos = idx*-width;
        $(".tabimg ul").animate({left:leftpos+"px"},1000);
        $(this).addClass("selected").siblings().removeClass("selected");
    });

});
/*遮罩层*/
$(document).ready(function(){
   $(".JS_live").hover(function(){
      $(this).append("<div class='zz'></div>");
   },function(){
        $(this).find(".zz").remove();
    });

});
