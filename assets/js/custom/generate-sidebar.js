// 生成左侧边栏
var data = 'action=select&key=class';
getDataFromServer(data, generateElement);

// 主 logo
$(".search-logo").click(function(){
    $(".web-search").hide();
    $(".item-cell").fadeIn();
});

// ===================服务器通讯函数======================
function getDataFromServer(data, successFunc){
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('POST','./assets/php/query_db.php', true);
    httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    httpRequest.send(data);

    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState == 4 && httpRequest.status == 200){//验证请求是否发送成功
            var result = JSON.parse(httpRequest.responseText);//获取到服务端返回的数据，并解些为json
            console.log(result);
            successFunc(result); // 异步请求，结果处理必须写到里面
        }
        else{
            //console.log(httpRequest.readyState);
            //console.log(httpRequest.status);
        }
    }
}

// =======================生成左边栏=========================
function generateElement(classInfo){
    var curr_class = "";
    var group_id = "";

    // 一级菜单
    for(i in classInfo){
        var item = classInfo[i];
        
        if(item.class !== curr_class){
            curr_class = item.class;
            group_id = "menu-group-"+curr_class;
            var group = '\
            <li class="has-sub" id='+group_id+'>\
                <a href="#">\
                    <strong>'+curr_class+'</strong>\
                    <span class="title">'+curr_class+'</span>\
                </a>\
            </li>';
            $(".main-menu").append(group);

            $("#"+group_id).append('<ul></ul>');
            var all = '\
            <li class="menu-item" data-class='+curr_class+'>\
                <a href="#">\
                    <span class="title">全部</span>\
                </a>\
            </li>'
            $("#"+group_id+">ul").append(all);
        }

        // 二级菜单
        if(item.sub_class !== null){
            var item = '\
            <li class="menu-item" data-class='+curr_class+'_'+item.sub_class+'>\
                <a href="#">\
                    <span class="title">'+item.sub_class+'</span>\
                </a>\
            </li>';
            $("#"+group_id+">ul").append(item);
        }
    }

    $(".menu-item").click(main_filter); // 注册点击函数
}

// 为点击事件动态加载主元素
function generateItemCard(item){
    var item = '\
    <div class="col-xlg-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 item-cell">\
        <div class="xe-widget xe-counter-block">\
            <div class="xe-upper">\
                <div class="xe-label">\
                    <a href="'+item.address+'" class="item-title">'+item.name+'</a>\
                </div>\
            </div>\
            <div class="xe-lower">\
                <div class="border"></div>\
                <span>'+item.description+'</span>\
            </div>\
        </div>\
    </div>';
    $(".main-content > .row").append(item);
}

// =======================点击事件=========================
function main_filter(){
    var cls = $(this).data("class");
    var data = 'action=select&key='+cls;
    getDataFromServer(data, showItem);

    // 修改侧边栏状态
    $(".main-menu .active").removeClass("active"); // 避免移除搜索的 active
    $(this).parent().parent().addClass("active");
    $(this).addClass("active");

    // 隐藏搜索
    $(".web-search").hide();

    // 隐藏 logo 边框
    $(".logo-collapsed").css("border","none");

    // 显示 search bar
    $("#chat .search-field").fadeIn();
}

function showItem(webInfo){
    $(".main-content > .row").html("");
    for(i in webInfo){
        generateItemCard(webInfo[i]);
    }

    // 显示 item
    $(".item-cell").hide();
    $(".item-cell").fadeIn();
}

// =======================添加事件========================
$('#add-form').submit(function(){
    var alert_field = $("#add-form .side-form-alert");
    if (add_form.class.value.trim()==""){
        alert_field.html("一级分类不能为空！");
        return false;
    }
    if (add_form.name.value.trim()==""){
        alert_field.html("网站名不能为空！");
        return false;
    }
    if (add_form.address.value.trim()==""){
        alert_field.html("网站链接不能为空！");
        return false;
    }
    if (add_form.description.value.trim()==""){
        alert_field.html("网站描述不能为空！");
        return false;
    }

    var data = 'action=insert&class='+add_form.class.value.trim()+
               '&sub-class='+add_form.sub_class.value.trim()+
               '&name='+add_form.name.value.trim()+
               '&address='+add_form.address.value.trim()+
               '&description='+add_form.description.value.trim();

    getDataFromServer(data, function(result){
        $("#add-form .side-form-alert").html(result.add_result);
    });

    $('#add-form')[0].reset();
});

/* 输入时固定右边栏宽度 */
$(".side-form-input").focus(function(){
    $(".page-container #chat").css("width","350px");
});

$(".side-form-input").blur(function(){
    $(".page-container #chat").css("width","3px");
});

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
