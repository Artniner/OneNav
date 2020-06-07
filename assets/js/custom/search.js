
// 搜索引擎选择
$(".search-select a").click(function(){
    // 改变背景色
    $(".search-select a.active").removeClass("active");
    $(this).addClass("active");
    
    switch($(this).attr("id")){
        case "baidu":
            // 搜索框颜色
            $(".search-content").css({
            	"border-top":"1.2px solid var(--baidu-color)",
                "border-bottom":"1.2px solid var(--baidu-color)"
            	});
            // 联想框
            $(".search-sug").css("border-bottom","1.2px solid var(--baidu-color)");
            // API 参数
            $(".search-form").attr("action","http://www.baidu.com/s");
            $(".search-content").attr("name","wd");
            break;
        case "bing":
            $(".search-content").css({
            	"border-top":"1.2px solid var(--bing-color)",
                "border-bottom":"1.2px solid var(--bing-color)"
            	});
            $(".search-sug").css("border-bottom","1.2px solid var(--bing-color)");
            $(".search-form").attr("action","https://www.bing.com/search");
            $(".search-content").attr("name","q");
            break;
        case "google":
            $(".search-content").css({
            	"border-top":"1.2px solid var(--google-color)",
                "border-bottom":"1.2px solid var(--google-color)"
            	});
            $(".search-sug").css("border-bottom","1.2px solid var(--google-color)");
            $(".search-form").attr("action","https://www.google.com/search");
            $(".search-content").attr("name","q");
            break;
    }
});


// 百度搜索联想功能
$(".web-search .search-content").keyup(function(){
    // JSONP 技术，添加 script 发送请求
	//百度联想 API，第一个格式更好解析，所以我用第二个 :P
//     var code = '<script class="search-sug" src="http://suggestion.baidu.com/su?cb=queryList&wd='+$(this).val()+'" type="text/javascript"></script>';
    var srpt = '<script class="search-script" src="https://www.baidu.com/sugrec?prod=pc&wd='+$(this).val()+'&cb=queryList" type="text/javascript"></script>';
    $(".search-script").remove();
    $("body").append(srpt);
});

// 联想请求返回的处理函数，需要与上面的 cb 参数一致
function queryList(data){
    // 返回的数据结构，不同 API 链接返回的不同，直接用浏览器访问请求连接就可以看到返回的数据：
    // https://www.baidu.com/sugrec?prod=pc&wd=t&cb=queryList
	if(!data.g){
 		$(".search-sug").html("");
 		return false;
 	}
    
    // 解析结果，生成 html
	var result = "";
	for(var i=0;i<data.g.length;++i){
		result = result + '<li>'+data.g[i].q+'</li>'; 
	}
	$(".search-sug").html(result);	
}

// 点击联想列表直接搜索
// 对于动态生成的元素，直接 $(".search-sug li").click(); 无效，需要借助父元素。
$(".search-sug").on("click","li",function(){
	$(".search-content").val($(this).text());
	$(".search-form").submit();
});