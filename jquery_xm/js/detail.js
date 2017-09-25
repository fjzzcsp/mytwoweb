/*使用jqzoom*/
$(function(){
	$(".jqzoom").jqueryzoom({
					xzoom: 310, //放大图的宽度(默认是 200)
					yzoom: 310, //放大图的高度(默认是 200)
					offset: 10, //离原图的距离(默认是 10)
					position: "right", //放大图的定位(默认是 "right")
					preload:1   
	});
});

/*Tab 选项卡 标签*/
$(function(){
	    var $div_li =$("div.tab_menu ul li");
	    $div_li.click(function(){
			$(this).addClass("selected")            //当前<li>元素高亮
				   .siblings().removeClass("selected");  //去掉其他同辈<li>元素的高亮
            var index =  $div_li.index(this);  // 获取当前点击的<li>元素 在 全部li元素中的索引。
			$("div.tab_box > div")   	//选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
					.eq(index).show()   //显示 <li>元素对应的<div>元素
					.siblings().hide(); //隐藏其他几个同辈的<div>元素
		}).hover(function(){
			$(this).addClass("hover");
		},function(){
			$(this).removeClass("hover");
		})
});

$(function(){
	$(".color_change img").click(function(){
		$(".color_change strong").text(this.alt);
		$(this).addClass("hover").parent().siblings().find("img").removeClass("hover");
		var dr = $(this).attr("data-role");

		$("."+dr).removeClass("hide").siblings().not("."+dr).addClass("hide");
		var imgs = $("."+dr).eq(0).attr("data-role").split(",");
		$("#bigImg").attr("src","images/pro_img/"+imgs[0]).attr("jqimg","images/pro_img/"+imgs[1]);
		$("#thickImg").attr("href","images/pro_img/"+imgs[1]);
	});

});

$(function(){
   $(".imglist div").click(function(){
      var imgs = $(this).attr("data-role").split(",");
		$("#bigImg").attr("src","images/pro_img/"+imgs[0]).attr("jqimg","images/pro_img/"+imgs[1]);
		$("#thickImg").attr("href","images/pro_img/"+imgs[1]);
   });
});
/*设置尺寸*/
$(function(){
  $(".pro_size li").click(function(){
  	 $(".pro_size strong").text($(this).text());
     $(this).addClass("cur").siblings().removeClass("cur");
  });

});

$(function(){
$("#num_sort").change(function(){
   
   $(this).parent().siblings().html("数&#12288;&#12288;量："+$(this).val());
   $(".pro_price strong").text($(".tbDetailPrice strong").text()*$(this).val());
});

});

/*商品评分效果*/
$(function(){
	//通过修改样式来显示不同的星级
    $("ul.rating li a").click(function(){
	     var title = $(this).attr("title");
	     alert("您给此商品的评分是："+title);
		 var cl = $(this).parent().attr("class");
		 $(this).parent().parent().removeClass().addClass("rating "+cl+"star");
		 $(this).blur();//去掉超链接的虚线框
		 return false;
	});
});

/*最终购买输出*/
$(function(){
    var $product = $(".jnProDetail");
	$("#cart a").click(function (e) {        
		var pro_name = $product.find("h4:first").text();
		var pro_size = $product.find(".pro_size strong").text();
		var pro_color =  $(".color_change strong").text();
		var pro_num = $product.find("#num_sort").val();
	    var pro_price = $product.find(".pro_price strong").text();
		var dialog = "感谢您的购买。<div style='font-size:12px;font-weight:400;'>您购买的产品是："+pro_name+"；"+
				"尺寸是："+pro_size+"；"+
				"颜色是："+pro_color+"；"+
				"数量是："+pro_num+"；"+
				"总价是："+pro_price +"元。</div>";
		$("#jnDialogContent").html(dialog);
		$('#basic-dialog-ok').modal();
		return false;//避免页面跳转
	});
})