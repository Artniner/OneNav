<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Xenon Boostrap Admin Panel" />
    <meta name="author" content="" />
    
    <title>OneNav</title>

    <link rel="Shortcut Icon" href="assets/images/favicon.ico"  type="image/x-icon" /> 

    <link rel="stylesheet" href="assets/css/fonts/linecons/css/linecons.css">
    <link rel="stylesheet" href="assets/css/fonts/fontawesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="assets/css/bootstrap.css">
    <link rel="stylesheet" href="assets/css/xenon-core.css">
    <link rel="stylesheet" href="assets/css/xenon-forms.css">
    <link rel="stylesheet" href="assets/css/xenon-components.css">
    <link rel="stylesheet" href="assets/css/xenon-skins.css">
    <link rel="stylesheet" href="assets/css/custom.css">

    <script src="assets/js/jquery-1.11.1.min.js"></script>

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    
    
</head>
<body class="page-body">
    
    <div class="page-container">

        <!-- add class "sidebar-collapsed" to close sidebar by default, "chat-visible" to make chat appear always -->   
        <!-- Add "fixed" class to make the sidebar fixed always to the browser viewport. -->
        <!-- Adding class "toggle-others" will keep only one menu item open at a time. -->
        <!-- Adding class "collapsed" collapse sidebar root elements and show only icons. -->
        <div class="sidebar-menu toggle-others fixed collapsed">
            <!-- 侧边栏箭头 -->
            <div class="sidebar-menu-toggle">                       
                <a href="#" data-toggle="mobile-menu">
                    <i class="fa-chevron-right"></i>
                </a>
            </div>      
                    
            <div class="sidebar-menu-inner">                
                <header class="logo-env">                                   
                    <!-- logo -->
                    <div class="logo">
                        <a href="#" class="logo-collapsed">
                            <img src="assets/images/logo.png" width="40" alt="" />
                        </a>
                    </div>                                              
                </header>
                        
                <ul id="main-menu" class="main-menu">
                    <!-- add class "multiple-expanded" to allow multiple submenus to open -->
                    <!-- class "auto-inherit-active-class" will automatically add "active" class for parent elements who are marked already with class "active" -->
                </ul>
                        
            </div>
            
        </div>
        
        <div class="main-content">

            <div class="web-search">
                <div class="search-logo"></div>
                <div class="search-field">
                    <div class="search-select">
                        <a id="baidu" class="active">百度搜索</a><a id="bing">必应搜索</a><a id="google">谷歌搜索</a> <!--换行写会导致布局 bug？-->
                    </div>
                    <form class="search-form" action="http://www.baidu.com/s" target="_blank">  
                        <input class="search-content" name="wd" placeholder="请输入搜索内容" type="text" autocomplete="off"/> 
                        <ul class="search-sug" hidden></ul> <!--联想结果-->
                    </form>
                </div>
            </div>

            <div class="row">
            
            </div>

        </div>
        
            
        <!-- start: Chat Section -->
        <div id="chat" class="fixed">
            <!-- 侧边栏箭头 -->
            <div class="sidebar-menu-toggle">                       
                <a href="#" data-toggle="mobile-menu">
                    <i class="fa-chevron-left"></i>
                </a>
            </div>
            
            <div class="chat-inner">
                <!-- 
                右侧搜索框
                <div class="search-field">
                    <form class="search-form" action="http://www.baidu.com/s" target="_blank">
                        <input class="search-content" name="wd" placeholder="请输入搜索内容" type="text" autocomplete="off"> 
                    </form>
                </div>
                -->

                <div class="side-continer">
                    <form id="add-form" class="side-form" name="add_form">
                        <p class="side-form-title">添加新网页<p/>
                        <input name="action" value="insert" type="hidden">
                        <input class="side-form-input" name="class" placeholder="请输入一级分类" type="text">
                        <input class="side-form-input" name="sub_class" placeholder="请输入二级分类（可选）" type="text">
                        <input class="side-form-input" name="name" placeholder="请输入网站名" type="text">
                        <input class="side-form-input" name="address" placeholder="请输入网站链接" type="text">
                        <input class="side-form-input" name="description" placeholder="请输入网站描述" type="text">
                        <input class="side-form-submit" value="添加" type="submit"/>
                        <p class="side-form-alert"><p/>
                    </form>
                </div>
            </div>
        </div>
        <!-- end: Chat Section -->      
    </div>
    
    <!-- Imported styles on this page -->
    <link rel="stylesheet" href="assets/css/fonts/meteocons/css/meteocons.css">

    <!-- Bottom Scripts -->
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/TweenMax.min.js"></script>
    <script src="assets/js/resizeable.js"></script>
    <script src="assets/js/joinable.js"></script>
    <script src="assets/js/xenon-api.js"></script>
    <script src="assets/js/xenon-toggles.js"></script>

    <!-- Imported scripts on this page -->
    <script src="assets/js/jvectormap/jquery-jvectormap-1.2.2.min.js"></script>
    <script src="assets/js/jvectormap/regions/jquery-jvectormap-world-mill-en.js"></script>

    <!-- JavaScripts initializations and stuff -->
    <script src="assets/js/xenon-custom.js"></script>

    <!-- custom js -->
    <!--    
    <script src="assets/js/custom/db_bk.js"></script>
    <script src="assets/js/custom/generate-item_bk.js"></script>
    <script src="assets/js/custom/filter_bk.js"></script>
    -->

    <script src="assets/js/custom/search.js"></script>
    <script src="assets/js/custom/generate-sidebar.js"></script>

</body>
</html>