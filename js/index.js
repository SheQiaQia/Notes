var heads = $("<div class='head_text'><ul><li id='web'>前端常见问题<ul class='head_text_ul' id='web_ul'></ul></li><li id='phone'>移动端适配问题<ul class='head_text_ul' id='phone_ul'></ul></li><li id='play'>学习计划<ul class='head_text_ul' id='plan_ul'></ul></li><li id='resources'>个人学习资源</li></ul></div>");
$("#heads").append(heads);
for (var i = 0; i < data.length; i++) {
	var titles = $("<li id='web" + i + "' class='head_text_li web_li'>" + data[i].bigtitle + "</li>")
	$("#web_ul").append(titles);
}
for (var i = 0; i < phonedata.length; i++) {
	var titles = $("<li id='phone" + i + "' class='head_text_li phone_li'>" + phonedata[i].bigtitle + "</li>")
	$("#phone_ul").append(titles);
}
for (var i = 0; i < playdata.length; i++) {
	var titles = $("<li id='play" + i + "' class='head_text_li play_li'>" + playdata[i].bigtitle + "</li>")
	$("#plan_ul").append(titles);
}

$(".web_li").click(function() {
	$("#content").empty();
	var id = $(this).attr("id");
	var pid =parseInt(id.replace(/[^0-9]/ig,""));
	for (var i = 0; i < data.length; i++) {
		if (i == pid) {
			var title = data[i].title;
			var content = data[i].content;
			$("#content").append(title);
			$("#content").append(content);
		} 
	}
})

$(".phone_li").click(function () {
	$("#content").empty();
	var id = $(this).attr("id");
	var pid =parseInt(id.replace(/[^0-9]/ig,""));
	for (var i = 0; i < phonedata.length; i++) {
		if (i == pid) {
			var title = phonedata[i].title;
			var content = phonedata[i].content;
			$("#content").append(title);
			$("#content").append(content);
		} 
	}
})

$(".play_li").click(function () {
	$("#content").empty();
	var id = $(this).attr("id");
	var pid =parseInt(id.replace(/[^0-9]/ig,""));
	for (var i = 0; i < playdata.length; i++) {
		if (i == pid) {
			var title = playdata[i].title;
			var content = playdata[i].content;
			$("#content").append(title);
			$("#content").append(content);
		} 
	}
})
$("#resources").click(function () {
	$("#content").empty();
	var title = personal[0].title;
	var content = personal[0].content;
	$("#content").append(title);
	$("#content").append(content);
});