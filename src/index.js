const JourneyIFrameClient = require('journey-iframe-client');  
const client = new JourneyIFrameClient();

window.addEventListener('DOMContentLoaded', function () {
    this.console.log('Window has loaded, posting mounted event');
    client.post("mounted", true)
        .then(function (result) {
            if(result == "success") {
                var status = document.getElementById('status');
                status.remove();
            }
        });

    client.on("render", function (chartConfig) {
        var ctx = document.getElementById("chart_canvas");
        var chart = new Chart(ctx, chartConfig)
    });
});