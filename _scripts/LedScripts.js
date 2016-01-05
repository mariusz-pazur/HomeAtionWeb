function ledCommand(cmd, param)
{
	$.ajax({
		url: "http://192.168.0.6/command?id=1&type=2&cmd=" + cmd +"&param=" + param,
		crossDomain: true
	});
}