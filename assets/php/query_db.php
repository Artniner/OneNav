<?php
file_put_contents('log.txt','=============log start============'.PHP_EOL);
file_put_contents('log.txt','//////////ACTION: '.$_REQUEST['action'].PHP_EOL, FILE_APPEND);

if('select'==$_REQUEST['action']){
    queryData();
}else if('insert'==$_REQUEST['action']){
    addData();
}
else{
    file_put_contents('log.txt','ERROR action: '.$_REQUEST['action'].PHP_EOL, FILE_APPEND);
}

function queryDB($sql, $action){
    $con = mysqli_connect('localhost','root','toor','one_nav');
    if (mysqli_connect_errno($con)) 
    {
        file_put_contents('log.txt','ERROR: mysql connection error!'.PHP_EOL, FILE_APPEND);
    }
    file_put_contents('log.txt','SQL: '.$sql.PHP_EOL, FILE_APPEND);

    $result = mysqli_query($con, $sql);

    if ($action=='select'){
        $result_t = mysqli_fetch_all($result, MYSQLI_ASSOC); #获取列名和数据，方便转换为json给前端解析 
        mysqli_free_result($result);
    }else if ($action=='insert'){
        $result_t = $result;
    }
    
    mysqli_close($con);

    return $result_t;
}

# 查询数据
function queryData(){
    file_put_contents('log.txt','SELECT key:'.$_REQUEST['key'].PHP_EOL, FILE_APPEND);

    if('class'==$_REQUEST['key']){
        $sql = 'SELECT distinct class,sub_class FROM webs ORDER BY class,sub_class';
    }else{
        $sql = '';
        $class = explode('_', $_REQUEST['key']);

        if(2==count($class)){
            $sql = 'SELECT * FROM webs WHERE class="'.$class[0].'" and sub_class="'.$class[1].'" ORDER BY class,sub_class';
        }
        else{
            $sql = 'SELECT * FROM webs WHERE class="'.$class[0].'" ORDER BY class,sub_class';
        }
    }

    $result = queryDB($sql, 'select');
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
    file_put_contents('log.txt','result '.$result[0]['class'].PHP_EOL, FILE_APPEND);

    #if($result = mysqli_query($con, $sql)){
    #    while($row = mysqli_fetch_row($result)){
    #        echo $row[0].' '.$row[1].'<br>';
    #    }
}

# 插入数据
function addData(){
    foreach($_REQUEST as $key=>$value){
        file_put_contents('log.txt','ADD '.$key.':'.$value.PHP_EOL, FILE_APPEND);
    }
    
    $sql='SELECT * FROM webs WHERE address="'.trim($_REQUEST['address']).'"';
    $result = queryDB($sql, 'select');
    if (0!=count($result)){
        $result = array('add_result'=>'网站已存在！');
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
        return;
    }

    if ($_REQUEST['sub-class']==''){
        $sql = 'INSERT INTO webs (class, name, address, description) VALUES '.
               '("'.$_REQUEST['class'].'","'.$_REQUEST['name'].'","'.$_REQUEST['address'].'","'.$_REQUEST['description'].'")';
    }else{
        $sql = 'INSERT INTO webs (class, sub_class, name, address, description) VALUES '.
               '("'.$_REQUEST['class'].'","'.$_REQUEST['sub-class'].'","'.$_REQUEST['name'].'","'.$_REQUEST['address'].'","'.$_REQUEST['description'].'")';
    }
    
    $result = queryDB($sql, 'insert');
    if ($result==1){
        $result = array('add_result'=>'添加成功！');
    }else{
        $result = array('add_result'=>'添加失败！');
    }
    echo json_encode($result, JSON_UNESCAPED_UNICODE); 
}

?>
