/*
	WEB 303 Assignment 1 - jQuery
	{Puja Golani}
*/

$(document).ready(function(){
	$("input").change (function(){
		const salary = $("#yearly-salary").val();
		const percentage = $("#percent").val();

		let amtspent = ((salary * percentage) / 100).toFixed(3);
		$("#amount").text('$' + amtspent);
});
});

