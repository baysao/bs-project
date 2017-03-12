$(document).ready(function () {
	
	//call range Time
	$('.btnPickTime').click(function(){
			
		var X=$(this).attr('id');
		if(X==1) {
			$('.wRangeTime').animate({
				height: 0
			});
			$('.btnPickTime i').removeClass('animateArrow');
			$(this).attr('id', '0');
		}
		else {
			$('.wRangeTime').animate({
				height: 146
			});
			$('.btnPickTime i').addClass('animateArrow');
			$(this).attr('id', '1');
		}
	});
	
	//datepicker
	$('#dp, #dp1').datepicker();
	
	
	////////seekChart
	var vDataSeek1 = [['0h', 100.200], ['1h',500.450], ['2h', 200], ['3h', 300.220], ['4h', 84.345],['5h',450], ['6h', 100.200], ['7h', 146.125], ['8h', 279.125], ['9h', 389.125], ['10h',500.450], ['11h', 200], ['12h', 300.220], ['13h', 84.345],['14h',450], ['15h', 100.200], ['16h', 146.125], ['17h', 279.125], ['18h', 389.125],['19h',500.450], ['20h', 200], ['21h', 300.220], ['22h', 84.345],['23h',450]];
	var vDataSeek5 = [['0h', 200], ['1h',450], ['2h', 100], ['3h', 220], ['4h', 84],['5h',450], ['6h', 200], ['7h', 125], ['8h', 725], ['9h', 567], ['10h',450], ['11h', 150], ['12h', 220], ['13h', 844],['14h',150], ['15h', 800], ['16h', 625], ['17h', 825], ['18h', 594],['19h',450], ['20h', 200], ['21h', 220], ['22h', 84],['23h',450]];
	
	$("#flot-chart").length && $.plot($("#flot-chart"), [{
			data: vDataSeek1,
			label: "Lượt xem 1/11"
		},{
			data: vDataSeek5,
			label: "Lượt xem 2/11",
			dashes: { show: true },
			lines: {show:false}
		}], 
		{
		  series: {
			  lines: {
				  show: true,
				  lineWidth: 1,
				  fill: false,
				  fillColor: {
					  colors: [{
						  opacity: 0.3
					  }, {
						  opacity: 0.3
					  }]
				  }
			  },
			  points: {
				  show: true
			  },
			  shadowSize: 2
		  },
		  grid: {
			  hoverable: true,
			  clickable: true,
			  tickColor: "#f0f0f0",
			  borderWidth: 0
		  },
		  colors: ["#000000","#000000"],
		  xaxis: {
			  ticks: 23,
			  mode: "categories",
			  tickFormatter: function(val, axis) {
				  return val.toLocaleString() + "h";
			  }
		  },
		  yaxis: {
			  ticks: 15,
		  },
		  tooltip: true,
		  tooltipOpts: {
			content: "%y lượt xem lúc %x",
			defaultTheme: false,
			shifts: {
			  x: 0,
			  y: 20
			}
		  }
		}
	);
	
	////////seekChart
	var vDataSeek = [['8/9',500.450], ['9/9', 200], ['10/9', 300.220], ['11/9', 84.345],['12/9',450], ['13/9', 100.200], ['14/9', 146.125], ['15/9', 279.125], ['16/9', 389.125]];
	
	$("#seekChart").length && $.plot($("#seekChart"), [{
			data: vDataSeek,
			label: "KB"
		}], 
		{
		  series: {
			  lines: {
				  show: true,
				  lineWidth: 1,
				  fill: true,
				  fillColor: {
					  colors: [{
						  opacity: 0.3
					  }, {
						  opacity: 0.3
					  }]
				  }
			  },
			  points: {
				  show: true
			  },
			  shadowSize: 2
		  },
		  grid: {
			  hoverable: true,
			  clickable: true,
			  tickColor: "#f0f0f0",
			  borderWidth: 0
		  },
		  colors: ["#04c2d8","#04c2d8"],
		  xaxis: {
			  mode: "categories",
		  },
		  yaxis: {
			  ticks: 5,
			  max: 1000,
			  min:0,
			  tickDecimals: 3
		  },
		  tooltip: true,
		  tooltipOpts: {
			content: "%y KB vào ngày %x",
			defaultTheme: false,
			shifts: {
			  x: 0,
			  y: 20
			}
		  }
		}
	);
	
	
});