$(function(){
	//全选
    $(".checkAll").click(function(){
    	$(".list_item_box .list_item input:checkbox").each(function(){
    		this.checked=true;
    	})
    })
    //反选
    $(".checkRev").click(function(){
    	$(".list_item_box .list_item input:checkbox").each(function(){
    		this.checked=!this.checked
    	})	
    })
    //全不选
    $(".checkNo").click(function(){
    	 	$(".list_item_box .list_item input:checkbox").each(function(){
    		this.checked=false;
    	})
    })
    
    //选项卡
    
//  $("#box li")["click"](function(){
//  	var ind=$(this).index()
//  	$("#box li").removeClass("noBl active")
//  	$(this).addClass("noBl active");
//  	$("#box .tab_news").hide()
//  	$("#box .tab_news").eq(ind).show()
//  })
   $(".leftNav li").click(function(){
   	   $(this).children(".showList").slideToggle();
   	   return false;
   })
   $(document).click(function(){
   	  $(".showList").slideUp();
   	  
   })
})
