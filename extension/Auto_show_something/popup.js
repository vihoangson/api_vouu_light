$(document).ready(function () {
	$("button#get-question").click(function () {
		$.get('http://ttht.oop.vn/api/get-data', (dataRandom) => {			
			clickbutton(dataRandom);
		})

	})
	function clickbutton(dataRandom) {
		$("#result-ttht").html('');
		dataRandom.forEach((v) => {
			let q = $("<div class='question'></div>").append(v.q);
			let a = $("<div class='answer'></div>").append(v.a);			
			$("#result-ttht").append(q);
			$("#result-ttht").append(a);
			var settings = {
				"url": "https://api.chatwork.com/v2/rooms/197203548/messages",
				"method": "POST",
				"timeout": 0,
				"headers": {
					"X-ChatWorkToken": "6598c5b05c7c3a1508f35fe465474caf",
					"Content-Type": "application/x-www-form-urlencoded"
				},
				"data": {
					"body": ">>> Câu hỏi:\n"+v.q+"\n\n>>> Trả lời:\n"+v.a
				}
			};

			$.ajax(settings).done(function (response) {
				console.log(response);
			});
			return;
		})
	}
	// $("button#get-question").trigger('click');
});
/*$.get('https://jsonplaceholder.typicode.com/todos/1', function (d) {
    alert(JSON.stringify(d) );
})*/