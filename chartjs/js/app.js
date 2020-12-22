// $(document).ready(function(){
// 	$.ajax({
// 		url: "http://localhost/chartjs/data.php",
// 		method: "GET",
// 		success: function(data){
// 			console.log(data);
// 			var player = [];
// 			var score = [];

// 			for (var i in data) {
// 				player.push("Player " + data[i].playerid);
// 				score.push(data[i].score);
// 			}

// 			var chartdata = {
// 				labels: player,
// 				datasets: [

// 				{
// 					label : 'Player Score',
// 					backgroundColor:'rgba(200, 200, 200, 0.75)',
// 					borderColor:'rgba(200, 200, 200, 0.75)',
// 					hoverBackgroundColor:'rgba(200, 200, 200, 1)',
// 					hoverBorderColor:'rgba(200, 200, 200, 1)',
// 					data: score
// 				}

// 				]
// 			};
// 			var ctx = $("#mycanvas");

// 			var barGraph = new Chart(ctx, {
// 				type: 'bar',
// 				data: chartdata
// 			});
// 		},
// 		error: function(data){
// 			console.log(data);
// 		}

// 	});
// });
$(document).ready(function () {
            showGraph();
        });


        function showGraph()
        {
            {
                $.post("data.php",
                function (data)
                {
                    console.log(data);
                     var playerid = [];
                    var score = [];

                   for (var i in data) {
				playerid.push("Player " + data[i].playerid);
				score.push(data[i].score);
			}

                    var chartdata = {
                        labels: name,
                        datasets: [
                            {
                                label : 'Player Score',
								backgroundColor:'rgba(200, 200, 200, 0.75)',
								borderColor:'rgba(200, 200, 200, 0.75)',
								hoverBackgroundColor:'rgba(200, 200, 200, 1)',
								hoverBorderColor:'rgba(200, 200, 200, 1)',
								data: score
                            }
                        ]
                    };

                    var graphTarget = $("#mycanvas");

                    var barGraph = new Chart(graphTarget, {
                        type: 'bar',
                        data: chartdata
                    });
                });
            }
        }