$(function(){
	var br = $('<div/>');
	br.append($('<div/>', {text:'Brazil'}));
	br.append($('<img/>', {src:'D:/Tutorial/static/flags/br.gif'}));
	$('body').append(br);
});

$(function(){
	var fr = $('<div/>');
	fr.append($('<div/>', {text:'France'}));
	fr.append($('<img/>', {src:'D:/Tutorial/static/flags/fr.gif'}));
	$('body').append(fr);
});

$(function(){
	var gr = $('<div/>');
	gr.append($('<div/>', {text:'Greece'}));
	gr.append($('<img/>', {src:'D:/Tutorial/static/flags/gr.gif'}));
	$('body').append(gr);
});

$(function(){
	$('img').css('border','solid 3px gray');
	$('img').css('width',200);
	$('div div').css('text-align','center');
	$('body').css('font-family','arial');
	$('body').css('font-size','x-large');
})

$(function(){
	$('body>div').css({
		border:"2px solid black",
		width:206,
		padding: 24,
		display: "inline-block",
		margin: "1ex"
	});
});

