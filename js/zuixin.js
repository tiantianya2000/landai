// JavaScript Document
window.onload=function(){
    var oDiv=document.getElementById('main');
    //获取一组元素
    var oLi=oDiv.getElementsByTagName('li');
    var oTxt=oDiv.getElementsByTagName('div')[0];
    var arr=[
    '汉服特价',
    '婚纱特价',
    '摄像特价',
    '秀禾特价',
    '礼服特价',
    '西服特价',
    '捧花特价',
    '场景特价',
    '幕布特价',
    '特价抽奖',
    '全部特价',
    '全部特价'
    ];
    //获得每一个li
    for(var i=0;i<oLi.length;i++){

        oLi[i].index=i;
        oLi[i].onmouseover=function(){
            //给每一个li设置样式为空
            for(var i=0;i<oLi.length;i++)
            {
               oLi[i].className=''; 
            }
            //当前li样式为.active
            this.className='active';
            //给div添加Html
            oTxt.innerHTML='<h2>'+(this.index+1)+'月</h2><p>'+arr[this.index]+'</p>';
        };
    };
    };
