function getQueryParameter(qs)
{
    var s = location.href;
    s = s.replace("?","?&").split("&");//这样可以保证第一个参数也能分出来
    var re = "";
    for(i=1;i<s.length;i++)
        if(s[i].indexOf(qs+"=")==0)
            re = s[i].replace(qs+"=","");//取代前面的参数名，只剩下参数值
    re = re.split("#")[0];
    return decodeURIComponent(re);
}

var customers =["miaochenjing","chenyuanyuan","chenzhongyi","daijiahui","duke","hanjiayan","huanglei","jinliping","jinsong","liangxiao","raohaiyan","shengtao","shenhuangyu","shiyif","tangqinyan","wangjie","wangqianfeng","weijiongnan","wuchao","wuyichen","xujie","yangyifang","yelingwei","yezhengyan","yinlu","yudan","yuqing","yuxiaobo","zhangheng","zhangting","zhangzhang","zhouchenhuan","zhoulijun","zhouzhi"];
function getCustomer(){
    var name = getQueryParameter("u");
    if(name==undefined || name.length==0){
        name = "nin";
    }
    var find = false;
    for(var i=0;i<customers.length;i++){
        if(customers[i]==name){
            find = true;
            break;
        }
    }
    if(!find){
        name = "nin";
    }

    name = "images/custom/"+name+".png";
    return name;
}