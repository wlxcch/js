        //1初始化键盘
        var hashA=init()
        var keys=hashA['keys']
        var hash=hashA['hash']
           // hashInstorage=localStorage('zzz'||'') 这样得到的不是一个数组，用JSON.parse()改成数组，zzz这个桶有可能是空的
           //取出localStorage中的内容，
           var hashInLocalStorage=getFromLocalStorage('zzz')
           if(hashInLocalStorage){
               hash=hashInLocalStorage
           }  
           //2生成键盘
           generateKeyboard(keys,hash) 
           // 循环插入keys['length']keys的长度即三个   
       
           // 3鼠标监听键盘
           listenToUser(hash)    
       
       ////////////下面是定义的函数
            function c(tagName){
                return document.createElement(tagName)
            }
           function getFromLocalStorage(name){
               return JSON.parse(localStorage.getItem(name||'null'))
           }
           function createSpan(textContent) {
               var span=c('span')
               span.textContent=textContent
               span.className='text'
               return span
            }   //0-9 0-8 0-6 有先后之分，在z.appendChild(bt)之前bt.textContent中的内容才会显示，
               //如果span.textContent为空或者不写时，bt.textContent内容也可以显示
           function createButton(id){
               var button=c('button')
               button.textContent='编辑'
               button.id=id
               // xzkjcnxlkcjlk['target']就是用户点击的元素
               button.onclick=function(xzkjcnxlkcjlk){
               var bt2=xzkjcnxlkcjlk['target']
               var img2=bt2.previousSibling
               var key=bt2['id']//q w e r
               var x=prompt('给我一个网址')//提示用户给一个网址.
               hash[key]=x //把给的网址更改到hash中
               //变更后需要保存,用localStorage,否则刷新就没有了，当开始hash中么有预设时
               // localStorage.setItem('uuu',hash）////////localStorage.setItem只能存字符串
               img2.src='http://'+x+'/favicon.ico'
               img2.onerror=function(xxx){
                   xxx.target.src="./wenhao.png"
               }
               localStorage.setItem('zzz',JSON.stringify(hash))
               // console.log(hash)
           } 
           return button
       }
       function createImg(domain){
           var img=c('img')
               if(domain){
                   img.src='http://'+ domain+'/favicon.ico'||'https://'+ domain+'/favicon.ico'
               }
               else{
                   img.src="./wenhao.png"
               }
               img.onerror=function(xxx){
                       //console.log("下载失败")
                       //console.log(xxx) //可以打印出错误的事件，具体的内容，可以查看对象
                   //例如控制台显示：Event 点击查看全部
                   //Event {isTrusted: true, type: "error", target: img, currentTarget: img, eventPhase: 2, …}
                   xxx.target.src="./wenhao.png"
               }
           return img
       }
         // 哈希就是数组
         function init(){
               var keys = {
               '0':{0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
               '1':{0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
               '2':{0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
               'length':3
           }
           var hash={
               'q':'qq.com',
               'w':'weibo.com',
               'e':'ele.me',
               'r':'renren.com',
               't':'tianya.com',
               'y':'youku.com',
               'u':'uc.com',
               'i':'qiyi.com',
               'o':'opera.com',
               'p':undefined,
               'a':'acfun.com',
               's':'sohu.com',
               'd':'',
               'f':'',
               'g':'',
               'h':'',
               'j':'',
               'k':'',
               'l':'',
               'z':'zhihu.com',
               'x':'',
               'c':'',
               'v':'',
               'b':'',
               'n':'',
               'm':'',
               //如果么有设置V M 等的快捷链接，但是在页面中编辑后，可以连接到位置，问题在于，
               //页面刷新后就没有了，需要有数组将改动保存下来。
               //但是一开始就要初始化，即使是空的，否则没有定义的键，编辑时控制台就会出错误；
               //编辑了也不会立即生效,要先打开Storage，等localStorage里的内容变了，编辑才会生效
           }
        return {
          "keys":keys,
          "hash":hash
          }
        }
        function generateKeyboard(keys,hash){
            for(var index=0;index<keys['length']; index=index+1){//取值为 0 1 2
               var x=c('div')// 在id为y的元素中创建x即div,创建的元素必须为字符串
               x.className='row1'
       
               divxxx.appendChild(x) 
       
               var row=keys[index]//第一个数组 第二个数组 第三个数组
               //在控制台打印 console.log(row)
               //index2<row['length']让每行打印的个数和每行数组的长度一样
               //现在的row是数组
               for(var index2=0;index2<row['length'];index2=index2+1){
               var span=createSpan(row[index2])
               var button=createButton(row[index2])
               var img=createImg(hash[row[index2]])    
       
               var kbd=c('kbd')
               kbd.className='key1'
       
               kbd.appendChild(span)
               kbd.appendChild(img)
               kbd.appendChild(button)
       
               x.appendChild(kbd)// 在x的元素中创建z即kbd,也就是在div中创建kbd 
               }
           }
          }
          function listenToUser(hash){
           //////////////////////////////////////////////////////////////
           // // 鼠标监听键盘事件，当按下键键盘的键时，控制台会打印，有截图
           // //function(xzkjcnxlkcjlk)括号里的单词是随便写的
           // document.onkeypress= function(xzkjcnxlkcjlk){
           //     console.log('我发现输入了一个键')
           //     console.log('你按键的时候的所有信息是')
           //     //监听键盘按下的键时什么，并显示出来加上，['key']
           //     console.log(xzkjcnxlkcjlk['key'])
           // }
          /////////////////////////////////////////////////////////////////
       //上面是对下面的具体解释过程
       
           // 括号里的单词是随便写的.函数的名字
           document.onkeypress= function(xzkjcnxlkcjlk){
        // key是对键盘的监听后得到的键，然后再去hash中找对应的网址
           var key= xzkjcnxlkcjlk['key']
           website=hash[key]
           console.log(website)
           //   当前地址栏的地址等于，website
           //   location是全局变量，href是地址，最初设置没有加http协议，现在显示的时候可以加协议
           //   location.href='http://'+website
       
           //在新的网页中显示，响应键盘按下监听后，对应的网址
           window.open('http://'+website,'_blank')
            
           }
           }