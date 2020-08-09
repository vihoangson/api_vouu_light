$(document).ready(function () {
	
	$("button").click(function () {
		$.get('http://ttht.oop.vn', (dataRandom) => {
			// let dataRandom = data.rows[Math.floor(Math.random() * data.rows.length)]
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
			return;
		})
	}
});
/*$.get('https://jsonplaceholder.typicode.com/todos/1', function (d) {
    alert(JSON.stringify(d) );
})*/