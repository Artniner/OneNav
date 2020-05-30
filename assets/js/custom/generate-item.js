
generateItem(webs);
generateCommonItem(common_webs);

// 生成主 item
function generateItem(webInfo){
    var currClss1 = "";  //一级分类
    var currClss2 = "";  //二级分类
    var group_i = 0;

	for(var i=0;i<webInfo.length;++i){
		var info = webInfo[i].split("---");
        
        // 生成主 item
        var item = '\
        <div class="col-xlg-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 item-cell '+info[2]+'" style="display:none;">\
			<div class="xe-widget xe-counter-block">\
				<div class="xe-upper">\
					<div class="xe-label">\
						<a href="'+info[4]+'" class="item-title">'+info[3]+'</a>\
					</div>\
				</div>\
				<div class="xe-lower">\
					<div class="border"></div>\
					<span>'+info[5]+'</span>\
				</div>\
			</div>\
		</div>';
		$(".main-content > .row").append(item);
        
        // 生成左边栏
		if(info[0] !== currClss1){
			++group_i;
			currClss1 = info[0];
			var group = '\
			<li class="has-sub" id="menu-group'+group_i+'">\
				<a href="#">\
                    <strong>'+info[0]+'</strong>\
                    <span class="title">'+info[0]+'</span>\
				</a>\
			</li>';
			$(".main-menu").append(group);

            var grp = info[2].split("-")[0];
			if(info[1] !== "XXXX"){
				$("#menu-group"+group_i).append('<ul></ul>');
				var all = '\
				<li data-class="[class*='+grp+'-]">\
					<a href="#">\
						<span class="title">全部</span>\
					</a>\
				</li>'
				$("#menu-group"+group_i+">ul").append(all);
			}else{
				$("#menu-group"+group_i).attr("data-class","."+info[2]);
				$("#menu-group"+group_i).addClass("menu-group"); //为点击事件做区分
				continue;
			}
		}

		if(info[1] !== "XXXX"){ 
		    if(info[1] !== currClss2){
		    	currClss2 = info[1];
				var item = '\
				<li data-class=".'+info[2]+'">\
					<a href="#">\
						<span class="title">'+info[1]+'</span>\
					</a>\
				</li>'
				$("#menu-group"+group_i+">ul").append(item);
		    }
		}
	}
}


// 生成右边栏按钮
function generateCommonItem(webInfo){
	var currClss = "";
	var group_i = 0;

	for(var i=0;i<webInfo.length;++i){
		var info = webInfo[i].split("---");
		// 生成新组
        if(info[0] !== currClss){
        	++group_i;
        	currClss = info[0];
            var group = '<div class="row chat-group" id="common-group' + group_i +'"></div>';
            $(".chat-inner").append(group);
            $("#common-group"+group_i).append('<strong>'+info[0]+'</strong>');
        }

		var item = '<div class="col-xs-4"><a href="'+info[2]+'" target="_blank"><span>'+info[1]+'</span></a></div>';
		$("#common-group"+group_i).append(item);
	}
}