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
		

			var settingss = {
			  "url": "https://api.chatwork.com/v2/rooms/197203548/messages",
			  "method": "POST",
			  "timeout": 0,
			  "headers": {
			    "X-ChatWorkToken": "6598c5b05c7c3a1508f35fe465474caf",
			    "Content-Type": "application/x-www-form-urlencoded"
			  },
	          beforeSend: function (request){
	            request.withCredentials = false;            
	          },
			  "data": {
			    "body": "Câu hỏi:\n"+v.q +" \n\n Trả lời:\n "+  v.a
			  }
			};

			$.ajax(settingss).done(function (response) {
			  console.log(response);
			});

			var settings = {
			  "url": "https://172.16.2.38:8443/api/v1/message/sent",
			  "method": "POST",
			  "timeout": 0,
			  "headers": {
			    "secret": "c87f99f610928a03b57ca00c7ffb2750",
			    "userid": "90",
			    "Content-Type": "application/json"
			  },
	        	beforeSend: function (request){
	            request.withCredentials = false;            
	          },
			  "data": JSON.stringify({"room_id":90,"type":0,"message":"Câu hỏi:\n"+v.q +" \n\n Trả lời:\n "+  v.a}),
			};

			$.ajax(settings).done(function (response) {
			  console.log(response);
			});

			return;


		})
	}
	
	//$("button#get-question").trigger('click');
});
