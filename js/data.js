var data=[{
		index:0,
		bigtitle:"电脑分辨率种类",
		title:"<h1 class='content_title'>电脑分辨率种类：</h1>",
		content:"<p class='content_p'>笔记本各个尺寸所对应的分辨率如下：<br/>12.1寸 1280*800 。<br/>13.3寸 1024*600或1280*800<br/>14.1寸 1366*768 。<br/>15.4寸 1280*800或1440*900 15.6寸 1600*900 。<br/>也有一些笔记本是特殊的高分辨率屏幕， 包括现在的平板电脑,甚至有 1920X1080的分辨率。<br/>家用 台式机显示器分辨率：<br/>14寸显像管(CRT)显示器 800×600 。<br/>17寸液晶或CRT显示器 1024×768 。<br/>19寸液晶显示器(普屏) 1280×1024 。<br/>19寸液晶显示器(宽屏) 1440×900 。<br/>22寸液晶显示器宽屏 16：9的分辨率是 1680*1050，<br/>23寸液晶显示器宽屏 16：9的最佳分辨率是1920*1080。<br/>24寸液晶显示器宽屏 一般24寸都是16：10的 分辨率是 1920X1200。<br/><span style='color:red;'>总结：800 1024 1280  1366 1440 1600 1920;</span></p>"
},{
		index:1,
		bigtitle:"关于用if判断图片名称",
		title:"<h1 class='content_title'>关于用if判断图片名称：</h1>",
		content:"<p class='content_p'>可以利用indexOf方法来看是否有包含图片文件名称（代码如下）：</p><p class='content_p'>$('.item_switch').click(function () {<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspvar on_off = $(this).css('background-image');<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspvar onoroff = $(this).css('background-image').indexOf('open');<br/>&nbsp&nbsp&nbsp&nbspif(onoroff!=-1){<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp$(this).css('background-image','url(img/close.png)')<br/>&nbsp&nbsp&nbsp&nbsp}else{<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp$(this).css('background-image','url(img/open.png)')<br/>&nbsp&nbsp&nbsp&nbsp}<br/>})<br/></p>"
},{
		index:2,
		bigtitle:"关于透明度的问题",
		title:"<h1 class='content_title'>父div透明，而子div不跟随父div透明度解决方案</h1>",
		content:"<p class='content_p'>父亲div利用RGBA设置透明度：<br/>#background{<br/>&nbsp&nbsp&nbsp&nbspbackground-color: rgba(0,0,0,0.7);<br/>}</p>"
},{
		index:3,
		bigtitle:"关于获取页面宽高的问题",
		title:"<h1 class='content_title'>获取页面的宽度</h1>",
		content:"<p class='content_p'>var width = window.innerWidth;</p>"
},{
		index:4,
		bigtitle:"关于获取URL地址上面的参数值的方法",
		title:"<h1 class='content_title'>关于获取URL地址上面的参数值的方法</h1>",
		content:"<p class='content_p'>function getQueryString(name) {<br/>&nbsp&nbsp&nbsp&nbspvar reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');<br/>&nbsp&nbsp&nbsp&nbspvar r = window.location.search.substr(1).match(reg);<br/>&nbsp&nbsp&nbsp&nbspif (r != null) return unescape(r[2]);<br/>&nbsp&nbsp&nbsp&nbspreturn null;<br/>}<br/>alert(getQueryString('id'))；</p>"
}]
var phonedata=[{
		index:0,
		bigtitle:"手机适配篇",
		title:"<h1 class='content_title' >关于屏幕适配的方案：<span style='color:red;'>（最简单粗暴的方法）</span>：</h1>",
		content:"<p class='content_p'><xmp><meta name='viewport' content='width=device-width, initial-scale=1,maximum-scale=1,user-scalable = 0;'></xmp></p>"
},{
		index:1,
		bigtitle:"JQuery Mobile问题",
		title:"<h1 class='content_title'>JQuery Mobile问题</h1>",
		content:"<p class='content_p'>如果用不了JQueryMobile里面的方法，可能是因为JQuery引入的版本问题，现阶段用的是JQuery1.5，所以才能使用tap方法</p><p class='content_p'>如果需要用到JQM，并且要使用上拉加载下拉刷新的话，可以选用Iscoll.js这个插件有个缺点，可能是由于没有进一步编写程序照成的，设置的话，行数最好大于等15行，不然下拉刷新时，上拉加载也会被触发</p>"
}]
var playdata=[{
		index:0,
		bigtitle:"推荐网站",
		title:"<h1 class='content_title' >本人推荐一个技术前沿与技术比较的网站</h1>",
		content:"<a target = '_blank' class='content_p' href='https://www.awesomes.cn/repos/Applications/frameworks'>https://www.awesomes.cn/repos/Applications/frameworks</a>"
},{
		index:1,
		bigtitle:"个人完成目标",
		title:"<h1 class='content_title'>计划与挑战：</h1>",
		content:"<p class='content_p'>1.阅读《图解HTTP》（已完成100%）</p><p class='content_p'>2.阅读完《JavaScript高级程序设计（第3版）》（已完成50%）</p><p class='content_p'>3.学习Vue.js和React.js(了解)</p><p class='content_p'>4.学习node.js</p>"
}]
var personal=[{
		index:0,
		bigtitle:"个人学习网站",
		title:"<h1 class='content_title' >node.js:</h1>",
		content:"<a target = '_blank' class='content_p' href='http://nqdeng.github.io/7-days-nodejs/'>http://nqdeng.github.io/7-days-nodejs/</a>"
}]