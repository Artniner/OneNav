// 左侧导航栏
$(".main-menu ul > li").click(main_filter);
$(".menu-group").click(main_filter);

function main_filter(){
	// 显示 item
	if ($(this).attr("class") == "active") return false;
	$(".main-menu .active").removeClass("active"); // 避免移除搜索的 active
	$(this).addClass("active");
	$(".item-cell").hide();
	$($(this).data("class")).fadeIn();
    
    // 修改侧边栏状态
	$(this).parent().parent().addClass("active");

	// 隐藏搜索
	$(".web-search").hide();

    // 隐藏 logo 边框
	$(".logo-collapsed").css("border","none");

	// 显示 search bar
	$("#chat .search-field").fadeIn();
}

// 左侧导航栏 logo
$(".logo-collapsed").click(function(){
	// 显示搜索
    if ($(".web-search").attr("style") !== "display: none;") return false;
    $(".item-cell").hide();
    $(".web-search").fadeIn();

    // 隐藏 item
    $(".main-menu .active").removeClass("active");

    // 显示边框
    $(this).css({
    	"border-left":"3px solid var(--main-color)",
    	"border-right":"3px solid var(--main-color)"
    });

    // 隐藏 search bar
    $("#chat .search-field").hide();
});

// 主 logo
$(".search-logo").click(function(){
	$(".web-search").hide();
	$(".item-cell").fadeIn();
	$("#chat .search-field").show();
});

